const cronometro = document.getElementById("tiempo");
//const botones = document.getElementById("botones");
//const iniciarBtn = document.getElementById("iniciar");
//const pararBtn = document.getElementById("parar");
//const reiniciarBtn = document.getElementById("reiniciar");

let tiempoInicio;
let intervalo;

// Función para actualizar el cronómetro
function actualizarCronometro() {
    
    //if(cronometro_activo){
        const tiempoActual = new Date();
    const tiempoTranscurrido = tiempoActual - tiempoInicio;

    // Convertir milisegundos a segundos, minutos y horas
    const milisegundos = Math.floor(tiempoTranscurrido % 1000);
    const segundos = Math.floor((tiempoTranscurrido / 1000) % 60);
    const minutos = Math.floor((tiempoTranscurrido / (1000 * 60)) % 60);
    //const horas = Math.floor((tiempoTranscurrido / (1000 * 60 * 60)));

    // Formatear el tiempo
    //const tiempoFormateado = `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}.${milisegundos.toString().padStart(3, "0")}`;
    const tiempoFormateado = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}:${milisegundos.toString().padStart(3, "0")}`;

    // Mostrar el tiempo en el cronómetro
    cronometro.textContent = tiempoFormateado;
    
    //}
}

// Función para iniciar el cronómetro
function iniciarTimer() {
    tiempoInicio = new Date();
    intervalo = setInterval(actualizarCronometro, 1);
    //iniciarBtn.disabled = true;
    //pararBtn.disabled = false;
}

// Función para parar el cronómetro
function pararTimer() {
    clearInterval(intervalo);
    //iniciarBtn.disabled = false;
    //pararBtn.disabled = true;
}

// Función para reiniciar el cronómetro
function reiniciarTimer() {
    tiempoInicio = new Date();
    clearInterval(intervalo);
    actualizarCronometro();
    //iniciarBtn.disabled = false;
    //pararBtn.disabled = true;
}