/*
Ser autenticavel significa ter o método autenticar
*/
//ducki type costume utilizado em liguagens fracamentes tipadas
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        //operdor in verifica se algo dentro de um objeto ou varivel
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}