/* const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    students.forEach((student, index) => {
      if (student.grade >= 60) {
        students[index].approved = 'Aprovado';
      } else {
        students[index].approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  console.log(students); */
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]
/* ************************************************************************** */

/*   const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5); */
// 50
/* ************************************************************************** */

/* const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
}); */

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

/* const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
}); */

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]

/* A arrow function passada para o forEach possui element , index e array como parâmetros, onde:
element - Valor do elemento do array;
index - Índice em cada iteração ou posição do elemento no array, começando do 0;
array - Array original que está sendo percorrido. */

/* ************************************************************************** */

/* const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2); */
/* ************************************************************************** */

/* const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); */ // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
/* ************************************************************************** */

/* Para fixar
1 - Use o método forEach chamando a callback showEmailList para apresentar os emails */

/* const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  // Adicione seu código aqui

  emailListInData.forEach(showEmailList); */

/* ************************************************************************** */

/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30 */

/* ************************************************************************** */

/* Para fixar
1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 ,
caso ele exista: */

/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;


const divisivel = numbers.find(findDivisibleBy3And5);

console.log(divisivel);

console.log(findDivisibleBy3And5(60))

/* *** Ou: */
/* 
const findDivisibleBy3And5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5); */


/* ************************************************************************** */

/* 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista: */

/* const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
    return names.find((name) => name.length === 5);
};

console.log(findNameWithFiveLetters()); */

/* ************************************************************************** */

/* 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista: */

/* const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    // Adicione seu código aqui
    return musicas.find((musica) => musica.id === id);
  }
  
  console.log(findMusic('31031685')); */

  /* ************************************************************************** */

/*   const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

  const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);
  
  console.log(verifyFirstLetter('J', listNames)); // true
  console.log(verifyFirstLetter('x', listNames)); // false */

  /* ************************************************************************** */

/*   const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades)); */

  /* ************************************************************************** */

/*   Para fixar
  1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver
  contido e caso contrário, retorne false , use some ; */

/*   const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((currentName) => currentName === name);
}

console.log(hasName(names, 'Ana')); */

  /* ************************************************************************** */

/* 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas 
tiverem a idade maior ou igual a mínima e caso contrário false , use every ; */

/* const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 18 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui
    return arr.every((currentAge) => currentAge.age >= minimumAge);
  }
  
  console.log(verifyAges(people, 18)); */

/* ************************************************************************** */

/* const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

Funcionou bem com um array de strings, não é mesmo? Por tanto, caso queira ordenar de forma
alfabética, basta chamar sort , sem parâmetros algum na função. */

/* ************************************************************************** */
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9] */

/* Isso ocorre, pois ela distribui sempre por ordem alfabética . No caso, quando há elementos 
como números, a sort coloca de acordo com a ordem alfabética dos códigos desse elemento na
 tabela de caracteres unicode!

Agora, se deseja ordenar de forma numérica crescente, é necessário passar a função
a seguir: */

/* const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points);  */// [1, 5, 10, 25, 40, 100]

/* Se a operação de elemento1 com elemento2 der resultado negativo, elemento1 vai para trás.
 Caso contrário, vai para frente, para, de forma decrescente, só inverter
 elemento1 - elemento2 para elemento2 - elemento1 . */

/*  const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); */ // [ 100, 40, 25, 10, 5, 1 ]

/* ************************************************************************** */

/* Para fixar
1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente . */

/* const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ]; */
  
  // Adicione se código aqui
/*   people.sort((a, b) => {
      if (a.age > b.age) {
          return 1;
      }
      if (a.age < b.age) {
          return -1;
      }
      return 0;
  })

  console.log(people); */

  /* **RESPOSTA GABARITO: */

/*   people.sort((personA, personB) => personA.age - personB.age);
  console.log(people); */

 /*  ** Se quiser ordenar por ordem alfabética: */

/*   people.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
})

  console.log(people); */

/* ************************************************************************** */

/*   2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas
   em ordem decrescente . */

/*    const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

  people.sort((personA, personB) => personB.age - personA.age);
  console.log(people); */

/* ************************************************************************** */

