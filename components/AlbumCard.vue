<template lang="html">
    <div>
        <h3>
            {{ album.title }}
        </h3>
    </div>
</template>

<script>
export default {
  name: "AlbumCard",
  props: {
    album: Object
  }
};
</script>

<style scoped>
</style>