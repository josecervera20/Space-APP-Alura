// Usamos la DEMO_KEY de la NASA para este ejemplo.
// Ten en cuenta que esta clave tiene límites de uso muy bajos (30 req/hora, 50 req/día por IP).
// Para uso prolongado o mayor tráfico, se recomienda obtener tu propia clave gratuita en api.nasa.gov.
const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15";

/**
 * @async
 * @function listaImagenes
 * @description Obtiene 15 imágenes astronómicas del día de la API de la NASA
 * y las muestra en la interfaz de usuario.
 * @returns {Promise<void>} Una promesa que se resuelve cuando las imágenes son cargadas y mostradas,
 * o se rechaza si ocurre un error durante la carga.
 */
async function listaImagenes() {
  try {
    // Realiza la solicitud a la API de la NASA.
    const fetchImagen = await fetch(url);

    // Verifica si la respuesta de la red fue exitosa.
    if (!fetchImagen.ok) {
      throw new Error(
        `Error de red o API: ${fetchImagen.status} - ${fetchImagen.statusText}`
      );
    }

    // Parsea la respuesta JSON.
    const datosImagenes = await fetchImagen.json();

    // Selecciona el contenedor de las tarjetas en el DOM.
    const cardContainer = document.querySelector("[data-ul]");
    // Crea un fragmento de documento para optimizar la inserción en el DOM.
    const fragment = document.createDocumentFragment();

    // Itera sobre cada imagen obtenida para crear su tarjeta.
    datosImagenes.forEach((elemento) => {
      // Crea el elemento <li> para la tarjeta.
      const listItem = document.createElement("li");
      listItem.classList.add("card");

      // Crea el elemento <img> para la imagen de la tarjeta.
      const img = document.createElement("img");
      img.classList.add("card__image");
      img.src = elemento.url;
      img.alt = elemento.title || "Imagen astronómica de la NASA"; // Texto alternativo para accesibilidad.

      // Crea el elemento <h3> para el título de la tarjeta.
      const title = document.createElement("h3");
      title.classList.add("card__title");
      title.textContent = elemento.title; // Usa textContent para seguridad.

      // Adjunta la imagen y el título al elemento de la lista.
      listItem.appendChild(img);
      listItem.appendChild(title);

      // Añade el elemento de la lista al fragmento.
      fragment.appendChild(listItem);
    });

    // Adjunta el fragmento completo al contenedor en el DOM (una sola operación).
    cardContainer.appendChild(fragment);
  } catch (error) {
    // Captura y maneja cualquier error durante el proceso.
    console.error("Hubo un error al cargar las imágenes:", error);

    // Muestra un mensaje de error amigable en la interfaz de usuario.
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Lo sentimos, no pudimos cargar las imágenes. Por favor, intenta de nuevo más tarde.";
    errorMessage.style.color = "#e4e4e4";
    errorMessage.style.marginBottom = "20px";

    // Intenta añadir el mensaje al contenedor de tarjetas, o al cuerpo si no existe.
    if (document.querySelector("[data-ul]")) {
      document.querySelector("[data-ul]").appendChild(errorMessage);
    } else {
      document.body.appendChild(errorMessage);
    }
  }
}

// Llama a la función para iniciar la carga de imágenes al cargar la página.
listaImagenes();
