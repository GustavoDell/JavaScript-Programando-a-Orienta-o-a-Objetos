
//Classes que não pode ser instanciadas diretamente, são conhecidas como classes abstratas.(Só pode ser herdada)
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        //informa que não deveria instanciar um objeto conta
        if(this.constructor == Conta){
            //throw lança algo
            throw new Error("Você não deveria instaciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    
    set cliente(novoValor){
        //instanceof verifica se é uma função construtora
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
    //metodo abtrato feito para ser sobrescrito
    sacar(valor){
         throw new Error("O método Sacar da conta é abstrato");   
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }
    depositar(valor){
        this._saldo += valor;  
    }

    tranferir(valor, conta){
        if(this._tipo == "salario"){
           return; 
        }
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}