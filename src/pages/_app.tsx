import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import { useUserChanged } from "src/hooks/useUserChanged";

const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_HASURA_URL,
	cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }: AppProps) => {
	useUserChanged();
	return (
		<ApolloProvider client={client}>
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</ApolloProvider>
	);
};
export default MyApp;
