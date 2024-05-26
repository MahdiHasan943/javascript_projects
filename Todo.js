// document.getElementById("add_task").addEventListener("click", (event) => {
//   event.preventDefault(); // Prevent the form from submitting and refreshing the page

//   const modal = document.getElementById("modal");
//   modal.classList.remove("modal_hidden");

//   // Fade-in effect
//   modal.style.opacity = 0; // Initially set opacity to 0
//   setTimeout(() => {
//     modal.style.opacity = 1; // Gradually increase opacity to 1
//   }, 100); // Delay the opacity change slightly to allow the transition to take effect smoothly

//   const removeModal = document.getElementById("remove_modal");
//   removeModal.addEventListener("click", () => {
//     modal.style.opacity = 0; // Set opacity to 0 when hiding the modal
//     setTimeout(() => {
//       modal.classList.add("modal_hidden");
//     }, 1000); // Delay adding modal_hidden class to allow transition to complete
//   });
// });

// const inputValue = (id) => {
//   const inputTask = document.getElementById(id);
//   const value = inputTask.value;
//   return value;
// };

// document.getElementById("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const taskTitle = inputValue("task");
//   const dateTitle = inputValue("date");

//   const cards = document.getElementById("card");
//   const numberOfCards = cards.children.length;

//   if (numberOfCards >= 3) {
//     const errorMessage = document.getElementById("error-message");
//     errorMessage.classList.remove("show");
//     setTimeout(() => {
//       errorMessage.classList.add("show");
//     }, 3000); // Hide the error message after 3 seconds
//     return;
//   }

//   const cardId = `card-${numberOfCards + 1}`;
//   const div = document.createElement("div");
//   div.classList.add("w-full");
//   div.setAttribute("id", cardId);
//   div.innerHTML = `
//     <div class="bg-white hover:bg-[#eeffec] hover:border-[#eeffac] hover:border-3 flex justify-between items-center w-full min-h-[80px] shadow-2xl px-2 rounded-2xl border border-[#ededed]">
//       <div class="one flex gap-4 items-center">
//         <div class="bg-[#72d479] w-[30px] h-[30px] max-w-[30px] max-h-[30px] p-1 rounded-full">
//           <img class="w-[20px] h-[20px]" src="/checked.png" alt="">
//         </div>
//         <div class="flex max-w-[150px] flex-col gap-0">
//           <p class="text-[10px] m-0 p-0 text-[#ddd]">${dateTitle}</p>
//           <h2 class="text-xl m-0 p-0 font-bold">${taskTitle}</h2>
//         </div>
//       </div>
//       <div class="two flex items-center w-[80px] h-[80px] gap-4">
//         <div class="bg-[#ffe4ec] p-1 rounded-full edit-button">
//           <img src="/edit-3-svgrepo-com.svg" alt="">
//         </div>
//         <div class="bg-[#ff9999] p-1 rounded-full delete-button">
//           <img src="/delete-button-svgrepo-com.svg" alt="">
//         </div>
//       </div>
//     </div>
//   `;
//   cards.appendChild(div);

//   // Add delete functionality
//   div.querySelector(".delete-button").addEventListener("click", () => {
//     cards.removeChild(div);
//   });

//   // Add edit functionality
//   div.querySelector(".edit-button").addEventListener("click", () => {
//     const taskElement = div.querySelector("h2");
//     const dateElement = div.querySelector("p");

//     const newTaskTitle = prompt("Edit task title:", taskElement.innerText);
//     const newDateTitle = prompt("Edit date:", dateElement.innerText);

//     if (newTaskTitle !== null) {
//       taskElement.innerText = newTaskTitle;
//     }
//     if (newDateTitle !== null) {
//       dateElement.innerText = newDateTitle;
//     }
//   });

//   // Clear the input fields
//   document.getElementById("task").value = "";
//   document.getElementById("date").value = "";

//   const modal = document.getElementById("modal");
//   modal.style.opacity = 0; // Set opacity to 0 when hiding the modal
//   setTimeout(() => {
//     modal.classList.add("modal_hidden");
//   }, 1000); // Delay adding modal_hidden class to allow transition to complete
//   const popupMessage = document.getElementById("popup-message");
//   popupMessage.classList.remove("show");
//   setTimeout(() => {
//     popupMessage.classList.add("show");
//   }, 3000); // Hide the message after 3 seconds
// });

