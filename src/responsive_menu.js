const toggleButton = document.querySelector(".toggle-btn");
const toggleMenu = document.querySelector(".header__mobile");

toggleButton.addEventListener("click", () =>{
  toggleMenu.classList.toggle("visible");
});