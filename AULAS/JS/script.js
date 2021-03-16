// alert("Olá, mundo!");
/*var resposta = confirm("Como esta? ")
console.log(resposta);*/
//aula 09
/*var a = 10;
var b = 20;
alert (a + b);

function somar (num1, num2){

    return num1 + num2;
}
console.log(somar (3, 12));
*/

//aula #10
// Propriedades são elementos que eu possa mudar
//Metodos são ações que eu possa executar

const a = 10;
const b = 33;
function somar (a, b){
    return parseInt(a) + parseInt(b);
}

document.querySelector("#calcular").addEventListener("click", function () {
    let valorA = document.querySelector("#valorA").value;
    let valorB = document.querySelector("#valorB").value;
    if(valorA.length > 0 && valorB.length > 0 ){
        alert (parseInt(valorA) + parseInt(valorB));
        //alert somar(valorA, valorB);
    }else{
        alert ("Digite os valores para cálculo");   
    }
} );
