"use client";
import { useTransactionState } from "./utils/transactionStore";

import { useEffect } from "react";

import Balance from "./ui/home/Balance";
import Expenses from "./ui/home/Expenses";
import Income from "./ui/home/Income";

export default function Home() {
	const transactions = useTransactionState((state) => state.transactions);

	const balance = useTransactionState((state) => state.balance);
	const expenses = useTransactionState((state) => state.expenses);
	const incomes = useTransactionState((state) => state.incomes);

	const updateTransactionTotals = useTransactionState(
		(state) => state.updateTransactionTotals
	);

	useEffect(() => {
		updateTransactionTotals();
	}, [transactions, updateTransactionTotals]);

	return (
		<>
			<main className="flex flex-col justify-center items-center flex-1 w-full scroll pb-12">
				<section className="flex flex-col gap-10 items-center justify-center">
					<Balance balance={balance} />
					<Expenses expenses={expenses} />
					<Income incomes={incomes} />
				</section>
			</main>
		</>
	);
}
