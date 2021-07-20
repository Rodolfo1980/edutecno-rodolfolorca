<template>
  <div>
    <Nav />
    <Body />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Body from "./components/Body";

export default {
  name: "App",
  components: {
    Nav,
    Body,
  },
};
</script>
<style>
</style>
