import { VFC, memo } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
// import { useAppMutate } from "../hooks/useAppMutate";
import { News } from "src/types/responseType";
import { useSetRecoilState } from "recoil";
import { newsState } from "src/atoms/newsState";
import { useHandleNews } from "src/hooks/useHandleNews";

type Props = {
	news: News;
};

const NewsItem: VFC<Props> = ({ news }) => {
	const setState = useSetRecoilState(newsState);
	const { deleteError, handleDelete } = useHandleNews();

	if (deleteError) {
		return <p>Error</p>;
	}

	const handleClick = () => {
		setState({
			id: news.id,
			content: news.content,
		});
	};

	return (
		<li className="my-3">
			<span className="font-bold">{news.content}</span>
			<div className="flex float-right ml-20">
				<PencilAltIcon
					className="mx-1 w-5 h-5 text-blue-500 cursor-pointer"
					onClick={handleClick}
				/>
				<TrashIcon
					className="w-5 h-5 text-blue-500 cursor-pointer"
					onClick={handleDelete}
				/>
			</div>
		</li>
	);
};
export const NewsItemMemo = memo(NewsItem);
