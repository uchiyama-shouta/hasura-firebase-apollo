import type { VFC } from "react";
import Link from "next/link";
import {
	ChevronDoubleRightIcon,
	SwitchVerticalIcon,
} from "@heroicons/react/solid";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import { auth } from "src/lib/firebaseConfig";

export const Auth: VFC = () => {
	const user = auth.currentUser;
	const {
		isLogin,
		email,
		password,
		handleEmail,
		handlePassword,
		handleAuthUser,
		handleToggleMode,
	} = useFirebaseAuth();

	const disabled = !email || !password;
	const buttonText = isLogin ? "Login" : "Register";
	return (
		<>
			<form
				onSubmit={handleAuthUser}
				className="flex flex-col justify-center items-center mt-8"
			>
				<label>Email:</label>
				<input
					className="py-1 px-3 my-3 border border-gray-300"
					placeholder="email ?"
					type="email"
					value={email}
					onChange={handleEmail}
				/>

				<label>Password:</label>
				<input
					className="py-1 px-3 my-3 border border-gray-300"
					placeholder="password ?"
					type="password"
					value={password}
					onChange={handlePassword}
				/>
				<button
					disabled={disabled}
					type="submit"
					className="py-1 px-3 mt-5 text-white bg-indigo-600 hover:bg-indigo-700 rounded disabled:opacity-40 focus:outline-none"
				>
					{buttonText}
				</button>
			</form>
			<SwitchVerticalIcon
				className="p-2 my-5 w-10 h-10 text-blue-500 hover:bg-gray-100 rounded-full cursor-pointer"
				onClick={handleToggleMode}
			/>
			{user && (
				<Link href="/tasks" prefetch={false}>
					<a>
						<div className="flex items-center my-3 cursor-pointer">
							<ChevronDoubleRightIcon className="mx-1 w-5 h-5 text-blue-500" />
							<span>to tasks page</span>
						</div>
					</a>
				</Link>
			)}
		</>
	);
};
