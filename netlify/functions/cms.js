// CMS API — Netlify Function
// Proxies GitHub API calls with password protection

const GITHUB_TOKEN = process.env.GITHUB_PAT;
const CMS_PASSWORD = process.env.CMS_PASSWORD;
const REPO = "totoni2213-jpg/gravelines-optique";
const BRANCH = "main";

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, X-CMS-Password",
    "Access-Control-Allow-Methods": "GET, PUT, DELETE, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Auth check
  const password = event.headers["x-cms-password"];
  if (!password || password !== CMS_PASSWORD) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: "Mot de passe incorrect" }) };
  }

  const path = event.queryStringParameters?.path || "";
  const apiBase = `https://api.github.com/repos/${REPO}/contents`;

  const ghHeaders = {
    Authorization: `token ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "GravelinesOptique-CMS",
  };

  try {
    if (event.httpMethod === "GET") {
      const res = await fetch(`${apiBase}/${path}?ref=${BRANCH}`, { headers: ghHeaders });
      const data = await res.json();
      return { statusCode: res.status, headers, body: JSON.stringify(data) };
    }

    if (event.httpMethod === "PUT") {
      const body = JSON.parse(event.body);
      // For binary files (images), content is already raw base64
      // For text files, content needs to be encoded
      const content = body.binary ? body.content : body.content;
      const payload = {
        message: body.message || `Mise à jour via CMS: ${path}`,
        content,
        branch: BRANCH,
      };
      if (body.sha) payload.sha = body.sha;
      const res = await fetch(`${apiBase}/${path}`, {
        method: "PUT",
        headers: ghHeaders,
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      return { statusCode: res.status, headers, body: JSON.stringify(data) };
    }

    if (event.httpMethod === "DELETE") {
      const body = JSON.parse(event.body);
      const res = await fetch(`${apiBase}/${path}`, {
        method: "DELETE",
        headers: ghHeaders,
        body: JSON.stringify({
          message: `Suppression via CMS: ${path}`,
          sha: body.sha,
          branch: BRANCH,
        }),
      });
      const data = await res.json();
      return { statusCode: res.status, headers, body: JSON.stringify(data) };
    }

    return { statusCode: 405, headers, body: JSON.stringify({ error: "Méthode non autorisée" }) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
