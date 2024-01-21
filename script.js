"use strict";
const addBtn = document.querySelector("#addBtn");
const dialog = document.querySelector("#productDialog");
const overlay = dialog.querySelector("#overlay");
const productForm = document.querySelector("#productForm");
const imgUrlTxt = productForm.querySelector("#imgUrlTxt");
const titleTxt = productForm.querySelector("#titleTxt");
const priceTxt = productForm.querySelector("#priceTxt");
const descTxt = productForm.querySelector("#descTxt");

addBtn.addEventListener("click", () => dialog.showModal());
overlay.addEventListener("click", (e) => {
  if (e.target.id !== "overlay") return;
  dialog.close();
});

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = {
    nom: titleTxt.value,
    prix: priceTxt.value,
    description: descTxt.value,
    imgUrl: imgUrlTxt.value,
    monnaie: { code: "CDF", label: "FC" },
  };

  console.log(product);
});
