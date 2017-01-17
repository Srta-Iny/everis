$(document).ready(function() {
    $('select').material_select();
  });

$('#subir').click(function(es){
	// primero evitamos que se envie el formulario
	es.preventDefault();

	// pescamos archivo de la imagen
	var archivo = $('#input').get(0).files[0];

	// creamos FileReader
	var reader = new FileReader();

	// le decimos al filereader que hacer cuando termine de cargar
	reader.onloadend = function(efr) {
		var datos_imagen = reader.result;
		// se guarda imagen en localStorage
		localStorage.setItem('logo', datos_imagen);
		alert('Imagen guardada correctamente');
	};

	// finalmente leemos la imagen
	reader.readAsDataURL(archivo);
});

// queda que al carga la página. recuperar imagen del localStorage
$(document).ready(function(){
	// aca va el codigo que se ejecuta al cargar la página
	
	// primero recuperamos datos del localStorage
	var logo_data = localStorage.getItem('logo');

	// cambiamos la foto por defecto
	if(logo_data) {
		$('.mvAvatar').attr('src', logo_data);
	}
});
