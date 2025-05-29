# 🚀 SpaceApp

## 📝 Descripción

SpaceApp es una aplicación web simple que interactúa con la **API de la NASA** para **mostrar la "Imagen Astronómica del Día" (APOD)**. Este proyecto es una demostración práctica de cómo manejar **operaciones asíncronas en JavaScript** desde el frontend, utilizando la `Fetch API`, **Promesas** y las funciones `async/await` para una gestión eficiente y robusta de los datos, incluyendo el manejo de errores con `try...catch`.

## 🌟 Características

- **Visualización de Imágenes APOD:** Carga y muestra una lista de imágenes astronómicas diarias proporcionadas por la API de la NASA.
- **JavaScript Asíncrono:** Demuestra el funcionamiento del código síncrono y asíncrono para consumir datos externos.
- **Uso de la Fetch API:** Realiza solicitudes HTTP eficientes a la API de la NASA.
- **Gestión de Promesas:** Aplica los conceptos de **Promises** en el contexto de funciones asíncronas.
- **Funciones `async/await`:** Utiliza `async` y `await` para escribir código asíncrono más legible y estructurado.
- **Manejo de Errores:** Implementa la captura y visualización de posibles errores en las solicitudes a la API con un bloque `try...catch`, mejorando la experiencia del usuario.

## 🔧 Tecnologías utilizadas

- **HTML:** Estructura del contenido.
- **CSS:** Estilos y diseño responsivo.
- **JavaScript:** Lógica de la aplicación, manejo de la API y manipulación del DOM.
- **Fetch API:** Para realizar peticiones HTTP.
- **Promises:** Para la gestión de operaciones asíncronas.
- **Async/Await:** Para simplificar el código asíncrono.

## 🔑 Uso de la API Key

Este proyecto utiliza la **`DEMO_KEY`** proporcionada por la NASA, lo que te permite ejecutar la aplicación inmediatamente sin necesidad de configuración adicional.

**Importante:** La `DEMO_KEY` tiene límites de uso muy bajos (30 solicitudes por hora y 50 por día por dirección IP). Si planeas un uso más intensivo o prolongado de la aplicación, te recomendamos obtener tu propia clave de API personal.

**Cómo obtener tu propia API Key de la NASA:**

1.  Visita el sitio web oficial de la API de la NASA: [https://api.nasa.gov/](https://api.nasa.gov/)
2.  Completa el formulario de registro. Tu clave de API se enviará a tu correo electrónico.
3.  Una vez que tengas tu clave, puedes reemplazar `DEMO_KEY` en la línea 4 de `script.js` con tu clave personal para disfrutar de límites de solicitud más altos (1,000 por hora).

## 🛠️ Instalación y uso

1.  **Clona el repositorio del proyecto:**
    ```bash
    git clone https://github.com/josecervera20/Space-APP-Alura.git
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd Space-APP-Alura
    ```
3.  **Abre la aplicación:**
    - Simplemente abre el archivo `index.html` en tu navegador web. La aplicación cargará las imágenes automáticamente usando la `DEMO_KEY`.

## 👏 Créditos

Este proyecto fue desarrollado como parte del curso **"JavaScript: Consumiendo y Manejando Datos de una API"** en la plataforma Alura.
