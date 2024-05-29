let fondo2 = document.getElementById('fondo2');
let pendon2 = document.getElementById('pendon2');
let escudo2 = document.getElementById('escudo2');
let tniveles = document.getElementById('tniveles');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let n3 = document.getElementById('n3');
let n4 = document.getElementById('n4');
let n5 = document.getElementById('n5');
let n6 = document.getElementById('n6');
let n7 = document.getElementById('n7');
let n8 = document.getElementById('n8');
let n9 = document.getElementById('n9');
let n10 = document.getElementById('n10');
let marca2 = document.getElementById('marca2');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');
let pendon3 = document.getElementById('pendon3');
let escudo3 = document.getElementById('escudo3');
let marca3 = document.getElementById('marca3');
let r0 = document.getElementById('r0');
let r1 = document.getElementById('r1');
let r3 = document.getElementById('r3');
let r4 = document.getElementById('r4');
let sil0 = document.getElementById('sil0');
let sil1 = document.getElementById('sil1');
let sil2 = document.getElementById('sil2');
let sil3 = document.getElementById('sil3');
let sil4 = document.getElementById('sil4');
let sil5 = document.getElementById('sil5');
let sil6 = document.getElementById('sil6');
let sil7 = document.getElementById('sil7');
let cont_imgs = document.getElementById('cont_imgs');
let btnRead = document.getElementById('btnRead');
let btnMay = document.getElementById('btnMay');
let marco = document.getElementById('marco');
let file_mu6vryvzt0f = document.getElementById('file_mu6vryvzt0f');
let btnRead2 = document.getElementById('btnRead2');
let pendon4 = document.getElementById('pendon4');
let escudo4 = document.getElementById('escudo4');
let marca4 = document.getElementById('marca4');
let fondo4 = document.getElementById('fondo4');
let medallap = document.getElementById('medallap');
let txtf = document.getElementById('txtf');
let txtd = document.getElementById('txtd');
let btnCont = document.getElementById('btnCont');
let fondo5 = document.getElementById('fondo5');
let pendon5 = document.getElementById('pendon5');
let escudo5 = document.getElementById('escudo5');
let marca5 = document.getElementById('marca5');
let tituloexp = document.getElementById('tituloexp');
let txt2 = document.getElementById('txt2');
let marcoVid = document.getElementById('marcoVid');
let btnReg = document.getElementById('btnReg');
let fondo6 = document.getElementById('fondo6');
let pendon6 = document.getElementById('pendon6');
let escudo6 = document.getElementById('escudo6');
let marca6 = document.getElementById('marca6');
let tituloexp_clon0_0 = document.getElementById('tituloexp_clon0_0');
let fondo1 = document.getElementById('fondo1');
let escudo = document.getElementById('escudo');
let titulo = document.getElementById('titulo');
let iconoapp = document.getElementById('iconoapp');
let pendon = document.getElementById('pendon');
let colegio = document.getElementById('colegio');
let marca = document.getElementById('marca');
let loading = document.getElementById('loading');
let btnPlay = document.getElementById('btnPlay');
let btnNiveles = document.querySelectorAll(".nivel");
let loading2 = document.getElementById("loading2");
let btnHome = document.getElementById('btnHome');
let play = true;

let fondoms = document.getElementById('fondoms');
let coin = document.getElementById('coin');
let mal = document.getElementById('mal');
let completo = document.getElementById('completo');
let click = document.getElementById('click');

let silabas=document.querySelectorAll('.sil');
let sr=document.querySelectorAll('.res');
let lectores = document.querySelectorAll('.leer');

let consonantes=['B','C','D','F','G','H','J','K','L','LL','M','N','P','R','S','T','V','Y','Z'];
let vocales = [];
//let vocales=['A','E','I','O','U']

