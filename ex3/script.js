class Veiculo{
    #id
    #marca
    #modelo
    #preco
    #disponivel

    constructor(id,marca,modelo,preco){
        if((!marca|| marca.length<2)|| (!modelo||modelo.length<2)||preco<=0){
            return console.error("Ocorreu um erro.Verifique os dados novamente")
        }

        this.#id=id
        this.#marca=marca
        this.#modelo=modelo
        this.#preco=preco
        this.#disponivel=true
    }
    getId(){
        return this.#id
    }
    getMarca(){
        return this.#marca 
        
    }
    getmodelo(){
        return this.#modelo 
        
    }
    getpreco(){
        return this.#preco
    }
    setPreco(preco){
        return preco<=0 ? console.error("Erro ao setar o preco"): this.#preco=preco

    }
    VerificaVeiculo(disponivel){
        return disponivel!= this.#disponivel ? true :false 
    }

    ShowData(){
        return{
            id: this.getId(),
            preco: this.getpreco(),
            marca: this.getMarca(),
            modelo:this.getmodelo()

        }
    }
    AlteraPreco(preco){
        this.setPreco(preco)
        return("Preço alterado")

    }
}

class Carro extends Veiculo{
    constructor(id,marca,modelo,preco,portas){
        if ( portas <=0)
            return console.error("Ocorreu um erro, verifique o numero de portas.")
        super(id,marca,modelo,preco)
        
    }
}

class Moto extends Veiculo{
    constructor(id,marca,modelo,preco,cilindradas){
        if(cilindradas !=Number|| cilindradas<=0 || (cilindradas<50 && cilindradas>2000)) 
            return console.error("Ocorreu um erro. Verifique as cilindradas.")
        super(id,marca,modelo,preco)
    }
}

const c1= new Carro(1,"renault","Kwid",15.000,4)
console.log(c1.AlteraPreco(10.505))
console.log(c1.ShowData())
