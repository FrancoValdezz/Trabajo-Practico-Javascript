const btnTirar = document.getElementById('tirar')
const dadoCara = document.getElementById('dadoCara')
const numeroCalienteParrafo = document.getElementById('numeroCaliente');
const numeroFrioParrafo = document.getElementById('numeroFrio');
const loginForm = document.getElementById('loginForm');
const conteinergame = document.getElementById('conteiner');
const conteinerform = document.getElementsByClassName('login-container')
const numeroElegidoInput = document.getElementById('numeroElegido');
const hiteo = document.getElementById('hit');

function iniciarJuego(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const dinero = parseFloat(document.getElementById('dinero').value);

    //creo un objeto usuario
    const usuario = {
        nombre: nombre,
        dinero: dinero
    };
    // guardo el objeto en el LocalStorage para usarlo mas adelante
    localStorage.setItem('usuario', JSON.stringify(usuario));
    //NO OLVIDARME DE UTILIZAR EL DINERO!!!
    
    loginForm.style.display = 'none';
    conteinergame.style.display = 'block';
}  

loginForm.addEventListener('submit', iniciarJuego);



//Creo un array con las imagenes para poder mostrar el lado del dado
//que ha salido

const lados = [
    'img/lado1.png',
    'img/lado2.png',
    'img/lado3.png',
    'img/lado4.png',
    'img/lado5.png',
    'img/lado6.png',]


// Creo un array que contiene las veces que sale cada lado
const ladosQueSalieron = [0,0,0,0,0,0]

function tirarDado() {
    const resultado = Math.floor(Math.random() * 6)

    dadoCara.src = lados[resultado]
    //hace que aparesca la imagen
    dadoCara.style.display = 'inline'
    ladosQueSalieron[resultado]++

    //calcular los que salieron mas veces y menos veces
    const maxApariciones = Math.max(...ladosQueSalieron);
    const minApariciones = Math.min(...ladosQueSalieron);

    const numeroCaliente = ladosQueSalieron.indexOf(maxApariciones) + 1;
    const numeroFrio = ladosQueSalieron.indexOf(minApariciones) + 1;

    numeroCalienteParrafo.textContent = `Número caliente: ${numeroCaliente}`;
    numeroFrioParrafo.textContent = `Número frío: ${numeroFrio}`;


    //aca me fijo si hiteo
    const miNumero = parseInt(numeroElegidoInput.value)

    if  (miNumero === (resultado + 1)) {
        hiteo.textContent = 'Has hiteado';
    } else {
        hiteo.textContent = 'No hiteaste!';
    }

    console.log(ladosQueSalieron)

}

btnTirar.addEventListener('click',tirarDado)



