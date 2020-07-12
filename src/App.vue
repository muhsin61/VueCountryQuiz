<template>
  <div id="app">
    <Capital v-if="$store.state.select" />
    <Flag  v-else-if="$store.state.flag" />
    <Result v-else />
    
  </div>
</template>

<script>
import Capital from "./components/Capital";
import Flag from "./components/Flag";
import Result from "./components/Result";
//https://restcountries.eu/rest/v2/all
export default {
  name: "App",
  components: {
    Capital,
    Flag,
    Result
  },
  created: function() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.$store.commit("addCountry", data);
        this.$store.commit("creates","change")
      }); 
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url('./assets/background.png');
  background-position: center center;
  position: relative;
  background-attachment: fixed;
  width: 100%;
  height: 700px;
  margin: 0;
  padding: 0;
  border:0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>