"use client";
import { useEffect } from "react";
import useAuthStore from "./utils/authStore";
import { useRouter } from "next/navigation";
import { Days_One } from "next/font/google";
import FooterNavigation from "./ui/footer/Footer";
import Title from "./ui/home/Title";
import "./globals.css";

const daysOne = Days_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
	title: "SpendWyze",
	description: "An application to keep you informed of your expenses and income.",
};

export default function RootLayout({ children }) {
	const { initialize, user, loading } = useAuthStore((state) => state);
	const router = useRouter();

	useEffect(() => {
		initialize();
	}, [initialize]);

	useEffect(() => {
		if (loading === "complete" && !user) {
			router.push("/login");
		}
	}, [loading, user]);

	return (
		<html lang="en">
			<body
				className={`${daysOne.className} overflow-hidden min-h-screen flex flex-col justify-center items-center  `}
			>
				<header className="p-10 ml-3 ">
					<Title />
				</header>

				{loading === "inProgress" ? (
					<h1>Loading...</h1>
				) : (
					<>
						{children}
						<footer className="pb-5">
							<FooterNavigation />
						</footer>
					</>
				)}
			</body>
		</html>
	);
}
