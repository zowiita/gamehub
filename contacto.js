// Manejar el envío del formulario de contacto
document.addEventListener("DOMContentLoaded", function() {
	var formulario = document.getElementById("form-contacto");
	var mensajeEnviado = document.getElementById("mensaje-enviado");

	formulario.addEventListener("submit", function(e) {
		e.preventDefault();

		// Validar campos
		var nombre = document.getElementById("nombre").value.trim();
		var email = document.getElementById("email").value.trim();
		var asunto = document.getElementById("asunto").value.trim();
		var mensaje = document.getElementById("mensaje").value.trim();

		if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
			alert("Por favor, completa todos los campos.");
			return;
		}

		// Validar formato de email básico
		var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			alert("Por favor, ingresa un email válido.");
			return;
		}

		// Simular envío (en un caso real, aquí se enviaría al servidor)
		formulario.style.display = "none";
		mensajeEnviado.style.display = "block";

		// Opcional: resetear formulario después de 5 segundos
		setTimeout(function() {
			formulario.reset();
			formulario.style.display = "block";
			mensajeEnviado.style.display = "none";
		}, 5000);
	});
});

