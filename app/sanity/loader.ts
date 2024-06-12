import { createQueryStore } from "@sanity/react-loader";

// This is the "smallest" possible version of a query store
export const queryStore = createQueryStore({ client: false, ssr: true });

export const { useLiveMode, useQuery } = queryStore;
