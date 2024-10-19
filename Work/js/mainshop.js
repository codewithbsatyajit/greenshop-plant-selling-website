const rangeSlider = document.querySelector(".range-slider");
const priceDisplay = document.querySelector(".price-range span");

if (rangeSlider && priceDisplay) {
  rangeSlider.addEventListener("input", () => {
    priceDisplay.textContent = `$${rangeSlider.value} – $1230`;
  });
}
const productsContainer = document.querySelector(".products");
const originalProducts = Array.from(
  productsContainer.querySelectorAll(".product")
);

document
  .querySelector('select[name="select"]')
  .addEventListener("change", function () {
    const sortBy = this.value;
    const products = Array.from(productsContainer.querySelectorAll(".product"));

    if (sortBy === "Default") {
      productsContainer.innerHTML = "";
      originalProducts.forEach((product) =>
        productsContainer.appendChild(product)
      );
    } else {
      products.sort((a, b) => {
        const priceA = parseFloat(
          a.querySelector(".price").textContent.replace("$", "")
        );
        const priceB = parseFloat(
          b.querySelector(".price").textContent.replace("$", "")
        );

        return sortBy === "Low" ? priceA - priceB : priceB - priceA;
      });

      productsContainer.innerHTML = "";
      products.forEach((product) => productsContainer.appendChild(product));
    }
  });
