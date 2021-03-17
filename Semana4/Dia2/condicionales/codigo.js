

//Condicionales
/*
if(se cumple mi condicion){

}else(si no se cumple)
*/
/*
let condicion = true;

if(condicion == true){
    console.log("Hola amigos, bienvenidos a CodiGo")
}else{
    console.log("Que estas esperando")
}

let a =0;
let b = 0;

a=4;
//b=5;
 b = Math.round(Math.random()*10);
alert("Número aleatorio entre 0 y 10:"+ b)

let suma = a + b;

if(suma === 9){
    alert("FELICIDADES, ADIVINASTE!!!")
}else{
    alert("OH, LOSIENTO, SIGUE INTENTANDO")
}
*/
/*
let lenguaje_de_programacion = "c++"

if(lenguaje_de_programacion == "python"){
    console.log("Python es asombroso")
}else if(lenguaje_de_programacion == "javascript"){
    console.log("Javascript tambien lo es")
}else if(lenguaje_de_programacion == "php"){
    console.log("Mejor apaga tu computadora amigo/a ")
}else if(lenguaje_de_programacion == "c++"){
    console.log("wow tu eres de los bravos")
}else{
    console.log("que? aun no te sabes ninguno ? ñ.ñ")
}
*/
//
/*
let titulo_cancion = "Panocha-Remix"

if(titulo_cancion == "Panocha-Remix"){
    console.log("Me encanta tu pan**** y tus t**** Tus t****, Cuando bailas twerking, tú te arre****, Me vuelves loco de placer, Contigo quiero amanecer fol*****")
}else if(titulo_cancion == "duro-2-horas"){
    console.log("Duro dos horas haciéndolo bien rico, ¡oh!, De las chicas soy su favorito, wow, Todas dicen que me aman, Todas me quieren en su cama")
}else if(titulo_cancion == "hawai"){
    console.log("hawai de vacaciones")
}else if(titulo_cancion == "dakiti"){
    console.log("Ya yo me entere se nota cuando me ves")
}else{
    console.log("No sabes de musica")
}
*/

function miFuncion(){
    console.log("Mi primera funcion es lo mejor del mundo!!!!")
    console.log("Las funciones me sirven para no repetir mi codigo")
    console.log("Las funciones me ayudan a escribir mejor mi codigo")
}

function imprimeMinombre(nombre){
    let miNombre= ""
    if(nombre === ""){
        miNombre = "Debes ingresar un nombre valido !, gracias"
    }else if(nombre != ""){
        miNombre = `Mi nombre es:  ${nombre} .`
    }

    return miNombre;
}

imprimeMinombre("Aldo")
console.log(imprimeMinombre("Aldo"))
console.log(imprimeMinombre(""))