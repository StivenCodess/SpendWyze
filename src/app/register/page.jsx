"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import useAuthStore from "../utils/authStore";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signUp } = useAuthStore((state) => state);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const signUpResult = await signUp(email, password);

		if (signUpResult.success) router.push(signUpResult.redirect);
		else console.error(signUpResult.message);
	};

	return (
		<>
			<main className="flex flex-col items-center flex-1 w-full">
				<form
					onSubmit={handleSubmit}
					className="w-3/4 h-[485px] flex-1 rounded-3xl  items-center justify-evenly gap-5 flex flex-col"
				>
					<article className="flex flex-col w-full gap-10">
						<label className="text-center text-xl ">
							USERNAME
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="p-1 mt-2 w-10/12 rounded-lg text-center shadow-g100 text-black"
								type="text"
								name="type"
							/>
						</label>
						<label className="text-center text-xl ">
							PASSWORD
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className=" p-1 w-10/12 mt-2 rounded-lg text-center shadow-g100 text-black"
								type="password"
								name="amount"
							/>
						</label>
					</article>
					<article className="flex flex-col w-full justify-center items-center gap-6">
						<button className="bg-[#00EFC5] w-10/12 p-2 rounded-lg text-xl shadow-g50 ">
							Register
						</button>

						<Link
							href={"/login"}
							className="bg-white w-10/12 p-2 rounded-lg text-xl text-center text-black shadow-g50"
						>
							Login
						</Link>
					</article>
				</form>
			</main>
		</>
	);
}
