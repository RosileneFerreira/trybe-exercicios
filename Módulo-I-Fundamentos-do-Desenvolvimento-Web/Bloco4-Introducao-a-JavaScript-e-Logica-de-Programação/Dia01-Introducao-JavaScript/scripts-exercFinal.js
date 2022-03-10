/* 1) Faça cinco programas, um para cada operação aritmética básica.
Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para: */

/* Adição (a + b) */

/* const a = 10;
const b = 5;
console.log (a + b); */

/* Subtração (a - b)] */

/* const a = 5;
const b = 25;
console.log (a - b); */

/* Multiplicação (a * b) */

/* const a = 2;
const b = 6;
console.log (a * b); */

/* Divisão (a / b) */

/* const a = 30;
const b = 3;
console.log (a / b); */

/* Módulo (a % b) */

/* const a = 3;
const b = 2;
console.log (a % b); */

/* 2) Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

/* const a = -80;
const b = 10;
if (a > b) {
    console.log (a);
}
else {
    console.log (b);
} */

/* 3) Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

/* const a = 9;
const b = 15;
const c = 20;
if (a > b && a > c) {
  console.log (a);
}
else if (b > a && b > c) {
  console.log (b);
}
else {
  console.log (c);
} */

/* 4) Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

/* const a = 0;
if (a < 0) {
  console.log ("negative");
}
else if (a > 0) {
  console.log ("positive");
}
else {
  console.log ("zero");
} */

/* 5) Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.
Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
* Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
* Um ângulo será considerado inválido se não tiver um valor positivo. */

/* const a = 30;
const b = 10;
const c = 120;
let soma = a + b + c;
if (a <= 0 || b <= 0 || c <= 0) {
  console.log ("ângulo inválido");
}
else if (soma === 180) {
  console.log ("true");
}
else {
  console.log ("false");
} */

/* 6) Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas
quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as
letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)

MOVIMENTO DAS PEÇAS:
PEÃO: para frente, esquerda, direita;
BISPO: diagonal;
TORRE: linha reta horizontalmente e verticalmente;
CAVALO: duas casas horizontalmente ou verticalmente e mais uma casa em ângulo reto;
RAINHA: em linha reta qualquer direção;
REI: uma casa em qualquer direção;
*/

/* let pecaXadrez = "RAINHA";
pecaXadrez = pecaXadrez.toLowerCase ();

switch (pecaXadrez) {
  case "peão":
    console.log ("Peão: para frente, esquerda, direita");
    break;

  case "bispo":
    console.log ("Bispo: diagonal");
    break;

  case "torre":
  console.log ("Torre: linha reta horizontalmente e verticalmente");
    break;

  case "cavalo":
  console.log ("Cavalo: duas casas horizontalmente ou verticalmente e mais uma casa em ângulo reto");
  break;

  case "rainha":
  console.log ("Rainha: em linha reta qualquer direção");
  break;

  case "rei":
  console.log ("Rei: uma casa em qualquer direção");
  break;

  default:
    console.log ("Não se aplica.");
} */

/* 7) Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos
de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor
que 0 ou maior que 100. */

/* let porcentagem = 0;

if (porcentagem < 0 || porcentagem > 100) {
  console.log ("Nota inválida.");
}
else if (porcentagem >= 90) {
  console.log ("A");
}
else if (porcentagem >= 80) {
  console.log ("B");
}
else if (porcentagem >= 70) {
  console.log ("C");
}
else if (porcentagem >= 60) {
  console.log ("D");
}
else if (porcentagem >= 50) {
  console.log ("E");
}
else if (porcentagem < 50) {
  console.log ("F");
}
else {
  console.log ("Nota inválida.");
} */

/* 8) Escreva um programa que defina três números em constantes e retorne true se pelo menos
uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if. */

/* const a = 0;
const b = 1;
const c = 5;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  console.log ("True");
}
else {
  console.log ("False");
} */

/* 9) Escreva um programa que defina três números em constantes e retorne true se pelo menos
uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if. */

/* const a = 10;
const b = 100;
const c = 1000;

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
  console.log ("True");
}
else {
  console.log ("False");
} */

/* 10) Escreva um programa que se inicie com dois valores em duas constantes diferentes:
o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro
(valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
* Atente que, sobre o custo do produto, incide um imposto de 20%.
* Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores
de entrada seja menor que zero.
* O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo,
sendo que o imposto de 20% também faz parte do valor de custo.
* valorCustoTotal = valorCusto + impostoSobreOCusto
* lucro = valorVenda - valorCustoTotal (lucro de um produto) */

/* let venda = 4;
let custo = 10;
let imposto = 1.2;
let custoTotal = custo * 1.2;
let lucro = venda - custoTotal;
let lucroTotal = lucro * 1000;

if (venda < 0 || custo < 0) {
  console.log ("Valor inválido.");
}
else {
  console.log ("A empresa terá o lucro de " + lucroTotal + ".");
} */

/* 11) Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário
bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser
recebido.
* A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de
impostos, use as seguintes referências:
- INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
- IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
* O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%.
O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
* Para descobrir o salário-base, subtraia do salário bruto a alíquota do
INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
* Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65,
sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
- R$ 2.670,00: salário com INSS já deduzido;
- 7.5%: alíquota de imposto de renda;
- R$ 142,80 parcela a se deduzir do imposto.
* Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
* O último cálculo para conseguir o salário líquido é
R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos? */

/* let salarioBruto = 2826.65;
let inss = 0;
let salarioBase = 0;
let ir = 0;
let salarioLiquido = 0;

if (salarioBruto < 1556.94) {
  inss = (salarioBruto * 0.08);
  salarioBase = (salarioBruto - inss);
  console.log ("O INSS é " + inss + " e o salário base é " + salarioBase + ".");
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  inss = (salarioBruto * 0.09) ;
  salarioBase = (salarioBruto - inss);
  console.log ("O INSS é " + inss + " e o salário base é " + salarioBase + ".");
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  inss = (salarioBruto * 0.11);
  salarioBase = (salarioBruto - inss);
  console.log ("O INSS é " + inss + " e o salário base é " + salarioBase + ".");
}
else if (salarioBruto > 5189.82) {
  inss === 570.88;
  salarioBase = (salarioBruto - inss);
  console.log ("O INSS é " + inss + " e o salário base é " + salarioBase + ".");
}
else {
  console.log ("Valores inválidos.")
}

if (salarioBase < 1903.98) {
  ir = 0;
  salarioLiquido = (salarioBase - ir);
  console.log ("O IR é " + ir + " e o salário líquido é " + salarioLiquido + ".");
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  ir = ((salarioBase * 0.075) - 142.80);
  salarioLiquido = (salarioBase - ir);
  console.log ("O IR é " + ir + " e o salário líquido é " + salarioLiquido + ".");
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  ir = ((salarioBase * 0.15) - 354.80);
  salarioLiquido = (salarioBase - ir);
  console.log ("O IR é " + ir + " e o salário líquido é " + salarioLiquido + ".");
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  ir = ((salarioBase * 0.225) - 636.13);
  salarioLiquido = (salarioBase - ir);
  console.log ("O IR é " + ir + " e o salário líquido é " + salarioLiquido + ".");
}
else if (salarioBase > 4664.68) {
  ir = ((salarioBase * 0.275) - 869.36);
  salarioLiquido = (salarioBase - ir);
  console.log ("O IR é " + ir + " e o salário líquido é " + salarioLiquido + ".");
}
else {
  console.log ("Valores inválidos.")
} */

/* arredondar números
let soma = 124.458744 + 15.145896
let resultado = parseFloat (soma.toFixed (2));
console.log (resultado); */