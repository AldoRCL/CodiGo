console.log("Hola Mundo!!")

const librero = require("./libros");

librero.map((libro)=>{
    console.log(libro);
});

let cowsay = require("cowsay")
console.log(cowsay.say({
    text: "Hola amigos de codigo!!! muuuuuuuu!",
	e : "oO",
	T : "U "
}))