import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject,
} from "@apollo/client";
import "cross-fetch/polyfill";
import Cookie from "universal-cookie";

const cookie = new Cookie();

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
const createApolloClient = () => {
	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		uri: process.env.NEXT_PUBLIC_HASURA_URL,
		headers: {
			Authorization: `Bearer ${cookie.get("token")}`,
		},
		cache: new InMemoryCache(),
	});
};

export const initializeApollo = (initialState = null) => {
	const _apolloClient = apolloClient ?? createApolloClient();
	if (typeof window === "undefined") return _apolloClient;
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
};