let bloqs = document.querySelectorAll(".bloq");
bloqs=Array.from(bloqs);
let arrayActivo = [];
let arrayActivoAudios = [];
let ejer1=[
	{'silabas':['CA','SA'],'img':'casa','link':'files/nivel1/casa.png','audio':'files/audios/casa.mp3'},
	{'silabas':['CA','MA'],'img':'cama','link':'files/nivel1/cama.png','audio':'files/audios/cama.mp3'},
	{'silabas':['CA','JA'],'img':'caja','link':'files/nivel1/caja.png','audio':'files/audios/caja.mp3'},
	{'silabas':['GA','TA'],'img':'gata','link':'files/nivel1/gata.png','audio':'files/audios/gata.mp3'},
	{'silabas':['HA','DA'],'img':'hada','link':'files/nivel1/hada.png','audio':'files/audios/hada.mp3'},
	{'silabas':['LA','TA'],'img':'lata','link':'files/nivel1/lata.png','audio':'files/audios/lata.mp3'},
	{'silabas':['LLA','MA'],'img':'llama','link':'files/nivel1/llama.png','audio':'files/audios/llama.mp3'},
	{'silabas':['MA','SA'],'img':'masa','link':'files/nivel1/masa.png','audio':'files/audios/masa.mp3'},
	{'silabas':['PA','LA'],'img':'pala','link':'files/nivel1/pala.png','audio':'files/audios/pala.mp3'},
	{'silabas':['SA','LA'],'img':'sala','link':'files/nivel1/sala.png','audio':'files/audios/sala.mp3'},
	{'silabas':['RA','NA'],'img':'rana','link':'files/nivel1/rana.png','audio':'files/audios/rana.mp3'},
	{'silabas':['VA','CA'],'img':'vaca','link':'files/nivel1/vaca.png','audio':'files/audios/vaca.mp3'}];

let ejer2=[
	{'silabas':['BE','BÉ'],'img':'bebe','link':'files/nivel2/bebe.png','audio':'files/audios/bebe.mp3'},
	{'silabas':['GEN','TE'],'img':'gente','link':'files/nivel2/gente.png','audio':'files/audios/gente.mp3'},
	{'silabas':['JE','FE'],'img':'jefe','link':'files/nivel2/jefe.png','audio':'files/audios/jefe.mp3'},
	{'silabas':['VER','DE'],'img':'verde','link':'files/nivel2/verde.png','audio':'files/audios/verde.mp3'},
	{'silabas':['MEN','TE'],'img':'mente','link':'files/nivel2/mente.png','audio':'files/audios/mente.mp3'},
	{'silabas':['LEN','TES'],'img':'lentes','link':'files/nivel2/lentes.png','audio':'files/audios/lentes.mp3'},
	{'silabas':['PE','CES'],'img':'peces','link':'files/nivel2/peces.png','audio':'files/audios/peces.mp3'},
	{'silabas':['CE','LES','TE'],'img':'celeste','link':'files/nivel2/celeste.png','audio':'files/audios/celeste.mp3'}];
	
let ejer3=[
	{'silabas':['YA','TE'],'img':'yate','link':'files/nivel3/yate.png','audio':'files/audios/yate.mp3'},
	{'silabas':['LLA','VE'],'img':'llave','link':'files/nivel3/llave.png','audio':'files/audios/llave.mp3'},
	{'silabas':['TE','LA'],'img':'tela','link':'files/nivel3/tela.png','audio':'files/audios/tela.mp3'},
	{'silabas':['LE','ÑA'],'img':'lena','link':'files/nivel3/lena.png','audio':'files/audios/lena.mp3'},
	{'silabas':['YE','MA'],'img':'yema','link':'files/nivel3/yema.png','audio':'files/audios/yema.mp3'},
	{'silabas':['ME','SA'],'img':'mesa','link':'files/nivel3/mesa.png','audio':'files/audios/mesa.mp3'},
	{'silabas':['MA','DE','RA'],'img':'madera','link':'files/nivel3/madera.png','audio':'files/audios/madera.mp3'},
	{'silabas':['MA','LE','TA'],'img':'maleta','link':'files/nivel3/maleta.png','audio':'files/audios/maleta.mp3'},
	{'silabas':['PA','LE','TA'],'img':'paleta','link':'files/nivel3/paleta.png','audio':'files/audios/paleta.mp3'},
	{'silabas':['ME','DA','LLA'],'img':'medalla','link':'files/nivel3/medalla.png','audio':'files/audios/medalla.mp3'},
	{'silabas':['TA','PE','TE'],'img':'tapete','link':'files/nivel3/tapete.png','audio':'files/audios/tapete.mp3'},
	{'silabas':['CA','FÉ'],'img':'cafe','link':'files/nivel3/cafe.png','audio':'files/audios/cafe.mp3'}];

