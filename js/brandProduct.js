import { brandData } from "./brandData.js";

const params = new URLSearchParams(window.location.search);
const brandId = params.get("id");
const productIndex = Number(params.get("product")) || 0;
const productNameEl = document.getElementById("activeProductName");
const mainImageEl = document.getElementById("activeProductImage");
const gridEl = document.getElementById("productGrid");
const productDescEl = document.getElementById("activeProductDesc");
const brandTabsEl = document.getElementById("brandTabs");
const brand = brandData.find(b => b.id === brandId);

if (!brand) {
  console.error("브랜드 데이터를 찾을 수 없습니다.");
}
let activeIndex = productIndex;

function renderBrandTabs() {
  brandTabsEl.innerHTML = "";

  brandData.forEach(b => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "brand-tab";
    btn.textContent = "#" + b.nameKR;
    if (b.id === brandId) {
      btn.classList.add("active");
    }
    btn.addEventListener("click", () => {
      location.href = `brand-product.html?id=${b.id}&product=0`;
    });

    brandTabsEl.appendChild(btn);
  });
}

function setActiveProduct(index) {
  activeIndex = index;
  const product = brand.products[index];

  productNameEl.textContent = product.name;
  mainImageEl.src = product.image;
  mainImageEl.alt = product.name;
  productDescEl.textContent = product.productDescription?.detail || "";

  updateActiveGrid();
}

function renderGrid() {
  gridEl.innerHTML = "";

  brand.products.forEach((product, index) => {
    const button = document.createElement("button");
    button.className = "product-card";
    button.type = "button";

    button.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
    `;

    button.addEventListener("click", () => {
      setActiveProduct(index);
    });

    gridEl.appendChild(button);
  });
}

function updateActiveGrid() {
  const items = document.querySelectorAll(".product-card");
  items.forEach((item, index) => {
    item.classList.toggle("active", index === activeIndex);
  });
}

const tabswrap = document.querySelector('.brand-tabs-wrap');
tabswrap.addEventListener('click', () =>{
  tabswrap.classList.toggle('open');
})


renderBrandTabs();
renderGrid();
setActiveProduct(activeIndex);
