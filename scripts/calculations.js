let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";
const expenseEntries = [];

for (let i = 0; i < expenseEntries.length; i++) {
  const entry = expenseEntries[i];
  totalExpensesValue += entry[1];
}
function calculateBalance() {
  budgetValue - totalExpensesValue;
  return;
}
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }

  if (totalExpensesValue === 0) {
    return totalExpensesValue / expenseEntries.length;
  }
  function calculateBalance() {
    return budgetValue - totalExpensesValue;
  }

  function updateBalanceColor() {
    const balance = calculateBalance();

    if (balance < 0) {
      balanceColor = "red";
    } else if (balance < budgetValue * 0.25) {
      balanceColor = "orange";
    } else {
      balanceColor = "green";
    }
  }
  function calculateCategoryExpenses(category) {
    let totalExpenses = 0;

    for (let i = 0; i < expenseEntries.length; i++) {
      const entry = expenseEntries[i];

      if (entry[0] === category) {
        totalExpenses += entry[1];
      }
      return total;
    }
  }
}
