<template>
  <div>
      <NavbarDetalles />
      <FondoLanding />
      <TablaGrafico />
  </div>
</template>

<script>


import TablaGrafico from "../components/TablaGraficoNotas.vue";
  import Navbar from "../components/Navbar.vue";
import NavbarDetalles from "@/components/NavbarDetalles.vue";

  
  export default{
      components:{
    Navbar,
    TablaGrafico,
    NavbarDetalles
}
  }

</script>