"use client";
import TransactionList from "../ui/Transactions/TransactionList";
import useAuthStore from "../utils/authStore";

export default function Transactions() {
	const { user } = useAuthStore((state) => state);

	console.log(user);
	return (
		<main className="flex flex-col w-full items-center flex-1">
			<TransactionList />
		</main>
	);
}
