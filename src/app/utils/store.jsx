import { create } from "zustand";

export const useTransactionState = create((set, get) => {
	return {
		balance: 0,
		expenses: 0,
		incomes: 0,
		transactions: [],
		addTransaction: (transaction) => {
			const { transactions } = get();
			set({ transactions: [...transactions, transaction] });
		},
		removeTransaction: () => {},
		updateTransactionTotals: () => {
			const { transactions } = get();

			let newExpenses = 0;
			let newBalance = 0;
			let newIncomes = 0;

			transactions.map((transaction) => {
				if (transaction.amount < 0) newExpenses += transaction.amount * -1;
				else newIncomes += transaction.amount;

				newBalance += transaction.amount;
			});

			set({ balance: newBalance, expenses: newExpenses, incomes: newIncomes });
		},
	};
});
