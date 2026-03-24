document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".news-tab");
  const cards = document.querySelectorAll(".news-card");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter.toLowerCase();

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      cards.forEach(card => {
        const categories = (card.dataset.categories || "").toLowerCase();

        if (filter === "all" || categories.includes(filter)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
