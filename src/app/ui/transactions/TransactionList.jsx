"use client";
import { useTransactionState } from "@/app/utils/transactionStore";
import NoTransactionIcon from "../icons/NoTransactionIcon";

const transactionsEx = [
  {
    id: 1,
    type: "Ropa",
    amount: 1200,
    description: "Campera",
  },
  {
    id: 2,
    type: "Electronica",
    amount: 30000,
    description: "Monitor",
  },
  {
    id: 3,
    type: "Entretenimiento",
    amount: 1000,
    description: "Spotify",
  },
  {
    id: 4,
    type: "Viajes",
    amount: 5000,
    description: "Dubai",
  },
  {
    id: 5,
    type: "Steam",
    amount: 12300,
    description: "For honor",
  },
  {
    id: 6,
    type: "Steam",
    amount: 16000,
    description: "Fifa",
  },
  {
    id: 7,
    type: "Hogar",
    amount: 5350,
    description: "Funda sillon",
  },
  {
    id: 8,
    type: "Ropa",
    amount: 34000,
    description: "Calzado Gucci",
  },
];

function NoTransactions() {
  return (
    <section className="border-black flex flex-col pt-12 gap-10 items-center">
      <NoTransactionIcon />
      <h5 className="text-black text-center pb-10">
        YOU HAVE NOT TRANSACTIONS ADDED
      </h5>
    </section>
  );
}

function Transaction({ transactionType, amount, id }) {
  const removeTransaction = useTransactionState(
    (state) => state.removeTransaction
  );

  return (
    <li className="flex justify-between text-black">
      <span className="text-lg text-center p-3 text-[#00EFC5]">
        {transactionType}
      </span>
      <div className="flex">
        <span className="text-lg text-center p-3">$ {amount}</span>
        <button
          className="text-md font-extrabold"
          onClick={() => removeTransaction(id)}
        >
          ✕
        </button>
      </div>
    </li>
  );
}

export default function TransactionList() {
  const transactions = useTransactionState((state) => state.transactions);
  console.log(transactions.length === 0 ? "0" : "Es mayor a 0");
  return (
    <section className="bg-white flex w-11/12 rounded-2xl flex-col p-3 shadow-g100">
      <h2 className="text-[#00EFC5] text-2xl text-center uppercase mb-5">
        Transactions
      </h2>

      <ul className="flex flex-col rounded-2xl p-3">
        {transactions.length > 0 ? (
          transactions.map((transaction) => {
            return (
              <Transaction
                key={transaction.id}
                transactionType={transaction.type}
                amount={transaction.amount}
                id={transaction.id}
              />
            );
          })
        ) : (
          <NoTransactions />
        )}
      </ul>
    </section>
  );
}
