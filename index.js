class Cliente{
    nome;
    cpf;
}

class ContaCorrenta{
    agencia;
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
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrenta();
contaCorrenteRicardo.agencia = 1001;
const contaCorrenteAlice = new ContaCorrenta();

contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);


console.log(valorSacado);

console.log(contaCorrenteRicardo);