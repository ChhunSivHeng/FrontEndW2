const COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];

function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}
const createButton = document.getElementById("create");
const container = document.querySelector(".container");

createButton.addEventListener("click", () => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = randomColor();
  const description = document.createElement("p");
  description.textContent = "Description";
  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Card";
  removeButton.addEventListener("click", () => {
    card.remove();
  });
  cardFooter.appendChild(removeButton);
  card.appendChild(description);
  card.appendChild(cardFooter);
  container.appendChild(card);
});
