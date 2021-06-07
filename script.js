"use strict";

let total = 0;
let totalParagraph = document.querySelector(".total");
let colaButton = document.querySelector(".cola");
let peanutButton = document.querySelector(".peanuts");
let chocolateButton = document.querySelector(".chocolate");
let gummiesButton = document.querySelector(".gummies");
let moneyForm = document.querySelector(".money-form");
let coinContainer = document.querySelector(".coin-container");
let bulb = document.querySelector(".bulb");
let on = document.querySelector(".on");
let off = document.querySelector(".off");
let toggle = document.querySelector(".toggle");
let end = document.querySelector(".end");
let buttons = document.querySelectorAll(".button");

colaButton.addEventListener("click", () => {
  let amount = parseFloat(colaButton.getAttribute("data-amount"));
  total += amount;
  console.log(total);
  totalParagraph.innerText = `Total:$${total}`;
});

peanutButton.addEventListener("click", () => {
  let amount = parseFloat(peanutButton.getAttribute("data-amount")); //get the amount from the attribute
  total += amount; //use that number to increment
  console.log(total);
  totalParagraph.innerText = `Total:$${total}`;
});

chocolateButton.addEventListener("click", () => {
  let amount = parseFloat(chocolateButton.getAttribute("data-amount"));
  total += amount;
  console.log(total);
  totalParagraph.innerText = `Total:$${total}`;
});

gummiesButton.addEventListener("click", () => {
  let amount = parseFloat(gummiesButton.getAttribute("data-amount"));
  total += amount;
  console.log(total);
  totalParagraph.innerText = `Total:$${total}`;
});

moneyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = document.querySelector("#amount").value;
  let type = document.querySelector("#type").value; //gets the value from input fields
  console.log(amount, type);

  for (let i = 0; i < amount; i++) {
    let newCoin = document.createElement("div");
    newCoin.classList.add("coin", type);
    newCoin.innerText = type;
    coinContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
});

on.addEventListener("click", () => {
  bulb.classList.add("light");
});

off.addEventListener("click", () => {
  bulb.classList.remove("light");
});

toggle.addEventListener("click", () => {
  bulb.classList.toggle("light");
});

end.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.disabled = true;
  });
});
