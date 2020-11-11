import GameManager from '../game/gameManager.js'

let gameComponent = Vue.component("game-component", {
    props: ["name", "dificultad"],
    data: function () {
        return {
            gm: new GameManager(this.dificultad),
            arrayLetras: [],
            nombre: this.name,
            valorInput: "",
            estadoPartida: 0,
            msgCabecera: "Encuentra la palabra oculta!",
            descripcion: "Bienvenido! Escribe una letra para empezar. <br>OJO! Hay tiempo limte!",
            timerId: ""
        }
    },
    template:
        `
        <div id="game" class="card  p-4  m-4 bg-dark text-white">
        <h2 class="row p-2 justify-content-center">{{msgCabecera}}</h2>

            <div class="row justify-content-center">
                <img src="/img/ahorcado.gif" alt="ahorcado" class="col-12 col-sm-7 col-md-2"/>
                <ul class="list-group list-group-horizontal-sm text-center col-3 col-sm-8  justify-content-sm-center align-self-center">
                    <li v-for="n in getArrayLetras()" class="list-group-item col col-lg-1 bg-secondary h3">{{n}}</li>
                </ul>
            </div>
            <div class="row justify-content-around">
                <div class="card col-10 col-md-4 bg-dark align-self-start" style="width: 18rem;">
                    <div class="card-body bg-dark">
                        <h5 class="card-title">Nombre: {{this.nombre}}</h5>
                        <ul class="list-group list-group-flush ">
                            <li class="list-group-item bg-dark"><button type="button" class="btn btn-danger" >
                            Vidas <span class="badge badge-light">{{this.getVidas()}}</span>
                          </button></li>
                            <li class="list-group-item bg-dark"><button type="button" class="btn btn-warning" >
                            Tiempo <span class="badge badge-light">{{this.getTiempo()}}</span>
                          </button></li>
                            <li class="list-group-item bg-dark"><button type="button" class="btn btn-success" >
                            Visibles <span class="badge badge-light">{{this.getLetrasVisibles()}}/{{this.getLetrasTotales()}}</span>
                          </button></li>
                        </ul>
                    </div>
                </div>
                <form class="col-10 col-md-3 mt-2 p-2 align-self-start">
                    <div class="form-group">
                        <label for="name" >Siguiente letra: </label>
                        <input type="text" class="form-control bg-dark text-white" placeholder="Introduce letra" aria-label="Letra"
                            id="letra" name="letra" v-model.string="valorInput" maxlength="1">
                    </div>
                    <button type="submit"  v-on:click.prevent="comprobarLetraEnviada()" class="btn btn-primary">Enviar</button>
                </form>
                <div class="alert alert-primary col-10 col-md-10 col-lg-3 align-self-start" role="alert" v-html="descripcion">
                </div>
            </div>
            <div class="row justify-content-end">
                <button type="input" v-on:click.prevent="endGameEvent()" class="btn btn-warning col-4 col-md-2 mr-5 " id="hard" name="dificultad" data-dif="2">Volver</button>
            </div>
      </div>`,
    async created() {
        let newthis = this;
        await this.gm.getWordManager().getWords()
            .then(() => this.gm.selectMode(this.gm.getWordManager().getTamanyoPalabra())
                .then(() => this.gm.getWordManager().mostrarLetrasRandom(this.gm.getLetrasVisiblesIni())
                    .then(() => {
                        this.actualizarArrayLetras();
                        this.startTime();
                    })
                ));

        console.log(this.arrayLetras)
    },
    methods: {
        comprobarLetraEnviada() {
            //let letra = document.getElementById("letra").value;
            if (this.estadoPartida === 0) {
                let res = this.gm.getWordManager().comprobarLetraEnviada(this.valorInput);
                if (res > 0) {
                    this.descripcion = `<span class="text-success">Letra '` + this.valorInput + `' encontrada!</span>`;
                    this.gm.addLetraVisible(res);
                } else if (res === -1) {
                    this.descripcion = `<span class="text-danger">Esa letra ya está visible!</span>`;
                } else {
                    this.descripcion = `<span class="text-danger">Vaya! Letra '` + this.valorInput + `' no encontrada! <br> Has perdido una vida!</span>`;
                    this.gm.decreaseLife();
                }
                this.comprobarFinPartida();
                this.actualizarArrayLetras();
                this.valorInput = "";
            }
        },
        comprobarFinPartida() {
            this.estadoPartida = this.gm.comprobarFinPartida();
            if (this.estadoPartida === 1) {
                this.descripcion = "FIN DE LA PARTIDA! " + this.descripcion;
                this.msgCabecera = "HAS GANADO! :D";
                this.stopTime(false);
            } else if (this.estadoPartida === 2) {
                this.descripcion = "FIN DE LA PARTIDA! " + this.descripcion;
                this.msgCabecera = "HAS PERDIDO... :(";
                this.stopTime(false);
            } 
        },
        endGameEvent() {

            this.$emit("end");

        },
        actualizarArrayLetras() {
            this.arrayLetras = this.gm.getWordManager().getLetrasVisibles()
        },
        getArrayLetras() {
            return this.arrayLetras;
        },
        getLetrasTotales() {
            return this.arrayLetras.length;
        },
        getLetrasVisibles() {
            return this.gm.getLetrasVisiblesIni();
        },
        getVidas() {
            return this.gm.getVidas();
        },
        getTiempo() {
            return this.gm.getTiempo();
        },
        startTime() {
            this.timerId = setInterval((function (self) {
                return function () {   
                    if (self.gm.decreaseTime())
                    self.stopTime(true)
                }
            })(this), 1000);
        },
    
        stopTime(a) {
            clearInterval(this.timerId);
            if (a==true)
            this.comprobarFinPartida()
        }

    }
});

export default {
    gameComponent,
}