import Link from "next/link";
import Close from "../icons/Close";

export default function FooterClose() {
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
