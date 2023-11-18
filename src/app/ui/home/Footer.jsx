//import { useGetGlobalContext } from "../context/GlobalContext";
import Link from "next/link";
import Add from "../icons/Add";
import Receipt from "../icons/Receipt";
import User from "../icons/User";

export default function FooterNav() {
	return (
		<nav className="flex gap-2">
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
			<Link href="/">Home</Link>
		</nav>
	);
}
