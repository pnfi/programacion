//
//ej14 Delegacion
//
const mostrarBotones14 = document.querySelector('#mostrarBotones14');
const botones14 = document.querySelector('#botones14');
const fondo = document.querySelector('#botones14');


(()=>{
	mostrarBotones14.addEventListener('click', mostrarBotones);
	botones14.addEventListener('click', delegar);
})();

function delegar(e){
	e.preventDefault();
	const colorBtn = e.target.classList[1];
	switch(colorBtn){
		case ('btn-warning') : fondo.className = 'bg-warning jumbotron'; break;
		case ('btn-primary') : fondo.className = 'bg-primary jumbotron'; break;
		case ('btn-danger') : fondo.className = 'bg-danger jumbotron'; break;
		case ('btn-success') : fondo.className = 'bg-success jumbotron'; break;
		case ('btn-dark') : fondo.className = 'bg-dark jumbotron'; break;
	}
}

function mostrarBotones(e){
	e.preventDefault();
	botones14.innerHTML = `
		<span id="btnAmarillo" class="btn btn-warning">Fondo Amarillo</span>
		<span id="btnAzul" class="btn btn-primary">Fondo Azul</span>
		<span id="btnRojo" class="btn btn-danger">Fondo Rojo</span>
		<span id="btnVerde" class="btn btn-success">Fondo Verde</span>
		<span id="btnGris" class="btn btn-dark">Fondo Gris</span>
	`;
}
