/* function sum (number1, number2) {
    return number1 + number2;
  }
  
  const sumVariable = sum;
  
  console.log(sumVariable); */

/* Passar funções como argumento para outras funções: */
/*   const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello); */

/* Retornar uma função de outra função: */

/*   const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5)); */

/* Estruturando uma HOF */
/*   const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log); */

/*   const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(3, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  }); */

/*   Para fixar
Vamos praticar com os seguintes exercícios:
1 - Crie uma função que retorne a string 'Acordando!!' ;
2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no 
console o resultado da execução das funções que você criou nos exemplos anteriores. */

/* const acordar = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (frase) => frase();
console.log(doingThings(acordar));
console.log(doingThings(cafe));
console.log(doingThings(dormir)); */


/*   **********************************************************
  Dia05-JavaScript-ES6-spread-operator-parâmetro-rest-destructuring-e-mais */

/* Spread Operator */
/*   const numbers = [1, 2, 3];

  const newArray = [...numbers, 4, 5, 6];
  console.log(newArray); [ 1, 2, 3, 4, 5, 6 ]
  console.log(numbers); [ 1, 2, 3 ] */

/*   const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); */

/* const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); */

/* const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers)); */

/* const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, ...about };
  console.log(customer); */

/*   Para fixar
  Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens,
  faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas
  usando o spread. */

/* const specialFruit = ["morango", "laranja", "maça"];
const additionalItens = ["banana", "mamão"];

const fruitSalad = (fruit, additional) => {
    return [...specialFruit, ...additionalItens];
}

console.log(fruitSalad(specialFruit, additionalItens)); */

/* *************************************
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

const mult = numbers.find(findDivisibleBy3And5);

console.log(mult);

console.log(findDivisibleBy3And5(15)) */

/* const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.lenght = 5;

const cinco = names.find(findNameWithFiveLetters);

console.log(cinco);

console.log(findNameWithFiveLetters('Joana')); */

/* const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  const escolhida = musicas.find((musica) => musica.id === id);
  return escolhida;
}

console.log(findMusic('31031685')) */

/* const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((nome) => nome === name);

console.log(hasName(names, 'Ana')) */

/* const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((person) => person.age >= minimumAge);

console.log(verifyAges(people, 18)); */

/* const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age - b.age );

console.log(people); */