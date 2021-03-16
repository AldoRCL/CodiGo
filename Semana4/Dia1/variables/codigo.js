// este es un comentario de una linea

/*
//variable tipo texto
var nombre ="Aldo";
let sistemaOperativo = "linux";
console.log (typeof nombre)//esto me devuelve string

alert(
    "Mi segundo nombre es" + nombre +
    "y mi sistema operativo es " + sistemaOperativo
);
console.log("2"*3)
console.log("1"+3)
alert(
    `Misegundo nombre es ${nombre} y mi sistema operativo es ${sistemaOperativo} `
)*/

//varibales de tipo numero
/*
let miEdad = 20
let miPeso = 75.40
//creo una variable para mi altura 
// 2. creo una variable para mi peso
//3. creo una variable que divida 
let altura = 1.70
let peso = 75.430
//bmi = indice de masa corporal
let bmi = peso / (altura^2)
 alert(
     "mi masa corporal es " + bmi
 )

 //hay 4 operciones basicas
 //suma +
 //multiplicacion *
 // division /
 //la resta -
 //el modulo %

 let a = 6
 let b = 10
 let suma = a + b
 console.log(suma)

 let resta = a - b
 console.log(resta)

 let division = a / b
 console.log(division)

 let multiplicacion = a * b
 console.log(multiplicacion)

 let potenciacion = a ** b
 console.log(potenciacion)

 let radicacion = a ** 0.5
 console.log(radicacion)

 let modulo = a ** b
 console.log(modulo)

 

 //1. declarar una variable para dar formula de grados centigrados a fahrenheit
 
 //variable centigrados  = formula en farenheit
 //variable fahrenheit = formula en centigrados

let celsius = 1
let farenheit = (celsius * (9/5)) + 32
console.log("celcius a fahrenheit "+ farenheit)

//farenheit a celsius
let fahrenheit2 = 53

let celsius2 = (fahrenheit2 - 32) * (5/9)
console.log("fahrenheit a celsius "+ celsius2)



//tipo Boolean -> true - verdad, false - falso-0
let soyFrontend = true
let soyMatchLearning = false

//JSON -> JavaScript Object Notation
let json2 ={
    propiedad6 : 123,
};
let json ={
    propiedad1 : "valor de texto",
    porpiedad2 : 34,
    propiedad3 : true,
    propiedad4 : json2
};

let aldo ={
    Nombre: "Aldo",
    ApellidoPaterno : "Cotrina",
    ApellidoMaterno :"Lozano"
};

let NombreCompleto = `${aldo.Nombre} ${aldo.ApellidoPaterno} ${aldo.ApellidoMaterno}`;

console.log("Mi nombre completo es " + NombreCompleto)
*/

//vamos a crear un objeto donde almacenaremos nuestros hobbies favritos, numero de mascotas que tenemos y ademas si sopmos hombres damos true/false e igual con mujeres
//vamos a armar un alerta que reciba como dato nuestros nombres y de un mensaje de bienvenida
//vamos a escribir la formula cuadratica

let AldoCosas = {
    Hobbies : "Programar",
    Mascotas : 2,
    Sexo : true,
}
let Nombre = "Aldo Cotrina Lozano"
alert("Bienvenido Lord "+ Nombre + "Pasala Bien")
let a =2;
let b =6;
let c = 5;

let FormulaCuadratica = (- b + (((b^2)-(4*a*c))^(1/2))) / (2*a)
let FormulaCuadratica2 = (- b - (((b^2)-(4*a*c))^(1/2))) / (2*a)

for( i=1; i<=10; i++){
    console.log(i +" ")
}