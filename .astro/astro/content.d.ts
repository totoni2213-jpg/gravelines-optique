declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"100-pour-cent-sante-optique.md": {
	id: "100-pour-cent-sante-optique.md";
  slug: "100-pour-cent-sante-optique";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"a-quelle-frequence-controler-sa-vue.md": {
	id: "a-quelle-frequence-controler-sa-vue.md";
  slug: "a-quelle-frequence-controler-sa-vue";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"age-premier-lunettes-enfant.md": {
	id: "age-premier-lunettes-enfant.md";
  slug: "age-premier-lunettes-enfant";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"amblyopie-oeil-paresseux.md": {
	id: "amblyopie-oeil-paresseux.md";
  slug: "amblyopie-oeil-paresseux";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"antireflets-a-quoi-ca-sert.md": {
	id: "antireflets-a-quoi-ca-sert.md";
  slug: "antireflets-a-quoi-ca-sert";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"bien-entretenir-ses-lunettes.md": {
	id: "bien-entretenir-ses-lunettes.md";
  slug: "bien-entretenir-ses-lunettes";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"bienvenue.md": {
	id: "bienvenue.md";
  slug: "bienvenue";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"cataracte-tout-comprendre.md": {
	id: "cataracte-tout-comprendre.md";
  slug: "cataracte-tout-comprendre";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"choisir-lunettes-forme-visage.md": {
	id: "choisir-lunettes-forme-visage.md";
  slug: "choisir-lunettes-forme-visage";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"choisir-lunettes-soleil.md": {
	id: "choisir-lunettes-soleil.md";
  slug: "choisir-lunettes-soleil";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"comment-lire-son-ordonnance.md": {
	id: "comment-lire-son-ordonnance.md";
  slug: "comment-lire-son-ordonnance";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"differences-verres-qualites.md": {
	id: "differences-verres-qualites.md";
  slug: "differences-verres-qualites";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"dmla-degenrescence-maculaire.md": {
	id: "dmla-degenrescence-maculaire.md";
  slug: "dmla-degenrescence-maculaire";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ecrans-mauvais-pour-les-yeux.md": {
	id: "ecrans-mauvais-pour-les-yeux.md";
  slug: "ecrans-mauvais-pour-les-yeux";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"enfant-voit-mal-comment-savoir.md": {
	id: "enfant-voit-mal-comment-savoir.md";
  slug: "enfant-voit-mal-comment-savoir";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"examen-vue-comment-ca-se-passe.md": {
	id: "examen-vue-comment-ca-se-passe.md";
  slug: "examen-vue-comment-ca-se-passe";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fatigue-visuelle-solutions.md": {
	id: "fatigue-visuelle-solutions.md";
  slug: "fatigue-visuelle-solutions";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"glaucome-quest-ce-que-cest.md": {
	id: "glaucome-quest-ce-que-cest.md";
  slug: "glaucome-quest-ce-que-cest";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"lentilles-de-contact-les-bases.md": {
	id: "lentilles-de-contact-les-bases.md";
  slug: "lentilles-de-contact-les-bases";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"lunettes-ou-lentilles.md": {
	id: "lunettes-ou-lentilles.md";
  slug: "lunettes-ou-lentilles";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"maux-de-tete-et-vision.md": {
	id: "maux-de-tete-et-vision.md";
  slug: "maux-de-tete-et-vision";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"mouches-volantes-floaters.md": {
	id: "mouches-volantes-floaters.md";
  slug: "mouches-volantes-floaters";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"myopie-peut-elle-sagraver.md": {
	id: "myopie-peut-elle-sagraver.md";
  slug: "myopie-peut-elle-sagraver";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"proteger-yeux-soleil.md": {
	id: "proteger-yeux-soleil.md";
  slug: "proteger-yeux-soleil";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"quest-ce-que-la-myopie.md": {
	id: "quest-ce-que-la-myopie.md";
  slug: "quest-ce-que-la-myopie";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"quest-ce-que-la-presbytie.md": {
	id: "quest-ce-que-la-presbytie.md";
  slug: "quest-ce-que-la-presbytie";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"quest-ce-que-lastigmatisme.md": {
	id: "quest-ce-que-lastigmatisme.md";
  slug: "quest-ce-que-lastigmatisme";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"quest-ce-que-lhypermetropie.md": {
	id: "quest-ce-que-lhypermetropie.md";
  slug: "quest-ce-que-lhypermetropie";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"quest-ce-quun-opticien.md": {
	id: "quest-ce-quun-opticien.md";
  slug: "quest-ce-quun-opticien";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"remboursement-lunettes-comment-ca-marche.md": {
	id: "remboursement-lunettes-comment-ca-marche.md";
  slug: "remboursement-lunettes-comment-ca-marche";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"secheresse-oculaire-comprendre.md": {
	id: "secheresse-oculaire-comprendre.md";
  slug: "secheresse-oculaire-comprendre";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"strabisme-explique.md": {
	id: "strabisme-explique.md";
  slug: "strabisme-explique";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"verres-photochromiques-expliques.md": {
	id: "verres-photochromiques-expliques.md";
  slug: "verres-photochromiques-expliques";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"verres-progressifs-comment-ca-marche.md": {
	id: "verres-progressifs-comment-ca-marche.md";
  slug: "verres-progressifs-comment-ca-marche";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"vision-binoculaire-les-deux-yeux.md": {
	id: "vision-binoculaire-les-deux-yeux.md";
  slug: "vision-binoculaire-les-deux-yeux";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"vision-couleurs-daltonisme.md": {
	id: "vision-couleurs-daltonisme.md";
  slug: "vision-couleurs-daltonisme";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
