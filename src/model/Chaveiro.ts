
import { Produto } from "./Produto";

export class Chaveiro extends Produto {
  public static readonly PRECO_UNICO: number = 10;

  constructor(id: string, nome: string) {
    // Garante o preço único no construtor
    super(id, nome, Chaveiro.PRECO_UNICO);
  }

  // Polimorfismo: mesmo que alguém tente alterar futuramente,
  // o preço efetivo do Chaveiro permanece sendo o valor único.
  public override calcularPreco(): number {
    return Chaveiro.PRECO_UNICO;
  }
 
  public abstract getTipo(): string;
}
