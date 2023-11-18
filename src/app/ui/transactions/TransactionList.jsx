"use client";
import { useTransactionState } from "@/app/utils/store";

export function Transaction({ transaction, amount }) {
	const handlerButton = () => console.log("Eliminar");

	return (
		<li className="flex justify-between text-black">
			<span className="text-xl text-center p-3 text-[#00EFC5]">{transaction}</span>
			<span className="text-xl text-center p-3">$ {amount}</span>
			{/* <button className="text-4xl text-center p-3" onClick={() => handlerButton()} /> */}
		</li>
	);
}

export default function TransactionList() {
	const transactions = useTransactionState((state) => state.transactions);
	console.log(transactions);

	return (
		<section className="bg-white flex w-11/12 rounded-2xl flex-col p-3">
			<h2 className="text-[#00EFC5] text-2xl text-center uppercase mb-5">Transactions</h2>
			<ul className="flex flex-col rounded-2xl p-3">
				<Transaction transaction={"Spotify"} amount={1500} />
				<Transaction transaction={"Spotify"} amount={1500} />
				<Transaction transaction={"Spotify"} amount={1500} />
				<Transaction transaction={"Spotify"} amount={1500} />
			</ul>
		</section>
	);
}
