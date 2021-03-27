
const demoId = document.getElementById("demo");

//console.log(demoId);

demoId.style.border = "5px  solid blue" 

const demoClass = document.getElementsByClassName("demo");

demoClass[0].style.border = "2px  dashed yellow"
demoClass[1].style.border = "1px  dotted red"

for (let i = 0; i < demoClass.length; i++) {
    
    demoClass[i].style.border = "3px dotted green" 
    
}
const demoTag = document.getElementsByTagName("article")
console.log(demoTag)
/*
for( elementoHtml in demoTag){

    demoTag[elementoHtml].style.border = "6px solid orange"
}*/
let elementoHtml = 0
 while ( elementoHtml < demoTag.length) {
    demoTag[elementoHtml].style.border = "6px solid black"
    elementoHtml++
}

const demoQuery = document.querySelector("#demo-query")
//console.log(demoQuery)

demoQuery.style.border = "3px solid lightgreen" 

const demoQueryAll = document.querySelectorAll(".demo-query-all")
console.log(demoQueryAll)

demoQueryAll.forEach(elemento=>{ elemento.style.border = "3px solid pink"})



const demoTitle = document.getElementById("titulo");


