const expenseForm = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description-input");
const amountInput = document.getElementById("amount-input");
const categoriesInput = document.getElementById("categories-input");
const dateInput = document.getElementById("date-input");
const submitBtn = document.getElementById("submit-btn");
const expenseTable = document.getElementById("expenses-table-body");
const confirmDeleteDialog = document.getElementById("confirm-delete-dialog");
const confirmDelete = document.getElementById("delete-btn");



const expenses = [];

submitBtn.addEventListener("click", e => {
  e.preventDefault();
  
  const Description = descriptionInput.value;
  const Amount = amountInput.value;
  const Category = categoriesInput.value;
  const DateValue = dateInput.value;
  
  if (Description === "" || Amount === "" || Category === "" || DateValue === "") {
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
  // expenseForm.reset();
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
    <td><button class="del-btn" data-index="${i}">Delete</button></td>
  </tr>
  `
  });

  const deleteButton = document.querySelectorAll('.del-btn');

  // deleteButton.forEach((button, index) => {

  //   button.addEventListener('click', () => {
  //     // const index = e.target.getAttribute('data-index');
  //     confirmDeleteDialog.showModal();

      

  //     confirmDelete.addEventListener('click', () => {
  //       console.log(index);
  //     });
  //   });

  // });
  deleteButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    confirmDeleteDialog.showModal();

    confirmDelete.addEventListener('click', () => {
      expenses.splice(index, 1);
      renderExpense();
      confirmDeleteDialog.close();
    }, { once: true }); // Listener auto-removes after firing once

  });
});
  // let currentDeleteIndex = null;

  // confirmDelete.addEventListener('click', () => {
  //   console.log(currentDeleteIndex);
  //   // console.log(e.target.value);
  //   // if (currentDeleteIndex !== null) {
  //   //   console.log(currentDeleteIndex);
  //   //   expenses.splice(currentDeleteIndex, 1);
  //   // }
  // });
  // deleteButton.addEventListener('click' , e => {
  //   currentDeleteIndex = index;
  //   deleteButton.addEventListener('click', (index) => {
  //     index = currentDeleteIndex;
  //     console.log(index);
  //     confirmDeleteDialog.showModal();
  //     // currentDeleteIndex = e.target.getAttribute('data-index');
  //     // console.log(currentDeleteIndex);
  //     // confirmDeleteDialog.showModal();
  //   });
  // });
}

/* THE GOOD VERSION FROM BLACKBOX AI

const getCategoryStyles = (category) => {
    switch (category) {
        case "Food":
            return { class: "red-btn", color: "red" };
        case "Travel":
            return { class: "blue-btn", color: "blue" };
        case "Entertainment":
            return { class: "purple-btn", color: "purple" };
        default:
            return { class: "gray-btn", color: "gray" };
    }
};

const getAmountClass = (amount) => {
    return amount > 100 ? "red-bg" : "gray-bg";
};

submitBtn.addEventListener("click", e => {
    e.preventDefault();
    
    const description = descriptionInput.value;
    const amount = amountInput.value;
    const category = categoriesInput.value;
    const dateValue = dateInput.value;

    if (description === "" || amount === "" || category === "" || dateValue === "") {
        return alert("Please Fill The Form First");
    }

    const { class: categoryClass } = getCategoryStyles(category);
    const amountClass = getAmountClass(amount);
    
    expenses.push({ description, amount, category, dateValue });
    expenseForm.reset();
    renderExpense();
});

function renderExpense() {
    expenseTable.innerHTML = ``;
    expenses.forEach((expenseObj, i) => {
        const { description, amount, category, dateValue } = expenseObj;
        const { class: categoryClass } = getCategoryStyles(category);
        const amountClass = getAmountClass(amount);

        expenseTable.innerHTML += `
            <tr>
                <td>${description}</td>
                <td class="${amountClass}">$${amount}</td>
                <td class="${categoryClass}">${category}</td>
                <td>${dateValue}</td>
                <td><button class="del-btn" data-index="${i}">Delete</button></td>
            </tr>
        `;
    });

    document.querySelectorAll('.del-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            expenses.splice(index, 1);
            renderExpense();
        });
    });
}
*/