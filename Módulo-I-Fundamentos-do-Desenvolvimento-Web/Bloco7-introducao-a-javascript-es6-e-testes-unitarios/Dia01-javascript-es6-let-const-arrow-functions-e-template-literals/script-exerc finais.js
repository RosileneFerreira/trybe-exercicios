/* PARTE I */
/* Modifique a estrutura da função para que ela seja uma arrow function.
Modifique as concatenações para template literals. */

/* function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true); */

/* const testingScope = (escopo) => {
  if (escopo === true) {
    const ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    const elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(`${elseScope}`);
    }
};
testingScope(false); */
/* -------------------------------------------------------------------- */

/* Faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>);
retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() .
Spoiler: É possível realizar uma função que ordene qualquer array de números. */

// Seu código aqui.
/* console.log(oddsAndEvens); // será necessário alterar essa linha 😉 */

/* Meu código: */
/* function ordenar (a, b) {
  return a - b;
}
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(ordenar);
for(let i = 0; i < oddsAndEvens.length; i += 1) {
  console.log(`Os números ${oddsAndEvens[i]} se encontram ordenados de forma crescente!`);
  } */

/* GABARITO */

/* (1) */
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}
/* (2) */
const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);

/* Comentário (1): const sortArrayBonus = array => : a função sortArrayBonus possui o parâmetro
"array". Declaro outra variável (sortOddsAndEvens) para armazenar a ordenação do array usando
array.sort: array.sort((a, b) => a - b). a e b são os elementos a serem comparados. Se o retorno
for "1" o primero elemento é maior, se for "-1" o segundo elemento é maior. Isso é um 
"entendimento" do Javascript por trás do código. */
/* Comentário (2): declaro outra variável (sortedArrayBonus) para chamar a função sortArrayBonus com 
o parâmetro que é o array oddsAndEvens. */


/* PARTE II */
/* Crie uma função que receba um número e retorne seu fatorial. */

/* function fatorial (numero) {
  let resultado = numero;
  for(let i = 1; i < numero; i += 1) {
    resultado = numero * [i];
  }
  return resultado;
}
console.log(fatorial(4)); */

/* Crie uma função que receba uma frase e retorne qual a maior palavra. */
/* Ex.: longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') */ // retorna 'aconteceu'

/* function maiorPalavra () {
  let palavras = String.split(' ');
  let longestWord = '';
  for (word of palavras) {
    if(word.trim().length > longestWord.length) {
      longestWord = word.trim();
    } 
  }
  return longestWord;
}
console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu')); */

/* Crie uma página que contenha:
Um botão ao qual será associado um event listener ;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada. */

/* const click = document.getElementsByTagName('button');

const clickCount */