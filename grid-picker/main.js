const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");

// Create 100 squares
for (let i = 0; i < 100; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("click", () => {
    square.style.backgroundColor = colorPicker.value;
  });

  grid.appendChild(square);
}
