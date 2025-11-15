import { Produto } from "../model/Produto";
import{ProdutoRepository} from "../repository/ProdutoRepository"

export class ProdutoController implements ProdutoRepository {
    private listaProdutos: Array<Produto> = [];
    private id: number = 0;

    public gerarId(): number {
        return ++this.id;
    }

    public procurarPorId(id: number): void {
        const produto = this.buscarNoArray(id);
        produto ? produto.visualizar() : console.log(`Produto ID ${id} não encontrado.`);
    }

   public listarTodos(): void {
    try {
        if (this.listaProdutos.length === 0) {
            console.log("Nenhum produto cadastrado.");
        } else {
            for (let produto of this.listaProdutos) {
                produto.visualizar();
            }
        }
    } catch (erro) {
        console.log("Ocorreu um erro ao tentar listar os produtos.");
    }
}



    public cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(`Produto ID ${produto.id} cadastrado com sucesso!`);
    }

    public atualizar(produto: Produto): void {
        const index = this.listaProdutos.findIndex(p => p.id === produto.id);
        if (index !== -1) {
            this.listaProdutos[index] = produto;
            console.log(`Produto ID ${produto.id} atualizado com sucesso!`);
        } else {
            console.log(`Produto ID ${produto.id} não encontrado.`);
        }
    }

    
    public deletar(id: number): void {
    try {
        const index = this.listaProdutos.findIndex(produto => produto.id === id);

        if (index !== -1) {
            this.listaProdutos.splice(index, 1);
            console.log("Produto deletado com sucesso!");
        } else {
            console.log("Produto não encontrado.");
        }
    } catch (erro) {
        console.log("Ocorreu um erro ao tentar deletar o produto.");
    }
}

    public buscarNoArray(id: number): Produto | null {
        return this.listaProdutos.find(p => p.id === id) || null;
    }
}
