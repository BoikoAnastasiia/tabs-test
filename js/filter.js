const refs = {
  tags: document.querySelector(".filter-header"),
};

refs.tags.addEventListener("click", onTagsClick);
function onTagsClick(event) {
  console.log(event.target);
  const tagBtn = event.target;
  tagBtn.classList.add("btn-secondary__active");
}
