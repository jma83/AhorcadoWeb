import WordManager from './wordManager.js'
//controla si se gana o pierde
//la dificultad
//llama al gestor de palabras
export default class GameManager {
    constructor(dificultad) {

        //coge la configuracion del jugador
        this.name = "";
        this.time = 0;
        this.letrasVisiblesIni = 0;
        this.lifes = 0;
        this.dificultad = dificultad;
        //se la pasa al wordManager creado
        this.wordManager = new WordManager();
        //coge el elemento de input del jugador para las letras tecleadas

        //this.wordManager.getWords().then(()=>this.selectMode(Math.floor(dificultad),this.wordManager.getTamanyoPalabra()));

    }

    selectMode(tam) {
        let pepe= this;
        return new Promise(function (resolve, reject) {
            let m = Math.floor(pepe.dificultad);
            console.log("holi " + m)

            if (m == 0) {
                console.log("tamanyo palabra: " + tam)

                pepe.time = 40 * tam;
                pepe.letrasVisiblesIni = 0.7 * tam;
                pepe.lifes = 1.5 * tam;
            } else if (m == 1) {
                console.log("tamanyo palabra: " + tam)

                pepe.time = 30 * tam;
                pepe.letrasVisiblesIni = 0.5 * tam;
                pepe.lifes = 1.0 * tam;
            } else if (m == 2) {
                console.log("tamanyo palabra: " + tam)

                pepe.time = 20 * tam;
                pepe.letrasVisiblesIni = 0.4 * tam;
                pepe.lifes = 0.8 * tam;
            }
            pepe.letrasVisiblesIni = Math.trunc(pepe.letrasVisiblesIni);
            pepe.lifes = Math.trunc(pepe.lifes);
            console.log(pepe.letrasVisiblesIni)
            console.log(pepe.lifes)

            resolve();
        });
        //this.wordManager
    }



    checkWin() {
        if (this)
            if (this.wordManager.checkGuessedWord() === true) {
                //Win!
            }
    }

    getWordManager() {
        return this.wordManager;
    }

    getVidas() {
        return this.lifes;
    }

    getTiempo() {
        return this.time;
    }

    getLetrasVisiblesIni() {
        return this.letrasVisiblesIni;
    }
}