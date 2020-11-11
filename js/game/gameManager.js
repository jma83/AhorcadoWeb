import WordManager from './wordManager.js'
//controla si se gana o pierde
//la dificultad
//llama al gestor de palabras
export default class GameManager {
    constructor(dificultad) {
        
        //coge la configuracion del jugador
        this.name = "";
        this.time = 0;
        this.letrasOcultas = 0;
        this.lifes = 0;
        //se la pasa al wordManager creado
        this.wordManager = new WordManager();
        //coge el elemento de input del jugador para las letras tecleadas
        this.selectMode(Math.floor(dificultad));
        this.wordManager.getWords();
        
    }

    selectMode(m){
        console.log("holi " + m)

        if (m == 0){
            this.time = 120;
            this.letrasOcultas = 0.3;
            this.lifes = 1.5;
        }else if (m == 1){
            this.time = 90;
            this.letrasOcultas = 0.5;
            this.lifes = 1.0;
        }else if (m == 2){
            this.time = 60;
            this.letrasOcultas = 0.6;
            this.lifes = 0.8;
        }
    }

    checkWin(){
        if (this)
        if (this.wordManager.checkGuessedWord()===true){
            //Win!
        }
    }

    getWordManager(){
        return this.wordManager;
    }

    getVidas(){
        return this.lifes;
    }
    getTiempo(){
        return this.time;
    }

    getLetrasOcultas(){
        return this.letrasOcultas;
    }
}