const addExpenseBtn = document.querySelector(".controls__add-btn");
const expenseModal = document.querySelector("#add-expense-modal");
const closeModalBtn = document.querySelector(".modal__close-btn");
const budgetInput = document.querySelector(".budget__input");
const budgetButton = document.querySelector(".budget__set-btn");

const expenseForm = document.querySelector("#add-expense-form");
const expenseCategoryInput = document.querySelector("#expense-category-input");
const expenseAmountInput = document.querySelector("#expense-amount-input");

const defaultExpenses = [...expenseEntries];

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
    expenseEntries.push(...parsedEntries);

    totalExpensesValue = 0;
    for (const expense of expenseEntries) {
      totalExpensesValue += expense[1];
    }
  } else {
    saveToLocalStorage("expenseEntries", expenseEntries);
  }
}

budgetButton.addEventListener("click", (event) => {
  event.preventDefault();

  const value = parseFloat(budgetInput.value);

  if (!isNaN(value) && value >= 0) {
    budgetValue = value;
    saveToLocalStorage("budgetValue", budgetValue);

    updateBalanceColor();
    setStats();

    console.log("Presupuesto guardado:", budgetValue);
  } else {
    console.log("Por favor ingresa un número válido");
  }
});

addExpenseBtn.addEventListener("click", () => {
  expenseModal.classList.add("modal_opened");
});

closeModalBtn.addEventListener("click", () => {
  expenseModal.classList.remove("modal_opened");
});

expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const category = expenseCategoryInput.value;
  const amount = parseFloat(expenseAmountInput.value);

  if (category && !isNaN(amount) && amount > 0) {
    addExpenseEntry([category, amount]);

    saveToLocalStorage("expenseEntries", expenseEntries);

    updateExpensesList(expenseEntries);
    setStats();
    updateBalanceColor();

    expenseModal.classList.remove("modal_opened");
    expenseForm.reset();

    console.log("Nuevo gasto agregado:", category, amount);
  } else {
    console.log("Datos inválidos");
  }
});

loadFromLocalStorage();
updateExpensesList(expenseEntries);
setStats();
updateBalanceColor();
