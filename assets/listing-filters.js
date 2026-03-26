document.addEventListener("DOMContentLoaded", function () {
  const filterableListings = document.querySelectorAll('.listing-block[data-filterable="true"]');

  filterableListings.forEach((listing) => {
    const buttons = listing.querySelectorAll(".listing-toolbar .pill-filter");
    const cards = listing.querySelectorAll(".listing-grid .listing-card");

    if (!buttons.length || !cards.length) return;

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const filter = (this.dataset.filter || "all").toLowerCase();

        buttons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        cards.forEach((card) => {
          const categories = (card.dataset.categories || "")
            .split(",")
            .map((x) => x.trim().toLowerCase())
            .filter(Boolean);

          const show = filter === "all" || categories.includes(filter);
          card.style.display = show ? "" : "none";
        });
      });
    });
  });
});
