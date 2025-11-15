import { Produto } from "./Produto";

export class ChaveiroSimples extends Produto {
    private _tamanho: string;

    constructor(id: number, categoria: number, tipo: number, nome: string, preco: number, tamanho: string) {
        super(id, categoria, tipo, nome, preco);
        this._tamanho = tamanho;
    }

    public get tamanho() { return this._tamanho; }
    public set tamanho(tamanho: string) { this._tamanho = tamanho; }

    public visualizar(): void {
        super.visualizar();
        console.log("Tamanho: " + this._tamanho);
    }
}