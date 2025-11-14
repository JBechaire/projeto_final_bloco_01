// src/models/Produto.ts
export abstract class Produto {
  // Encapsulamento
  private _id: string;
  private _nome: string;
  protected _preco: number; // subclasses podem ler/ajustar (se permitido)

  constructor(id: string, nome: string, preco: number) {
    this._id = id;
    this._nome = nome;
    this._preco = preco;
  }

  public get id(): string {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(novoNome: string) {
    if (!novoNome || novoNome.trim().length < 2) {
      throw new Error("Nome inválido para produto.");
    }
    this._nome = novoNome;
  }

  public get preco(): number {
    return this._preco;
  }

  // Polimorfismo: subclasses podem redefinir regras de preço
  public calcularPreco(): number {
    return this._preco;
  }

  public toString(): string {
    return `${this.constructor.name} { id=${this._id}, nome=${this._nome}, preco=${this.calcularPreco().toFixed(2)} }`;
  }

  // Requer que subclasses digam seu tipo----lembrarjosy fazer sub classe
  public abstract getTipo(): string;
}
