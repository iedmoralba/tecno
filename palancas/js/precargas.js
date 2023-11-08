var totalAudios=0;
var totalImagenes=0;
var totalVideos=0;

//Estas son las variables donde ponen los nombres de los elementos para la precarga
//var b_son=[];
//var b_img=[];
//var b_vid=[];

function activarPrecargas(){
	if(b_son.length>0){
		precargarSonidos();
	}
	if(b_img.length>0){
		precargarImagenes();
	}
	if(b_vid.length>0){
		precargarVideos();
	}
}

function precargarSonidos(){
	for(var i=0;i<b_son.length;i++){
		var n=b_son[i];
		var audio=document.querySelector("#"+n);
		audio.addEventListener('canplaythrough',audioCargado,false);
	}
}

function audioCargado(){
	totalAudios++;
	contarElementosCargados();
}

function precargarImagenes(){
	for(var i=0;i<b_img.length;i++){
		var foto=new Image();
		foto.src="img/"+b_img[i];
		foto.addEventListener("load",imagenCargada,false);
	}
}

function imagenCargada(){
	totalImagenes++;
	contarElementosCargados();
}

function precargarVideos(){
	for(var i=0;i<b_vid.length;i++){
		var n=b_son[i];
		var video=document.querySelector("#"+n);
		video.addEventListener('canplaythrough',videoCargado,false);
	}
}

function videoCargado(){
	totalVideos++;
	contarElementosCargados();
}