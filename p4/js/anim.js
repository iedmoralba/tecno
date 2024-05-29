function anim_pulso(element){
	element.pulso=anime({
		targets:element,
		keyframes:[
			{scale:1.2},
			{scale:1},
		],
		duration:1000,
		easing:'linear',
		loop:true,
		autoplay:false
	});
}

function entrar_Elemento(element,direccion){
	
}