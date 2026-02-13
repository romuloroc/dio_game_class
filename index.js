
const prompt = require('prompt-sync')();

class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }
  
  atacar() {
    switch (this.tipo) {
      case "mago":
        return `o ${this.tipo} atacou usando magia`;
      case "guerreiro":
        return `o ${this.tipo} atacou usando espada`;
      case "monge":
        return `o ${this.tipo} atacou usando artes marciais`;
      case "ninja":
        return `o ${this.tipo} atacou usando shuriken`;  
      default:
        return `o ${this.tipo} atacou de forma desconhecida`;
    }
  }
}

const nome = prompt("Digite o nome do herói: ");
const idade = parseInt(prompt("Digite a idade do herói: "));
const tipo = prompt("Digite o tipo do herói (mago, guerreiro, monge, ninja): ");
const heroi = new Hero(nome, idade, tipo);
console.log(heroi.atacar());