import { atom } from "recoil";
import { EditTask } from "src/types/responseType";

export const editedTask = atom<EditTask>({
	key: "taskState",
	default: {
		id: "",
		title: "",
	},
});
