import { useMutation } from "@apollo/client";
import {
	GET_NEWS,
	CREATE_NEWS,
	UPDATE_NEWS,
	DELETE_NEWS,
} from "src/queries/news/newsQueries";

export const useMutateNews = () => {
	const [createNewsMutation, { error: createError }] = useMutation(
		CREATE_NEWS,
		{ refetchQueries: [GET_NEWS] },
	);
	const [updateNewsMutation, { error: updateError }] = useMutation(
		UPDATE_NEWS,
		{ refetchQueries: [GET_NEWS] },
	);
	const [deleteNewsMutation, { error: deleteError }] = useMutation(
		DELETE_NEWS,
		{ refetchQueries: [GET_NEWS] },
	);

	return {
		createNewsMutation,
		updateNewsMutation,
		deleteNewsMutation,
		createError,
		updateError,
		deleteError,
	};
};
