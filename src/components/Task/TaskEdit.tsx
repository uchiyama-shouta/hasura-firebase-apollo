import { VFC, memo } from "react";
import { useHandleTasks } from "src/hooks/useHandleTasks";

const TaskEdit: VFC = () => {
	const { task, handleChange, handleSubmit, error } = useHandleTasks();

	if (error) {
		return <div>Error</div>;
	}
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
