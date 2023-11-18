"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import FooterHome from "./FooterHome";
import FooterClose from "./FooterClose";

export default function FooterNavigation() {
	const pathname = usePathname();
	const [isHome, setIsHome] = useState(true);

	useEffect(() => {
		if (pathname !== "/") setIsHome(false);
		else setIsHome(true);
	}, [pathname]);

	return <nav className="flex gap-2">{isHome ? <FooterHome /> : <FooterClose />}</nav>;
}
