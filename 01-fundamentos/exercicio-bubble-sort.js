// Ordene o array numbers em ordem crescente e imprima seus valores.

function bubbleSort1(array) {

for (let index = 0; index < array.length - 1; index += 1) {
  for (let secondIndex = 0; secondIndex < array.length - 1 - index; secondIndex += 1) {
    if (array[secondIndex] > array[secondIndex + 1]) {
      let position = array[secondIndex];
      array[secondIndex] = array[secondIndex + 1];
      array[secondIndex + 1] = position;
    }
  }
}
return array;
}
console.log(bubbleSort1([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]));

// Ordene o array numbers em ordem decrescente e imprima seus valores.

function bubbleSort2(array) {

  for (let index = 0; index < array.length - 1; index += 1) {
    for (let secondIndex = 0; secondIndex < array.length - 1 - index; secondIndex += 1) {
      if (array[secondIndex] < array[secondIndex + 1]) {
        let position = array[secondIndex];
        array[secondIndex] = array[secondIndex + 1];
        array[secondIndex + 1] = position;
      }
    }
  }
  return array;
  }
  console.log(bubbleSort2([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]));

  // Agora, crie um novo array a partir do array numbers, sem perdê-lo.
  // Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte.
  // Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte).
  //  Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 
  //  3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. 
  //  Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:  

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// resultado esperado:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

