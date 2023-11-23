"use client";
import { useTransactionState } from "@/app/utils/transactionStore";
import { useState } from "react";

export default function TransactionForm() {
  const addTransaction = useTransactionState((state) => state.addTransaction);

  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!type || amount != 0) return;

    const transactionObject = {
      id: Date.now().toString(),
      type: type,
      amount: parseInt(amount),
      description: description,
    };
    addTransaction(transactionObject);
    resetForm();
  };

  const handleTypeValue = (e) => setType(e.target.value);
  const handleAmountValue = (e) => setAmount(e.target.value);
  const handleDescriptionValue = (e) => setDescription(e.target.value);

  const resetForm = () => {
    setType("");
    setAmount(0);
    setDescription("");
  };

  return (
    <form
      className="w-3/4 h-[485px] rounded-3xl bg-white items-center justify-evenly gap-5 flex flex-col shadow-g100"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-full gap-10">
        <label className="text-center text-xl text-black">
          TYPE
          <input
            onChange={handleTypeValue}
            className="bg-gray-300 p-2 w-10/12 rounded-lg text-center outline-none"
            type="text"
            value={type}
            name="type"
          />
        </label>
        <label className="text-center text-xl text-black">
          AMOUNT
          <input
            onChange={handleAmountValue}
            className="bg-gray-300 p-2 w-10/12 rounded-lg text-center outline-none"
            type="number"
            value={amount}
            name="amount"
          />
        </label>
        <label className="text-center text-xl text-black">
          DESCRIPTION
          <input
            onChange={handleDescriptionValue}
            className="bg-gray-300 p-2 w-10/12 rounded-lg text-center outline-none"
            type="text"
            value={description}
            name="description"
          />
        </label>
      </div>
      <button className="bg-[#00EFC5] w-10/12 p-2 rounded-lg text-xl shadow-btn100">
        ADD
      </button>
    </form>
  );
}
