import type { NextPage, GetStaticProps } from "next";
import { Auth } from "src/components/Auth";
import { Layout } from "src/components/Layout";
import { initializeApollo } from "src/lib/apolloClient";
import { GET_NEWS } from "src/queries/news/newsQueries";
import { News } from "src/types/responseType";

type Props = {
	data: News[];
};

const Home: NextPage<Props> = ({ data }) => {
	return (
		<Layout title="Home">
			<Auth />
		</Layout>
	);
};

export default Home;

