function banner(){

var  imgBanner = [
	'<img class="m-1" src="img/iconos/485-html-five.png">',
	'<img class="m-1" src="img/iconos/487-css3.png">',
	'<img class="m-1" src="img/iconos/493-bootstrap.png">',	
	'<img class="m-1" src="img/iconos/492-js.png">',
	'<img class="m-1" src="img/iconos/488-git.png">',
	'<img class="m-1" src="img/iconos/433-github.png">',
	'<img class="m-1" src="img/iconos/386-terminal.png">',
	'<img class="m-1" src="img/iconos/458-linkedin.png">',
	];

document.write('<div class="p-2 bg-primary">');
	for (var iBanner=0; iBanner<imgBanner.length; iBanner++){
		document.write(imgBanner[iBanner]);
	}
document.write('</div>');

}