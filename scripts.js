const imagens = [
  "bobrossparrot",
  "bobrossparrot",
  "explodyparrot",
  "explodyparrot",
  "fiestaparrot",
  "fiestaparrot",
  "metalparrot",
  "metalparrot",
  "revertitparrot",
  "revertitparrot",
  "tripletsparrot",
  "tripletsparrot",
  "unicornparrot",
  "unicornparrot",
];

function escolherQuantidadeCartas() {
  return Number(
    prompt(
      "Escolha a quantidade de cartas da partida(de 4 a 14,apenas números pares"
    )
  );
}

function numeroImpar(numero) {
  return numero % 2 != 0;
}

let classNamePrimeiraDiv = ""; 
let podeJogar = true;
let numCliques = 0;

function virarCarta() {
  const divClicada = this;

  if (podeJogar == false) {
    return;
  }

  numCliques++
  divClicada.classList.add("virar");

  const className = divClicada.classList[1]; 

  if (classNamePrimeiraDiv != "") {
    if (className == classNamePrimeiraDiv) {
      classNamePrimeiraDiv = "";
      podeJogar = true
      const divsViradas = document.querySelectorAll('.virar')
      if(qtdCartas == divsViradas.length){
        setTimeout(function(){
          alert(`Voce ganhou com ${numCliques} cliques`)
          iniciarJogo()
        }, 2000)
         
      }
    } 
     else {
      podeJogar = false
      setTimeout(function () {
        const primeiraDiv = document.querySelector(`.${classNamePrimeiraDiv}.virar`);
        primeiraDiv.classList.remove("virar");
        divClicada.classList.remove("virar");
        podeJogar = true
        classNamePrimeiraDiv = "";
      }, 500);
    }
  } else {
    classNamePrimeiraDiv = className;
  }
}

function embaralhar(array) {
  const arrayCopia = [...array];
  for (let i = arrayCopia.length - 1; i > 0; i--) {
    const test = Math.floor(Math.random() * (i + 1));
    [arrayCopia[i], arrayCopia[test]] = [arrayCopia[test], arrayCopia[i]];
  }
  return arrayCopia;
}

let qtdCartas = 0;
function iniciarJogo() {
  qtdCartas = escolherQuantidadeCartas();

  while (qtdCartas < 4 || qtdCartas > 14 || numeroImpar(qtdCartas)) {
    qtdCartas = escolherQuantidadeCartas();
  }

  const imagensDoJogo = imagens.slice(0, qtdCartas); 
  const imagensEmbaralhadas = embaralhar(imagensDoJogo); 

  const baralhoDiv = document.querySelector(".baralho");
 
   for (let i = 0; i < qtdCartas; i++) {
    const carta = document.createElement("div");
    carta.classList.add("cartas", imagensEmbaralhadas[i]);

    carta.addEventListener("click", virarCarta);

    const jogo = document.createElement("div");
    jogo.className = "carta-frente";
    const imagem = document.createElement("img");
    imagem.src = "img/front.png";

    const jogoVerso = document.createElement("div");
    jogoVerso.className = "carta-verso";

    const picture = document.createElement("img");
    picture.src = `img/${imagensEmbaralhadas[i]}.gif`;

    jogo.appendChild(imagem);
    carta.appendChild(jogo);
    jogoVerso.appendChild(picture);
    carta.appendChild(jogoVerso);
    baralhoDiv.appendChild(carta);
   }
}

iniciarJogo();


  

