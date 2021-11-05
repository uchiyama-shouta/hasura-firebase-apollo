import type { NextPage } from "next";
import { Auth } from "src/components/Auth";
import { Layout } from "src/components/Layout";

const Home: NextPage = () => {
	return (
		<Layout title="Home">
			<Auth />
		</Layout>
	);
};

export default Home;
