function mayorQue(mensaje){
    ladoCara = parseInt(prompt(mensaje));
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
}


alert('Elegir una cara del dado')
const cantidad= prompt('Cuantas veces quieres tirar el dado?');
let cara = mayorQue('Cara:')
comprobarQue()
console.log('La cara que elegiste: ' + cara)

