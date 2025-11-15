
import { Produto } from "./Produto";

export class Chaveiro extends Produto {
  public getTipo(): string {
    return "Chaveiro";
  }

  private _estoque: number;

  constructor(ident: number, preço: number) {

    super(ident, preço)
    this._estoque = estoque;
  }
}
