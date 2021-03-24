/*
let mi_Nombre = prompt("Adivina mi nombre");

while(mi_Nombre.toLocaleLowerCase() !== "josue"){

    if(mi_Nombre.toLowerCase() === "josue"){
        alert("Hey adivinaste mi nombre");
        break;
    }else{
        let match = prompt("Sigue intentando")

        if(match === "josue"){
            alert("Hey adivinaste mi nombgg");
            break;
        }
    }
}
*/

/*
let mi_Nombre = prompt("Adivina mi nombre");
while(mi_Nombre.toLowerCase() !== "aldo"){
     mi_Nombre = prompt("Sigue intentando")
}
alert("Hey adivinaste mi nombre");
*/

let mi_Nombre = prompt("Adivina mi nombre");
do {
    mi_Nombre = prompt("Sigue intentando")
} while (mi_Nombre.toLowerCase() !== "aldo");

let mi_clave = prompt("Ingresa tu clave");


