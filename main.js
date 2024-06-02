const KEY_CODES = {
  SPACE: "Space",
  ENTER: "Enter",
};

function selecionaElemento(seletor) {
  return document.querySelector(seletor);
}

function tocaSom(elemento) {
  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

listaDeTeclas.forEach((tecla) => {
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  const elementoAudio = selecionaElemento(idAudio);

  tecla.addEventListener("click", () => tocaSom(elementoAudio));

  tecla.addEventListener("keydown", (evento) => {
    if (evento.code === KEY_CODES.SPACE || evento.code === KEY_CODES.ENTER) {
      tecla.classList.add("ativa");
    }
  });

  tecla.addEventListener("keyup", () => tecla.classList.remove("ativa"));
});
