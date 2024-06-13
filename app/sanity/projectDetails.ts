declare global {
	interface Window {
		ENV: {
			SANITY_PROJECT_ID: string;
			SANITY_DATASET: string;
		};
	}
}

let projectId: string;
let dataset: string;

if (typeof document === "undefined") {
	if (typeof process !== "undefined") {
		projectId = process.env.SANITY_PROJECT_ID!;
		dataset = process.env.SANITY_DATASET!;
	} else {
		projectId = import.meta.env.SANITY_PROJECT_ID;
		dataset = import.meta.env.SANITY_DATASET;
	}
} else {
	projectId = window.ENV.SANITY_PROJECT_ID;
	dataset = window.ENV.SANITY_DATASET;
}

export { dataset, projectId };

if (!projectId) throw new Error("Missing SANITY_PROJECT_ID in .env");
if (!dataset) throw new Error("Missing SANITY_DATASET in .env");
