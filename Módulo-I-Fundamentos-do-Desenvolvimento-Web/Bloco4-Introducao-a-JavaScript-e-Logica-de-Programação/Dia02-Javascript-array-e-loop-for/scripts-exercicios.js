/* let tasksList = ["Tomar café", "Reunião", "Brincar com o cachorro"];
console.log(tasksList.length);
console.log(tasksList);
let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
tasksList.push('Fazer exercícios da Trybe');
console.log(tasksList);
tasksList.unshift('Escovar os dentes');
console.log(tasksList);
tasksList.pop();
tasksList.shift();
console.log(tasksList);
let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask); */

/* Exercício 1
Obtenha o valor "Serviços" do array menu: */

/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu [1] ;
console.log(menuServices); */

/* Exercício 2
Procure o índice do valor "Portfólio" do array menu: */

/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf ('Portfólio');
console.log(indexOfPortfolio); */

/* Exercício 3
Adicione o valor "Contato" no final do array menu: */

/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push ('Contato');
console.log(menu); */
/* ------------------------------------ */

/* JavaScript - Objetos e funções */
/* OBJETOS */

/* let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
  };
  diasDaSemana.1;
  console.log(diasDaSemana['1']); */

/*   No código acima, ocorre um erro por usar notação de ponto ao invés de notação de
  colchetes com uma propriedade nomeada com número. */

/*   let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4 */

/*   let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque */

/*   let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey */

/*   Para fixar
Agora vamos fazer alguns exercícios de fixação para consolidar os conhecimentos
adquiridos no video anterior! 😉
1 - Crie um objeto player contendo as variáveis listadas abaixo.
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 }; */

/* let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
}; */

/* 2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir
no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos
de idade". */

/* console.log ("A jogadora " + player.name + " " + player.lastName + " tem " + player['age'] + " anos de idade." ); */

/* 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo. */

/* player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log (player); */

/* 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato:
"A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes". */

/* console.log ("A jogadora Marta Silva foi eleita a melhor do mundo por " + (Object.keys(player.bestInTheWorld).length) + " vezes."); */

/* 5 - Acesse a chave medals e faça um console.log no seguinte formato:
"A jogadora possui 2 medalhas de ouro e 3 medalhas de prata". */

/* console.log ("A jogadora possui " + player.medals['golden'] + " medalhas de ouro e " + player.medals['silver'] + " medalhas de prata."); */

/* --------------------------------------------- */
/* FOR/IN e FOR/OF */

/* Para fixar */

/* 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem
'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão. */

/* let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for (let index in names) {
  console.log( "Olá " + names[index]);
} */

/* 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as
chaves e valores desse objeto. */

/* let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let index in car) {
  console.log (index, car[index]);
} */

/* ------------------------------------------------ */
/* FUNÇÕES */


