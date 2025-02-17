let contador = document.getElementById("contador");
let iniciar = document.getElementById("iniciar");
let parar = document.getElementById("parar");
let reset = document.getElementById("reset");
let segundos = 0;
let minutos = 0;
let horas = 0;

let intervalId;

function formatearTiempo(valor) {

    return valor < 10 ? "0" + valor : valor;
}

function iniciarContador(){

    segundos+=1;

    if(segundos == 60){
        minutos +=1;
        segundos =0;
    }else if(minutos == 60){
        horas+=1;
        minutos=0;
    }
    
    contador.innerHTML = formatearTiempo(horas) + ":" + formatearTiempo(minutos) + ":" + formatearTiempo(segundos);
}

parar.addEventListener('click', ()=>{
    clearInterval(intervalId);
});

reset.addEventListener('click', ()=>{
    contador.innerHTML="00:00:00";
    segundos = 0;
    minutos = 0;
    horas = 0;
});

iniciar.addEventListener('click', ()=>{
    clearInterval(intervalId);
    intervalId=setInterval(iniciarContador, 10);
});

