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
        this.palabra = "";
        this.arrayLetras = [];
        this.arrayLetrasFicticias = [];
        this.tamanyoPalabra = 0;
    }

    checkGuessedWord() {

    }

    seleccionarPalabra() {
        const a = Math.floor(Math.random() * (this.palabras.length));
        this.palabra = this.palabras[a].word;
        console.log(this.palabra);
        let i = 0;
        for (i = 0; i < this.palabra.length; i++) {
            this.arrayLetras.push(new LetterManager());
            this.arrayLetras[i].setLetter(this.palabra.charAt(i));
            this.arrayLetrasFicticias.push("_");
        }
        console.log(i)
        this.tamanyoPalabra = i;
        this.palabra = "";
        this.palabras = [];
    }

    mostrarLetrasRandom(tam) {
        let pepe = this;
        let arrayLettrasRandom = [];
        let posicionRandom=-1;
        return new Promise(function (resolve, reject) {
            let cont = 0;
            for (let i = 0; i < tam; i++) {
                cont = 0;
                posicionRandom = pepe.encontrarLetraDistinta(arrayLettrasRandom);
                let letra = pepe.arrayLetras[posicionRandom].getLetter();
                arrayLettrasRandom.push(letra);
                /*for (let j = 0; cont < pepe.palabra.length; j++) {
                    if (pepe.palabra[j].getLetter() === letra && posicionRandom !== j) {
                        cont++;
                    }
                }*/
                if (cont == 0) {
                    pepe.arrayLetrasFicticias[posicionRandom] = letra;
                    console.log("hola!")
                } else {
                    console.log("la letra:" + letra + " esta varias veces!!! " + cont)
                }
            }
            resolve();
        });
    }

    encontrarLetraDistinta(p) {
        let posicionRandom = -1;
        do {
            posicionRandom = Math.floor(Math.random() * (this.arrayLetrasFicticias.length));
        } while (p.includes(this.arrayLetras[posicionRandom].getLetter()));
        console.log("pos random! selected" + posicionRandom)
        return posicionRandom;
    }

    getWords() {
        let pepe = this;
        return new Promise(function (resolve, reject) {

            fetch("./js/data/words.json")
                .then((response) => response.json())
                .then((data) => {
                    pepe.palabras = data.wordList;
                }).then(() => {
                    pepe.seleccionarPalabra();
                }).then(() => {
                    resolve();
                });


        });
    }

    getArrayLetras() {
        return this.arrayLetras;
    }

    getLetrasVisibles() {
        return this.arrayLetrasFicticias;
    }

    getTamanyoPalabra() {
        return this.tamanyoPalabra;
    }

}