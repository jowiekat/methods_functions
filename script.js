// Select the button element with the class "show-results"
const button = document.querySelector(".show-results");

// Select the container element for results with the class "results"
const results = document.querySelector(".results");

// Select the container element for expenses with the class "expenses"
const expensesList = document.querySelector(".expenses");

// Array of expenses
const expenses = [
  9.99, 25.8, 144.39, 12.98, 4.99, 38.75, 14.5, 99.99, 75.4, 4.75, 62.88
];

// Display each expense in a list item inside the expenses list container
for (let exp of expenses) {
  let li = document.createElement("li");
  li.innerText = `$ ${exp}`; // Display the expense with a dollar sign
  expensesList.append(li); // Append the list item to the expenses list container
}

// Function to show the minimum and maximum expenses
const showMinMax = function (expenses) {
  // Calculate the minimum and maximum expenses using spread syntax
  const min = Math.min(...expenses);
  const max = Math.max(...expenses);

  // Create list items for the minimum and maximum expenses
  const minListItem = document.createElement("li");
  minListItem.innerText = `Min: $ ${min}`; // Display the minimum expense with a dollar sign

  const maxListItem = document.createElement("li");
  maxListItem.innerText = `Max: $ ${max}`; // Display the maximum expense with a dollar sign

  // Append the minimum and maximum expense list items to the results container
  results.append(minListItem);
  results.append(maxListItem);

  // Remove the "hide" class from the results container to show the results
  results.classList.remove("hide");
};

// Add an event listener to the button
button.addEventListener("click", function () {
  // Call the showMinMax function with the expenses array as an argument
  showMinMax(expenses);
  // Disable the button to prevent multiple clicks
  button.disabled = true;
});
