const expenseForm = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description-input");
const amountInput = document.getElementById("amount-input");
const categoriesInput = document.getElementById("categories-input");
const dateInput = document.getElementById("date-input");
const submitBtn = document.getElementById("submit-btn");
const expenseTable = document.getElementById("expenses-table-body");


const expenses = [];

submitBtn.addEventListener("click", e => {
  e.preventDefault();
  
  const Description = descriptionInput.value;
  const Amount = amountInput.value;
  const Category = categoriesInput.value;
  const DateValue = dateInput.value;
  
  if (Description, Amount, Category, DateValue === "") {
    return alert("Please Fill The Form First");
  }

  let amountClass = "";
  let categoriesId = "";
  switch (Category) {
    case "Food":
      categoriesId = "red-btn";
      break;
      case "Travel":
        categoriesId = "blue-btn";
        break;
        case "Entertainment":
      categoriesId = "yellow-btn";
      break;
    default:
      categoriesId = "gray-btn";
      break;
  }
  
  if (Amount > 100) {
    amountClass = "red-bg";
  } else {
    amountClass = "gray-bg";
  }
  const expensesId = Description + Date.now();
  
  expenses.push({
    Description,
    Amount,
    Category,
    DateValue
  });
  expenseForm.reset();
  renderExpense();
  
});

function renderExpense() {
  expenseTable.innerHTML = ``;
  expenses.forEach((expensesObj, i) => {
    const { Description, Amount, Category, DateValue } = expensesObj;

    let amountClass = "";
  let categoriesId = "";
  switch (Category) {
    case "Food":
      categoriesId = "red-btn";
      break;
      case "Travel":
        categoriesId = "blue-btn";
        break;
        case "Entertainment":
      categoriesId = "purple-btn";
      break;
    default:
      categoriesId = "gray-btn";
      break;
  }
  
  if (Amount > 100) {
    amountClass = "red-bg";
  } else {
    amountClass = "gray-bg";
  }
  const expensesId = Description;
  

    expenseTable.innerHTML += `
  <tr>
    <td>${Description}</td>
    <td class="${amountClass}">$${Amount}</td>
    <td class="${categoriesId}">${Category}</td>
    <td>${DateValue}</td>
    <td><button onclick="

      expenses.splice(${i}, 1);
      renderExpense()
    " class="del-btn">Delete</button></td>
  </tr>
  `
  });
}