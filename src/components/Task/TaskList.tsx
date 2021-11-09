import { VFC, memo } from "react";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "src/queries/task/taskQueries";
import { TaskItemMemo } from "./TaskItem";

import type { Task } from "src/types/responseType";

export type TaskType = {
	tasks: Task[];
};

const TaskList: VFC = () => {
	const { data, loading, error } = useQuery<TaskType>(GET_TASKS);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error</div>;
	return (
		<ul>
			{data?.tasks.map((task) => (
				<TaskItemMemo key={task.id} task={task} />
			))}
		</ul>
	);
};
export const TaskListMemo = memo(TaskList);
