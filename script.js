const categoryCards = document.querySelectorAll(".category-card");
categoryCards.forEach((card) => {
  card.addEventListener("click", function () {
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  });
});

fetch("https://dummyjson.com/quotes/3")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("quote").textContent = '"' + data.quote + '"';
    document.getElementById("author").textContent = "- " + data.author;
  })
  .catch((err) => {
    document.getElementById("quote").textContent = "error404";
    console.error(err);
  });
