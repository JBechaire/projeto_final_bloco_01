import readlineSync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ChaveiroSimples } from './src/model/ChaveiroSimples';
import { ChaveiroPersonalidado } from './src/model/ChaveiroPersonalizado';
import { ProdutoController} from '.src/controller/ProdutoController'

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
        console.log("            4 - Deletar Produt                       ");
        console.log("                0 - Sair                             ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ",
        colors.reset)


        opcao = readlineSync.questionInt("Entre com a opção desejada: ");

        if (opcao === 0) {
            console.log(colors.fg.yellow, "\n  Obrigado por usar o sistema da Josy Store!\n");
            sobre();
            console.log(colors.reset,"")
            process.exit(0);
        }

           }

        switch (opcao) {
            case 1:
                console.log(colors.fg.yellow,"\n\nCriar Pedido\n\n",colors.reset);                

                console.log("\n\nCadastrar Chaveiro\n\n");

               

                break;
            case 2:
                console.log(colors.fg.yellow,"\n\nListar Produtos\n\n",colors.reset);



                break;
            case 3:
                console.log(colors.fg.yellow,"\n\nBuscar Pedido \n\n",colors.reset);


                
                break;
            case 4:
                console.log(colors.fg.yellow,"\n\nCancelar Pedido\n\n",colors.reset);

                break;
            case 5:
                console.log(colors.fg.yellow,"\n\nListar Pedido \n\n",colors.reset);

                break;
            case 6:
                console.log(colors.fg.yellow,"\n\nComprar\n\n",colors.reset);

                break;
            case 7:
                console.log(colors.fg.yellow,"\n\nPagar\n\n",colors.reset);

                break;
            case 8:
                console.log(colors.fg.yellow,"\n\n Compra Finalizada\n\n",colors.reset);

                break;
            default:
                console.log(colors.fg.yellow,"\nOpção Inválida!\n",colors.reset);

        readlineSync.question("\nPressione Enter para voltar ao menu...");
    }
}

/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
    console.log("\n===========================================");
    console.log("Projeto Desenvolvido por: Joselaine Bechaire ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("       github.com/conteudoGeneration         ");
    console.log("=============================================");
}
main();