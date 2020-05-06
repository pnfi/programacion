//
//ej13 Cambiar Color de Fondo
//

var btnMostrarBotones = document.getElementById("btnMostrarBotones");
var ejemplo = document.getElementById("ejemplo");
var btnAmarillo = document.getElementById('btnAmarillo')
var btnAzul = document.getElementById('btnAzul')
var btnRojo = document.getElementById('btnRojo')
var btnVerde = document.getElementById('btnVerde')
var btnGris = document.getElementById('btnGris')

btnMostrarBotones.onclick = function(){
	btnAmarillo.style.display="inline-block";
	btnAzul.style.display="inline-block";
	btnRojo.style.display="inline-block";
	btnVerde.style.display="inline-block";
	btnGris.style.display="inline-block";
}

btnOcultarBotones.onclick = function(){
	btnAmarillo.style.display="none";
	btnAzul.style.display="none";
	btnRojo.style.display="none";
	btnVerde.style.display="none";
	btnGris.style.display="none";
}

btnAmarillo.onclick = function(){ejemplo.style.background="#ffc107";}
btnAzul.onclick = function(){ejemplo.style.background="#0069d9";}
btnRojo.onclick = function(){ejemplo.style.background="#c82333";}
btnVerde.onclick = function(){ejemplo.style.background="#218838";}
btnGris.onclick = function(){ejemplo.style.background="#6c757d";}