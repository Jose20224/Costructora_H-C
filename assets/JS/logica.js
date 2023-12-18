window.onload= function(){
  console.log("Se a cargado correctamente el sitio web");  
};

  // Función para mostrar un mensaje en la consola al hacer clic en una imagen
  function mostrarMensaje(mensaje) {
    console.log(mensaje);
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////
  // Obtén la imagen de construcción por su clase
  var imagenConstruccion = document.querySelector('.construccion');

  // Agrega un evento de clic a la imagen de construcción
  imagenConstruccion.addEventListener('click', function(event) {

    // Muestra el mensaje en la consola
    mostrarMensaje('Usted va a el área de construcciones o proyectos');
  });
////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Obtén la imagen de diseño de planos por su clase
  var imagenDiseñoPlanos = document.querySelector('.plano');

  // Agrega un evento de clic a la imagen de diseño de planos
  imagenDiseñoPlanos.addEventListener('click', function(event) {

    // Muestra el mensaje en la consola
    mostrarMensaje('Usted va a el área de diseños de planos');
  });
////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Obtén la imagen de remodelación por su clase
  var imagenRemodelacion = document.querySelector('.remodelacion');

  // Agrega un evento de clic a la imagen de remodelación
  imagenRemodelacion.addEventListener('click', function(event) {

    // Muestra el mensaje en la consola
    mostrarMensaje('Usted va a el área de remodelaciones');
  });
////////////////////////////////////////////////////////////////////////////////////////////////////////