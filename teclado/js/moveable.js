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
	}).on("dragEnd", ({ target, isDrag, clientX, clientY }) => {
		//console.log("onDragEnd", target, isDrag);
		elementoSoltado(target);
	});
}