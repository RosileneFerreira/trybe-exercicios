/* PARTE II */

/* const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  }; */
  
/*   Complete a função customerInfo() para que seu retorno seja similar a
  "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416,
  R. Rua das Flores, Nº: 389, AP: 701".
  Note que o parâmetro da função já está sendo passado na chamada da função. */

/*   const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Olá ${delivery.deliveryPerson}, entrega para: ${order.name},
    Telefone: ${order.phoneNumber}, ${address.street}, Nº: ${address.number},
    AP: ${address.apartment}`);
  }
  
  customerInfo(order); */
  
/*   Complete a função orderModifier() para que seu retorno seja similar a
  "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é
  R$ 50,00."
  Modifique o nome da pessoa compradora.
  Modifique o valor total da compra para R$ 50,00. */

/*   const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const nome = Object.values(order);
    order.name = 'Luiz Silva';
    const preço = Object.values(order);
    coke.price = 50;

  }
  
  orderModifier(order); */

/*   *******************************************************************
  PARTE III */

/*   const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  }; */


/* Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três
parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o
valor dela.
Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como
parâmetro.
Crie uma função para mostrar o tamanho de um objeto.
Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como
parâmetro.
Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do
Object.assign . Cada chave desse novo objeto será uma aula, sendo essas
chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) ,
a saída deverá ser a seguinte: */

/* console.log(allLessons); */
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

/* Usando o objeto criado no exercício 5, crie uma função que retorne o número total de
estudantes em todas as aulas.
Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
Por exemplo: */

/* console.log(getValueByNumber(lesson1, 0)); */
// Output: 'Matématica'

/* Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve
possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
Exemplo: */

/* console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false */