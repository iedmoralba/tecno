let fondo2 = document.getElementById('fondo2');
let icono_tiempo = document.getElementById('icono_tiempo');
let tiempo = document.getElementById('tiempo');
let escudo2 = document.getElementById('escudo2');
let pendon2 = document.getElementById('pendon2');
let marca2 = document.getElementById('marca2');
let icono_aciertos = document.getElementById('icono_aciertos');
let aciertos = document.getElementById('aciertos');
let fondo3 = document.getElementById('fondo3');
let pendon3 = document.getElementById('pendon3');
let escudo3 = document.getElementById('escudo3');
let medalla = document.getElementById('medalla');
let txt1 = document.getElementById('txt1');
let txt2 = document.getElementById('txt2');
let marca3 = document.getElementById('marca3');
let icono_aciertos1 = document.getElementById('icono_aciertos1');
let tiempo1 = document.getElementById('tiempo1');
let icono_tiempo1 = document.getElementById('icono_tiempo1');
let aciertos2 = document.getElementById('aciertos2');
let fondo4 = document.getElementById('fondo4');
let pendon4 = document.getElementById('pendon4');
let escudo4 = document.getElementById('escudo4');
let libros = document.getElementById('libros');
let txt3 = document.getElementById('txt3');
let txt4 = document.getElementById('txt4');
let marca4 = document.getElementById('marca4');
let recargar = document.getElementById('recargar');
let icono_tiempo2 = document.getElementById('icono_tiempo2');
let tiempo2 = document.getElementById('tiempo2');
let icono_aciertos2 = document.getElementById('icono_aciertos2');
let aciertos3 = document.getElementById('aciertos3');
let appname = document.getElementById('appname');
let appsection = document.getElementById('appsection');
let btn_play = document.getElementById('btn_play');
let fondo1 = document.getElementById('fondo1');
let pendon1 = document.getElementById('pendon1');
let escudo1 = document.getElementById('escudo1');
let marca1 = document.getElementById('marca1');
let fondoms = document.getElementById('fondoms');
let coin = document.getElementById('coin');
let mal = document.getElementById('mal');
let completo = document.getElementById('completo');

let monitor = document.getElementById('monitor');
let res = document.querySelectorAll('.res');
let startTime = null;
let tablas = [];
let resp;
let play = true;
let limite = 20;
let indice_limite = 0;

let banco_imagenes = ['files/03.btn_play.svg', 'files/tiempo.png', 'files/aciertos.png', 'files/medalla (1).png', 'files/educacion.png', 'files/recargar.png'];
let banco_sonidos = ['files/fondo1.mp3', 'files/coin.mp3', 'files/bad.mp3', 'files/finsesion.mp3'];
let banco_videos = [];
let lienzoActivo = 0;
let varonload = false;
let varmain = false;
window.onload = function() {
	varonload = true;
	revisarLoad();
}

function main() {
	varmain = true;
	revisarLoad();
}

function revisarLoad() {
	if (varonload === true && varmain === true) {
		console.log("Todo cargado.");
		iniciar();
	}
}

function iniciar() {
	fondoms.volume = 0.5;
	generarTablas();
	aplicarCiclo();
	agregarEventos();
}

function mostrarLienzo(n) {
	let lienzos = document.querySelectorAll(".lienzo");
	lienzos.forEach(function(item) {
		item.style.display = "none";
	});
	lienzos[n].style.display = "block";
	lienzoActivo = n;
}

function agregarEventos() {
	btn_play.addEventListener('click', function() {
		mostrarLienzo(1);
		fondoms.play();
		animarEntrada();
		iniciarTimer();
	});

	res.forEach(function(item) {
		item.addEventListener('click', function() {
			if (play) {
				let valor = this.textContent;
				if (Number(valor) === resp) {
					console.log("bien");
					indice_limite=indice_limite+1;
					if(indice_limite===limite){
						pararTimer();
						sumarAciertos();
						reproducir(completo);
						pasarValores();
						mostrarLienzo(2);
					}else{
						reproducir(coin);
						sumarAciertos();
						aplicarCiclo();
					}
				} else {
					console.log("mal");
					pararTimer();
					reproducir(mal);
					pasarValores();
					this.style.background = "red";
					play = false;
					setTimeout(function() {
						mostrarLienzo(3);
					}, 3000);
				}
			}
		});
	});

	monitor.addEventListener("animationend", function() {
		this.classList.remove('bounceIn');
	});

	res.forEach(function(item) {
		item.addEventListener('animationend', function() {
			this.classList.remove('bounceIn');
		});
	});

	recargar.addEventListener('click',function(){
		window.location.reload();
	});
}

function aplicarCiclo() {
	let op = seleccionarOperacion();
	let r = procesarOperacion(op);
	mostrarEjercicio(op, r);
	animarEntrada();
}

function animarEntrada() {
	monitor.classList.add('bounceIn');
	res.forEach(function(item) {
		item.classList.add('bounceIn');
	});
}

function generarTablas() {
	let tabla = [];
	for (let i = 2; i < 11; i++) {
		for (let j = 0; j < 11; j++) {
			let l = `${i} x ${j}`;
			tabla.push(l);
		}
		//console.log(tabla);
		tablas.push(tabla);
		tabla = [];
	}
}

function seleccionarOperacion() {
	desordenarArray(tablas);
	let tabla = tablas[0];
	tabla = desordenarArray(tabla);
	//console.log(tabla);
	let ejercicio = tabla[0];
	//console.log(ejercicio);
	tabla.shift();
	//console.log(tabla);
	return (ejercicio);
}

function desordenarArray(array) {
	return array.sort(() => Math.random() - 0.5);
}

function procesarOperacion(txt) {
	let op = txt.split('x');
	resp = Number(op[0]) * Number(op[1]);
	//console.log(resp)
	let base = resp;
	let r = [];
	r.push(resp);
	for (let i = 0; i < 3; i++) {
		base = base + 2;
		r.push(base);
	}
	desordenarArray(r);
	return (r);
}

function mostrarEjercicio(ejer, array) {
	monitor.textContent = ejer;
	res.forEach(function(item, index) {
		item.textContent = array[index];
	});
}

function reproducir(sound) {
	let nsound = sound.cloneNode(true);
	nsound.play();
}

function sumarAciertos() {
	let valor = Number(aciertos.textContent);
	valor = valor + 1;
	aciertos.textContent = valor;
}

function pasarValores() {
	let valort = tiempo.textContent;
	let valora = aciertos.textContent;
	let t = document.querySelectorAll('.tiempo');
	t.forEach(function(item) {
		item.textContent = valort;
	});
	let a = document.querySelectorAll('.aciertos');
	a.forEach(function(item) {
		item.textContent = valora;
	});

}
