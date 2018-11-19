<template>
  <div id="app">
    <div>
    <!-- Image and text -->
      <b-navbar variant="faded" type="light">
      <b-navbar-brand href="#">
      <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top main-image" alt="BV">
      csv-lib
      </b-navbar-brand>
      <div id="nav">
      <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/posts">Posts</router-link>
      </div>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
