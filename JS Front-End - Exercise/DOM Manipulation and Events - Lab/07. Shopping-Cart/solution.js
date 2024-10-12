function solve() {
  const productElement = document.querySelector(".product");
  let textAreaElement = document.querySelector("textarea");
  let addButtonElements = document.getElementsByClassName("add-product");
  let checkedButton = document.querySelector(".checkout");

  let totalPrice = 0;
  const uniqueProducts = [];
  for (button of addButtonElements) {
    button.addEventListener("click", (e) => {
      let productElements = e.target.parentElement.parentElement;
      let productName = productElements.querySelector(".product-title");
      let productPrice = productElements.querySelector(".product-line-price");

      textAreaElement.value += `Added ${productName.textContent} for ${parseFloat(
        productPrice.textContent
      ).toFixed(2)} to the cart.\n`;

      totalPrice += parseFloat(productPrice.textContent);
      if (!uniqueProducts.includes(productName.textContent)) {
        uniqueProducts.push(productName.textContent);
      }
    });
  }

   checkedButton.addEventListener('click', (e) => {
   textAreaElement.value += `You bought ${uniqueProducts.join(", ")} for ${totalPrice.toFixed(2)}.`;
   for (button of addButtonElements) {
      button.disabled = true;
   }
   
   checkedButton.disabled = true;
  })
}

