//O laço for/of permite iterar os valores das propriedades e retorna os números dentro do array numeros.

Exemplo 1

let numeros = [1, 2, 3, 4, 5];
    for(let numero of numeros) {
        console.log(numero);
    }
_______________________________________________________________________________________________________

Exemplo 2

let word = 'Hello';
    for(let letter of word) {
        console.log(letter);
    }
_______________________________________________________________________________________________________
Exemplo 3

let arrOfNumbers = [10, 20, 30];
    for (let sum of arrOfNumbers) {
        sum += 1;
        console.log(sum);
    }

//É importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro adicionando 1 à soma.
_______________________________________________________________________________________________________
_______________________________________________________________________________________________________
Exerício para fixar:

//Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
    for (let name of names) {
        console.log(name)
    }
