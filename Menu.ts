import * as readlineSync from "readline-sync";
import { colors } from "./src/util/Colors"; 
import


export function main():void {
   
    let opcao: number;

       while (true) {
        
        console.log(colors.fg.yellow, 
                    "=====================================================");
        console.log("                                                     ");
        console.log("                    Chaveiros DEZ                    ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Buscar Produto                       ");
        console.log("            3 - Cancelar Produto                     ");
        console.log("            4 - Listar Produtos                      ");
        console.log("            6 - Atualizar                            ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ",
        colors.reset)

        opcao = readlineSync.questionInt("Entre com a opção desejada: ");

        if (opcao === 0) {
            console.log(colors.fg.yellow, "\n Chaveiros - PREÇO UNICO");
            sobre();
            console.log(colors.reset,"")
            process.exit(0);
        }

           }

        switch (opcao) {
            case 1:
                console.log(colors.fg.yellow,"\n\nCriar Pedido\n\n",colors.reset);

  console.log("Digite o id. do Chaveiro: ");
                = readlineSync.question("");            
                console.log("Digite o preço do Chaveiro (R$): ");
                 = readlineSync.questionFloat("");

                            

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

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlineSync.prompt();
}
main();