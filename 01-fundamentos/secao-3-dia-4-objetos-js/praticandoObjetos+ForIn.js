Exemplo 1

let pizzas = {
    sabor: 'Palmito',
    preco: 39.90,
    bordaCatupiry: true,
};

for (let key in pizzas) {
    console.log(pizzas[key]);
}

let pizzasDoces = ['chocolate', 'banana', 'morango']

for (let key in pizzasDoces) {
    console.log(key, pizzasDoces)
}

__________________________________________________________________________________________________________
Exemplo 2: Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, 
substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let key in names) {
    console.log('Olá, ' + names[key]);
  }
______________________________________________________________________________________________________
Exemplo 3: Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
    console.log(key, car[key])
  }

