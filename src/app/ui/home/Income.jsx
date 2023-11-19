import MoneyRecive from "../icons/MoneyRecive";

export default function Income({ incomes }) {
	return (
		<article className="bg-white p-6 rounded-2xl w-56 relative shadow-g100">
			<h3 className="text-center text-black text-2xl p-1">INCOMES</h3>
			<p className="text-center text-black text-2xl p-1">${incomes}</p>
			<div className="bg-[#00EFC5] w-12 h-12 flex justify-center items-center rounded-full absolute -left-5 bottom-10">
				<MoneyRecive size="24" color="#000" variant="Outline" />
			</div>
		</article>
	);
}
