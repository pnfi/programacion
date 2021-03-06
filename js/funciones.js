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

//
//ej14 Delegacion
//
const mostrarBotones14 = document.querySelector('#mostrarBotones14');
const botones14 = document.querySelector('#botones14');
console.log (mostrarBotones14);

(()=>{
	mostrarBotones14.addEventListener('click', mostrarBotones)
})();

function mostrarBotones(e){
	e.preventDefault();
	botones14.innerHTML = ´
	<button id="btnAmarillo" class="btn btn-warning">Fondo Amarillo</button>
	<button id="btnAzul" class="btn btn-primary">Fondo Azul</button>
	<button id="btnRojo" class="btn btn-danger">Fondo Rojo</button>
	<button id="btnVerde" class="btn btn-success">Fondo Verde</button>
	<button id="btnGris" class="btn btn-dark">Fondo Gris</button>
	´;
};