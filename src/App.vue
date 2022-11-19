<template>
  <div>
  <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary" to="/">Home</button>
      <button type="button" class="btn btn-secondary">Agregar Asignatura</button>
      <button type="button" class="btn btn-secondary">Detalles Asignatura</button>
      <button type="button" class="btn btn-secondary">Listar Asignaturas</button>

    </div>
  <h1 style="text-align:center">BIENVENIDOS A LA INTRANET</h1>
 </div>
 
  <router-view/>



</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
