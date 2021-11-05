import { VFC, memo, FormEvent, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { editedTask } from "src/atoms/taskState";
// import { useAppMutate } from "../hooks/useAppMutate";

const TaskEdit: VFC = () => {
	// const { createTaskMutation, updateTaskMutation } = useAppMutate();
	const [task, setTask] = useRecoilState(editedTask);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// if (editedTask.id === "") {
		// 	createTaskMutation.mutate(editedTask.title);
		// } else {
		// 	updateTaskMutation.mutate(editedTask);
		// }
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTask({ ...task, title: e.target.value });
	};
	// if (createTaskMutation.error || updateTaskMutation.error) {
	// 	return <div>{"Error"}</div>;
	// }
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="py-2 px-3 mb-3 border border-gray-300"
					placeholder="new task ?"
					type="text"
					value={task.title}
					onChange={handleChange}
				/>
				<button
					className="py-2 px-3 my-3 mx-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded disabled:opacity-40"
					disabled={!task.title}
				>
					{task.id === "" ? "Create" : "Update"}
				</button>
			</form>
		</div>
	);
};
export const TaskEditMemo = memo(TaskEdit);
