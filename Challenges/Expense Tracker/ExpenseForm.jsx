import { useState } from "react";

export const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      alert("Please enter values");
      return;
    }
    const newExpense = {
      id: new Date().getTime(),
      description,
      amount: parseFloat(amount),
    };
    addExpense(newExpense);
    setDescription("");
    setAmount("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};
export default ExpenseForm;
