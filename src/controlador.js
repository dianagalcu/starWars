import {buscarPlanetas} from "../services/consultar.js"

let fila=document.getElementById("fila")

buscarPlanetas()
.then(function(respuesta){
    respuesta.result.forEach(function(planetas){
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card", "h-100", "shadow")

        let nombre=document.createElement("h3")
        nombre.classList.add("text-center", "fw-bold")
        nombre.textContent=planetas.name

        let clima=document.createElement("p")
        clima.classList.add("text-center", "fw-bold")
        clima.textContent=planetas.name

        tarjeta.appendChild(nombre)
        tarjeta.appendChild(clima)

    })
})
