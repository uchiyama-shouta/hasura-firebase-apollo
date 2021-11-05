import { VFC, memo } from "react";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "src/queries/task/taskQueries";
import { TaskItemMemo } from "./TaskItem";
import Cookie from "universal-cookie";

import type { Task } from "src/types/responseType";

const TaskList: VFC = () => {
	const cookie = new Cookie();
	const { data, loading, error } = useQuery<Task[]>(GET_TASKS, {
		context: {
			headers: {
				Authorization: `Bearer ${cookie.get("token")}`,
			},
		},
	});

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error</div>;
	return (
		<ul>
			{data?.map((task) => (
				<TaskItemMemo key={task.id} task={task} />
			))}
		</ul>
	);
};
export const TaskListMemo = memo(TaskList);
