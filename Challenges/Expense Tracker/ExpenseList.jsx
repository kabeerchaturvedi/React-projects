export const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="mt-4">
      <h2>Expense List</h2>
      <ul>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <li key={expense.id}>
              {expense.description} - ${expense.amount}
              <button
                className="btn btn-danger"
                onClick={() => deleteExpense(expense.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No Expenses Found</p>
        )}
      </ul>
    </div>
  );
};
export default ExpenseList;
