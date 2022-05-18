/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando
uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar
cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome
completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato
nome_da_pessoa@trybe.com . */

/* const newEmployees = (pessoaContratada) => {
  const employees = {
    id1: pessoaContratada("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: pessoaContratada("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: pessoaContratada("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const pessoaContratada = (nome) => {
  const email = nome.toLowerCase().split(" ").join("_");
  const pessoa = {
    nomeCompleto: nome,
    email: `${email}@trybe.com`,
  };
  return pessoa;
};

console.log(newEmployees(pessoaContratada)); */

/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número
aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o
número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string
(Ex: "Tente novamente" ou "Parabéns você ganhou"). */

/* const checaAposta = (numeroApostado, numeroSorteado) => numeroApostado === numeroSorteado;

const resultadoSorteio = (numeroApostado, checaAposta) => {
  const numeroSorteado = Math.floor(Math.random() * 5) + 1;
  console.log(numeroSorteado);
  return checaAposta(numeroApostado, numeroSorteado) ? `Parabéns você ganhou` 
  : `Tente novamente`;
};

console.log(resultadoSorteio(5, checaAposta)); */

/* 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas
 (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa
  estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a
  contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar
  o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos,
e quando não houver resposta ("N.A") não altera-se a contagem. */

/* const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaRespostas = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const contaPontos = (rightAnswers, studentAnswers, comparaRespostas) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const pontos = comparaRespostas(rightAnswers[index], studentAnswers[index]);
    contador += pontos;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(contaPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaRespostas)); */

/* Bônus
Parte I - Game Actions Simulator
Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo.
Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados
da rodada.
Para os próximos exercícios copie o código abaixo. */

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

/* const battleMembers = { mage, warrior, dragon }; */


/* 1 - Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo
strength (dano máximo). */

/* Minha resposta: */
/* const damageDragon = () => {
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: Math.floor(Math.random() * 50) + 15,
  }
  return dragon;
};

console.log(damageDragon()); */

/* GABARITO: obs.: não funcionou.
Funcionou depois que tirei a constante maxDmg para fora da função*/

/* const maxDmg = dragon.strength;
const dragonAttack = (dragon) => {
  const minDmg = 15;
  const dragonDmg = Math.floor((Math.random() * (maxDmg - minDmg + 1) + minDmg));
  return dragonDmg;
};

console.log(dragonAttack()); */

/* ************************************************************* */

/* 2 - Crie uma função que retorna o dano causado pelo warrior.
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor 
de strength * weaponDmg (dano máximo). */

/* const warriorAttack = (warrior) => {
  const minDmg = 30;
  const weaponDmg = 2;
  const maxDmg = minDmg * weaponDmg;
  const warriorDmg = Math.floor((Math.random() * (maxDmg - minDmg + 1) + minDmg));
  return warriorDmg;
};

console.log(warriorAttack()); */

/* GABARITO: obs.: a resposta original não funcionou.
Funcionou depois que tirei as constantes minDmg e maxDmg para fora da função */

/* const minDmg = warrior.strength;
const maxDmg = minDmg * warrior.weaponDmg;
const warriorAttack = (warrior) => {
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
  return warriorDamage;
};

console.log(warriorAttack()); */

/* ************************************************************* */

/* 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano
e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo)
e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disto a função deve ter uma condicional,
caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem
(Ex: "Não possui mana suficiente") e a mana gasta é 0. */

/* const gastoMago = (mage) => {
  const minDmg = 45;
  const maxDmg = 45 * 2;
  const manaGasta = 14;

  return {
    damage: Math.floor((Math.random() * (maxDmg - minDmg + 1) + minDmg)),
    mana: manaGasta,
    if (mana < 15) {
      return { damage: "Não possui mana suficiente",};
    }
  }
}

console.log(gastoMago());
 */

/* const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const mageMana = mage.mana;
const minDmg = mage.intelligence;
const maxDmg = minDmg * 2;

const mageAttack = (mage) => {
  if (mana < 15) {
    const turnStats = {
      mana: 0,
      damage: 'Not enough mana...',
    };
  }
    const damage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
    const manaSpent = 15;

    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};

console.log(mageAttack()); */

// GABARITO: obs.: a resposta original não funcionou.
// Funcionou depois que tirei as constantes mageMana e minDmg para fora da função

/* const mageMana = mage.mana;
const minDmg = mage.intelligence;
const mageAttack = (mage) => {
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};

console.log(mageAttack()); */