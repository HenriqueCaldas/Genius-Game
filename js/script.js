let sequencia = [];
let clickSequencia = [];
let pontuacao = 0;
let audios = ["audioGreen", "audioRed", "audioYellow", "audioBlue"];

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

let ordemAleatoria = () => {
    let corAleatoria = Math.floor(Math.random() * 4);
    sequencia[sequencia.length] = corAleatoria;
    clickSequencia = [];
    for(let i in sequencia)
    {
        let elementColor = criaElementoCor(sequencia[i]);
        corClara(elementColor, Number(i) + 1, sequencia[i]);
    }
}
let corClara = (element, number, audio) => {
    number = number * 600;
    setTimeout(() => {
        tocaAudio(audio);
        element.classList.add('selected');
    }, number - 300);
    setTimeout(() => {
        element.classList.remove('selected');
    },number);
}
let checandoSequencia = () => {
    for(let i in clickSequencia)
    {
        if(clickSequencia[i] != sequencia[i]){
            gameOver();
            break;
        }
    }
    
    if(clickSequencia.length == sequencia.length){
        alert(`Pontuação: ${pontuacao}\nVocê acertou, Vamos pro próximo nível!`);
        proximoNivel();
    }
}
let click = (cor) => {
    clickSequencia[clickSequencia.length] = cor;
    criaElementoCor(cor).classList.add('selected');

    setTimeout(() => {
        criaElementoCor(cor).classList.remove('selected');
        checandoSequencia();
    },250);
}

let criaElementoCor = (cor) => {
    if(cor == 0) {
        return green;
    } else if (cor == 1) {
        return red;
    } else if (cor ==2) {
        return yellow;
    } else if (cor == 3) {
        return blue;
    }
}
let proximoNivel = () => {
    pontuacao++;
    ordemAleatoria();
}
let gameOver = () => {
    alert(`Pontuação: ${pontuacao}!\Você perdeu`);
    sequencia = [];
    clickSequencia = [];
    reiniciaGame();
}
let reiniciaGame = () => {
    alert("Bem vindo ao Genius!!");
    pontuacao = 0;

    proximoNivel();
}
let tocaAudio = (cor) => {
    switch(cor){
        case 0:
            audioGreen.play();
            break;
        case 1: 
            audioRed.play();
            break;
        case 2: 
            audioYellow.play();
            break;
        case 3:
            audioBlue.play();   
    }
}


let audioGreen = document.getElementById('green');
let audioRed = document.getElementById('red');
let audioYellow = document.getElementById('yellow');
let audioBlue = document.getElementById('blue');



green.onclick = () => { click(0); audioGreen.play();}
red.onclick = () => {click(1); audioRed.play();}
yellow.onclick = () => {click(2); audioYellow.play();}
blue.onclick = () => {click(3); audioBlue.play();}

reiniciaGame();

