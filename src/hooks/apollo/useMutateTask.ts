import { useMutation } from "@apollo/client";
import {
	CREATE_TASK,
	DELETE_TASK,
	GET_TASKS,
	UPDATE_TASK,
} from "src/queries/task/taskQueries";

export const useMutateTask = () => {
	const [createTaskMutation, { error: createError }] = useMutation(
		CREATE_TASK,
		{ refetchQueries: [GET_TASKS],  },
	);
	const [updateTaskMutation, { error: updateError }] = useMutation(
		UPDATE_TASK,
		{ refetchQueries: [GET_TASKS] },
	);
	const [deleteTaskMutation, { error: deleteError }] = useMutation(
		DELETE_TASK,
		{ refetchQueries: [GET_TASKS] },
	);

	return {
		createTaskMutation,
		updateTaskMutation,
		deleteTaskMutation,
		createError,
		updateError,
		deleteError,
	};
};
