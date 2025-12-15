const addExpenseBtn = document.querySelector(".controls__add-btn");
const expenseModal = document.querySelector("#add-expense-modal");
const closeModalBtn = document.querySelector(".modal__close-btn");

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
const budgetInput = document.querySelector(".budget__input");
const budgetButton = document.querySelector(".budget__set-btn");

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

loadFromLocalStorage();
updateExpensesList(expenseEntries);
setStats();

const expenseModal = document.querySelector("#add-expense-modal");
const closeModalBtn = document.querySelector(".modal__close-btn");

addExpenseBtn.addEventListener("click", () => {
  expenseModal.classList.add("modal_opened");
});

closeModalBtn.addEventListener("click", () => {
  expenseModal.classList.remove("modal_opened");
});
