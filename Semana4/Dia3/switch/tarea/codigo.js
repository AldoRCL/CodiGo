const select = document.querySelector("select");
const parrafo = document.querySelector("p");
const titulo = document.querySelector("h1");

select.addEventListener("change", mostrarCanciones);

function mostrarCanciones(){
    let eleccion = select.value;
    let contenido = eleccion.value;

    switch (eleccion) {
        case "mi-qr":
            titulo.textContent = contenido;
            parrafo.textContent = `Ya pe sobrino
        No te compliques con tus pagos
        Escucha a tu tía Susy
        Para que veas cómo hago
        Muchacho, quieres mi número
        Pero, no te conozco
        Si quieres, te doy mi Q, mi Q, mi QR
        Eso sí te doy
        Te enseño mi Q, te enseño mi Q
        Mi QR para que me yapees tú
        Te enseño mi Q, te enseño mi Q
        Mi QR para que me yapees tú
        Como te yapeo, ah!
        Así rapidito, sí!
        ¿Quieres que te paguen ya?
        Muestra tu QR, así!
        Claro pues sobrino
        Yo hago la dieta de la chicha de jora
        Me puedes yapear las 24 horas
        Te enseño mi Q, te enseño mi Q
        Mi QR para que me yapees tú
        Te enseño mi Q, te enseño mi Q
        Mi QR para que me yapees tú, tú tú.`;
            break;
        case "me-ah-rechazado":
            titulo.textContent = contenido;
            parrafo.textContent = `Ese chico de ahí
        Me ha recha-, me ha recha-, me ha rechazado mi corazón
        Ese chico de ahí
        Me ha recha-, me ha recha-, me ha rechazado mi corazón
        Tienes tu pin-, tienes tu pin-, pinta de seductor
        Para a mi cu-, para a mi cu-, cuerpo bien hermoso
        Déjame un ram-, déjame un ram-, ramo de flores
        Para mi cu-, para mi cumpleaños
        A gozar con Susy Díaz
        Y Víctor Guzmán
        Ese chico de ahí
        Me ha recha-, me ha recha-, me ha rechazado mi corazón
        Ese chico de ahí
        Me ha recha-, me ha recha-, me ha rechazado mi corazón
        Tienes tu pin-, tienes tu pin-, pinta de seductor
        Para a mi cu-, para a mi cu-, cuerpo bien hermoso
        Déjame un ram-, déjame un ram-, ramo de flores
        Para mi cu-, para mi cumpleaños`;
            break;
        case "la-trompeta":
            titulo.textContent = contenido;
            parrafo.textContent = `Te toco la trompeta (si señor)
        Te toco la trompeta (como no) bis
        
        Le gusta los instrumentos
        -El órgano
        Tócalo
        -La Corneta
        Soplalo
        -La Trompeta
        Siéntelo
        
        Que rico, que rico se siente
        Tener la trompeta en la boca (bis)

        1 2 3
        Susy
        
        Tócalo suavecito hasta que le salga
        El sonidito
        
        Te toco la trompeta (si señor)
        Te toco la trompeta (como no) bis
        
        Le gusta los instrumentos
        -El órgano
        Tócalo
        -La Corneta
        Soplalo
        -La Trompeta
        Siéntelo
        
        Que rico, que rico se siente
        Tener la trompeta en la boca (bis)`;
            break;
        case "vive-la-vida":
            titulo.textContent = contenido;
            parrafo.textContent = `Vive la vida y no dejes que la vida te viva
        Vive la vida y no dejes que la vida te viva
        
        La vida es una sola y tienes que disfrutar
        Y siempre hay que gozar
        Todos tenemos que bailar
        
        Los días tienes que vivir con mucha alegría
        Y tienes que convertirlo en algarabía
        Y viene el paso de Susy Diaz
        
        Derecha, derecha
        Izquierda, izquierda
        Delante, delante
        Atrás, atrás (bis)
        
        Y redondo, redondo
        Y de redondillas, de redondillas, de redondillas
        Y redondo, redondo
        Y de redondillas, de redondillas, de redondillas
        
        Mueve la cabeza o se pone tiesa
        mueve la cabeza
        Mueve la cabeza o se pone tiesa
        mueve la cabeza
        Mueve la cabeza o se pone tiesa
        mueve la cabeza
        Mueve la cabeza o se pone tiesa
        mueve la cabeza`;
            break;
        default:
            titulo.textContent = "";
            parrafo.textContent = "Debes eleccionar una cancion";
            break;
    }
}