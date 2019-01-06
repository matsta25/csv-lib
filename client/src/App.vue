<template>
  <div id="app">
    <div class="container">
    <!-- Image and text -->
      <b-navbar variant="faded" type="light">
      <b-navbar-brand href="/">{
      <img src="./assets/miniJPK.png" class="d-inline-block align-top main-image" alt="BV">
      }
      </b-navbar-brand>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/Github">Github</router-link>
      </div>
      </b-navbar>
    </div>
    <router-view/>
    <footer class="footer">{ @{{year}} matsta25 & dootirl - All Rights Reserved }</footer>
  </div>
</template>

<script>
export default {
  data () {
      return {
        year: ''
      }
    },
  mounted: function() {
    let d = new Date();
    this.year = d.getFullYear(); 
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.footer{
  height: 56px;
  padding-top: 15px;
  padding-bottom: 15px;
}
html{
  height: calc(100% - 56px);
  width: 100%;
  margin-bottom: -56px;
}

body{
  height: calc(100% - 56px);
  width: 100%;
}
</style>
