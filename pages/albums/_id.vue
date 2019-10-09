<template lang="html">
  <div class="container">
  <header>
    <nuxt-link to="/">REGRESAR</nuxt-link>
  </header>
    <h1 class="title">{{album.title}}</h1>
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="photo in photos" :key="photo.id">
          <img :src="photo.url" :alt="photo.id"></img>
      </div>
    </div>
  </div>
</template>

<script>
import router from "vue-router";
import axios from "axios";
import env from "../../config/env";

export default {
  name: "AlbumIndPages",
  data() {
    return {
      album: {},
      photos: []
    };
  },
  created: async function() {
    let albumResponse = await axios.get(
      `${env.endpoint}/albums/${this.$route.params.id}`
    );
    this.album = albumResponse.data;
    let photoResponse = await axios.get(
      `${env.endpoint}/albums/${this.$route.params.id}/photos`
    );
    this.photos = photoResponse.data;
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}
header {
  margin-top: 10%;
  margin-bottom: 10%;
}
</style>