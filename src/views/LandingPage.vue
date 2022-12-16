<template>
  <Navbar />
  <FondoLanding />
  <Footer></Footer>
  <Router-view></Router-view>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import FondoLanding from "../components/FondoLanding.vue";
import Footer from "../components/Footer.vue";

export default {

  components: {
    Navbar,
    FondoLanding,
    Footer,
  },
  methods: {},
};
</script>
