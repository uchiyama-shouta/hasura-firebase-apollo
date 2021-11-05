import { useQuery } from "@apollo/client";
import { VFC, memo } from "react";
import { GET_NEWS } from "src/queries/news/newsQueries";
import { News } from "src/types/responseType";
import { NewsItemMemo } from "./NewsItem";

export type NewsType = {
	news: News[];
};

const NewsList: VFC = () => {
	const { data, loading, error } = useQuery<NewsType>(GET_NEWS, {
		fetchPolicy: "cache-and-network",
	});

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error</div>;
	return (
		<ul>
			{data?.news.map((news) => (
				<NewsItemMemo key={news.id} news={news} />
			))}
		</ul>
	);
};
export const NewsListMemo = memo(NewsList);
