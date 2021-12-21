const accordions = document.querySelectorAll(".aside__accord");
const filterMobile = document.querySelector(".machinery__goods-counter-mobile");
const aside = document.querySelector(".aside");

accordions.forEach((accordionItem) => {
  accordionItem.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

filterMobile.addEventListener("click", () => {
  aside.classList.add("aside__mobile");
});
