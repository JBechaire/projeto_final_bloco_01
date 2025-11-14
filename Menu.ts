import * as readlineSync from "readline-sync";

export function main(): void {
    let opcao: number;

    while (true) {
        console.clear();
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("                    TUDO DEZ                         ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("            1 - Criar Pedido                         ");
        console.log("            2 - Incluir + Intens                     ");
        console.log("            3 - Buscar Pedido                        ");
        console.log("            4 - Cancelar Pedido                      ");
        console.log("            5 - Listar Pedido                        ");
        console.log("            6 - Comprar                              ");
        console.log("            7 - Pagar                                ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ");

        opcao = readlineSync.questionInt("Entre com a opção desejada: ");

        if (opcao === 0) {
            console.log("\nTUDO DEZ - PREÇO UNICO");
            sobre();
            process.exit(0);
        }

           }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Pedido\n\n");

                break;
            case 2:
                console.log("\n\nIncluir + Intens ao Pedido\n\n");

                break;
            case 3:
                console.log("\n\nBuscar Pedido \n\n");

                break;
            case 4:
                console.log("\n\nCancelar Pedido\n\n");

                break;
            case 5:
                console.log("\n\nListar Pedido \n\n");

                break;
            case 6:
                console.log("\n\nComprar\n\n");

                break;
            case 7:
                console.log("\n\nPagar\n\n");

                break;
            case 8:
                console.log("\n\nOpção Inválida!\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

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