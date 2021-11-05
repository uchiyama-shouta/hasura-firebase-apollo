import { useMutation } from "@apollo/client";
import {
	CREATE_TASK,
	DELETE_TASK,
	UPDATE_TASK,
} from "src/queries/task/taskQueries";

export const useMutateTask = () => {
	const createTaskMutation = useMutation(CREATE_TASK, {
		variables: { title: "title" },
	});
	const updateTaskMutation = useMutation(UPDATE_TASK);
	const deleteTaskMutation = useMutation(DELETE_TASK, {});

	return {
		createTaskMutation,
		updateTaskMutation,
		deleteTaskMutation,
	};
};
