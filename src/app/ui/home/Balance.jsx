import WalletMoney from "../icons/WalletMoney";

export default function Balance({ balance }) {
	return (
		<article className="bg-white p-7 rounded-2xl w-72 relative">
			<h3 className="text-center text-black text-2xl p-1">BALANCE</h3>
			<p className="text-center text-black text-2xl p-1">${balance}</p>
			<div className="bg-[#00EFC5] w-12 h-12 flex justify-center items-center rounded-full absolute -left-5 bottom-10">
				<WalletMoney />
			</div>
		</article>
	);
}
