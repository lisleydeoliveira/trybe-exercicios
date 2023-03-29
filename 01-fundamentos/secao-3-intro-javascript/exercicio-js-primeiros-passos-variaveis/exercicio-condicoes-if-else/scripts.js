let notaCandidata = 73;

if (notaCandidata >= 80) {
    console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!')
} 
else if (notaCandidata < 80 || notaCandidata == 60) {
    console.log('Você está na nossa lista de espera')
}
else if (notaCandidata < 60) {
    console.log('Infelizmente você reprovou')
}

