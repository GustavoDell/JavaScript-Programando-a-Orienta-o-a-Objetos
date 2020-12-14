import {Cliente} from "./Cliente.js";

export class ContaCorrente{
    static numeroDecontas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDecontas += 1;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }  
    }

    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
         return this._saldo;
     }
    
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
           
    }
    
    depositar(valor){
        if(valor <= 0){
            return; //early return caso a condição for verdadeira ele já sai da execulção da função por ter o return
        }  
        this._saldo += valor;  
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}