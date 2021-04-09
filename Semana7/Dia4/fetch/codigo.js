const url = "https://pokeapi.co/api/v2/pokemon/136/";

fetch(url)
.then(respuesta => respuesta.json())
.then(data => {
    const elemento = document.getElementById("elemento")
    elemento.innerHTML = `
            <p>${data.name}</p>
            <p>${data.order}</p>
            <img src="${data.sprites.front_default}">
    `
    console.log(data)

}).catch(error => new Error(error.message)) 