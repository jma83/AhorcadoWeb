import WordManager from './gameManager'
//controla si se gana o pierde
//la dificultad
//llama al gestor de palabras
export default class GameManager {
    constructor() {
        
        //coge la configuracion del jugador
        this.time = 0;
        this.letrasOcultas = 0;
        this.lifes = 0;
        //se la pasa al wordManager creado
        this.wordManager = new WordManager();
        //coge el elemento de input del jugador para las letras tecleadas

    }

    selectMode(m){
        if (m == "Easy"){
            this.time = 120;
            this.letrasOcultas = 0.3;
            this.lifes = 1.5;
        }else if (m == "Medium"){
            this.time = 90;
            this.letrasOcultas = 0.5;
            this.lifes = 1.0;
        }else if (m == "Hard"){
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
}