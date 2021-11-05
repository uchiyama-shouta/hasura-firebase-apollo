import { useMutation } from "@apollo/client";
import {
	GET_NEWS,
	CREATE_NEWS,
	UPDATE_NEWS,
	DELETE_NEWS,
} from "src/queries/news/newsQueries";
import Cookie from "universal-cookie";

export const useMutateNews = () => {
	const cookie = new Cookie();
	const token = cookie.get("token");

	// const MutateOption = {
	// 	refetchQueries: [GET_NEWS],
	// 	context: {
	// 		headers: {
	// 			Authorization: `Bearer ${token}`,
	// 		},
	// 	},
	// };

	const [createNewsMutation, { error: createError }] = useMutation(
		CREATE_NEWS,
		{
			refetchQueries: [GET_NEWS],
			context: {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		},
	);
	const [updateNewsMutation, { error: updateError }] = useMutation(
		UPDATE_NEWS,
		{
			refetchQueries: [GET_NEWS],
			context: {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		},
	);
	const [deleteNewsMutation, { error: deleteError }] = useMutation(
		DELETE_NEWS,
		{
			refetchQueries: [GET_NEWS],
			context: {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		},
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
