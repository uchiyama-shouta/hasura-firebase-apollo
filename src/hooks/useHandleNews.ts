import type { ChangeEvent, FormEvent } from "react";
import { useRecoilState } from "recoil";
import { newsState } from "src/atoms/newsState";
import { useMutateNews } from "src/hooks/apollo/useMutateNews";

export const useHandleNews = () => {
	const [news, setNews] = useRecoilState(newsState);
	const {
		createNewsMutation,
		updateNewsMutation,
		deleteNewsMutation,
		createError,
		updateError,
		deleteError,
	} = useMutateNews();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (news.id === "") {
			createNewsMutation({ variables: { content: news.content } });
		} else {
			updateNewsMutation({ variables: news });
		}
		setNews({ id: "", content: "" });
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNews({ ...news, content: e.target.value });
	};

	const handleDelete = () => {
		deleteNewsMutation({ variables: { id: news.id } });
	};

	const disabled = !news.content;
	const buttonText = news.id === "" ? "Create" : "Update";

	return {
		news,
		disabled,
		buttonText,
		error: createError || updateError|| deleteError,
		handleSubmit,
		handleChange,
		handleDelete,
	};
};
