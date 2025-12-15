let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";
const expenseEntries = [];

function addExpenseEntry(values) {
  expenseEntries.push(values);
  totalExpensesValue += parseFloat(values[1]);
}

function calculateCategoryExpenses(category) {
  let sum = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      sum += parseFloat(expenseEntries[i][1]);
    }
  }
  return sum;
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) return 0;
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function calculateLargestCategory() {
  let maxName = "Ninguna";
  let maxVal = 0;

  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  for (let i = 0; i < categories.length; i++) {
    const catTotal = calculateCategoryExpenses(categories[i]);
    if (catTotal > maxVal) {
      maxVal = catTotal;
      maxName = categories[i];
    }
  }
  return maxName;
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
