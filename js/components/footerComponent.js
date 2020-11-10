let footerComponent = Vue.component("footer-component", {
    props: ["nombre"],
    data: function () {
        return {
            myName: this.nombre
        }
    },
    template:
        `<footer class="footer navbar-dark bg-dark p-4 fixed-bottom">
        <div class="container">
          <span class="text-muted">Javier Martinez Arias - Práctica 2: Tecnologías del lado del cliente - UPSA</span>
        </div>
      </footer>`,
    methods: {
        mod() {
            this.$emit("mod", this.myName);
            console.log("Soy " + this.myName);
        }
    }
  });
  
  export default {
    footerComponent,
  }
