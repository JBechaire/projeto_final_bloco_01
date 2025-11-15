import { Produto } from "./Produto";

export class ChaveiroPersonalidado extends Produto {
    private _cor: string;

    constructor(id: number, categoria: number, tipo: number, nome: string, preco: number, cor: string) {
        super(id, categoria, tipo, nome, preco);
        this._cor = cor;
    }

    public get cor() { return this._cor; }
    public set cor(cor: string) { this._cor = cor; }

    public visualizar(): void {
        super.visualizar();
        console.log("Cor: " + this._cor);
    }
}