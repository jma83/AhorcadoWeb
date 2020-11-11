import GameManager from '../game/gameManager.js'

let gameComponent = Vue.component("game-component", {
    props: ["name", "dificultad"],
    data: function () {
        return {
            arrayLetras: [],
            nombre: this.name,
            tiempo: 0,
            letrasTotales: 0,
            letrasVisibles: 0,
            vidas: 0
        }
    },
    template:
        `
        <div id="game" class="card m-4 bg-dark text-white">
        <h2 class="row p-2 justify-content-center">Encuentra la palabra oculta!</h2>

            <div class="row justify-content-center">
                <img src="/img/ahorcado.gif" alt="ahorcado" class="col-7 col-sm-2"/>
                <ul class="list-group list-group-horizontal-sm text-center col-3 col-sm-8  justify-content-sm-center align-self-center">
                    <li v-for="n in arrayLetras" class="list-group-item col col-lg-1 bg-secondary h3">{{n}}</li>
                </ul>
            </div>
            <div class="row justify-content-around">
                <div class="card col-10 col-md-4 bg-dark align-self-start" style="width: 18rem;">
                    <div class="card-body bg-dark">
                        <h5 class="card-title">Nombre: {{this.nombre}}</h5>
                        <ul class="list-group list-group-flush ">
                            <li class="list-group-item bg-dark"><button type="button" class="btn btn-danger" >
                            Vidas <span class="badge badge-light">{{this.vidas}}</span>
                          </button></li>
                            <li class="list-group-item bg-dark"><button type="button" class="btn btn-warning" >
                            Tiempo <span class="badge badge-light">{{this.tiempo}}</span>
                          </button></li>
                            <li class="list-group-item bg-dark"><button type="button" class="btn btn-success" >
                            Visibles <span class="badge badge-light">{{this.letrasVisibles}}/{{this.letrasTotales}}</span>
                          </button></li>
                        </ul>
                    </div>
                </div>
                <form class="col-10 col-md-3 mt-2 p-2 align-self-start">
                    <div class="form-group">
                        <label for="name" >Siguiente letra: </label>
                        <input type="text" class="form-control bg-dark text-white" placeholder="Introduce letra" aria-label="Letra"
                            id="letra" name="letra" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
                <div class="alert alert-primary col-10 col-md-10 col-lg-3 align-self-start" role="alert">
                Bienvenido! Escribe una letra para empezar
                </div>
            </div>
      </div>`,
    async created() {
        console.log("ME HA LLEGADO LA DIFICULTAD: " + this.dificultad)
        let gm = new GameManager(this.dificultad);
        await gm.getWordManager().getWords()
            .then(() => gm.selectMode(gm.getWordManager().getTamanyoPalabra())
                .then(() => gm.getWordManager().mostrarLetrasRandom(gm.getLetrasVisiblesIni()).then(()=>{
                    console.log("pepito")
                    this.arrayLetras = gm.getWordManager().getLetrasVisibles();
                    this.letrasTotales = this.arrayLetras.length;
                    this.letrasVisibles = gm.getLetrasVisiblesIni();
                    this.vidas = gm.getVidas();
                    this.tiempo = gm.getTiempo();
                })
                ));


        console.log(this.arrayLetras)
    },
    methods: {

    }
});

export default {
    gameComponent,
}