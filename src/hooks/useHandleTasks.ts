import type { ChangeEvent, FormEvent } from "react";
import { useRecoilState } from "recoil";
import { editedTask } from "src/atoms/taskState";
import { useMutateTask } from "src/hooks/apollo/useMutateTask";

export const useHandleTasks = () => {
	const [task, setTask] = useRecoilState(editedTask);
	const {
		createTaskMutation,
		updateTaskMutation,
		deleteTaskMutation,
		createError,
		updateError,
		deleteError,
	} = useMutateTask();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (task.id === "") {
			createTaskMutation({ variables: { title: task.title } });
		} else {
			updateTaskMutation({ variables: { title: task.title, id: task.id } });
		}
		setTask({ id: "", title: "" });
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTask({ ...task, title: e.target.value });
	};

	const handleDelete = () => {
		deleteTaskMutation({ variables: { id: task.id } });
	};

	const disabled = !task.title;
	const buttonText = task.id === "" ? "Create" : "Update";

	return {
		task,
		disabled,
		buttonText,

		error: createError || updateError || deleteError,
		handleSubmit,
		handleChange,
		handleDelete,
	};
};
