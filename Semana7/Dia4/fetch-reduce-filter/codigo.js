

let arrayColores = ["azul","verde","rojo","plateado"]
let colorSecreto = arrayColores.find(color=>color ==="plateado")

console.log(colorSecreto);

let tesorosPerdidos = [{
    nombre: "cofre del tesoro",
    valor: 100000000,
    pais: "costa rica",
  },
  {
    nombre: "santo grial",
    valor: 10045275208,
    pais: "israel",
  },
  {
    nombre: "quipu",
    valor: 100000,
    pais: "peru",
  },
];
//let tesoroperdix = tesorosPerdidos.find(tesoro => tesoro.nombre ==="santo grial")
/*
console.log("El valor de tu tesoro perdido es ",tesoroperdix.valor);
console.log("El pais de origen de tu tesoro perdido es ",tesoroperdix.pais);
*/
//MAP
let tesoroperdix = tesorosPerdidos.filter((tesoro)=> tesoro.pais==="peru")
 tesoroperdix.map((numero) => {
    console.log("   ",numero.nombre)
  });

  
