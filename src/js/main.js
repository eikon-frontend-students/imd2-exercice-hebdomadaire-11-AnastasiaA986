var toggleBtn = document.querySelector("#toggle-btn");
var count = toggleBtn.querySelector("#button-count");
var icon = toggleBtn.querySelector("#icon-heart");

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("is-active");

  if (toggleBtn.classList.contains("is-active")) {
    count.textContent = "148";
  } else {
    count.textContent = "147";
  }
});
