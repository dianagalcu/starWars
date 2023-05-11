export async function buscarEspecies(){
   
    const URL= "https://swapi.dev/api/species"

    const PETICION={
        method:"GET"
    }

    let respuestaE=await fetch(URL,PETICION)
    let EspeciesEntregadas=await respuestaE.json()
    return  EspeciesEntregadas
}