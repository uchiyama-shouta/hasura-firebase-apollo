import Cookie from "universal-cookie";
import { signOut } from "firebase/auth";

import { unSubMeta } from "./useUserChanged";
import { auth } from "src/lib/firebaseConfig";

const cookie = new Cookie();

export const useLogout = () => {
	// const dispatch = useDispatch();
	// const queryClient = useQueryClient();
	const logout = async () => {
		if (unSubMeta) {
			unSubMeta();
		}
		// dispatch(resetEditedTask());
		// dispatch(resetEditedNews());
		await signOut(auth);
		// queryClient.removeQueries("tasks");
		// queryClient.removeQueries("news");
		cookie.remove("token");
	};

	return { logout };
};
