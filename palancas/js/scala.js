var s_porcentaje=0;

function activarScala(){
	var ventana_ancho = $(window).width();
	if(ventana_ancho<800){
		redimensionarLienzo();
		redimensionarObjetos();
		redimensionarClases();
	}
}

function redimensionarLienzo(){
	var ventana_ancho = $(window).width();
	if(ventana_ancho<800){
		s_porcentaje=(ventana_ancho*100)/800;
		$("#lienzo").css("width",(800*s_porcentaje)/100+"px");
		$("#lienzo").css("height",(550*s_porcentaje)/100+"px");
	}else{
		$("#lienzo").css("width","800px");
		$("#lienzo").css("height","550px");
	}
}

function redimensionarObjetos(){
	for(var i=0;i<s_objetos.length;i++){
		var separado=s_objetos[i].split(" ");
		for(var j=1;j<separado.length;j++){
			var lienzo=$("#lienzo");
			var objeto=$("#"+separado[0]);
			var valor=separado[j].split(":");
			var cantidad=valor[1];
			switch(valor[0]){
				case "width":
					var anchoLienzo=$("#lienzo").css("width");
					var sinpx=Number(anchoLienzo.slice(0,anchoLienzo.length-2));
					var r=(sinpx*valor[1])/800;
					$(objeto).css("width",r+"px");
				break;
				case "height":
					var altoLienzo=$("#lienzo").css("height");
					var sinpx=Number(altoLienzo.slice(0,altoLienzo.length-2));
					var r=(sinpx*valor[1])/550;
					$(objeto).css("height",r+"px");
				break;
				case "fontSize":
					var anchoLienzo=$("#lienzo").css("width");
					var sinpx=Number(anchoLienzo.slice(0,anchoLienzo.length-2));
					var r=(sinpx*valor[1])/800;
					$(objeto).css("font-size",r+"px");
				break;
				case "marginTop":
					var anchoLienzo=$("#lienzo").css("width");
					var sinpx=Number(anchoLienzo.slice(0,anchoLienzo.length-2));
					var r=(sinpx*valor[1])/800;
					$(objeto).css("margin-top",r+"px");
				break;
				case "padding":
						var anchoLienzo=$("#lienzo").css("width");
						var sinpx=Number(anchoLienzo.slice(0,anchoLienzo.length-2));
						var r=(sinpx*valor[1])/800;
						$(objeto).css("padding",r+"px");
				break;
				case "marginRight":
						var anchoLienzo=$("#lienzo").css("width");
						var sinpx=Number(anchoLienzo.slice(0,anchoLienzo.length-2));
						var r=(sinpx*valor[1])/800;
						$(objeto).css("padding",r+"px");
					break;
				default:
					console.log("la propiedad "+valor[0]+" no esta definida");
				break;
			}
		}
	}
}

function redimensionarClases(){
	for(var i=0;i<s_clases.length;i++){
		var separado=s_clases[i].split(" ");
		var grupo=$(separado[0]);
		for(var h=0;h<grupo.length;h++){
			for(var j=1;j<separado.length;j++){
				objeto=grupo[h];
				valor=separado[j].split(":");
				switch(valor[0]){
					case "width":
						var anchoLienzo=$("#lienzo").css("width");
						var sinpx=Number(anchoLienzo.slice(0,anchoLienzo.length-2));
						var r=(sinpx*valor[1])/800;
						$(objeto).css("width",r+"px");
					break;
					case "height":
						var altoLienzo=$("#lienzo").css("height");
						var sinpx=Number(altoLienzo.slice(0,altoLienzo.length-2));
						var r=(sinpx*valor[1])/550;
						$(objeto).css("height",r+"px");
					break;
					case "fontSize":
						var anchoLienzo=$("#lienzo").css("width");
						var sinpx=Number(anchoLienzo.slice(0,anchoLienzo.length-2));
						var r=(sinpx*valor[1])/800;
						$(objeto).css("font-size",r+"px");
					break;
					case "marginTop":
						var anchoLienzo=$("#lienzo").css("width");
						var sinpx=Number(anchoLienzo.slice(0,anchoLienzo.length-2));
						var r=(sinpx*valor[1])/800;
						$(objeto).css("margin-top",r+"px");
					break;
					case "padding":
						var anchoLienzo=$("#lienzo").css("width");
						var sinpx=Number(anchoLienzo.slice(0,anchoLienzo.length-2));
						var r=(sinpx*valor[1])/800;
						$(objeto).css("padding",r+"px");
					break;
					case "marginRight":
						var anchoLienzo=$("#lienzo").css("width");
						var sinpx=Number(anchoLienzo.slice(0,anchoLienzo.length-2));
						var r=(sinpx*valor[1])/800;
						$(objeto).css("padding",r+"px");
					break;
					default:
						console.log("la propiedad "+valor[0]+" no esta definida");
					break;
				}
			}
		}
	}
}