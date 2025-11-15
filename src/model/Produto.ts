
export abstract class Produto {
    private _id: number;
    private _categoria: number;
    private _tipo: number;
    private _nome: string;
    private _preco: number;

    constructor(id: number, categoria: number, tipo: number, nome: string, preco: number) {
        this._id = id;
        this._categoria = categoria;
        this._tipo = tipo;
        this._nome = nome;
        this._preco = preco;
    }

    public get id() { return this._id; }
    public set id(id: number) { this._id = id; }

    public get categoria() { return this._categoria; }
    public set categoria(categoria: number) { this._categoria = categoria; }

    public get nome() { return this._nome; }
    public set nome(nome: string) { this._nome = nome; }

    public get preco() { return this._preco; }
    public set preco(preco: number) { this._preco = preco; }

    public get tipo(): number { return this._tipo; }

    public visualizar(): void {
        let tipo = this._tipo === 1 ? "Chaveiro Simples" : "Chaveiro Personalizado";
        console.log("\n\n************************************************");
        console.log("Dados do Produto:");
        console.log("************************************************");
        console.log("ID do Produto: " + this._id);
        console.log("Categoria: " + this._categoria);
        console.log("Tipo: " + tipo);
        console.log("Nome: " + this._nome);
        console.log("Preço: R$" + this._preco.toFixed(2));
    }
}
