function hacerMoveable(element){
	let moveable = new Moveable(document.body, {
		target: element,
			    // If the container is null, the position is fixed. (default: parentElement(document.body))
		container: document.body,
		draggable: true,
		resizable: false,
		scalable: false,
		rotatable: false,
		warpable: false,
		hideDefaultLines: true,
			    // Enabling pinchable lets you use events that
			    // can be used in draggable, resizable, scalable, and rotateable.
			    pinchable: false, // ["resizable", "scalable", "rotatable"]
			    origin: false,
			    keepRatio: false,
			    // Resize, Scale Events at edges.
			    edge: false,
			    throttleDrag: 0,
			    throttleResize: 0,
			    throttleScale: 0,
			    throttleRotate: 0,
			});
			/* draggable */
	moveable.on("dragStart", ({ target, clientX, clientY }) => {
		//console.log("onDragStart", target);
	}).on("drag", ({
		target, transform,
		left, top, right, bottom,
		beforeDelta, beforeDist, delta, dist,
		clientX, clientY,
	}) => {
			    //console.log("onDrag left, top", left, top);
		target.style.left = `${left}px`;
		target.style.top = `${top}px`;
		target.style.zIndex='111';
		//buscarColisiones(target);
			    // console.log("onDrag translate", dist);
			    // target!.style.transform = transform;
	}).on("dragEnd", ({ target, isDrag, clientX, clientY }) => {
			    //console.log("onDragEnd", target, isDrag);
		buscarColisiones(target);
		target.style.zIndex='100';
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
//let caja2;
function buscarColisiones(element){
	console.log('buscando')
	let a=element;
	let col=false;
	let item;
	for(let i=0; i<sr.length;i++){
		item=sr[i];
		let r=detectarColision(a,item,15);
		console.log(r)
		if(r){
			col=true;
			break;
		}
	}
	if(col){
		console.log("colision detectada");
		console.log(item.ocupado);
		if(item.ocupado===undefined || item.ocupado===false){
			if(a.padre!==""){
				console.log("ya tiene padre");
				a.padre.ocupado=false;
				a.padre.hijo="";
				a.padre="";
			}else{
				console.log("no tiene padre");
			}
			a.style.top=item.style.top;
			a.style.left=item.style.left;
			a.padre=item;
			item.ocupado=true;
			item.silaba=a.textContent;
			item.hijo=a;
			evaluarResLlenas();
		}else{
			//codigo igual
			a.style.transition="top 0.5s, left 0.5s linear";
			let px=a.getAttribute('px');
			let py=a.getAttribute('py');
			a.style.top=py+'px';
			a.style.left=px+'px';
			a.padre.ocupado=false;
			a.padre.hijo="";
			//a.style.trasition="all 0s linear";
		}
	}else{
		//codigo igual
		a.style.transition="top 0.5s, left 0.5s linear";
		//setTimeout(function(){
			let px=a.getAttribute('px');
			let py=a.getAttribute('py');
			a.style.top=py+'px';
			a.style.left=px+'px';
			//console.log(a.padre.ocupado)
			//caja2=a;
			if(a.padre!==undefined){
				a.padre.ocupado=false;
				a.padre.hijo="";
				a.padre="";
			}
		//},500);
	}
}

silabas.forEach(function(item){
	hacerMoveable(item);
});

function evaluarResLlenas(){
	let srv=[];
	sr.forEach(function(item){
		if(item.style.display==="block"){srv.push(item);}
	});
	let to=0;

	srv.forEach(function(item){
		if(item.ocupado){
			to++;
		}
	});
	if(to===srv.length){
		console.log("todo lleno");
		let res='';
		srv.forEach(function(item){
			res=res+item.silaba;
			console.log(item.silaba);

		});
		if(ractiva===res || res===ractiva.toLowerCase()){
			console.log("bien")

			reproducirSonido(coin);
			setTimeout(function(){
				ejer.shift();
				if(ejer.length>0){
			
					sr.forEach(function(item){item.style.display="none";});
					ubicarResp();
					if(img_activa!==null){
						img_activa.style.visibility="hidden";
					}
						//borrarRespuestas();
						//codiog igual
						//let hijos=[];
					srv.forEach(function(item){
						let a=item.hijo;
						//hijos.push(a);
						//a.style.transition="all 1s linear";
						let px=a.getAttribute('px');
						let py=a.getAttribute('py');
						a.style.top=py+'px';
						a.style.left=px+'px';
						a.padre.ocupado=false;
						a.padre.hijo="";
					});
					//btn_mayus.letra="mayuscula";
					animarRespuestas();
					mostrarImagen();
					animarCombinaciones();
					mostrarCombinaciones();
					/*
					silabas.forEach(function(item){
						item.style.trasition="all 0s linear";
					});
					*/
					play=true;
				}else{
					console.log("Termino el ejercicio")
					mostrarLienzo(2);
					reproducirSonido(completo);
				}		
			},1000);
		}else{
			console.log("mal")
			reproducirSonido(mal);
			//codigo igual
			//let hijos=[];
			setTimeout(function(){
				srv.forEach(function(item){
					let a=item.hijo;
					//hijos.push(a);
					//a.style.transition="all 1s linear";
					a.style.transition="top 0.5s, left 0.5s linear";
					let px=a.getAttribute('px');
					let py=a.getAttribute('py');
					a.style.top=py+'px';
					a.style.left=px+'px';
					a.padre.ocupado=false;
					a.padre.hijo="";
				});
			},1000);
			
			//console.log(hijos)
			/*
			setTimeout(function(){
				hijos.forEach(function(item){
				
				item.style.transition="all 0s linear";
			});
			},1000);
			*/
		}
	}else{
		console.log('falta')
	}
}

function info(){
	sr.forEach(function(item){
		console.log('------------------');
		console.log(item.id)
		console.log(item.ocupado);
		console.log(item.hijo);
	});
}