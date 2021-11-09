import { ApolloClient, InMemoryCache } from "@apollo/client";
import type { NextPage, GetStaticProps } from "next";
import { Auth } from "src/components/Auth";
import { Layout } from "src/components/Layout";
import { GET_NEWS } from "src/queries/news/newsQueries";
import { News } from "src/types/responseType";

type Props = {
	data: News[];
};

type Res = {
	news: News[];
};

const Home: NextPage<Props> = ({ data }) => {
	return (
		<Layout title="Home">
			{data?.map((news) => (
				<p className="font-bold" key={news.id}>
					{news.content}
				</p>
			))}
			<Auth />
		</Layout>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const client = new ApolloClient({
		uri: process.env.NEXT_PUBLIC_HASURA_URL,
		cache: new InMemoryCache(),
	});
	const { data } = await client.query<Res>({
		query: GET_NEWS,
	});

	return {
		props: {
			data: data.news,
		},
		revalidate: 60 * 60,
	};
};
