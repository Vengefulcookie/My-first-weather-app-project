function startSearch(event) {
  event.preventDefault();
  let searchedInput = document.querySelector("#search-form-input");
  let city = document.querySelector("#main-heading");
  city.innerHTML = searchedInput.value;
}

let searchForm = document.querySelector("#form-input");
searchForm.addEventListener("submit", startSearch);
