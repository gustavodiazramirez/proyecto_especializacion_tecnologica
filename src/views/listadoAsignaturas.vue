<template>
    <navbar></navbar>
<div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"></div>
                    <div class="col-sm-4">
                        
                        <div class="search-box">
                            
                            <i class="material-icons">&#xE8B6;</i>
                            <input type="text" class="form-control" placeholder="Buscar Asignatura&hellip;">
                            
                        </div>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <h1 class="mx-auto text-center text-2xl font-extrabold tracking-tight leading-none text-gray-900  text-dark"> LISTADO DE ASIGNATURAS</h1>

                    <tr>
                        <th>ID</th>
                        <th>Nombre de la asignatura <i class="fa fa-sort"></i></th>
                        <th>Profesor/a a cargo de la asignatura</th>


                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Lenguaje y comunicación</td>
                        <td>Profesor Ramiro Sánchez</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mátemáticas</td>
                        <td>Profesor Héctor Sepúlveda </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Biología</td>
                        <td>Profesora Macarena Araya</td>
 
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Física</td>
                        <td>Profesora Moriel Núñez</td>

                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Educación Física</td>
                        <td>Profesor Juan Pablo Moncada</td>

                    </tr>        
                </tbody>
            </table>
           
        </div>
    </div>  
</div>   
</template>

<script>

import Navbar from "../components/Navbar.vue";

  
  export default{
      components:{
    Navbar,
    
    
}
  }

</script>