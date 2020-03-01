<template>
  <div id="app">
    <Header></Header>
    <div class="p-6">
      <Doc/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Doc from "./components/Doc";

export default {
  name: "App",
  components: {
    Header,
    Doc
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
