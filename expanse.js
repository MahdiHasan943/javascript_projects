const inputValue = (id) => {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
};

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();

  const name = inputValue("name");
  const date = inputValue("date");
  const amount = inputValue("amount");
  console.log(name, date, amount);

  if (name !== "" && date !== "" && amount !== "") {
    const result = document.querySelector("#result tbody"); // Ensure tbody is selected to insert rows correctly
    const row = document.createElement("tr");

    row.innerHTML = `
        <td class="pl-2">${name}</td>
        <td class="pl-2">${date}</td>
        <td class="pl-2">${amount}</td>
        <td class="pl-2">
          <img class="w-[20px] h-[20px] delete" src="delete-button-svgrepo-com.svg" alt="delete"/>
        </td>
      `;

    result.appendChild(row);

    // Attach event listener to the delete button in the newly added row
    row.querySelector(".delete").addEventListener("click", () => {
      result.removeChild(row);
    });

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("amount").value = "";
  } else {
    alert("Please fill out all fields.");
  }
});
