import { useEffect, useState } from "react";
import BalanceSummary from "./BalanceSummary";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpenses) => {
    setExpenses([...expenses, newExpenses]);
  };
  const deleteExpense = (id) => {
    const updateExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updateExpenses);
  };
  return (
    <section>
      <div>
        <h1>Expense Tracker</h1>
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        <BalanceSummary expenses={expenses} />
      </div>
    </section>
  );
};
export default ExpenseTracker;
