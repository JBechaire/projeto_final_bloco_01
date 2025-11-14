import * as readlineSync from "readline-sync";
import { colors } from "./src/util/Colors"; 


export function main(): {
   
    let opcao: number;

    
    

    while (true) {
        
        console.log(colors.fg.yellow, 
                    "=====================================================");
        console.log("                                                     ");
        console.log("                    Chaveiros DEZ                    ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("            1 - Criar Pedido                         ");
        console.log("            2 - Listar Produtos                      ");
        console.log("            3 - Buscar Pedido                        ");
        console.log("            4 - Cancelar Pedido                      ");
        console.log("            5 - Listar Pedido                        ");
        console.log("            6 - Comprar                              ");
        console.log("            7 - Pagar                                ");
        console.log("            8 - Finalizar                            ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ",
        colors.reset)

        opcao = readlineSync.questionInt("Entre com a opção desejada: ");

        if (opcao === 9) {
            console.log(colors.fg.yellow, "\n Chaveiros - PREÇO UNICO");
            sobre();
            console.log(colors.reset,"")
            process.exit(0);
        }

           }

        switch (opcao) {
            case 1:
                console.log(colors.fg.yellow,"\n\nCriar Pedido\n\n",colors.reset);

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