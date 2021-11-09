import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import { useUserChanged } from "src/hooks/useUserChanged";
import { initializeApollo } from "src/lib/apolloClient";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const client = initializeApollo();
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
