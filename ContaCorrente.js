import{Conta} from "./Conta.js"


export class ContaCorrente extends Conta{
    static numeroDecontas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDecontas += 1;
    }

    teste(){
        super.teste();
        console.log("teste na classe conta corrente")
    }
    //especializando o metodo sacar da conta corrente
    //sobrecrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);   
    }
}