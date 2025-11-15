
export abstract class Produto {
    private _ident: number;
    protected _preco: number;

    constructor(ident: string, preco: number) {
        this._ident = ident;
        this._preco = preco;
    }

    public get ident(): number {
        return this._ident;
    }

    public set ident(ident: number) {
        this._ident = ident;
    }

    public get preco(): number {
        return this._preco;
    }
    public set preco(preco: number) {
        this._preco = preco;
    }

    public abstract getTipo(): string;
}

