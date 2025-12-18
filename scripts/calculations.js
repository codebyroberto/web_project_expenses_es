let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

const expenseEntries = [
  ["Comida", 500],
  ["Hogar", 2000],
  ["Transporte", 500],
  ["Comer fuera", 200],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}

function addExpenseEntry(values) {
  expenseEntries.push(values);

  totalExpensesValue += Number(values[1]);
}

function calculateCategoryExpenses(category) {
  let sum = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      sum += expenseEntries[i][1];
    }
  }
  return sum;
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function calculateLargestCategory() {
  let maxName = "Ninguna";
  let maxVal = 0;

  const uniqueCategories = [];
  for (let i = 0; i < expenseEntries.length; i++) {
    if (!uniqueCategories.includes(expenseEntries[i][0])) {
      uniqueCategories.push(expenseEntries[i][0]);
    }
  }

  for (let i = 0; i < uniqueCategories.length; i++) {
    const catName = uniqueCategories[i];
    const catTotal = calculateCategoryExpenses(catName);

    if (catTotal > maxVal) {
      maxVal = catTotal;
      maxName = catName;
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
