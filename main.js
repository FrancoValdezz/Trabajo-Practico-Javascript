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


// creo un array que contiene las veces que sale cada lado
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

// navbar y creacion de tarjeta sobre los juegos 
const despegableItems = document.querySelectorAll('.despegable');

document.addEventListener('DOMContentLoaded', async function () {
    // Cargar el archivo JSON
    const response = await fetch('data.json');
    const juegos = await response.json();
    
    // Crear un elemento <ul> para mostrar los juegos
    const juegosDropdown = document.querySelector('.dropdown');
    const favoritos = [];

    juegos.forEach(juego => {
        const juegoElement = document.createElement('li');
        const juegoDiv = document.createElement('div');
        juegoDiv.classList.add('juego-card'); // Agrega la clase para los estilos

        const tituloYBotonDiv = document.createElement('div');
        tituloYBotonDiv.classList.add('titulo-y-boton'); // Agrega la clase para los estilos
        
        const h3Element = document.createElement('h3');
        h3Element.textContent = juego.nombre;

        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Favorito';

        const imgElement = document.createElement('img');
        imgElement.src = juego.imagen;

        const pElement = document.createElement('p');
        pElement.textContent = juego.descripcion;

        //ya con todos los elementos creados voy a hacer una alerta
        buttonElement.addEventListener('click', function() {
            if (favoritos.includes(juego)) {
                favoritos.splice(favoritos.indexOf(juego), 1);
                buttonElement.textContent = 'Favorito';
            } else {
                favoritos.push(juego);
                buttonElement.textContent = 'Eliminar de Favoritos';


                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Añadido a Favoritos'
                });
            }
        });
        //ahora va la alerta





        tituloYBotonDiv.appendChild(h3Element);
        tituloYBotonDiv.appendChild(buttonElement);
        juegoDiv.appendChild(tituloYBotonDiv);
        juegoDiv.appendChild(imgElement);
        juegoDiv.appendChild(pElement);

        juegoElement.appendChild(juegoDiv);
        juegosDropdown.appendChild(juegoElement);
    });




});

// nav bar añadida
