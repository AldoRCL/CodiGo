/*
switch(frase){
    case "susy":{

        break;
    }


}
*/
let comida = "hamburguesa"
switch (comida) {
    case "hamburguesa":
        console.log("Es mi plato favorito!! ")
        break;
    case "pizza":
         console.log("Uy que rico pizza ")
        break;
     case "lenteguitas":
    case "verduras":
    case "fideos;":
        console.log("No es mi comida favorita");
        break;
    case "lomo saltado":
        console.log("Que rico lomo saltado");


    default:
        console.log("Ups!, ")
        break;
}