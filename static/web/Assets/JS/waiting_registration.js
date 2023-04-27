const sortByHeader = document.querySelector(".sort-by-header");
const chevronUp = document.querySelector(".chevron-up");
const chevronDown = document.querySelector(".chevron-down");
const sortByDropDown = document.querySelector(".sort-by-dropdown-container");

function toggleSortByContainer() {
  if (sortByDropDown.classList.contains("show-flex")) {
    sortByDropDown.classList.remove("show-flex");
    chevronUp.classList.add("hide");
    chevronDown.classList.remove("hide");
  } else {
    sortByDropDown.classList.add("show-flex");
    chevronUp.classList.remove("hide");
    chevronDown.classList.add("hide");
  }
}

sortByHeader.addEventListener("click", toggleSortByContainer);