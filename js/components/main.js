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
    template: `
    <div>
        <header-component></header-component>
        <main class="container">
        <div v-if="startedGame === false">
            <selection-component v-on:start="startGame"></selection-component>
        </div>
        <div v-else>
            <game-component v-on:end="returnSelection" v-bind:name="nombre" v-bind:dificultad="dificultad"></game-component>
        </div>
        </main>
        <footer-component></footer-component>
    </div>`,
    methods: {
        startGame(dat){
            this.startedGame = true;
            this.nombre = dat.nombre;
            this.dificultad = dat.dificultad
        },
        returnSelection(){
            this.startedGame = false;
            this.nombre = "";
            this.dificultad = 0;
        },

        getStartedGame(){
            return this.startedGame;
        }
    }
})