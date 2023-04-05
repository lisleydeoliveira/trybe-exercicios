Exemplo 1

let customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);
  customer1.lastName = 'Faria';
  console.log(customer1);
  
  let customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  console.log(customer2);
  customer2['lastName'] = 'Silva';
  console.log(customer2);
________________________________________________________________________________________
Exemplo 2

  Criando uma função responsável por adicionar novas propriedades a um objeto, e ela deve receber três parâmetros: 
  um objeto, uma chave nova a ser adicionada e o valor dessa propriedade.

  let customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  let lastName = 'Ferreira';
  
  function addProperty(object, key, value) {
    object[key] = value;
  };

  let customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  let lastName = 'Ferreira';
  
  function addProperty(object, key, value) {
    object[key] = value;
  };
  
  addProperty(customer, newKey, lastName);
  console.log(customer);
  ________________________________________________________________________________________
  Exemplo 3
let student = {
    firstName: 'Lisley',
    age: 32,
    job: 'Nurse',

};

let newKey = 'lastName';
let lastName = 'Francisco';

function addProperty(object, key, value) {
    object[key] = value;
}

addProperty(customer, newKey, lastName);
console.log(customer)

newKey = 'fullName';
let fullName = customer.firstName + ' ' + customer.lastName;

addProperty(customer, key, fullName);
console.log(customer);