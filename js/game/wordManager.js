//selecciona y guarda una palabra de la lista, en base a lo indicado por gameManager (que tiene todos los settigns de usuario)
//compruba si los inputs de usuario coinciden con alguna letra de la palabra oculta
//muestra u oculta las letras de la palabra en cuestion -> llamando al letter manager (que controla cada casilla y letra en su posicion)
//le diche al gameManager si se ha acabado la partida (victoria o derrota)
import LetterManager from './letterManager.js'
//controla si se gana o pierde
//la dificultad
//llama al gestor de palabras
export default class WordManager {
    constructor() {
        //crea un wordManager
        //coge la configuracion del jugador y se la pasa al wordManager creado
        //coge el elemento de input del jugador para las letras tecleadas
        this.palabras = [];
        this.arrayLetras = [];
        this.arrayLetrasVisibles = [];
        this.tamanyoPalabra = 0;
    }

    checkGuessedWord() {
        return !this.arrayLetrasVisibles.includes("_",0,this.arrayLetrasVisibles.length);
    }

    seleccionarPalabra() {  //Metodo que selecciona una palabra de la lista
        const a = Math.floor(Math.random() * (this.palabras.length));
        let palabra = this.palabras[a].word;
        console.log(palabra);
        let i = 0;
        for (i = 0; i < palabra.length; i++) {
            this.arrayLetras.push(new LetterManager());
            this.arrayLetras[i].setLetter(palabra.charAt(i));
            this.arrayLetrasVisibles.push("_");
        }
        this.tamanyoPalabra = i;
        this.palabras = [];
    }

    mostrarLetrasRandom(tam) {  // Metodo que muestra inicialmente el numero de letras especificado por parametro
        let newthis = this;
        let arrayLettrasRandom = [];
        let posicionRandom=-1;
        let arrayPosicionesOk=[];
        return new Promise(function (resolve, reject) {
            let cont = 0;
            let contaux = 0;
            let contfin = 0;
            let letra = "";
            while (cont != tam && contfin<tam*2){   //condicion de salida extra por si no encuentra otra letra que encaje con el numero solicitado
                contaux = cont;
                posicionRandom = newthis.encontrarLetraDistinta(arrayLettrasRandom);    //busco una letra que no este ya marcada
                letra = newthis.arrayLetras[posicionRandom].getLetter();
                arrayLettrasRandom.push(letra); //una vez encontrado la guardo en la lista
                for (let j = 0; j < newthis.arrayLetrasVisibles.length; j++) {  //busco el numero de ocurrencias de esa letra en la palabra
                    if (newthis.arrayLetras[j].getLetter() === letra) {
                        cont++;
                        arrayPosicionesOk.push(j);
                    }
                }

                if (cont > tam) {   //si el numero de ocurrencias es superior reinicio el contador y busco otra letra
                    console.log("la letra:" + letra + " esta varias veces!!! " + cont)
                    cont = contaux;
                }else{  //si el numero de ocurrencias es inferior o igual lo recorro y cambio para mostrarlo
                    for (let k = 0; k < cont;k++){
                        let indice = arrayPosicionesOk[k];
                        newthis.arrayLetrasVisibles[indice]=newthis.arrayLetras[indice].getLetter();
                    }
                }
                contfin++;
            }
            resolve();
        });
    }

    encontrarLetraDistinta(p) { // Metodo que busca una letra aleatoria dentro de la palabra que noo este ya en la lista recibida por parametro
        let posicionRandom = -1;
        do {
            posicionRandom = Math.floor(Math.random() * (this.arrayLetrasVisibles.length));
        } while (p.includes(this.arrayLetras[posicionRandom].getLetter()));

        return posicionRandom;
    }

    getWords() {    // Metodo que obtiene las palabras de un json y se guarda una de ellas aleatoriamiente
        let newthis = this;
        return new Promise(function (resolve, reject) {

            fetch("./js/data/words.json")
                .then((response) => response.json())
                .then((data) => {
                    newthis.palabras = data.wordList;
                }).then(() => {
                    newthis.seleccionarPalabra();
                }).then(() => {
                    resolve();
                }).catch((e) =>{
                    reject(e);
                });
        });
    }

    comprobarLetraEnviada(a) {
        let b = 0;
        for (let j = 0; j < this.arrayLetrasVisibles.length; j++) {  //busco el numero de ocurrencias de esa letra en la palabra
            if (this.arrayLetras[j].getLetter() == a.toLowerCase()) {
                if (this.arrayLetrasVisibles[j]!=a){
                    this.arrayLetrasVisibles[j] = this.arrayLetras[j].getLetter();
                    b++;
                }else{
                    b=-1;
                    break;
                }
            }
        }
        return b;
    }

    getArrayLetras() {
        return this.arrayLetras;
    }

    getLetrasVisibles() {
        return this.arrayLetrasVisibles;
    }

    getTamanyoPalabra() {
        return this.tamanyoPalabra;
    }

}