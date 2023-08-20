export default class Pessoa {
   #nome;
   #idade;
   #interesses;
   constructor(primeiroNome, ultimoNome, idade, interesses) {
      this.#nome = {
         primeiro: primeiroNome,
         ultimo: ultimoNome,
      };
      this.#idade = idade;
      this.#interesses = interesses;
   }

   get getNome() {
      return this.#nome;
   }

   get getIdade() {
      return this.#idade;
   }

   get getInteresses() {
      return this.#interesses;
   }

   saudacao() {
      console.log("Oi! Eu sou " + this.getNome.primeiro);
      console.log("Minha idade é: " + this.getIdade);
      console.log("Meus interesses são: " + this.getInteresses);
   }

   despedida() {
      console.log("Até logo por enquanto!");
   }
}