let cuentaImgN1 = 0;
let cuentaAudios = 0;
let objN1 = [];
let nivel = 1;

let ejer = [];

let banco_imagenes =['files/app/fondo.svg','files/app/escudo.png','files/app/libro1.png','files/app/pendon2.png','files/app/03.btn_play.svg','files/app/mniveles.png','files/app/n1.png','files/app/n2.png','files/app/n3.png','files/app/n4.png','files/app/n5.png','files/app/n6.png','files/app/n7.png','files/app/n8.png','files/app/n9.png','files/app/n10.png','files/app/bloqueo.png','files/app/mayus.png','files/app/pantalla.svg','files/app/gata.png','files/app/fondof.jpg','files/app/medalla.png'];
let banco_sonidos = [];
let banco_videos =  [];
let lienzoActivo = 0;
let varonload=false;
let varmain=false;
window.onload=function(){varonload=true; revisarLoad();}
function main(){varmain=true; revisarLoad();}
function revisarLoad(){if(varonload===true && varmain===true){console.log("Todo cargado.");iniciar();}}
function iniciar(){
	configuracionIncial();
	agregarEventos();
	activarNivel();
}
function agregarEventos(){
	btnPlay.addEventListener("click",function(){
		btnPlay.pulso.pause();
		fondoms.play();
		mostrarLienzo(1);
	});

	btnNiveles.forEach(function(item){
		item.addEventListener('click',function(){
			procesarNivel(this.id);
		});
	});

	silabas.forEach(function(item){
		item.addEventListener('click',function(){
			if(play){
				click.play();
				if(this.padre===""){
					for(let i=0; i<sr.length;i++){
						let item = sr[i];
						if(item.hijo==="" && item.style.display==="block"){
							this.px = this.offsetLeft;
							this.py = this.offsetTop;
							this.style.top = item.offsetTop+"px";
							this.style.left = item.offsetLeft+"px";
							this.padre = item;
							item.hijo = this;
							break;
						}
					}
					evaluar();
				}else{
					this.padre.hijo = "";
					this.padre = "";
					this.style.left = this.px+"px";
					this.style.top = this.py+"px";
					cont_imgs.style.background="none";
				}
			}
		});
	});

	btnCont.addEventListener('click',function(){
		mostrarLienzo(1);
	});

	btnMay.addEventListener("click",function(){
		if(this.letra==="mayuscula"){
			silabas.forEach(function(item){
				let txt=item.textContent;
				item.textContent=txt.toLowerCase();
			}); 
			this.letra="minuscula";
		}else{
			silabas.forEach(function(item){
				let txt=item.textContent;
				item.textContent=txt.toUpperCase();
			});
			this.letra="mayuscula";
		}
	});

	btnHome.addEventListener('click',function(){
		regresarSilabas();
		ocultarImagen();
		cont_imgs.innerHTML="";
		cuentaImgN1=0;
		play=true;
		loading2.style.display="block";
		configurarRespuestas();
		mostrarLienzo(1);
	});

	lectores.forEach(function(item){
		item.addEventListener("click",function(){
			reproducirSonido();
		});
	});
}
function mostrarLienzo(n){
	let lienzos=document.querySelectorAll(".lienzo");
	lienzos.forEach(function(item){item.style.display="none";});
	lienzos[n].style.display="block";
	lienzoActivo=n;
}
function configuracionIncial(){
	loading.style.display="none";
	btnPlay.style.display="block";
	btnMay.letra='mayuscula';
	sr.forEach(function(item){item.hijo="";});
	anim_pulso(btnPlay);
	btnPlay.pulso.play();
	fondoms.volume=0.05;
}
function procesarNivel(id){
	switch(id){
		case 'n1':
			nivel = 1;
			vocales = ['A'];
			ejer = ejer1.slice();
		break;
		case 'n2':
			nivel = 2;
			vocales = ['E'];
			ejer = ejer2.slice();
		break;
		case 'n3':
			nivel = 3;
			vocales = ['A','E'];
			ejer = ejer3.slice();
		break;
			case 'n4':
			nivel = 4;
			vocales = ['A','E'];
			desordenarArray(ejer1);
			desordenarArray(ejer2);
			desordenarArray(ejer3);
			ejer = ejer1.slice(0,4).concat(ejer2.slice(0,4)).concat(ejer3.slice(0,4));
		break;
		default:
			console.log("Id no definido");
		break;
	}
	if(ejer.length>0){
		ejer = desordenarArray(ejer);
		ejer = desordenarArray(ejer);
		mostrarCombinaciones();
		ubicarResp();
		colocarImagenes();
		colocarAudios();
		mostrarLienzo(2);
	}
}
function colocarImagenes(){
	let array = [];
	ejer.forEach(function(item){
		array.push(item.link);
	});
	arrayActivo = array.slice();

	array.forEach(function(item){
		let n = item.split("/")[2];
		let n1 = n.split(".")[0];
		let img = `<img src="${item}" class="imgn" id="${n1}">`;
		cont_imgs.insertAdjacentHTML('beforeend',img);
		img = cont_imgs.lastChild;

		img.addEventListener('load',function(){
			cuentaImgN1++;
			if(cuentaImgN1 === arrayActivo.length){
				//loading2.style.display="none";
				//mostrarImagen();
				revisarCarga();
			}
		});
	});
}
function colocarAudios(){
	let array = [];
	ejer.forEach(function(item){
		array.push(item.audio);
	});
	arrayActivoAudios = array.slice();

	array.forEach(function(item){
		let n = item.split("/")[2];
		let n1 = n.split(".")[0];
		let img = `<audio src="${item}" class="elem" id="a${n1}" preload="auto"></audio>`;
		cont_imgs.insertAdjacentHTML('beforeend',img);
		img = cont_imgs.lastChild;

		img.addEventListener('canplaythrough',function(){
			cuentaAudios++;
			if(cuentaAudios === arrayActivoAudios.length){
				//loading2.style.display="none";
				//mostrarImagen();
				revisarCarga();
			}
		});
	});
}
function revisarCarga(){
	if(cuentaAudios === arrayActivoAudios.length && cuentaImgN1 === arrayActivo.length){
		loading2.style.display="none";
		mostrarImagen();
		reproducirSonido();
	}
}
function reproducirSonido(){
	let naudio = "a"+ejer[0].img;
	let audio = document.getElementById(naudio);
	let clon = audio.cloneNode(true);
	clon.play();
}
function desordenarArray(array) {
	return array.sort(() => Math.random() - 0.5);
}
function mostrarImagen(){
	//ejer = desordenarArray(ejer);
	let a = ejer[0];
	console.log(a);
	document.getElementById(a.img).style.display="block";
}
function ocultarImagen(){
	//ejer = desordenarArray(ejer);
	let a = ejer[0];
	document.getElementById(a.img).style.display="none";
}
function mostrarCombinaciones(){
	//se declara el array que contendra las silabas a mostrar
	let r=[];
	//array de letras a eliminar
	let le=[];
	//se hace una copia de consonantes
	let cconsonantes=consonantes.slice();
	//se agregan las silabas que conforman la respuesta
	let v=ejer[0].silabas;
	console.log(v);
	
	v.forEach(function(item){
		r.push(item);
		//obtenemos las consonantes de cada silaba 
		let l=item.split('')[0];
		le.push(l);
	});
	console.log(r);
	console.log(le);

	//eliminamos las consonantes encontradas en el ejercicio
	le.forEach(function(item){
		//console.log(item);
		cconsonantes.splice(cconsonantes.indexOf(item),1);
	});
			//se desordena el array que queda
	desordenarArray(cconsonantes);
			//se calculan cuantas silabas tiene el ejercicio
	let c=8-r.length;
	for(let i=0;i<c;i++){
		let azar = Math.floor(Math.random() * vocales.length);
		let ns=cconsonantes[i]+vocales[azar];
		r.push(ns);
	}
	console.log(r);
	desordenarArray(r);
	//console.log(r)
	
	silabas.forEach(function(item,index){
		let txt = r[index];
		if(btnMay.letra==="minuscula"){txt=txt.toLowerCase();}
		item.textContent=txt;
		item.padre="";
	});
}
function ubicarResp(){
	let piniciox;
	let p = ejer[0].silabas;

	for(let i=0; i<p.length;i++){
		sr[i].style.display="block";
		sr[i].classList.add('ra');
	}
	
	if(p.length === 2){
		piniciox=425;
	}else if(p.length === 3){
		piniciox=425-45;
	}else{
		piniciox=425-85;
	}

	//let pinicioy=426;
	let gap=5;
	sr.forEach(function(item){
		//item.style.top=pinicioy+'px';
		item.style.left=piniciox+'px';
		piniciox=piniciox+80+gap;
	});	
}
function evaluar(){
	console.log("evaluar")
	let silabasP = obtenerSilabasPresionadas();
	if(silabasP.length === ejer[0].silabas.length){
		let silabasIguales = compararSilabas(silabasP);
		if(silabasIguales){
			coin.play();
			mostrarSiguiente();
		}else{
			cont_imgs.style.background="#FB6868";
			mal.play();
		}
	}
}
function obtenerSilabasPresionadas(){
	let hijos = [];
	let ra = document.querySelectorAll('.ra');
	ra.forEach(function(item){
		if(item.hijo !== ""){
			hijos.push(item.hijo.textContent);
		}
	});
	return(hijos);
}
function compararSilabas(array){
	let correcto = true;
	for(let i=0;i<array.length;i++){
		let item = array[i];
		let item2 = ejer[0].silabas[i];
		if(item.toUpperCase() !== item2.toUpperCase()){
			correcto = false;
		}
	}
	if(correcto){
		return(true);
	}else{
		return(false);
	}	
}
function mostrarSiguiente(){
	play = false;
	cont_imgs.style.background="#27CC42";
	setTimeout(function(){
		ocultarImagen();
		ejer.shift();
		if(ejer.length>0){
			console.log("bien");
			regresarSilabas();
			mostrarCombinaciones();
			configurarRespuestas();
			ubicarResp();
			mostrarImagen();
			reproducirSonido();
			play=true;
		}else{
			completo.play();
			regresarSilabas();
			cont_imgs.innerHTML="";
			cuentaImgN1=0;
			cuentaAudios = 0;
			play=true;
			mostrarNuevoNivel();
			mostrarLienzo(3);
			loading2.style.display="block";
		}		
	},1000);
}
function regresarSilabas(){
	let ra = document.querySelectorAll('.ra');
	let hijos = [];
	ra.forEach(function(item){
		if(item.hijo!==""){
			hijos.push(item.hijo);
		}
	});
	hijos.forEach(function(item){
		item.padre.hijo = "";
		item.padre = "";
		item.style.left = item.px+"px";
		item.style.top = item.py+"px";
		cont_imgs.style.background="none";
	});
}
function mostrarNuevoNivel(){
	console.log(bloqs)
	//bloqs[0].remove();
	//bloqs.shift();
	bloqs[nivel-1].style.display="none";
}
function activarNivel(){
	if(nivel!==0){
		let d=nivel-1;
		for(let i=0;i<d;i++){
			bloqs[0].remove();
			//bloqs.shift();
		}
	}
}
function configurarRespuestas(){
	sr.forEach(function(item){
		item.style.display="none";
	});
	let ras = document.querySelectorAll(".ra");
	ras.forEach(function(item){item.classList.remove("ra");});
}