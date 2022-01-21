# flink-tech-test
Flink web technical test 

## Resumen del proyecto

Desarrollar una web estilo Tinder mobile first, que incluya las acciones de dicha plataforma, login, registro, home, pantalla principal y acciones estilo Tinder (like/nope), además del cierre de sesión.

# Herramientas

[API](https://flink-web-test.herokuapp.com/)

# Tecnologías usadas

* React
* JS, HTML, CSS
* Axios
* React-router-dom
* SweetAlert2
* Material-UI
* Netlify

## Prototipo

[Prototipo Figma](https://www.figma.com/file/vPvQ7sUDvtopeoWJSb9GmC/Flink-web-test?node-id=0%3A1)

## Desarrollo del proyecto

Se plantearon cuatro historias de usuario principales:

# HU 1 Página principal
Yo como usuario ver en la pantalla principal los botones para ingresar a la plataforma.

* Criterios de aceptación:
    * Pantalla principal
    * Logo de la app
    * Botón para crear cuenta
    * Botón para iniciar sesión

* Definición de terminado:
    * Maquetación de la pantalla de inicio
    * Footer con información básica de la página
    * Logo de la app 
    * Maquetación de los botones principales
    * Botones para redireccionarte a los formularios de registro/inicio de sesión

# HU 2 Formularios
Yo como usuario quiero poder crear mi cuenta con datos básicos y así como especificar qué personas estoy interesada/o por encontrar, además de poder iniciar sesión posteriormente.

* Criterios de aceptación:
    * Poder crear mi cuenta con información básica como correo, contraseña, nombre, edad, género y género de preferencia
    * Poder iniciar sesión con mi correo y contraseña
    * Poder cerrar sesión

* Definición de terminado:
    * Maquetación de formulario de registro con selects para el género del usuario y preferencia de género
    * Solicitar datos obligatoros para personalizar la experiencia
    * Enviar la información de los formularios al servidor para usarlos en el futuro en el inicio de sesión
    * Implementar un botón para cierre de sesión en el header
    * Bloquear la ruta para que una vez cerrada la sesión no se pueda volver atrás en el historial a la página de home

# HU 3 Home
Yo como usuario quiero ver en mi inicio las fotos/tarjetas con información de otros usuarios, de acuerdo a las preferencias especificadas en mi registro.

 * Criterios de aceptación:
    * Pantalla de inicio donde pueda ver a otros usuarios de acuerdo a mis preferencias
    * Barra de navegación con otras funcionalidades de la app

 * Definición de terminado:
    * Maquetar las cards de cada usuario con la imagen, nombre y edad
    * Filtrar las cards de acuerdo al campo de "preferredGender" del formulario de registro
    * Agregar la barra de navegación de la app

# HU 4 Match
Yo como usuario quiero poder hacer match o descartar personas/perfiles

* Criterios de aceptación:
    * Poder darle dislike o like/match a otros usuarios
    * Una sección donde pueda ver los perfiles a los que le di like (nice to have)

* Definición de terminado:
    * Agregar los botones de like/dislike
    * Funcionalidad para ocultar las cards que se descarten
    * Guardar las cards con like en alguna otra sección/vista (nice to have)

## Despliegue de la aplicación

 [App deploy](https://flink-test-app.netlify.app)