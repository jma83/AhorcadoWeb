let footerComponent = Vue.component("footer-component", {

    template:
        `<footer class="footer navbar-dark bg-dark p-4 fixed">
        <div class="container">
          <span class="text-muted">Javier Martinez Arias - Práctica 2: Tecnologías del lado del cliente - UPSA</span>
        </div>
      </footer>`,
    methods: {

    }
  });
  
  export default {
    footerComponent,
  }
