import { useState, useCallback } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "src/lib/firebaseConfig";

export const useFirebaseAuth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLogin, setIsLogin] = useState(true);

	const handleEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	}, []);

	const handlePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	}, []);

	const handleResetInput = useCallback(() => {
		setEmail("");
		setPassword("");
	}, []);

	const handleToggleMode = useCallback(() => {
		setIsLogin(!isLogin);
	}, [isLogin]);

	const handleAuthUser = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (isLogin) {
				try {
					await signInWithEmailAndPassword(auth, email, password);
					alert("ログインに成功しました");
				} catch (e) {
					alert("ログインに失敗しました");
				}
				handleResetInput();
			} else {
				try {
					await createUserWithEmailAndPassword(auth, email, password);
					alert("登録に成功しました");
				} catch (e) {
					alert("登録に失敗しました");
				}
				handleResetInput();
			}
		},
		[email, password, isLogin, handleResetInput],
	);

	return {
		email,
		password,
		isLogin,
		handleEmail,
		handlePassword,
		handleResetInput,
		handleToggleMode,
		handleAuthUser,
	};
};
