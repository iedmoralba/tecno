let lienzo = document.getElementById("lienzo1");
let btn_evaluar = document.getElementById("btn_evaluar");
let btn_play = document.getElementById("btn_play");

window.onload=function(){varonload=true; revisarLoad();}
function main(){varmain=true; revisarLoad();}
function revisarLoad(){if(varonload===true && varmain===true){console.log("Todo cargado.");iniciar();}}
function iniciar(){
	document.getElementById("loading").style.display="none";
	btn_play.style.display="block";
	btn_evaluar.addEventListener("click",function(){
		evaluar();
	});
	btn_play.addEventListener("click",function(){
		document.getElementById("inicial").style.display="none";
	});

	let resultado = document.getElementById('resultado');
	resultado.addEventListener('click',function(){
		this.style.display = "none";
	});
	
	activarMoveable();
}

function evaluar(){
	let aciertos = 0;
	let fallos = 0;
	let padres = document.querySelectorAll(".padre");
	padres.forEach(function(item){
		let id = item.id.split("_")[0];
		let vinculo = item.vinculo;
		if(id === vinculo && id !==""){
			aciertos++;
		}else{
			fallos++;
		}
	});
			//console.log(aciertos,fallos);
	let total = aciertos + fallos;
	if(total === padres.length){
		document.getElementById("resultado").style.display="block";
		document.getElementById("valor").textContent=aciertos+"/"+total;
	}
}
function activarMoveable(){
	let words = document.querySelectorAll(".word");
	words.forEach(function(item){
		hacerMoveable(item);
	});
}
function detectarColision(div1, div2, margen) {
		 	 // Obtener las posiciones y dimensiones de los divs
	const rect1 = div1.getBoundingClientRect();
	const rect2 = div2.getBoundingClientRect();

		  			// Calcular si hay colisión en el eje X con margen
	const hayColisionX =
	rect1.left + margen < rect2.right - margen &&
	rect1.right - margen > rect2.left + margen;

		  			// Calcular si hay colisión en el eje Y con margen
	const hayColisionY =
	rect1.top + margen < rect2.bottom - margen &&
	rect1.bottom - margen > rect2.top + margen;

		  			// Retornar true si hay colisión en ambos ejes, false si no
	return hayColisionX && hayColisionY;
}
function elementoSoltado(target){
	let item = target;
			//console.log(item)
	let padres = document.querySelectorAll(".padre");
	if(item.classList.contains("word")){
		for(let i=0; i<padres.length;i++){
			let item2 = padres[i];
			if(detectarColision(item,item2,10)){
				let id1 = item.id.split("_")[0];
				let id2 = item2.id.split("_")[0];
				item.style.top = item2.style.top;
				item.style.left = item2.style.left;
				item.vinculo = id2;
				console.log(id2)
				item2.vinculo = id1;
						//evaluar();
				break;
			}else{
				if(item.vinculo !== undefined){
					if(item.vinculo===""){
						console.log("affa")
					}else{
						console.log(item)
						let nombre = item.vinculo+"_padre";
						console.log(nombre)
						let padre = document.getElementById(nombre);
						padre.vinculo="";
						item.vinculo="";
						break;
					}
				}
			}
		}
	}
}