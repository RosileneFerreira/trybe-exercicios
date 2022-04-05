/* Throw e Try/Catch */

/* const sum = (value1, value2) => value1 + value2;
console.log(sum(2, '3')); */

/* const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      return 'Os valores devem ser numéricos';
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3')); */

/*   const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3')); */

/* Refatorando o código: */

/*   const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      throw error.message;
    }
  };
  
  console.log(sum(2, '3')); */

  /* Objetos: Parte I - Adicionando novas chaves (keys) */
/*   const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer); */

/*  Crie uma função que receba três parâmetros, sendo eles: um objeto,
 o nome de uma chave e o seu valor. O retorno dessa função deve ser
 o objeto já com a nova chave adicionada nele. */


/* const recebeTres = (objeto, name, nome) => {
    let newKey = 'name';
    const name = 'Rosilene';
    objeto[newKey] = name;
}; */

/*   const recebeTres = (estudante) => {
    let newKey = 'name';
    const name = 'Rosilene';
  }

console.log(recebeTres()); */

/* Objetos: Parte II - Object.keys */

/* Tente criar uma função que exiba as habilidades do objeto student.
Cada habilidade deve ser exibida no formato
"Nome da habilidade, Nível: valor da chave referente à habilidade". */

/* const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const entradasStudent1 = Object.entries(student1);
  const entradasStudent2 = Object.entries(student2);

  console.log(entradasStudent1);
  console.log(entradasStudent2); */

 /*  Resposta course: */

/*   const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2); */

/* Duas funções que retornam a mesma lista de valores. Veja como fica muito mais fácil obter os valores
de um objeto com o uso do Object.values. */

/* const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsValuesWithValues = (student) => Object.values(student);
  
  // Sem Object.values
  console.log(listSkillsValuesWithFor(student));
  
  // Com Object.values
  console.log(listSkillsValuesWithValues(student)); */

  /* Objetos: Parte IV - Object.entries */

/*   const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue); */

 /*  Para ver os valores separadamente, adicione o for abaixo ao código
  anterior e execute-o novamente. */

/*   for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  }; */

  /* Objetos: Parte V - Object.assign */

/*   Observe também que a chave age aparece tanto em person como em info e é sobrescrita pelo valor
  contido em info. */

/*   const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person) */
  
/*   Agora, observe o exemplo abaixo. */

/* const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

Como pôde ver acima, o clone é exatamente igual ao objeto person , e se você mudar qualquer propriedade
nele, observará que o objeto person também será modificado. Isso ocorre devido ao fato de que o objeto
retornado pelo método Object.assign é o próprio objeto destino, que foi alterado adicionando as novas
propriedades. */


/* No exemplo abaixo, é apresentada outra forma de se copiar um objeto. */

/* const obj = { value1: 10, value2: 11 };
const cloneObj = obj;

console.log(obj);
console.log(cloneObj);

Se você modificar o cloneObj , verá que novamente teremos o mesmo resultado anterior, de forma que o
obj também é alterado. Ok, tendo isso em vista, como faremos para mudar os dados do novo objeto criado
sem modificar o objeto inicial? */

/* Para resolver esse problema, podemos passar como primeiro parâmetro do Object.assign um objeto
vazio {} e armazenar seu retorno em uma nova variável. Veja como fazer isso no exemplo abaixo. */


/* const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person); */
