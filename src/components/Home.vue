<template>
  <div>
    <Main />
    <router-view></router-view>
  </div>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "Home",
  components: {
    Main,
  },
};
</script>

<style>
</style>
