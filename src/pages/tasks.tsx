import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { useLogout } from "src/hooks/useLogout";
import { Layout } from "src/components/Layout";
import { ChevronDoubleLeftIcon, LogoutIcon } from "@heroicons/react/solid";
import { auth } from "src/lib/firebaseConfig";
import { NewsListMemo } from "src/components/News/NewsList";
import { NewsEditMemo } from "src/components/News/NewsEdit";
import { TaskListMemo } from "src/components/Task/TaskList";
import { TaskEditMemo } from "src/components/Task/TaskEdit";

const Tasks: NextPage = () => {
	const router = useRouter();
	const { logout } = useLogout();
	const user = auth.currentUser;

	const handleLogout = () => {
		logout();
		router.push("/");
	};

	return (
		<Layout title="tasks">
			<div className="h-5">
				<p className="my-3">{user?.email}</p>
			</div>
			<LogoutIcon
				className="p-2 my-3 w-9 h-9 text-blue-500 hover:bg-gray-200 rounded-full cursor-pointer"
				onClick={handleLogout}
			/>
			<p className="mt-10 mb-5 text-xl font-bold text-blue-500">News Edit</p>
			<div className="grid grid-cols-2 gap-40">
				<NewsListMemo />
				<NewsEditMemo />
			</div>
			<p className="mt-20 mb-5 text-xl font-bold text-blue-500">Tasks Edit</p>
			<div className="grid grid-cols-2 gap-40">
				<TaskListMemo />
				<TaskEditMemo />
			</div>
			<Link href="/" prefetch={false}>
				<a>
					<div className="flex items-center mt-20 cursor-pointer">
						<ChevronDoubleLeftIcon className="mx-1 w-5 h-5 text-blue-500" />
						<span className="text-blue-500">Back to main page</span>
					</div>
				</a>
			</Link>
		</Layout>
	);
};

export default Tasks;
