import DetallesPersonajes from "./detallesPersonajes.js";

// // Funcion IIFE que importa los detallesPersonajes y realiza las peticiones
const llamadosPersonajes = (() => {
  // Aqui van las 3 variables privadas url base de la api, captura del elemento donde se mostrara los resultados y la tercera sin valor asignado para almacenar el resultado que retorne el llamado de la api
  let url = "https://rickandmortyapi.com/api/character/";
  let elementDom = document.getElementsByClassName("resultados")[0];
  let apiContent = null;

  // Funcion privada uno de la primera api
  const consultaDatosuno = async () => {
    try {
      const respuesta = await fetch(url);
      apiContent = await respuesta.json();
      return apiContent;
    } catch (error) {
      console.log(error);
    }
  };

  // Funcion privada dos de la Api

  const getDataPersonaje = async () => {
    $(".spiner").removeClass("d-none");
    try {
      const datoPersonaje = await consultaDatosuno();
      datoPersonaje.results.forEach(async (element) => {
        const id = element.id;
        const respuesta = await fetch(`${url}/${id}`);
        const lista = await respuesta.json();
        elementDom.insertAdjacentHTML(
          "beforeend",
          ` 
          <ul>
          <li>Id: ${lista.id}</li>
          <li>Specie: ${lista.species}</li>
          <a href="#"><img src="${lista.image}"></img></a>
          
          </ul>
          `
        );
      });
    } catch (e) {
      console.log(e);
    } finally {
      $(".spiner").addClass("d-none");
      // $("#cantidadPersonajes").innerHtml = "20";
    }
  };

  getDataPersonaje();
})();

export default llamadosPersonajes;

// Funcion de setTimeOut
// setTimeout(function () {
//   alert("Hello");
// }, 3000);
