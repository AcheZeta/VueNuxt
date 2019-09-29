<template lang="html">
  <div class="container">
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
  created() {
    axios
      .get(`${env.endpoint}/albums/${this.$route.params.id}`)
      .then(albumResponse => {
        this.album = albumResponse.data;
      });
    axios
      .get(`${env.endpoint}/albums/${this.$route.params.id}/photos`)
      .then(photo => {
        this.photos = photo.data;
      })
  }
};
</script>

<style scoped>
</style>