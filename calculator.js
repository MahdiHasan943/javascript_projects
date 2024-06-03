// document.addEventListener("DOMContentLoaded", () => {
//   const inputField = document.getElementById("calculator_input");

//   // Handle number button clicks
//   document.querySelectorAll(".number").forEach((button) => {
//     button.addEventListener("click", (event) => {
//       inputField.value += event.target.innerText;
//     });
//   });

//   // Handle operator button clicks
//   document.querySelectorAll(".operator").forEach((button) => {
//     button.addEventListener("click", (event) => {
//       inputField.value += ` ${event.target.innerText} `;
//     });
//   });

//   // Handle clear (C) button click
//   document.getElementById("cancel").addEventListener("click", () => {
//     inputField.value = inputField.value.slice(0, -1);
//   });

//   // Handle all clear (AC) button click
//   document.getElementById("clear").addEventListener("click", () => {
//     inputField.value = "";
//   });

//   // Handle result (=) button click
//   document.getElementById("result").addEventListener("click", () => {
//     try {
//       inputField.value = eval(inputField.value.replace("%", "/100"));
//     } catch (error) {
//       inputField.value = "Error";
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("calculator_input");

  // Handle number button clicks
  document.querySelectorAll(".number").forEach((button) => {
    button.addEventListener("click", (event) => {
      inputField.value += event.target.innerText;
    });
  });

  // Handle operator button clicks
  document.querySelectorAll(".operator").forEach((button) => {
    button.addEventListener("click", (event) => {
      inputField.value += ` ${event.target.innerText} `;
    });
  });

  // Handle clear (C) button click
  document.getElementById("cancel").addEventListener("click", () => {
    inputField.value = inputField.value.slice(0, -1);
  });

  // Handle all clear (AC) button click
  document.getElementById("clear").addEventListener("click", () => {
    inputField.value = "";
  });

  // Handle result (=) button click
  document.getElementById("result").addEventListener("click", () => {
    try {
      inputField.value = calculate(inputField.value);
    } catch (error) {
      inputField.value = "Error";
    }
  });
});

function calculate(expression) {
  const tokens = expression.split(" ").filter((token) => token);
  const outputQueue = [];
  const operatorStack = [];

  const operators = {
    "+": { precedence: 1, associativity: "Left" },
    "-": { precedence: 1, associativity: "Left" },
    "*": { precedence: 2, associativity: "Left" },
    "/": { precedence: 2, associativity: "Left" },
  };

  tokens.forEach((token) => {
    if (parseFloat(token)) {
      outputQueue.push(token);
    } else if (operators[token]) {
      while (
        operatorStack.length &&
        operators[operatorStack[operatorStack.length - 1]] &&
        ((operators[token].associativity === "Left" &&
          operators[token].precedence <=
            operators[operatorStack[operatorStack.length - 1]].precedence) ||
          (operators[token].associativity === "Right" &&
            operators[token].precedence <
              operators[operatorStack[operatorStack.length - 1]].precedence))
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.push(token);
    }
  });

  while (operatorStack.length) {
    outputQueue.push(operatorStack.pop());
  }

  const stack = [];

  outputQueue.forEach((token) => {
    if (parseFloat(token)) {
      stack.push(token);
    } else {
      const b = parseFloat(stack.pop());
      const a = parseFloat(stack.pop());
      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
      }
    }
  });

  return stack[0];
}