document.getElementById("add_task").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const modal = document.getElementById("modal");
  modal.classList.remove("modal_hidden");

  // Fade-in effect
  modal.style.opacity = 0; // Initially set opacity to 0
  setTimeout(() => {
    modal.style.opacity = 1; // Gradually increase opacity to 1
  }, 100); // Delay the opacity change slightly to allow the transition to take effect smoothly

  const removeModal = document.getElementById("remove_modal");
  removeModal.addEventListener("click", () => {
    modal.style.opacity = 0; // Set opacity to 0 when hiding the modal
    setTimeout(() => {
      modal.classList.add("modal_hidden");
    }, 1000); // Delay adding modal_hidden class to allow transition to complete
  });
});

const inputValue = (id) => {
  const inputTask = document.getElementById(id);
  const value = inputTask.value;
  return value;
};

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const taskTitle = inputValue("task");
  const dateTitle = inputValue("date");

  const cards = document.getElementById("card");
  const numberOfCards = cards.children.length;

  if (numberOfCards >= 3) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.classList.remove("show");
    setTimeout(() => {
      errorMessage.classList.add("show");
    }, 3000); // Hide the error message after 3 seconds
    return;
  }

  const cardId = `card-${numberOfCards + 1}`;
  const div = document.createElement("div");
  div.classList.add("w-full");
  div.setAttribute("id", cardId);
  div.innerHTML = `
    <div class="bg-white hover:bg-[#eeffec] hover:border-[#eeffac] hover:border-3 flex justify-between items-center w-full min-h-[80px] shadow-2xl px-2 rounded-2xl border border-[#ededed]">
      <div class="one flex gap-4 items-center">
        <div class="bg-[#72d479] w-[30px] h-[30px] max-w-[30px] max-h-[30px] p-1 rounded-full">
          <img class="w-[20px] h-[20px]" src="/checked.png" alt="">
        </div>
        <div class="flex max-w-[150px] flex-col gap-0">
          <p class="text-[10px] m-0 p-0 text-[#ddd]">${dateTitle}</p>
          <h2 class="text-xl m-0 p-0 font-bold">${taskTitle}</h2>
        </div>
      </div>
      <div class="two flex items-center w-[80px] h-[80px] gap-4">
        <div class="bg-[#ffe4ec] p-1 rounded-full edit-button">
          <img src="/edit-3-svgrepo-com.svg" alt="">
        </div>
        <div class="bg-[#ff9999] p-1 rounded-full delete-button">
          <img src="/delete-button-svgrepo-com.svg" alt="">
        </div>
      </div>
    </div>
  `;
  cards.appendChild(div);

  // Add delete functionality
  div.querySelector(".delete-button").addEventListener("click", () => {
    cards.removeChild(div);
  });

  // Add edit functionality
  div.querySelector(".edit-button").addEventListener("click", () => {
    const taskElement = div.querySelector("h2");
    const dateElement = div.querySelector("p");

    const editModal = document.getElementById("edit_m");
    const editTaskInput = document.getElementById("edit_task");
    const editDateInput = document.getElementById("edit_date");

    // Populate the modal with current task data
    editTaskInput.value = taskElement.innerText;
    editDateInput.value = dateElement.innerText;

    editModal.classList.remove("modal_hidden");
    editModal.style.opacity = 0;
    setTimeout(() => {
      editModal.style.opacity = 1;
    }, 100);

    // Handle the update button click
    document.getElementById("update").onclick = (e) => {
      e.preventDefault();
      taskElement.innerText = editTaskInput.value;
      dateElement.innerText = editDateInput.value;
      editModal.style.opacity = 0;
      setTimeout(() => {
        editModal.classList.add("modal_hidden");
      }, 1000);
    };

    // Close the modal without updating
    document.getElementById("remove_modal").onclick = () => {
      editModal.style.opacity = 0;
      setTimeout(() => {
        editModal.classList.add("modal_hidden");
      }, 1000);
    };
  });

  // Clear the input fields
  document.getElementById("task").value = "";
  document.getElementById("date").value = "";

  const modal = document.getElementById("modal");
  modal.style.opacity = 0; // Set opacity to 0 when hiding the modal
  setTimeout(() => {
    modal.classList.add("modal_hidden");
  }, 1000); // Delay adding modal_hidden class to allow transition to complete
  const popupMessage = document.getElementById("popup-message");
  popupMessage.classList.remove("show");
  setTimeout(() => {
    popupMessage.classList.add("show");
  }, 3000); // Hide the message after 3 seconds
});
