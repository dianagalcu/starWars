
import {buscarPlanetas} from "../services/consultarPlanetas.js"
import {buscarEspecies} from "../services/consultarEspecies.js"

console.log(buscarEspecies)

let fila=document.getElementById("fila")

buscarPlanetas()
.then(function(respuesta){
    respuesta.results.forEach(function(planetas){
        let columna=document.createElement("div")
        columna.classList.add("col","mb-3")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let nombre=document.createElement("h3")
        nombre.classList.add("text-center","fw-bold")
        nombre.textContent=planetas.name

        let clima=document.createElement("p")
        clima.classList.add("text-center","fw-bold")
        clima.textContent=`Clima: ${planetas.climate}`

        let gravedad=document.createElement("p")
        gravedad.classList.add("text-center","fw-bold")
        gravedad.textContent=`Gravedad: ${planetas.gravity}`

        let poblacion=document.createElement("p")
        poblacion.classList.add("text-center","fw-bold")
        poblacion.textContent=`Población: ${planetas.population}`

        tarjeta.appendChild(nombre)
        tarjeta.appendChild(clima)
        tarjeta.appendChild(gravedad)
        tarjeta.appendChild(poblacion)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
})

let filaE=document.getElementById("filaE")

buscarEspecies()
.then(function(respuestaE){
    respuestaE.results.forEach(function(especies){
        let columna=document.createElement("div")
        columna.classList.add("col","mb-3")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let nombre=document.createElement("h3")
        nombre.classList.add("text-center","fw-bold")
        nombre.textContent=especies.name

        let clasificacion=document.createElement("p")
        clasificacion.classList.add("text-center","fw-bold")
        clasificacion.textContent=`Clasificación: ${especies.classification}`

        let lenguaje=document.createElement("p")
        lenguaje.classList.add("text-center","fw-bold")
        lenguaje.textContent=`Lenguaje: ${especies.language}`

        let colorCabello=document.createElement("p")
        colorCabello.classList.add("text-center","fw-bold")
        colorCabello.textContent=`Color de cabello: ${especies.hair_colors}`

       
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(clasificacion)
        tarjeta.appendChild(lenguaje)
        tarjeta.appendChild(colorCabello)
        columna.appendChild(tarjeta)
        filaE.appendChild(columna)
    })
})
