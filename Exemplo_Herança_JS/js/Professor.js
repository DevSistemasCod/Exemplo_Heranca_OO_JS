import Pessoa from "./Pessoa.js";
export default class Professor extends Pessoa {
  #disciplina;
  #nota;
  constructor(primeiroNome, sobrenome, idade, interesses, disciplina, nota) {
    super(primeiroNome, sobrenome, idade, interesses);

    // disciplina e nota são específicas do Professor
    this.#disciplina = disciplina;
    this.#nota = nota;
  }

  get getDisciplina() {
    return this.#disciplina;
  }

  get getNota() {
    return this.#nota;
  }
  saudacao() {
    super.saudacao(); // Chama o método saudacao da classe Pai
    console.log("Minha disciplina é: " + this.getDisciplina);
    console.log("Minha nota é: " + this.getNota);
  }

}

