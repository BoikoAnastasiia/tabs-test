const showAllTab = document.querySelector(".all-filter");
const sitesTab = document.querySelector(".web-filter");
const appsTab = document.querySelector(".app-flilter");
const designTab = document.querySelector(".design-filter");
const marketingTab = document.querySelector(".marketing-filter");

const allFilteredPortfolioCard = document.querySelectorAll(".portfolio-card");

// // Turns node list into an array
const allFilteredListArray = Array.from(allFilteredPortfolioCard);
console.log(allFilteredListArray);

showAllTab.addEventListener("click", showAll);
function showAll() {
  allFilteredListArray.forEach((li) => {
    li.classList.remove("remove");
    li.classList.add("show");
  });
}

sitesTab.addEventListener("click", showSites);
function showSites() {
  allFilteredListArray.forEach((li) => {
    li.classList.remove("remove");

    if (!li.dataset.web) {
      li.classList.add("remove");
    }
  });
}

appsTab.addEventListener("click", showApps);
function showApps() {
  allFilteredListArray.forEach((li) => {
    li.classList.remove("remove");

    if (!li.dataset.app) {
      li.classList.add("remove");
    }
  });
}

designTab.addEventListener("click", showDesign);
function showDesign() {
  allFilteredListArray.forEach((li) => {
    li.classList.remove("remove");

    if (!li.dataset.design) {
      li.classList.add("remove");
    }
  });
}

marketingTab.addEventListener("click", showMarketing);
function showMarketing() {
  allFilteredListArray.forEach((li) => {
    li.classList.remove("remove");

    if (!li.dataset.marketing) {
      li.classList.add("remove");
    }
  });
}
// // https://codepen.io/georgemejia/pen/rNNQEbz
