import { createClient } from "@sanity/client";
import { projectId, dataset } from "./projectDetails";

// Do not import this into client-side components unless lazy-loaded
export const client = createClient({
	projectId,
	dataset,
	useCdn: false,
	apiVersion: "2023-03-20",
});
