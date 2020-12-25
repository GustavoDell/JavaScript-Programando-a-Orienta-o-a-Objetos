import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Rodrigo", 5000, 12345678901);
gerente.cadastrarSenha("123")

//polimorfismo, fazer com classes abstratas represente o comportamento de classes concretas

const cliente = new Cliente("Lais", 7894512379, "456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(clienteEstaLogado);