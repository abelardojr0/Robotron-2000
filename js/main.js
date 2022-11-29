const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

// a operação é a função que vai chamar as outras funções passando os parametros de quem foi clicado
function operacao(event) {
  manipulaDados(event.target.dataset.controle, event.target.parentNode); // aqui passamos o valor que ta dentro do data-controle (+ ou -) e no segundo paramentro passamos quem é o pai daquele elemento que foi clicado
  atualizaDados(event.target.dataset.peca); // já aqui passamos o valor que ta dentro de data-peca (braco, nucleo, perna, etc)
}

controle.forEach((element) => {
  element.addEventListener("click", operacao);
});

function manipulaDados(operador, secao) {
  const peca = secao.querySelector("[data-contador]"); // aqui coletamos a peça refente ao botao que clicamos (procurando o data-controlador apenas do elemento pai clicado)
  const pecaValor = parseInt(peca.value); // aqui vou guardar o valor que tiver n
  if (operador === "+") {
    peca.value = pecaValor + 1; //aqui atualizamos o valor do html value do item clicado
  } else {
    peca.value = pecaValor - 1;
  }
}

function atualizaDados(peca) {
  // aqui chamamos uma funçao que tem como parametro o nome da peca que foi clicado
  estatisticas.forEach((element) => {
    // um loop em todas as estatisticas ( que vai rodar 4 vezes já que temos 4 estatisticas (força, poder, energia e velocidade))

    const estatistica = pecas[peca][element.dataset.estatistica]; //aqui e pego o valor da estatistica dentro do objeto que foi selecionado ai isso vai variar, se eu clicar em braço por exemplo a estatistica forca em braço é 29, enquanto força em nucleos é 0
    const estatisticaValor = parseInt(element.textContent); // já aqui eu to apenas salvando o valor de cada estatistica, para ela poder ser somada.

    element.textContent = estatisticaValor + estatistica; // aqui eu simplesmente determino que o novo valor do texto no html da estatistica vai ser o ela era + o valor que tiver dentro do objeto q foi acionado, por exemplo se eu clico em braço, a estatistica força que era 0 vai ser 0 = 0 + 29, se eu clicar de novo eu braço, força vai ser igual a 29 = 29 + 29 e por ai vai, com todas as estatisticas em simultaneo. ou seja, ao mesmo tempo que força vira 29, poder vira 35, energia -21 e velocidade -5, pois é um loop que ocorre 4 vezes uma para cada estatistica
  });
}

const robos = document.querySelectorAll("[data-opcao]");
const roboEscolhido = document.querySelector("[data-robo]");

function trocarRobo() {
  const cor = this.dataset.opcao;
  roboEscolhido.setAttribute("src", "img/Robotron 2000 - " + cor + ".png");
}

robos.forEach((item) => {
  item.addEventListener("click", trocarRobo);
});
