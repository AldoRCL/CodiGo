let contador = 0;

while(contador<10){
    console.log(contador);
    contador++;
}
function recursividad(contador) {
    if(contador>=10){
        return;
    }

    console.log(contador);

    return recursividad(contador++);
}

recursividad(10);