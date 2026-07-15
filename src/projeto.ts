abstract class Pessoa {
    protected nome: string
    protected telefone: number
    protected email: string
    
    constructor(nome: string, telefone: number, email: string) {
        this.nome = nome
        this.telefone = telefone
        this.email = email
    }

    getNome(): string {
        return this.nome
    }

    getTelefone(): number {
        return this.telefone
    }

    getEmail(): string {
        return this.email
    }

    abstract obterContato(): void
}

class Membro extends Pessoa {
    private disponibilidade: string

    constructor(nome: string, telefone: number, email: string, disponibilidade: string) {
        super(nome, telefone, email)
        this.disponibilidade = disponibilidade
    }
    getDisponibilidade(): string {
        return this.disponibilidade
    }

    obterContato(): void {
        console.log(`Membro: ${this.nome}`)
        console.log(`Disponibilidade: ${this.disponibilidade}`)
    }
}

class Coordenador extends Pessoa {
    private funcao: string

    constructor(nome: string, telefone: number, email: string, funcao: string) {
        super(nome, telefone, email)
        this.funcao = funcao        
    }
    getFuncao(): string {
        return this.funcao
    }

    obterContato(): void {
        console.log(`Coordenador: ${this.nome}`)
        console.log(`Funcao: ${this.funcao}`)
    }
}

