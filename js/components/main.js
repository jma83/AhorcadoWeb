import './headerComponent.js';
import './footerComponent.js';
import './selectionComponent.js';
import './gameComponent.js';


new Vue({
    el: "#miapp",
    data: {
        startedGame: false,
        dificultad: 0,
        nombre: ""
    },
    methods: {
        startGame(dat){
            this.startedGame = true;
            this.nombre = dat.nombre;
            this.dificultad = dat.dificultad
        },
        getStartedGame(){
            return this.startedGame;
        }
    }
})