let headerComponent = Vue.component("header-component", {
  template:
      `<header>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="index.html">
          <img src="/img/logo.png" width="54" height="54" class="d-inline-block align-top float-left mr-2"
            alt="logo-tres-en-linea" />
          <h1 class="float-left">El Ahorcado Web!</h1>
        </a>
      </nav>
    </header>`,
  methods: {

  }
});

export default {
  headerComponent,
}