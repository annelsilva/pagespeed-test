// JavaScript Não Minificado que bloqueia a renderização e faz processamento síncrono
console.log("Iniciando carregamento dos scripts...");

function simularCargaSincrona() {
  const inicio = Date.now();
  // Loop intencional para consumir CPU no momento da renderização
  while (Date.now() - inicio < 300) {
    // Bloqueia a thread principal por 300ms
  }
}

simularCargaSincrona();

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM completamente carregado e analisado.");
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.opacity = "1";
    console.log(`Card ${index + 1} inicializado.`);
  });
});