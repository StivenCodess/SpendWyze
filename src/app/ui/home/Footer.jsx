"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";
import Add from "../icons/Add";
import Receipt from "../icons/Receipt";
import User from "../icons/User";
import Close from "../icons/Close";

function FooterClose() {
	return (
		<>
			<Link
				href="/"
				className="w-20 h-20 rounded-full bg-[#00EFC5] flex justify-center items-center"
			>
				<Close />
			</Link>
		</>
	);
}

function FooterHome() {
	return (
		<>
			<Link
				className="bg-[#00EFC5] p-3 px-6 rounded-xl flex justify-center items-center"
				href="transactions"
			>
				<Receipt />
			</Link>
			<Link
				className="w-20 h-20 rounded-full bg-[#00EFC5] flex justify-center items-center"
				href="addTransaction"
			>
				<Add />
			</Link>
			<Link
				className="bg-[#00EFC5] p-3 px-6 rounded-xl flex justify-center items-center"
				href="profile"
			>
				<User />
			</Link>
		</>
	);
}

export default function FooterNavigation() {
	const pathname = usePathname();
	const [isHome, setIsHome] = useState(true);

	useEffect(() => {
		if (pathname !== "/") setIsHome(false);
		else setIsHome(true);
	}, [pathname]);

	return <nav className="flex gap-2">{isHome ? <FooterHome /> : <FooterClose />}</nav>;
}
