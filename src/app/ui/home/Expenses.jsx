//import { useGetGlobalContext } from "../context/GlobalContext";
import MoneySend from "../icons/MoneySend";

export default function Expenses({ expenses }) {
	return (
		<article className="bg-white p-7 rounded-2xl w-72 relative">
			<h3 className="text-center text-black text-2xl p-1">EXPENSES</h3>
			<p className="text-center text-black text-2xl p-1">${expenses}</p>
			<div className="bg-[#00EFC5] w-12 h-12 flex justify-center items-center rounded-full absolute -left-5 bottom-10">
				<MoneySend size="24" color="#000" variant="Outline" />
			</div>
		</article>
	);
}
