// Edite este arquivo para publicar suas redações.
// Substitua os títulos e os parágrafos de cada item pelo conteúdo original.
const essays = Array.from({ length: 15 }, (_, index) => ({
  number: index + 1,
  title: `Redação ${index + 1}`,
  category: "PORTFÓLIO PESSOAL",
  paragraphs: [
    "Este espaço está reservado para o texto integral desta redação.",
    "Para publicar, substitua este conteúdo pelos seus parágrafos. Você pode adicionar quantos parágrafos forem necessários."
  ]
}));

const selector = document.getElementById("essaySelector");
const numberLabel = document.getElementById("essayNumber");
const categoryLabel = document.getElementById("essayCategory");
const titleLabel = document.getElementById("essayTitle");
const content = document.getElementById("essayContent");
const footerLabel = document.getElementById("essayFooter");

function selectEssay(index) {
  const essay = essays[index];
  document.querySelectorAll(".essay-tab").forEach((button, i) => {
    const active = i === index;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  numberLabel.textContent = `REDAÇÃO ${String(essay.number).padStart(2, "0")}`;
  categoryLabel.textContent = essay.category;
  titleLabel.textContent = essay.title;
  content.replaceChildren();
  essay.paragraphs.forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    content.appendChild(p);
  });
  footerLabel.textContent = `${String(essay.number).padStart(2, "0")} — 15`;
}

essays.forEach((essay, index) => {
  const button = document.createElement("button");
  button.className = "essay-tab";
  button.type = "button";
  button.setAttribute("aria-pressed", "false");
  button.innerHTML = `<span class="number">${String(essay.number).padStart(2, "0")}</span><span class="tab-name">Redação ${essay.number}</span>`;
  button.addEventListener("click", () => selectEssay(index));
  selector.appendChild(button);
});

selectEssay(0);
document.getElementById("year").textContent = new Date().getFullYear();
