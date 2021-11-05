import { VFC, memo } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
// import { useAppMutate } from "../hooks/useAppMutate";
import { Task } from "src/types/responseType";
import { useSetRecoilState } from "recoil";
import { editedTask } from "src/atoms/taskState";

interface Props {
	task: Task;
}

const TaskItem: VFC<Props> = ({ task }) => {
	const setEditedTask = useSetRecoilState(editedTask);
	// const { deleteTaskMutation } = useAppMutate();
	// if (deleteTaskMutation.isLoading) {
	// 	return <p>Deleting...</p>;
	// }
	// if (deleteTaskMutation.error) {
	// 	return <p>Error</p>;
	// }

	const handleClick = () => {
		setEditedTask({
			id: task.id,
			title: task.title,
		});
	};
	return (
		<li className="my-3">
			<span className="font-bold">{task.title}</span>
			<div className="flex float-right ml-20">
				<PencilAltIcon
					className="mx-1 w-5 h-5 text-blue-500 cursor-pointer"
					onClick={handleClick}
				/>
				<TrashIcon
					className="w-5 h-5 text-blue-500 cursor-pointer"
					// onClick={() => {
					// 	deleteTaskMutation.mutate(task.id);
					// }}
				/>
			</div>
		</li>
	);
};
export const TaskItemMemo = memo(TaskItem);
