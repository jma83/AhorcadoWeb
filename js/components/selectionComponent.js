let selectionComponent = Vue.component("selection-component", {
    data: function () {
        return {
            flag: false
        }
    },
    template:
        `
    <div id="seleccionInicial" class="card p-4 m-4 bg-dark text-white">
      <h2 class="row p-2 justify-content-center">Bienvenid@! Introduce nombre y dificultad</h2>
      <form id="my-form">
        <div class="row form-group mt-2 justify-content-center p-2">
          <label for="name" class="col-12 col-md-2">Nombre:</label>
          <input type="text" class="form-control col-8 col-md-4 bg-dark text-white" placeholder="Introduce nombre" aria-label="Nombre"
            id="name" name="name" required>
        </div>
        <div class="row btn-group-toggle justify-content-center mt-4 p-2" role="group"
          aria-label="Level of difficult">
          <label for="dificultad" class="col-12 col-md-2">Dificultad:</label>
          <button type="submit" v-on:click.prevent="startGameEvent($event)" class="btn btn-success col-md-3" id="easy" name="dificultad" data-dif="0">Fácil</button>
          <button type="submit" v-on:click.prevent="startGameEvent($event)" class="btn btn-primary col-md-3" id="regular" name="dificultad" data-dif="1">Normal</button>
          <button type="submit" v-on:click.prevent="startGameEvent($event)" class="btn btn-danger col-md-3" id="hard" name="dificultad" data-dif="2">Díficil</button>
        </div>
      </form>
    </div>`,
    methods: {
        startGameEvent(e) {

            let dificultad = e.target.dataset.dif;
            let nombre = document.getElementById("name").value;
            if (nombre!=="")
            this.$emit("start", { nombre, dificultad });

        }
    }
});

export default {
    selectionComponent,
}


