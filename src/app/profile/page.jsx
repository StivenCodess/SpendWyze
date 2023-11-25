"use client";
import useAuthStore from "../utils/authStore";
import AnonymousIcon from "../ui/icons/AnonymousUser";
import ProfileIcon from "../ui/icons/ProfileIcon";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AnonymousProfile({ handleSignOut }) {
	return (
		<section className="flex flex-col mt-10 pt-10 w-full items-center gap-5">
			<AnonymousIcon />

			<h3 className="pt-16">You are logged in as a GUEST</h3>
			<button
				className="bg-[#00EFC5] w-64 mt-2 p-2 rounded-lg text-xl shadow-g50"
				onClick={handleSignOut}
			>
				SIGN OUT
			</button>
		</section>
	);
}

function NormalProfile({ handleSignOut, user }) {
	return (
		<section className="flex flex-col mt-10 pt-10 w-full items-center gap-5">
			<ProfileIcon />

			<h3 className="text-2xl pt-16">WELCOME</h3>
			<span className="mt-2">{user.email.toUpperCase()}</span>
			<button
				className="bg-[#00EFC5] w-64 mt-2 p-2 rounded-lg text-xl shadow-g50"
				onClick={handleSignOut}
			>
				SIGN OUT
			</button>
		</section>
	);
}

const checkStatusUser = (loading, user, handleSignOut) => {
	if (loading !== "complete" || user === null) return null;

	if (user && user.isAnonymous) {
		return <AnonymousProfile handleSignOut={handleSignOut} user={user} />;
	} else {
		return <NormalProfile handleSignOut={handleSignOut} user={user} />;
	}
};

export default function Profile() {
	const { user, signOut, initialize, loading } = useAuthStore((state) => state);
	const router = useRouter();

	useEffect(() => {
		initialize();
	}, [initialize]);

	useEffect(() => {
		if (loading === "complete" && !user) {
			router.push("/login");
		}
	}, [loading, user]);

	const handleSignOut = async () => {
		await signOut();
	};

	return (
		<>
			<main className="flex flex-col items-center  w-full flex-1">
				{checkStatusUser(loading, user, handleSignOut)}
			</main>
		</>
	);
}
