//gestiona la casilla donde se posiciona una letra de la palabra a resolver
//guarda la letra y gestiona el front
export default class LetterManager {
    constructor() {
        //crea un wordManager
        //coge la configuracion del jugador y se la pasa al wordManager creado
        //coge el elemento de input del jugador para las letras tecleadas
        this.letter = "A";
        this.visibleLetter = "_";
    }

    setLetter(a){
        this.letter = a;
    }
    
    getLetter(){
        return this.letter;
    }

    getVisibleLetter(){
        return this.visibleLetter;
    }

    comprobarLetra(a){
        if (a==this.letter){
            return true;
        }
        return false;
    }


}