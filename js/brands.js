import { brandData } from "./brandData.js";

const brands = brandData;

const tabs = document.querySelectorAll(".tab");
const grid = document.getElementById("brandGrid");

function render(category) {
  grid.innerHTML = "";

  const filtered = brands.filter(b => b.categories.includes(category));

  filtered.forEach(brand => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url(${brand.visualImage})`;

    card.addEventListener("click", () => {
      window.location.href = `brand.html?id=${brand.id}`;
    });

    grid.appendChild(card);
  });
}

// 탭 클릭
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    render(tab.dataset.category);
  });
});

// 초기 렌더
render("sparkling");