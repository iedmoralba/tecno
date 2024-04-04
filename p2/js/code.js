let escudo2 = document.getElementById('escudo2');
let pendon2 = document.getElementById('pendon2');
let marca2 = document.getElementById('marca2');
let fondo_color = document.getElementById('fondo_color');
let c_respuestas = document.getElementById('c_respuestas');
let r0 = document.getElementById('r0');
let r1 = document.getElementById('r1');
let g_silabas = document.getElementById('g_silabas');
let s0 = document.getElementById('s0');
let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let s3 = document.getElementById('s3');
let s4 = document.getElementById('s4');
let s5 = document.getElementById('s5');
let s6 = document.getElementById('s6');
let s7 = document.getElementById('s7');
let s8 = document.getElementById('s8');
let s9 = document.getElementById('s9');
let s10 = document.getElementById('s10');
let s11 = document.getElementById('s11');
let s12 = document.getElementById('s12');
let s13 = document.getElementById('s13');
let s14 = document.getElementById('s14');
let s15 = document.getElementById('s15');
let c_imgs = document.getElementById('c_imgs');
let casa = document.getElementById('casa');
let caja = document.getElementById('caja');
let cama = document.getElementById('cama');
let gata = document.getElementById('gata');
let hada = document.getElementById('hada');
let lata = document.getElementById('lata');
let masa = document.getElementById('masa');
let pala = document.getElementById('pala');
let sala = document.getElementById('sala');
let rana = document.getElementById('rana');
let vaca = document.getElementById('vaca');
let llama = document.getElementById('llama');
let fondo3 = document.getElementById('fondo3');
let pendon3 = document.getElementById('pendon3');
let escudo3 = document.getElementById('escudo3');
let medalla = document.getElementById('medalla');
let txt1 = document.getElementById('txt1');
let txt2 = document.getElementById('txt2');
let marca3 = document.getElementById('marca3');
let recargar_clon0_0 = document.getElementById('recargar_clon0_0');
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
let loading = document.getElementById('loading');
let click = document.getElementById('click');//
//////
let consonantes=['B','C','D','F','G','H','J','K','L','LL','M','N','P','R','S','T','V','Y','Z'];
let vocales=['A','E','I','O','U'];
let ejer=['CA-SA','CA-MA','CA-JA','GA-TA','HA-DA','LA-TA','LLA-MA','MA-SA','PA-LA','SA-LA','RA-NA','VA-CA'];
//let ejer=['CA-SA','CA-MA'];
let imagen=document.getElementById('imagen');
//let gsilabas=document.getElementById('g_silabas');
let silabas=document.querySelectorAll('.silaba');
let sr=document.querySelectorAll('.sr');
let ractiva='';
let play=true;
let img_activa;
/////
let banco_imagenes =['files/03.btn_play.svg','files/fondo1.jpg','files/escudo.png','files/fondo1c.jpg','files/casa.png','files/caja.png','files/cama.png','files/gata.png','files/hada.png','files/lata.png','files/masa.png','files/pala.png','files/sala.png','files/rana.png','files/vaca.png','files/llama2.png','files/medalla (1).png','files/recargar.png'];
let banco_sonidos = ['files/fondo1.mp3','files/coin.mp3','files/bad.mp3','files/finsesion.mp3','files/click.mp3'];
let banco_videos =  [];
let lienzoActivo = 0;
let varonload=false;
let varmain=false;
window.onload=function(){varonload=true; revisarLoad();}
function main(){varmain=true; revisarLoad();}
function revisarLoad(){if(varonload===true && varmain===true){console.log("Todo cargado.");iniciar();}}
function iniciar(){
	ubicarSilabas();
	ubicarResp();
	loading.style.display="none";
	btn_play.style.display="block";
	fondoms.volume=0.2;
	agregarEventos();
	ocultarImagenes();

	desordenarArray(ejer);
	animarRespuestas();
	mostrarImagen();
	mostrarCombinaciones();
}
function mostrarLienzo(n){
	let lienzos=document.querySelectorAll(".lienzo");
	lienzos.forEach(function(item){item.style.display="none";});
	lienzos[n].style.display="block";
	lienzoActivo=n;
}
function ubicarSilabas(){
	let piniciox=560;
	let pinicioy=126;
	let gap=10;
	let columnas=4;
	silabas.forEach(function(item){
		item.style.top=pinicioy+'px';
		item.style.left=piniciox+'px';
		item.setAttribute('px',piniciox);
		item.setAttribute('py',pinicioy);
		piniciox=piniciox+80+gap;
		columnas=columnas-1;
		if(columnas===0){
			piniciox=560;
			pinicioy=pinicioy+80+gap;
			columnas=4;
		}
	});
}
function ubicarResp(){
	let piniciox=225;
	let pinicioy=426;
	let gap=10;
	sr.forEach(function(item){
		item.style.top=pinicioy+'px';
		item.style.left=piniciox+'px';
		piniciox=piniciox+80+gap;
	});
}
function agregarEventos(){
	btn_play.addEventListener('click',function(){
		reproducirSonido(fondoms);
		mostrarLienzo(1);
	});
/*
	silabas.forEach(function(item){
				item.addEventListener('click',function(){
					if(play){
						reproducirSonido(click);
						let txt=this.textContent;
						console.log(txt)
						//let puesto=false;
						for(let i=0;i<sr.length;i++){
							let item=sr[i];
							console.log(item.textContent);
							if(item.textContent===""){
								item.textContent=txt;
								//puesto=true;
								break;
							}
						}
						//se revisa si quedan espacios 
						let espacio=false;
						sr.forEach(function(item){
							if(item.textContent===""){
								espacio=true;
							}
						});
						if(espacio){
							console.log("hay espacioas");
						}else{
							console.log("ya no hay espacios");
							evaluar();
						}
					}
				});
				item.addEventListener('animationend',function(){this.classList.remove('bounceIn');})
			});
*/
	sr.forEach(function(item){
				//item.addEventListener('click',function(){this.textContent="";});
				item.addEventListener('animationend',function(){this.classList.remove('fadeInUp');});
			});

	silabas.forEach(function(item){
		item.addEventListener('transitionend',function(){
			console.log("fin de transi")
			this.style.transition="";
		});
	});

	recargar_clon0_0.addEventListener('click',function(){window.location.reload();});
}
function ocultarImagenes(){
	let imgs=c_imgs.querySelectorAll('img');
	imgs.forEach(function(item){item.style.visibility="hidden";});
}
function desordenarArray(array) {
	return array.sort(() => Math.random() - 0.5);
}
function mostrarImagen(){
	let v=ejer[0];
	let s=v.split('-');
	let u='';
	s.forEach(function(item){u=u+item;});
	ractiva=u;
	let t=u.toLowerCase();
	let obj=document.getElementById(t);
	img_activa=obj;
	obj.style.visibility="visible";
	obj.classList.add('fadeInDown');
}
function mostrarCombinaciones(){
			//se declara el array que contendra las silabas a mostrar
	let r=[];
			//array de letras a eliminar
	let le=[];
			//se hace una copia de consonantes
	let cconsonantes=consonantes.slice();
			//se agregan las silabas que conforman la respuesta
	let v=ejer[0];
	let s=v.split('-');
	s.forEach(function(item){
		r.push(item);
				//obtenemos las consonantes de cada silaba 
		let l=item.split('')[0];
		le.push(l);
	});
			//eliminamos las consonantes encontradas en el ejercicio
	le.forEach(function(item){
		//console.log(item);
		cconsonantes.splice(cconsonantes.indexOf(item),1);
	});
			//se desordena el array que queda
	desordenarArray(cconsonantes);
			//se calculan cuantas silabas tiene el ejercicio
	let c=16-s.length;
	for(let i=0;i<=13;i++){
		let ns=cconsonantes[i]+'A';
		r.push(ns);
	}
	desordenarArray(r);
	//console.log(r)
	silabas.forEach(function(item,index){
		item.textContent=r[index];
		item.padre="";
	});
}
/*
function evaluar(){
			play=false;
			//recoge los valores de las silabas de respuesta
			let respuesta="";
			sr.forEach(function(item){respuesta=respuesta+item.textContent;});
			console.log(respuesta)
			console.log(ractiva);
			if(respuesta===ractiva){
				console.log('bien');
				reproducirSonido(coin);
				ejer.shift();
				setTimeout(function(){
					if(ejer.length>0){
						img_activa.style.visibility="hidden";
						borrarRespuestas();
						animarRespuestas();
						mostrarImagen();
						animarCombinaciones();
						mostrarCombinaciones();
						play=true;
					}else{
						console.log("Termino el ejercicio")
						mostrarLienzo(2);
						reproducirSonido(completo);
					}		
				},2000);
			}else{
				console.log('mal')
				reproducirSonido(mal);
				setTimeout(function(){
					borrarRespuestas();
					play=true;
				},2000);
			}
		}
*/
/*
function borrarRespuestas(){
			sr.forEach(function(item){item.textContent="";});
		}
*/
function animarRespuestas(){
			sr.forEach(function(item){
				item.classList.add('fadeInUp');
			});
		}
function animarCombinaciones(){
			silabas.forEach(function(item){item.classList.add('bounceIn');});
		}
function reproducirSonido(sound){
	let nsound = sound.cloneNode(true);
	nsound.play();
	if(sound.id==='fondoms'){
		nsound.volume=0.2;
	}
}