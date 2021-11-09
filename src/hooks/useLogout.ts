import { useSetRecoilState } from "recoil";
import { useQuery } from "@apollo/client";
import { signOut } from "firebase/auth";
import Cookie from "universal-cookie";

import { newsState } from "src/atoms/newsState";
import { editedTask } from "src/atoms/taskState";
import { unSubMeta } from "src/hooks/useUserChanged";
import { auth } from "src/lib/firebaseConfig";
import { GET_TASKS } from "src/queries/task/taskQueries";
import { GET_NEWS } from "src/queries/news/newsQueries";

const cookie = new Cookie();

export const useLogout = () => {
	const { client: taskClient } = useQuery(GET_TASKS, {
		fetchPolicy: "cache-only",
	});
	const { client: newsClient } = useQuery(GET_NEWS, {
		fetchPolicy: "cache-only",
	});
	const setNews = useSetRecoilState(newsState);
	const setTasks = useSetRecoilState(editedTask);

	// const queryClient = useQueryClient();
	const logout = async () => {
		if (unSubMeta) {
			unSubMeta();
		}

		setNews({ id: "", content: "" });
		setTasks({ id: "", title: "" });
		await signOut(auth);
		
		await taskClient.resetStore();
		await newsClient.resetStore();
		cookie.remove("token");
	};

	return { logout };
};
