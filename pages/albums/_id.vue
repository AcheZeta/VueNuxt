<template lang="html">
<h1>Album Id {{albumId}}</h1>
</template>

<script>
import router from "vue-router";
import axios from "axios";
export default {
  name: "AlbumIndPages",
  data() {
    return {
      idAlbum: []
    };
  },
  created() {
    this.albumId = this.$route.params.id;
  }
};
</script>

<style scoped>
</style>