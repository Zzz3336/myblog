<template>
  <div>test</div>
</template>
<script>
import { get, post } from "../network/request";
export default {
  mounted() {
    get("/")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
</style>
