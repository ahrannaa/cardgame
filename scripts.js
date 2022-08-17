function escolherQuantidadeCartas() {
  return Number(
    prompt(
      "Escolha a quantidade de cartas da partida(de 4 a 14,apenas números pares")
  );
}

function numeroImpar(numero) {
  return numero % 2 != 0;
}

function iniciarJogo() {
  let qtdCartas = escolherQuantidadeCartas();
  
  while (qtdCartas < 4 || qtdCartas > 14 || numeroImpar(qtdCartas)) {
   qtdCartas = escolherQuantidadeCartas();
  }
  
  const baralhoDiv = document.querySelector(".baralho");

  
  for(let i = 0; qtdCartas > i; i++) {
    const carta = document.createElement("div");
    carta.className = "cartas";
    const imagem = document.createElement("img");
    imagem.src = "img/front.png"
    carta.appendChild(imagem);
    baralhoDiv.appendChild(carta);
  }
}  

iniciarJogo();
