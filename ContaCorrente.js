export class ContaCorrenta{
    agencia;
    cliente;

    _saldo = 0;
    
    
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
        conta.cidade = "São Paulo";
    }
}