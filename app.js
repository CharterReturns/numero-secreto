let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
        {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela(`h1`, `Acertou!`);
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela(`p`, `O número secreto é menor`);
        } else {
            exibirTextoNaTela(`p`, `O número secreto é maior`);
        }
        tentativas++;
        limparCampo()
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
if(quantidadeDeElementosNaLista == 3) {
    listaDeNumerosSorteados = [];
}

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    documento.getElementById('reiniciar').setAttribute('disabled',true);
}

/*
function calcularIMC(altura, massa){
return massa/(altura*altura);
}
imc = calcularIMC(1.7, 70)
console.log(imc);
*/

/*
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 3;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);
*/

/*
function calcularFatorial(n) {
    if (n < 0) {
        console.log('Impossível')
    }
    if (n === 0 || n === 1) {
        return 1; // O fatorial de 0 e 1 é 1
    }
    
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
        fatorial *= i;
    }
    
    return fatorial;
}

let numero = 6;
let fatorial = calcularFatorial(numero);
console.log(fatorial);
*/

/*
function converterMoeda(dolar){
    return dolar * 4.8;
}

reais = converterMoeda(10);
console.log(reais);
*/

/*
function calcularRetangulo(base, altura){
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    return `Área: ${area}, Perímetro: ${perimetro}`;
}

console.log(calcularRetangulo(10, 20))
*/

/*
function calcularCirculo(raio){
    let pi = 3.14;
    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio;

    return `Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`;
}

const raio = 5;
console.log(calcularCirculo(raio));
*/

/*
function tabuada(numero){
    return `
    1 X ${1 * numero}\n
    2 X ${2 * numero}\n
    3 X ${3 * numero}\n
    4 X ${4 * numero}\n
    5 X ${5 * numero}\n
    6 X ${6 * numero}\n
    7 X ${7 * numero}\n
    8 X ${8 * numero}\n
    9 X ${9 * numero}\n
    10 X ${10 * numero}
    `
}

let numeroTabuada = 2;
console.log(tabuada(numeroTabuada));
*/

/*
let listaneGenerica = [];
*/

/*
let linguagensDeProgramacao = ['JavaScript','C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang'];
console.log(linguagensDeProgramacao [3]);
*/