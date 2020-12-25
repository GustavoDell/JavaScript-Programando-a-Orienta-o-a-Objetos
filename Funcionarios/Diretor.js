import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario{
    constructor(nome, salario, cpf){
        
        //super é usado para acessar um objeto pai de um objeto
        super(nome, salario, cpf);

        this._bonificacao = 2;
    }
}