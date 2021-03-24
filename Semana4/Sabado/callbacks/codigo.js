//callbacks

function mostrarAlerta() {
    alert("Hola!!");

}

const boton = document.querySelector("button");

boton.addEventListener("click",mostrarAlerta);


let segundos =  5;
function empezarCuentaAtras() {
    let intervalo = setInterval(function() {
        segundos --;
        if(segundos == 0){
            clearInterval(intervalo);
        }
        imprimirSegundos();
    }, 1000);
    
}

function imprimirSegundos(){
    console.log(segundos);
}

empezarCuentaAtras();