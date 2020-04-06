//
// Header
//
function header (){
	document.write('<h4 class="display-4">Ejemplos Practicos de JavaScript</h4> <p class="lead">Esta Hoja contiene ejemplos de ejercicios básicos sobre lo que se puede hacer con javascript</p>')
}

//
// Banner
//
//var banner = new Array();
//banner.push('<img class="m-1" src="../img/iconos/485-html-five.png">');
//banner.push('<img class="m-1" src="../img/iconos/487-css3.png">');
//banner.push('<img class="m-1" src="../img/iconos/492-js.png">	');
//banner.push('<img class="m-1" src="../img/iconos/488-git.png">');
//banner.push('<img class="m-1" src="../img/iconos/386-terminal.png">');


function banner(){

var  imgBanner = [
	'<img class="m-1" src="../img/iconos/485-html-five.png">',
	'<img class="m-1" src="../img/iconos/487-css3.png">',
	'<img class="m-1" src="../img/iconos/493-bootstrap.png">',	
	'<img class="m-1" src="../img/iconos/492-js.png">',
	'<img class="m-1" src="../img/iconos/488-git.png">',
	'<img class="m-1" src="../img/iconos/433-github.png">',
	'<img class="m-1" src="../img/iconos/386-terminal.png">',
	'<img class="m-1" src="../img/iconos/458-linkedin.png">',
	];

document.write('<div class="p-2 bg-primary">');
	for (var iBanner=0; iBanner<imgBanner.length; iBanner++){
		document.write(imgBanner[iBanner]);
	}
document.write('</div>');

}

//
// Menú
//

function menu(){
	var menu = new Array();
	menu.push('<a class="btn btn-success btn-block" href="sobre_javascript.html" role="button" target="_blank">Sobre JavaScript</br><span class="badge text-wrap">Un poco de historia</span></a>');
	menu.push('<a class="btn btn-danger btn-block" href="notas.html" role="button" target="_blank">Notas</br><span class="badge text-wrap">Observaciones importantes</span></a>');
	menu.push('<a class="btn btn-info btn-block" href="ej01.html" role="button" target="_blank">Ejemplo 01</br><span class="badge text-wrap">document.write</span></a>');
	menu.push('<a class="btn btn-info btn-block" href="ej02.html" role="button" target="_blank">Ejemplo 02</br><span class="badge text-wrap">Alertas</span></a>');
	menu.push('<a class="btn btn-info btn-block" href="ej03.html" role="button" target="_blank">Ejemplo 03</br><span class="badge text-wrap">Nombrar una variable</span></a>');
	menu.push('<a class="btn btn-info btn-block" href="ej04.html" role="button" target="_blank">Ejemplo 04</br><span class="badge text-wrap">Capturar una variable con prompt</span></a>');
	menu.push('<a class="btn btn-info btn-block" href="ej05.html" role="button" target="_blank">Ejemplo 05</br><span class="badge text-wrap">Operaciones matemáticas</span></a>');
	menu.push('<a class="btn btn-info btn-block" href="ej06.html" role="button" target="_blank">Ejemplo 06</br><span class="badge text-wrap">Capturar 2 variables y sumarlas</span></a>');
	menu.push('<a class="btn btn-info btn-block" href="ej07.html" role="button" target="_blank">Ejemplo 07</br><span class="badge text-wrap">Usar console.log</span></a>');
	menu.push('<a class="btn btn-info btn-block" href="ej08.html" role="button" target="_blank">Ejemplo 08</br><span class="badge text-wrap">Contenedores de Variables</span></a>');
	menu.push('<a class="btn btn-info btn-block" href="ej09.html" role="button" target="_blank">Ejemplo 09</br><span class="badge text-wrap">Uso del if(){}</span></a>');
	menu.push('<a class="btn btn-info btn-block" href="ej10.html" role="button" target="_blank">Ejemplo 10</br><span class="badge text-wrap">Uso del if(){} else{}</span></a>');
	menu.push('<a class="btn btn-info btn-block" href="ej11.html" role="button" target="_blank">Ejemplo 11</br><span class="badge text-wrap">while(){}</span></a>');
	menu.push('<a class="btn btn-info btn-block" href="ej12.html" role="button" target="_blank">Ejemplo 12</br><span class="badge text-wrap">for(){}</span></a>');
	menu.push('<a class="btn btn-info btn-block disabled" href="ej00.html" role="button" target="_blank">Ejemplo 13</br><span class="badge text-wrap"></span></a>');
	menu.push('<a class="btn btn-info btn-block disabled" href="ej00.html" role="button" target="_blank">Ejemplo 14</br><span class="badge text-wrap"></span></a>');
	menu.push('<a class="btn btn-info btn-block disabled" href="ej00.html" role="button" target="_blank">Ejemplo 15</br><span class="badge text-wrap"></span></a>');

	for (var iMenu=0; iMenu<menu.length; iMenu++){
		document.write(menu[iMenu]);
	}
}