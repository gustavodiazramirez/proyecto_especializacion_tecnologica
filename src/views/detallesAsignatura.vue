<template>
  <NavbarDetalles />
  <FondoDetalles />
  <Footer></Footer>
  <Router-view></Router-view>
</template>
<script>
import NavbarDetalles from "../components/NavbarDetalles.vue";
import FondoDetalles from "../components/FondoDetalles.vue";
import Footer from "../components/Footer.vue";

export default {

  components: {
    NavbarDetalles,
    FondoDetalles,
    Footer,
  },
  methods: {},
};
</script>
