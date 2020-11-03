//selecciona y guarda una palabra de la lista, en base a lo indicado por gameManager (que tiene todos los settigns de usuario)
//compruba si los inputs de usuario coinciden con alguna letra de la palabra oculta
//muestra u oculta las letras de la palabra en cuestion -> llamando al letter manager (que controla cada casilla y letra en su posicion)
//le diche al gameManager si se ha acabado la partida (victoria o derrota)
import LetterManager from './letterManager'
//controla si se gana o pierde
//la dificultad
//llama al gestor de palabras
export default class WordManager {
    constructor() {
        //crea un wordManager
        //coge la configuracion del jugador y se la pasa al wordManager creado
        //coge el elemento de input del jugador para las letras tecleadas

    }

    checkGuessedWord() {

    }

    getWord() {
        const address = fetch("./js/data/words.json")
            .then((response) => response.json())
            .then((data) => {
                return data.wordList
            });

        const printAddress = async () => {
            const a = await address;
            console.log(a);
            return a;
        };

        printAddress();
    }


}