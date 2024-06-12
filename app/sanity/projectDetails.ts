declare global {
	interface Window {
		ENV: {
			SANITY_PROJECT_ID: string;
			SANITY_DATASET: string;
		};
	}
}

const { SANITY_PROJECT_ID, SANITY_DATASET } =
	typeof document === "undefined" ? process.env : window.ENV;

export const projectId = SANITY_PROJECT_ID!;
export const dataset = SANITY_DATASET!;

if (!projectId) throw new Error("Missing SANITY_PROJECT_ID in .env");
if (!dataset) throw new Error("Missing SANITY_DATASET in .env");
