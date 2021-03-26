//objeto date ara trabajar con fechas(tiempo)

const ahora = new Date()
console.log(ahora)

//getTime() me devuelve la cantidad de miliseg que pasaron desde 1 enero de 1970
const milisegundos = ahora.getTime();
console.log(milisegundos);


const fechaCero = new Date(0);
console.log(fechaCero)

const fechaUniversal = Date.UTC(milisegundos)

const fechaCeroConMilisegundos = new Date(31557600000 * 51)
console.log(fechaCeroConMilisegundos);

const fechaString = new Date("July 28 1821 12:00");
console.log( fechaString)


const anho = fechaString.getFullYear();

const mes = fechaString.getMonth();

const diaMes = fechaString.getDate(); //0-31

const diaSemana = fechaString.getDay(); //0-6

fechaString.setFullYear("1824");
console.log(fechaString.getFullYear())

function obtenerEdad(anhoNacimiento) {

    const fechaActual = new Date(anhoNacimiento);

    const anho = +(fechaActual.getFullYear() - anhoNacimiento.getFullYear);
    const mes = +(fechaActual.getMonth() - anhoNacimiento.getMonth);
    const dia= +(fechaActual.getDate() - anhoNacimiento.getDate) ;
    const hora = +(fechaActual.getDay() - anhoNacimiento.getDay);

    return anho;


}


console.log(obtenerEdad("July 06 2001 10:40"));
