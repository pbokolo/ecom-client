"use strict";
const addBtn = document.querySelector("#addBtn");
const dialog = document.querySelector("#productDialog");
const overlay = dialog.querySelector("#overlay");

addBtn.addEventListener("click", () => dialog.showModal());
overlay.addEventListener("click", (e) => {
  if (e.target.id !== "overlay") return;
  dialog.close();
});
