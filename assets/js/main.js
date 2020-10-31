//import { DetallesPersonajes } from "./detallesPersonajes.js";

// Funcion IIFE que importa los detallesPersonajes y realiza las peticiones
var llamadosPersonajes = (() => {
  // Aqui van las 3 variables privadas url base de la api, captura del elemento donde se mostrara los resultados y la tercera sin valor asignado para almacenar el resultado que retorne el llamado de la api
  const baseUrl = "https://rickandmortyapi.com/api/character/";
  const elementDom = document.getElementsByClassName("resultados");
  //const contentApi = dataUno;

  // Funcion privada uno de la primera api
  const consultaDatosuno = async () => {
    try {
      const url = baseUrl;
      const consulta = await fetch(url);
      const dataUno = await consulta.json();
      return dataUno;
    } catch (error) {
      console.log(error);
    }
  };

  // Funcion privada dos de la segunda api
  const consultaDatosdos = async ({ id }) => {
    try {
      const url = "https://rickandmortyapi.com/api/character/{id}";
      const consultaDos = await fetch(url);
      const dataDos = await consultaDos.json();
      return dataDos;
    } catch (error) {
      console.log(error);
    }
  };

  return function Personajes() {
    datos = consultaDatosuno();
    datos.forEach((a) => {
      elementDom.insertAdjacentHTML(
        "afterend",
        `
           <ul>
           <li><strong>${a.results[2].image}</strong></li>
           <span>${a.body}</span>
            </ul>
       `
      );
    });
  };
})();

export default llamadosPersonajes;
