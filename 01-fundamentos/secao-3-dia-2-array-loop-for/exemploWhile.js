// o while executa a iteração com apenas uma condição. Enquanto essa condição for verdadeira, o conteúdo de escopo do while vai 
// sendo cumprido e, ao encontrar uma condição falsa, o bloco é encerrado.

Exemplo 1

let counter = 0;

while(counter !== 5) {
    counter += 1;
}

______________________________________________________________________________________________

Exemplo 2

let dado1 = Math.ceil(Math.random() * 6);
console.log('resultado dado 1:', dado1);
let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6);
  console.log('resultado dado 2:', dado2);
}

// O objetivo é rolar o segundo dado até que o número sorteado seja igual ao do primeiro dado. 
// Assim, utilize o código Math.ceil(Math.random() * 6) para gerar um número aleatório entre 01 e 06. 
// Não se preocupe em entender como funciona o código; por enquanto, é importante entender apenas que,
// toda vez que o executar, um número aleatório será gerado.