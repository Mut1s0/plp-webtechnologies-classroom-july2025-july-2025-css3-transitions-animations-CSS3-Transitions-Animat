// ===============================
// Part 1: Event & Animation Demo
// ===============================
document.getElementById("hoverBtn").addEventListener("click", () => {
  const box = document.getElementById("animatedBox");
  box.classList.toggle("animate");
});

// ===============================
// Part 2: Functions with Parameters & Return Values
// ===============================
function calculateArea(length, width) {
  // Local scope: 'area'
  let area = length * width;
  return area; // return value
}

document.getElementById("calcArea").addEventListener("click", () => {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);

  if (isNaN(length) || isNaN(width)) {
    document.getElementById("result").textContent = "⚠️ Please enter valid numbers!";
    return;
  }

  let result = calculateArea(length, width); // using return value
  document.getElementById("result").textContent = `✅ The area is ${result}`;
});

// ===============================
// Part 3: Modal Animation with JS + CSS
// ===============================
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});