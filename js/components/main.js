import './headerComponent.js';
import './footerComponent.js';
import './selectionComponent.js';
import './gameComponent.js';


let app = new Vue({
    el: "#miapp",
    data: {
        startedGame: false,
        dificultad: 0,
        nombre: ""
    },/*
    created(){
        console.log("Created");
        //this.nombre = this.nombre + " Álvarez";
    },
    mounted() {
        // Create WebSocket connection.
        const socket = new WebSocket('ws://localhost:5500');

        // Connection opened
        socket.addEventListener('open', function (event) {
            socket.send('Hello Server!');
        });

        // Listen for messages
        socket.addEventListener('message', function (event) {
            console.log('Message from server ', event.data);
        });
    },*/
    methods: {
        startGame(pepe){
            this.startedGame=true;
            console.log("EMPIEZA EL JUEGO!" + pepe.nombre + " y " + pepe.dificultad)
        },
        getStartedGame(){
            return this.startedGame;
        },
        update(a) {
            console.log("Update: de '" + this.nombre + "' a '" + a + "'")
            this.nombre = a;
        }
    }
})