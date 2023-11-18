import TransactionList from "../ui/transactions/TransactionList";

export default function transactions() {
	return (
		<main className="flex flex-col w-full items-center flex-1">
			<TransactionList />
		</main>
	);
}
