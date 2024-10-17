const productsContainer = document.querySelector(".products-container");
const products = document.querySelectorAll(".product");
const productsPerPage = 4; 
let currentPage = 1;

function showPage(page) {
  const offset = (page - 1) * -100; 


  productsContainer.style.transform = `translateX(${offset}%)`;


  document.getElementById("prev").disabled = page === 1;
  document.getElementById("next").disabled = page * productsPerPage >= products.length;
}
document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});
document.getElementById("next").addEventListener("click", () => {
  if (currentPage * productsPerPage < products.length) {
    currentPage++;
    showPage(currentPage);
  }
});
showPage(currentPage);
