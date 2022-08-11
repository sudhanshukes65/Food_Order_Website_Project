const navBtnContainer = document.querySelector(".nav-btn-container");
const searchBtn = document.querySelector(".search-btn");
const cartBtn = document.querySelector("cart-btn");

searchBtn.addEventListener("click", () => {
    searchBox.classList.add("active");
    navBtnContainer.classList.add("active");
});

cartBtn.addEventListener("click", () => {
    searchBox.classList.remove("active");
    navBtnContainer.classList.remove("active");
});
