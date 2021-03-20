//FOR

for (let pasos = 0 ; pasos < 10; pasos++) {
    console.log("Camina defrente")
    
}

// && y logico, me sirve para unir 2 condiciones o mas condiciones
// || o logco, me sirve para entre 2 o mas valores
// % me sirve para obtener el resto de una division

//voy a imprimir todos los numeros pares que sean menor a 300 usando for


for(let i=0; i<301; i++){
    if(i%2==0){
        console.log( "Nº:" + i);
    }else{

    }
}

for(let i=0; i<301 ; i++){
    if(i%3===0){
        console.log( "Nº Divisible entre 3:" + i);
    } 
    if(i%5===0){
        console.log( "Nº Divisible entre 5:" + i);
    }
    if(i%7===0){
        console.log( "Nº Divisible entre 7:" + i);
    }
}

let acum=0;
let acum2=0;
for(let i=0; i<1001 ; i++){
    if(i%3===0){
        console.log( "Nº Divisible entre 3:" + i);
        acum=i+acum;
    } 
    if(i%5===0){
        console.log( "Nº Divisible entre 5:" + i);
        acum2=i+acum2;
    }
  
  
}
console.log("Nª Suma de divisible entre 3:" + acum);
console.log("Nª Suma de divisible entre 5:" + acum2);


//WHILE
let contador = 0;

while(contador < 10){
  console.log("Will");
  contador++;
}