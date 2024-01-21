"use strict";
const addBtn = document.querySelector("#addBtn");
const dialog = document.querySelector("#productDialog");
const overlay = dialog.querySelector("#overlay");
const productForm = document.querySelector("#productForm");
const imgUrlTxt = productForm.querySelector("#imgUrlTxt");
const titleTxt = productForm.querySelector("#titleTxt");
const priceTxt = productForm.querySelector("#priceTxt");
const descTxt = productForm.querySelector("#descTxt");

async function postRequest(url, data) {
  // Envoie la requette en précisant les options
  const response = await fetch(url, {
    // Peut avoir les valeurs: *GET, POST, PUT, DELETE, etc.
    method: "POST",
    // Peut avoir les valeurs: no-cors, *cors, same-origin
    mode: "cors",
    // Peut avoir les valeurs: *default, no-cache, reload, force-cache, only-if-cached
    cache: "no-cache",
    // Peut avoir les valeurs: include, *same-origin, omit
    credentials: "same-origin",
    headers: {
      // Indique le type de donnée attendu dans le body
      "Content-Type": "application/json",
    },
    // Peut avoir les valeurs: manual, *follow, error
    redirect: "follow",
    // Peut avoirt les valeurs no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    referrerPolicy: "no-referrer",
    // Le type du body doit être le même que celui dans "Content-Type" header
    body: JSON.stringify(data),
  });
  // Transforme la réponse en JSON avant de la retourner
  return response.json();
}

addBtn.addEventListener("click", () => dialog.showModal());
overlay.addEventListener("click", (e) => {
  if (e.target.id !== "overlay") return;
  dialog.close();
});

productForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const product = {
    nom: titleTxt.value,
    prix: priceTxt.value,
    description: descTxt.value,
    imgUrl: imgUrlTxt.value,
    monnaie: { code: "CDF", label: "FC" },
  };

  try {
    const result = await fetch(
      "http://localhost:2024/produits/produit",
      product
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});
