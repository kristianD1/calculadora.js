const txtOp1 = document.getElementById('op1');
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById('op2');
const bntCalular = document.getElementById('calcular');
const result = document.getElementById('result');

bntCalular.addEventListener('click', calcular)
// lo mismo que onclick en html
// function calcular() {
//     console.log("apretaste el boton calcular");
// }

function calcular() {
    const operacion = txtOperacion.value;
    const op1 = parseFloat(txtOp1.value);
    const op2 = parseFloat(txtOp2.value);

    if(operacion == "+" || operacion == "-" || operacion == "x" || operacion == "/") {
        let resultado;
        switch (operacion) {
            case "+":
                resultado = op1 +op2;
                break;
            case "-":
                resultado = op1 - op2;
                break;
            case "x":
                resultado = op1 * op2;
                break;
            case "/":
                resultado = op1 / op2;
                break;
        }
        result.innerText = "Calculo posible"+"="+resultado
    }else{
        result.innerText = "No es posible"
    }
}
