<template>
  <div class="container">
    <h1 class="title">Albums de la página</h1>
    <div class="columns is-multiline">
      <AlbumCard v-for="album in albums" :key="album.title" :album="album" />
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
  created: async function() {
    let response = await axios.get(`${env.endpoint}/albums`);
    this.albums = response.data;
  }
};
</script>

<style scoped></style>
