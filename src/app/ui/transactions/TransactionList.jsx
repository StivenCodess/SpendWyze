"use client";
import { useTransactionState } from "@/app/utils/store";

const transactionsEx = [
	{
		type: "Ropa",
		amount: 1200,
		description: "Campera",
	},
	{
		type: "Electronica",
		amount: 30000,
		description: "Monitor",
	},
	{
		type: "Entretenimiento",
		amount: 1000,
		description: "Spotify",
	},
	{
		type: "Viajes",
		amount: 5000,
		description: "Dubai",
	},
];

export function Transaction({ transactionType, amount }) {
	const handlerButton = () => console.log("Eliminar");

	return (
		<li className="flex justify-between text-black">
			<span className="text-xl text-center p-3 text-[#00EFC5]">{transactionType}</span>
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
				{transactions.map((transaction) => {
					return (
						<Transaction
							key={transaction.id}
							transactionType={transaction.type}
							amount={transaction.amount}
						/>
					);
				})}
			</ul>
		</section>
	);
}
