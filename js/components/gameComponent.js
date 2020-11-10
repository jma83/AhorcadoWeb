let gameComponent = Vue.component("game-component", {
    props: ["nombre"],
    data: function () {
        return {
            myName: this.nombre
        }
    },
    template:
        `
        <div id="game" class="card m-4 bg-dark text-white">
            <div class="row justify-content-center mt-4">
                <img src="/img/ahorcado.gif" alt="ahorcado" class="col-7 col-sm-2"/>
                <ul class="list-group list-group-horizontal-sm text-center col-3 col-sm-8  justify-content-sm-center align-self-center">
                    <li class="list-group-item col col-lg-1 bg-primary h3">C</li>
                    <li class="list-group-item col col-lg-1 bg-secondary h3 ">_</li>
                    <li class="list-group-item col col-lg-1 bg-secondary h3">_</li>
                    <li class="list-group-item col col-lg-1 bg-secondary h3">_</li>
                    <li class="list-group-item col col-lg-1 bg-secondary h3">_</li>
                    <li class="list-group-item col col-lg-1 bg-secondary h3">E</li>
                </ul>
            </div>
            <div class="row justify-content-around">
                <div class="card col-10 col-md-4 bg-dark align-self-start" style="width: 18rem;">
                    <div class="card-body bg-dark">
                        <h5 class="card-title">Nombre: Pepe</h5>
                        <ul class="list-group list-group-flush ">
                            <li class="list-group-item bg-dark"><button type="button" class="btn btn-danger" >
                            Vidas <span class="badge badge-light">9</span>
                          </button></li>
                            <li class="list-group-item bg-dark"><button type="button" class="btn btn-warning" >
                            Tiempo <span class="badge badge-light">9</span>
                          </button></li>
                            <li class="list-group-item bg-dark"><button type="button" class="btn btn-success" >
                            Aciertos <span class="badge badge-light">10/18</span>
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
    methods: {
        mod() {
            this.$emit("mod", this.myName);
            console.log("Soy " + this.myName);
        }
    }
});

export default {
    gameComponent,
}