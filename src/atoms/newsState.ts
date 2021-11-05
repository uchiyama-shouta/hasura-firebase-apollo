import { atom } from "recoil";
import { EditNews } from "src/types/responseType";

export const newsState = atom<EditNews>({
	key: "newsState",
	default: {
		id: "",
		content: "",
	},
});
