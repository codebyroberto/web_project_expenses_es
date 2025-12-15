function saveToLocalStorage(itemName, itemValue) {
  if (Array.isArray(itemValue)) {
    itemValue = JSON.stringify(itemValue);
  }
  localStorage.setItem(itemName, itemValue);
}

function loadFromLocalStorage() {
  const storedBudgetValue = localStorage.getItem("budgetValue");
  const storedExpenseEntries = localStorage.getItem("expenseEntries");

  if (storedBudgetValue) {
    budgetValue = parseFloat(storedBudgetValue);
  } else {
    saveToLocalStorage("budgetValue", budgetValue);
  }

  if (storedExpenseEntries) {
    const parsedEntries = JSON.parse(storedExpenseEntries);

    expenseEntries.length = 0;
    totalExpensesValue = 0;

    parsedEntries.forEach((entry) => {
      if (Array.isArray(entry) && entry.length === 2) {
        expenseEntries.push(entry);
        totalExpensesValue += parseFloat(entry[1]);
      }
    });
  } else {
    saveToLocalStorage("expenseEntries", expenseEntries);
  }

  if (typeof updateExpensesList === "function") {
    updateExpensesList(expenseEntries);
  }
  if (typeof setStats === "function") {
    setStats();
  }
}

loadFromLocalStorage();
