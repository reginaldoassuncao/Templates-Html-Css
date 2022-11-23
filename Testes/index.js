import entradaDados from "readline-sync"

let valor_produto = 500;
let total_parcelas = entradaDados.question("Digite o numero de parcelas: ")

for (let contador =1; contador <= total_parcelas; contador++)
{   
    let valor_parcela = valor_produto / contador;
    console.log("Númer0 de parcelas: " + contador + "- valor de parcela: R$ " +valor_parcela.toFixed(2));
};