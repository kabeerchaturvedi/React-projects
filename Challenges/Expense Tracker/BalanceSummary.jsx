export const BalanceSummary = ({ expenses }) => {
  const calculateTotalBalance = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };
  return (
    <div>
      <h2>Balance Summary</h2>
      <p>Total Balance : ${calculateTotalBalance()}</p>
    </div>
  );
};
export default BalanceSummary;
