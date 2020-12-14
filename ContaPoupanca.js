export class ContaPoupanca{
    constructor(saldoInicial, cliente, agencia){
        this._saldoInicial = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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