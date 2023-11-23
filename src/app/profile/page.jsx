"use client";
import useAuthStore from "../utils/authStore";

export default function Profile() {
	const { user, signOut } = useAuthStore((state) => state);
	console.log(user);

	const handleClick = async () => {
		await signOut();
	};

	return (
		<>
			<main className="flex flex-col items-center gap-12 w-full flex-1">
				<h3>Profile</h3>
				<span> {user ? `Welcome ${user.email}` : "No estas registrado"} </span>
				<button
					onClick={handleClick}
					className="bg-[#00EFC5] w-10/12 p-2 rounded-lg text-xl shadow-g50 "
				>
					Sign Out
				</button>
			</main>
		</>
	);
}
