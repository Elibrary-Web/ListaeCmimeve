const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "$70" ? "$7" : "$70";
  professional.textContent =
    professional.textContent === "$300" ? "$30 " : "$300";
  master.textContent = master.textContent === "$150" ? "$15" : "$150";
});