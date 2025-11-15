import readlineSync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ChaveiroSimples } from './src/model/ChaveiroSimples';
import { ChaveiroPersonalidado } from './src/model/ChaveiroPersonalizado';
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {
    let produtos: ProdutoController = new ProdutoController();

    let opcao, id, categoria, tipo, preco: number;
    let nome, tamanho, cor: string;
    const tiposProdutos = ['Chaveiro Simples', 'Chaveiro Personalidado'];



    while (true) {

        console.log(colors.fg.yellow,
            "=====================================================");
        console.log("                                                     ");
        console.log("                    CHAVEIROS JOSY                   ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar Produtos                      ");
        console.log("            3 - Atualizar Produto                    ");
        console.log("            4 - Deletar Produto                      ");
        console.log("                0 - Sair                             ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ",
            colors.reset)


        opcao = readlineSync.questionInt("Entre com a opção desejada: ");

        if (opcao === 0) {
            console.log(colors.fg.yellow, "\n  Obrigado por usar o sistema da Josy Store!\n");
            sobre();
            console.log(colors.reset, "")
            process.exit(0);
        }



        switch (opcao) {
            case 1:
                console.log(colors.fg.yellow, "\n\nCadastrar Produto\n\n", colors.reset);

                console.log("Digite o código da categoria: ");
                categoria = readlineSync.questionInt("");

                console.log("Digite o nome do produto: ");
                nome = readlineSync.question("");

                tipo = readlineSync.keyInSelect(tiposProdutos, "Escolha o tipo do produto", { cancel: false }) + 1;

                console.log("Digite o preço do produto (R$): ");
                preco = readlineSync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o tamanho da : ");
                        tamanho = readlineSync.question("");
                        produtos.cadastrar(new ChaveiroSimples(produtos.gerarId(), categoria, tipo, nome, preco, tamanho));
                        break;
                    case 2:
                        console.log("Digite a cor da : ");
                        cor = readlineSync.question("");
                        produtos.cadastrar(new ChaveiroPersonalidado(produtos.gerarId(), categoria, tipo, nome, preco, cor));
                        break;
                }
                keyPress();

                break;

            case 2:
                console.log(colors.fg.yellow, "\n\nListar Produtos\n\n", colors.reset);

                break;
            case 3:
                console.log(colors.fg.yellow, "\n\nAtualizar Produto \n\n", colors.reset);
                console.log("Digite o ID do produto: ");
                id = readlineSync.questionInt("");

                let produto = produtos.buscarNoArray(id);

                if (produto != null) {
                    console.log("Digite o código da categoria: ");
                    categoria = readlineSync.questionInt("");

                    console.log("Digite o nome do produto: ");
                    nome = readlineSync.question("");

                    tipo = produto.tipo;

                    console.log("Digite o preço do produto (R$): ");
                    preco = readlineSync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o tamanho da Chaveiro Simples: ");
                            tamanho = readlineSync.question("");
                            produtos.atualizar(new ChaveiroSimples(id, categoria, tipo, nome, preco, tamanho));
                            break;
                        case 2:
                            console.log("Digite a cor da Chaveiro Personalizado: ");
                            cor = readlineSync.question("");
                            produtos.atualizar(new ChaveiroPersonalidado(id, categoria, tipo, nome, preco, cor));
                            break;
                    }
                } else {
                    console.log(`Produto ID ${id} não encontrado.`);
                }
                keyPress();

                break;
            case 4:
                console.log(colors.fg.yellow, "\n\nCancelar Pedido\n\n", colors.reset);
                console.log("Digite o ID do produto: ");
                id = readlineSync.questionInt("");

                produtos.deletar(id);
                keyPress();

                break;

            default:
                console.log(colors.fg.yellow, "\nOpção Inválida!\n", colors.reset);

                readlineSync.question("\nPressione Enter para voltar ao menu...");
        }
    }
}

/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
    console.log("\n==================================================");
    console.log("Projeto Desenvolvido por: Joselaine Bechaire        ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("       github.com/conteudoGeneration                ");
    console.log("https://github.com/JBechaire/projeto_final_bloco_01\n");
    console.log("=====================================================");
}
function keyPress() {
    readlineSync.question("\nPressione Enter para continuar...");
}
main();