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

  const getDataPersonaje = async () => {
    const datoPersonaje = await consultaDatosuno();
    datoPersonaje.results.forEach(async (element) => {
      const id = element.id;
      const respuesta = await fetch(`${url}/${id}`);
      const lista = await respuesta.json();
      elementDom.insertAdjacentHTML(
        "beforeend",
        ` 
        <ul>
                <li>${lista.id}</li>
                <li>${lista.name}</li>
                <li>${lista.image}</li>
            </ul>
      `
      );
    });
  };

  getDataPersonaje();
})();
