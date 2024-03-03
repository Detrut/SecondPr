document.addEventListener('click', function (e) {
  if (e.target.classList.contains("button--type--increase")) {
    ++e.target.parentElement.querySelector("input").value;
  } else if (e.target.classList.contains("button--type--decrease")) {
    --e.target.parentElement.querySelector("input").value;
  }
});
