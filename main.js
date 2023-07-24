class Jugador {
    constructor(nombre, mesa, dinero, tiradas) {
        this.nombre = nombre;
        this.mesa = mesa;
        this.dinero = dinero;
        this.tiradas = tiradas;
    }

}

function cargar_jugadores(jugadores, cantidad_jugadores) {
    for (let i = 0; i < cantidad_jugadores; i++) {
        const nombre = 'Jugador ' + i
        const mesa = Math.floor(Math.random() * 6)
        const dinero = Math.floor(Math.random() * 500)
        //Genero el array dentro del objeto//
        const tiradas = [];
        for (let j = 0; j < 6; j++) {
            const tirada = Math.floor(Math.random() * 10) + 1; 
            tiradas.push(tirada);
            //Aca lo que hago es hacer un ciclo for para que en cada vuelta tome un valor entre 0 y 6 y lo agregue al array simulando los lados de la cara del dado por ejemplo: *se genera el numero 4 entonces seria que salio 4 veces entonces lo agregaria en el array[0] que simularia que es la cara del dado 1*//
        }
    const jugador = new Jugador(nombre, mesa, dinero, tiradas);
    jugadores.push(jugador);
    }
}

function menu(){
    console.log('1. MOSTRAR JUGADORES')
    console.log('2. BUSCAR EL QUE TIENE MAS DINEROO')
    console.log('3. SALIR')
}

function mostrarJugadores(jugadores) {
    console.log("Jugadores:");
    jugadores.forEach((jugador) => {
    console.log(jugador.nombre + '\n'+ 'Mesa Nº: ' +jugador.mesa +'\n' + 'Dinero del jugador' + jugador.dinero + '\n' + 'Cantidad de veces que salio el lado del dado: ' +jugador.tiradas);
    });
}

function buscarMayorDinero(jugadores){
    // le doy el mayor al primer jugador porque si no se ingresa ninguno este seria el mayor y seria el primero en compararse con el que esta siguente a el
    let mayor = jugadores[0]
    for(let i = 1; i < jugadores.length ; i++){
        if(mayor.dinero < jugadores[i].dinero){
            mayor = jugadores[i]
        }
    }
    return mayor
}


const jugadores = [];
const cantidad_jugadores = parseInt(prompt('Cargar los jugadores de las mesas'));

cargar_jugadores(jugadores, cantidad_jugadores);

let opcion = ''
//Aca voy a hacer un tipo "menu" para que eligir una opcion
do {
    menu();
    opcion = parseInt(prompt('Ingrese el número de la opción que desea:'));
    switch (opcion) {
        case 1:
            mostrarJugadores(jugadores);
            break;
        case 2:
            mayorDinero = buscarMayorDinero(jugadores)
            console.log('El que mas dinero tiene es' + mayorDinero.nombre + 'con ' + mayorDinero.dinero)
        case 3:
            console.log("Ha salido del numeroo"); 
            break;
        default:
            console.log("ERROR. elegir numero entre 1 y 3");
    }
} while (opcion !== 3);





/* function mayorQue(mensaje){
    let ladoCara = parseInt(prompt(mensaje));
    while(ladoCara <0 || ladoCara > 6){ 
        alert('ERROR EL DADO SOLO TIENE 6 CARAS DEL 1 AL 6')
        ladoCara = prompt(mensaje);
    }
    return ladoCara
}


function comprobarQue(){
    let hit = false
    let veces = 0
    for (let i = 0; i < cantidad; i++){
        var dado = Math.floor(Math.random()*6) + 1
        console.log('Valor del dado dados: ' + dado)
        if(dado === cara){
            hit = true
            veces += 1 
        }
    }
    if(hit){
        alert('Hiteaste ' + veces + ' veces')
    }
    else{
        alert('No hiteaste')
    }
} */

/* alert('Elegir una cara del dado')
const cantidad= prompt('Cuantas veces quieres tirar el dado?');
let cara = mayorQue('Cara:')
comprobarQue()
console.log('La cara que elegiste: ' + cara) */



