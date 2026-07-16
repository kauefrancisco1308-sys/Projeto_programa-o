abstract class Pastorais {
    private _login: number
    private _senha: string
    pastoral: string
    nome: string
    email: string
    disponivel: string
    constructor(login:number,senha:string,pastoral:string,nome:string,email:string, disponivel: string){
        this._login=login
        this._senha=senha
        this.email=email
        this.nome=nome
        this.pastoral=pastoral
        this.disponivel = disponivel
    }

    getLogin(): number {
        return this._login
    }

    getSenha(): string {
        return this._senha
    }

    abstract disponibilidade(): void
}

class Pascom extends Pastorais {
    protected funcao: string

    constructor(login:number,senha:string,pastoral:string,nome:string,email:string, funcao: string, disponivel: string) {
        super(login, senha, pastoral, nome, email, disponivel)
        this.funcao = funcao
    }

    disponibilidade(): void {
        console.log(`Situação: ${this.disponivel}`)
    }

    atuacao(): void {
    console.log(`a função atual é: ${this.funcao}`)
    }
}

class Coral extends Pastorais {
    protected tipoMusico: string

    constructor(login:number,senha:string,pastoral:string,nome:string,email:string, tipoDoMusico: string, disponivel: string) {
        super(login, senha, pastoral, nome, email, disponivel)
        this.tipoMusico=tipoDoMusico
    }

    disponibilidade(): void {
        console.log(`Situação: ${this.disponivel}`)
    }
    cantor(){
        if(this.tipoMusico=="Cantor"){
            return true
        }else{
            return false
        }
    }
}