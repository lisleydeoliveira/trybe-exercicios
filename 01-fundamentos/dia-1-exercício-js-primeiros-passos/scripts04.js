let l1 = 13; 
let l2 = 69;
let l3 = 31;
let soma = l1 + l2 + l3;

if (soma <= 180) {
    console.log('True')
} else {
    console.log('False')
} 
    if (l1 >= 0 && l2 >= 0 && l3 >= 0 && l1 <= 180 && l2 <= 180 && l3 <= 180) {
        console.log('Válido')
    } else {
        console.log('Error message!')
    }


// 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.
// Se algum ângulo for inválido, você deve retornar uma mensagem de erro.