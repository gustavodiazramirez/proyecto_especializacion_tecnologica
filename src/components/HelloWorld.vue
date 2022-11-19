<template>
  <div>
    <div v-for="post in posts" :key="post.title">
      <h3>{{ post.title }}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',

  data() {
    return {
      posts: [],
    };
  },

  async createde() {
    try {
      let url = "https://jsonplaceholder.typicode.com/posts";
      let response = await axios.get(url);
      this.post = response.data;


    } catch (error) {
      console.log(error)
    }

  },



};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
