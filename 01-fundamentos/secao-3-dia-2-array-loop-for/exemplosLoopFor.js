// (inicialização; condição de repetição; incremento/decremento)

exemplo 1 

let num = 9;

for (let contador = 1; contador <= 10; contador += 1) {
  console.log(num * contador)
}
---------------------------------------------------------------------------------------
exemplo 2

let nomes = ['Paula', 'Roberto', 'Amanda', 'Cleide', 'Daniel', 'Rods', 'Rogério']

for (let index = 0; index < nomes.length; index += 1) {
  console.log('Olá, ' + nomes[index] + '!')
}
----------------------------------------------------------------------------------------
exemplo 3

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index])
}

// executado exemplos durante aula de loop for, do dia 2, na seção 3.
