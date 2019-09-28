<template>
  <div class="container">
    <h1 class="title">Albums de la página</h1>
    <div class="columns is-multiline">
      <AlbumCard :album="album" v-for="album in albums" :key="album.title" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import env from "../config/env";
import AlbumCard from "../components/AlbumCard";

export default {
  name: "IndexPage",
  components: {
    AlbumCard
  },
  data() {
    return {
      albums: []
    };
  },
  created() {
    axios.get(`${env.endopoint}/albums`).then(response => {
      this.albums = response.data;
    });
  }
};
</script>

<style scoped>
</style>