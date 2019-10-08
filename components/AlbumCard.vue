<template lang="html">
 <div class="column is-one-quarter">
    <div class="box">
      <h3>
      {{ album.title }}
      </h3>
      <nuxt-link :to="`/albums/${album.id}`" class="button is-primary">Ver Albúm</nuxt-link>
      <!-- <a class="button is-primary" href="#">Ver album</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumCard",
  //Propiedades de un elemento
  props: {
    album: Object
  }
};
</script>

<style scoped>
.box {
  padding: 1em;
}
h3 {
  min-height: 5em;
}
</style>