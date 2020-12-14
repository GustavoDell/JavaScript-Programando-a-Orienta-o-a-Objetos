import {Cliente} from "./Cliente.js"
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrente1 = new Conta(0, cliente1, 1001);
contaCorrente1.depositar(500);
contaCorrente1.sacar(200);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrente1);


