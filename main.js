const swapThemeButton = document.querySelector(".swap-theme-button");

swapThemeButton.addEventListener('click', ()=>{
  document.documentElement.classList.toggle("dark");
})