import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import { useUserChanged } from "src/hooks/useUserChanged";
import Cookie from "universal-cookie";

const cookie = new Cookie();

const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_HASURA_URL,
	cache: new InMemoryCache(),
	headers: {
		Authorization: cookie.get("token") ? `Bearer ${cookie.get("token")}` : "",
	},
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
