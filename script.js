"use strict";

let total = 0;
let totalParagraph = document.querySelector(".total");
let colaButton = document.querySelector(".cola");
let peanutButton = document.querySelector(".peanuts");
let chocolateButton = document.querySelector(".chocolate");
let gummiesButton = document.querySelector(".gummies");

colaButton.addEventListener("click", () => {
  let amount = parseFloat(colaButton.getAttribute("data-amount"));
  total += amount;
  console.log(total);
  totalParagraph.innerText = `Total:$${total}`;
});

peanutButton.addEventListener("click", () => {
  let amount = parseFloat(peanutButton.getAttribute("data-amount"));
  total += amount;
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

{
  let formContainer = document.querySelector(".form-container");
  let coinCount = document.querySelector(".how-many");
  let coinName = document.querySelector(".which-coin");
  let coinContainer = document.querySelector(".coins");

  formContainer.addEventListener("submit", (event) => {
    event.preventDefault();

    formContainer.addEventListener("click", (event) => {
      for (let i = 0; i < coinCount; i++) {
        let newCoin = document.createElement("div");
        newCoin.innerText = coinName;
        newCoin.classList.add("coin");
        coinContainer.append(newCoin);
      }
    });
  });
}
