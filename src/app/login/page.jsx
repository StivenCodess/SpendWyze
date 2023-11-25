"use client";

import Link from "next/link";
import { useState } from "react";
import useAuthStore from "../utils/authStore";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signIn, signInAnonymously } = useAuthStore((state) => state);

	const handleSubmit = async (e) => {
		e.preventDefault();
		let result = false;

		if (e.nativeEvent.submitter.name === "guest") await signInAnonymously();
		else result = await signIn(email, password);

		if (result) router.push("/");
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
							LOGIN
						</button>
						<Link
							href={"/register"}
							className="bg-white w-10/12 p-2 rounded-lg text-xl text-center text-black mt-2 shadow-g50"
						>
							REGISTER
						</Link>
						<button
							name="guest"
							className="bg-white w-10/12 p-2 rounded-lg text-xl text-center text-black shadow-g50"
						>
							GUEST
						</button>
					</article>
				</form>
			</main>
		</>
	);
}
