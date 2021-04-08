//try-catch

/*
let variable_ejemplo = 45

try{
    console.log(variable_ejemplo * 1000);
}catch (error){
    console.log(error)
}


let edad = prompt("Ingresa tu Edad")

try{
    if (isNaN(+edad)) {
        throw new Error("No es un numero!!")
    }
    console.log("Hey , felicitaciones, tienes: ",edad);

}catch (error){
    console.log(error)
}
*/

//vamos a pedir la fecha de nacimiento (elaño)
//vamoa a hacer la comprobacion de que se aun numero y que sea un numero positivo y que se mayor a 1970
//si falla lanzamos un error con la condicion que no cumplio 


let fecha = prompt("Ingresa tu Año de Nacimiento")

try{
    if (isNaN(+fecha)) {
        throw new Error("Ingresar un valor Correcto")
    }
    if (fecha<=1960 && fecha>=0) {
        throw new Error("El año es menor a 1960")
    }
    if(fecha<0){
        throw new Error("Estas ingresando un valor negativo")
    }

    alert("Hey , felicitaciones, tu Año es: ",fecha)

}catch (error){
    alert(error)
}


let miVariable = prompt("Dame un Numero")
