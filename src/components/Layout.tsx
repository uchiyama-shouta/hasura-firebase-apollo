import type { ReactNode, VFC } from "react";
import Head from "next/head";
import Image from "next/image";

type Props = {
	children: ReactNode;
	title: string;
};

export const Layout: VFC<Props> = (props) => {
	const { children, title = "Welcome to Nextjs" } = props;
	return (
		<div className="flex flex-col justify-center items-center min-h-screen font-mono text-sm text-gray-600">
			<Head>
				<title>{title}</title>
			</Head>
			<header></header>
			<main className="flex flex-col flex-1 justify-center items-center w-screen">
				{children}
			</main>
			<footer className="flex justify-center items-center w-full h-12 border-t">
				Powered by{" "}
				<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
			</footer>
		</div>
	);
};
