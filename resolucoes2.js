function atividade1(){
    let A = Number(prompt("Digite A:"));
let B = Number(prompt("Digite B:"));
let C = Number(prompt("Digite C:"));

if (A + B < C) {
    alert("A + B é menor que C");
} else {
    alert("A + B NÃO é menor que C");
}
}

function atividade2(){
  let num = Number(prompt("Digite um número:"));

if (num % 2 === 0) {
    alert("É par");
} else {
    alert("É ímpar");
}
}

function atividade3(){
    let A = Number(prompt("Digite A:"));
let B = Number(prompt("Digite B:"));
let C;

if (A === B) {
    C = A + B;
} else {
    C = A * B;
}

alert("Resultado = " + C);
}

function atividade4(){
let n = Number(prompt("Digite um número:"));
let resultado;

if (n > 0) {
    resultado = n * 2;
} else {
    resultado = n * 3;
}

alert("Resultado: " + resultado);
}

function atividade5(){
let n = Number(prompt("Digite um número:"));
let resultado;

if (n % 2 === 0) {
    resultado = n + 5;
} else {
    resultado = n + 8;
}

alert("Resultado: " + resultado);
}

function atividade6(){
let altura = Number(prompt("Altura:"));
let sexo = prompt("Sexo (M/F):").toUpperCase();
let pesoIdeal;

if (sexo === "M") {
    pesoIdeal = (72.7 * altura) - 58;
} else {
    pesoIdeal = (62.1 * altura) - 44.7;
}

alert("Peso ideal: " + pesoIdeal.toFixed(2));
}

function atividade7(){
let peso = Number(prompt("Peso:"));
let altura = Number(prompt("Altura:"));
let imc = peso / (altura * altura);
let condicao;

if (imc < 18.5) {
    condicao = "Abaixo do peso";
} else if (imc < 25) {
    condicao = "Peso normal";
} else if (imc < 30) {
    condicao = "Acima do peso";
} else {
    condicao = "Obeso";
}

alert("IMC = " + imc.toFixed(2) + " → " + condicao);
}
