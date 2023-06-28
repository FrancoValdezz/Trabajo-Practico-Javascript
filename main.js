function mayorQue(mensaje){
    cara = parseInt(prompt(mensaje));
    while(cara <0 || cara > 6){ 
        alert('ERROR EL DADO SOLO TIENE 6 CARAS DEL 1 AL 6')
        cara = prompt(mensaje);
    }
    return cara
}


function igual(){
    let hit = false
    let i = 0
    for (;i < cantidad; i++){
        var dado = Math.floor(Math.random()*6) + 1
        console.log('Valor del dado dados: ' + dado)
        if(dado === cara){
            hit = true
        }
    }
    if(hit){
        console.log('Hiteaste')
    }
    else{
        console.log('No hiteaste')
    }
}


alert('Elegir una cara del dado')
const cantidad= prompt('Cuantas veces quieres tirar el dado?');
let cara = mayorQue('Cara:')
igual()
console.log('La cara que elegiste: ' + cara)

