let conta = {
  agencia: "0000",
  banco: {
    cod: "012",
    id: 4,
    nome: "TrybeBank",
  },
};

let infoDoBanco = "banco";
console.log(conta[infoDoBanco]);
console.log(conta[infoDoBanco]["nome"]);

console.log(conta.agencia);
console.log(conta["agencia"]);

console.log(conta.banco.cod);
console.log(conta["banco"]["id"]);

let usuario = {
  //objeto
  id: 99,
  email: "jakeperalta@gmail.com",
  infoPessoal: {
    //chave
    nome: "Jake",
    sobrenome: "Peralta",
    endereco: {
      //chave
      rua: "Smith Street",
      bairro: "Brooklyn",
      cidade: "Nova Iorque",
      estado: "Nova Iorque",
    },
  },
};

console.log(usuario["id"]);
console.log(usuario.email);
console.log(usuario.infoPessoal.endereco.rua);
console.log(usuario["infoPessoal"]["endereco"]["cidade"]);

let moradores = [
  //exemplo de um array composto de objetos.
  {
    nome: "Luíza",
    sobrenome: "Guimarães",
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: "William",
    sobrenome: "Albuquerque",
    andar: 5,
    apartamento: 502,
  },
  {
    nome: "Murilo",
    sobrenome: "Ferraz",
    andar: 8,
    apartamento: 804,
  },
  {
    nome: "Zoey",
    sobrenome: "Brooks",
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luíza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador["andar"]); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey

let name = "Marta";
let lastName = "Silva";
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

console.log(player.name);
console.log(player.lastName);
console.log(player.age);
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player.bestInTheWorld = {
   winner: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log(player.bestInTheWorld);
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata')