const navItems = document.querySelectorAll(".navigation ul li");
const sections = document.querySelectorAll("section");

// Variante A: per Klick wird die active class gesetzt
/* function activeLink() {
  navItems.forEach((item) => {
    item.classList.remove("active");
  });

  this.classList.add("active");
}

navItems.forEach((item) => {
  item.addEventListener("click", activeLink);
}); */

// Varinate B: anhand der Scroll-Position wird die active class gesetzt
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    /* scrollY = aktuelle Scroll-Position des window-Objektes */
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");

    if (item.classList.contains(current)) {
      item.classList.add("active");
    }
  });
});
