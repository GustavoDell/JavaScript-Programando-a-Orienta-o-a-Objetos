import {Cliente} from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrente1 = new ContaCorrente(0, cliente1, 1001);
contaCorrente1.depositar(500);
contaCorrente1.sacar(200);

const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca1.sacar(10);


console.log(contaPoupanca1);
console.log(contaCorrente1);


