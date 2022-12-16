<template>
  <Navbar />
  <div class="main-block">
      <div class="left-part">
        <i class="fas fa-graduation-cap"></i>
        <h1>Ingresar nueva asignatura</h1>
        <p>Llena el formulario con la información correspondiente</p>

      </div>
      <form action="/">
        <div class="title">
          <i class="fas fa-pencil-alt"></i> 
          <h2>FORMULARIO DE NUEVA ASIGNATURA</h2>
        </div>
        <div class="info">
          <input class="fname" type="text" name="name" placeholder="Nombre del profesor/a que imparte el profesor">

          <select>
            <option value="course-type" selected>Seleccione una asignatura</option>
            <option value="short-courses">Lenguaje y comunicación</option>
            <option value="featured-courses">Matemáticas</option>
            <option value="undergraduate">Biología</option>
            <option value="diploma">Física</option>
            <option value="certificate">Educación Física</option>
            <option value="masters-degree">Orientación</option>
            <option value="postgraduate">Química</option>
            <option value="postgraduate">Otra asignatura</option>
          </select>
          <input type="text" name="text" placeholder="Otra asignatura">
        </div>
        <div class="checkbox">
          <input type="checkbox" name="checkbox"><span>Yo acepto las <a href="https://intranet.ufro.cl/">Politicas del servicio Intranet</a></span>
        </div>
        <button type="submit" href="/">Submit</button>
      </form>
    </div>
  <Router-view></Router-view>
</template>
<style>
html, body {
min-height: 100%;
}
body, div, form, input, select, p { 
padding: 0;
margin: 0;
outline: none;
font-family: Roboto, Arial, sans-serif;
font-size: 16px;
color: #eee;
}
body {
background: rgb(255, 255, 255);
background-size: cover;
}
h1, h2 {
text-transform: uppercase;
font-weight: 400;
}
h2 {
margin: 0 0 0 8px;
}
.main-block {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
padding: 25px;
background: rgba(0, 0, 0, 0.5); 
}
.left-part, form {
padding: 25px;
}
.left-part {
text-align: center;
}
.fa-graduation-cap {
font-size: 72px;
}
form {
background: rgba(0, 0, 0, 0.7); 
}
.title {
display: flex;
align-items: center;
margin-bottom: 20px;
}
.info {
display: flex;
flex-direction: column;
}
input, select {
padding: 5px;
margin-bottom: 30px;
background: transparent;
border: none;
border-bottom: 1px solid #eee;
}
input::placeholder {
color: #eee;
}
option:focus {
border: none;
}
option {
background: black; 
border: none;
}
.checkbox input {
margin: 0 10px 0 0;
vertical-align: middle;
}
.checkbox a {
color: #26a9e0;
}
.checkbox a:hover {
color: #85d6de;
}
.btn-item, button {
padding: 10px 5px;
margin-top: 20px;
border-radius: 5px; 
border: none;
background: #26a9e0; 
text-decoration: none;
font-size: 15px;
font-weight: 400;
color: #fff;
}
.btn-item {
display: inline-block;
margin: 20px 5px 0;
}
button {
width: 100%;
}
button:hover, .btn-item:hover {
background: #85d6de;
}
@media (min-width: 568px) {
html, body {
height: 100%;
}
.main-block {
flex-direction: row;
height: calc(100% - 50px);
}
.left-part, form {
flex: 1;
height: auto;
}
}
</style>
<script>


import Navbar from "../components/Navbar.vue";

export default {

  components: {
    Navbar,
  },
  methods: {},
};
</script>
