<template>
  <h1>Hola Mundo</h1>
</template>

<script>
import axios from "axios";
import env from "../config/env";

export default {
  name: "IndexPage",
  created() {
    axios
      .get(`${env.endopoint}/albums`)
      .then(response => console.log(response));
  }
};
</script>

<style>
</style>