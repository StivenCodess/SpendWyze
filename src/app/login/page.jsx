"use client";

import Link from "next/link";

export default function Home() {
	return (
		<>
			<main className="flex flex-col items-center flex-1 w-full">
				<form className="w-3/4 h-[485px] flex-1 rounded-3xl  items-center justify-evenly gap-5 flex flex-col">
					<article className="flex flex-col w-full gap-10">
						<label className="text-center text-xl ">
							USERNAME
							<input
								className="p-1 mt-2 w-10/12 rounded-lg text-center shadow-g100"
								type="text"
								name="type"
							/>
						</label>
						<label className="text-center text-xl ">
							PASSWORD
							<input
								className=" p-1 w-10/12 mt-2 rounded-lg text-center shadow-g100"
								type="number"
								name="amount"
							/>
						</label>
					</article>
					<article className="flex flex-col w-full justify-center items-center gap-6">
						<button className="bg-[#00EFC5] w-10/12 p-2 rounded-lg text-xl shadow-g50 ">
							LOGIN
						</button>
						<Link
							href={"/"}
							className="bg-white w-10/12 p-2 rounded-lg text-xl text-center text-black mt-2 shadow-g50"
						>
							REGISTER
						</Link>
						<Link
							href={"/"}
							className="bg-white w-10/12 p-2 rounded-lg text-xl text-center text-black shadow-g50"
						>
							GUEST
						</Link>
					</article>
				</form>
			</main>
		</>
	);
}
