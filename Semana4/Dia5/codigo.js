//funciones
/*
function sumar(numero1,numero2){
    let total = numero1 + numero2;
    console.log(total)
    let poner_Html = document.write(`${total}`)

    return total;
}

sumar(5,4);

function restar(numero1,numero2) {
    console.log(numero1 - numero2);
    return numero1 - numero2;
}*/


let a =2;
let b =6;
let c = 5;

let FormulaCuadratica2 = (- b - (((b^2)-(4*a*c))^(1/2))) / (2*a)

function cuadrat1(a2,b2,c2) {
    let FormCuadrat = (- b + (((b^2)-(4*a*c))^(1/2))) / (2*a);
    let imp = document.write(`${FormCuadrat}`)
    return FormCuadrat;
`${FormCuadrat}`
}
cuadrat1(a,b,c)