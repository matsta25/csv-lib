<template>
  <div id="app-wrapper2">
  <div class="outer">
  <div class="middle">
    <div class="inner">
    <div id="contet">
    demo-gif
    <p>
    This project has been to help see content of JPK/XML file.</p>
    You can check this repo on github 
    <a href="https://github.com/matsta25/csv-lib">HERE.</a> 
  </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'github'
}
</script>

<style>
#app-wrapper2{
vertical-align: middle;
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #233041, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #ffffff, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height: 100% !important
}

#content{
  position: relative;
  top: calc(50% - 200px) !important;
}

html{
  height: calc(100% - 56px);
  width: 100%;
}

body{
  height: calc(100% - 56px);
  width: 100%;
}

.outer {
  margin: 56px 0;
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% - 112px);
  width: 100%;
}

.middle {
  display: table-cell;
  vertical-align: middle;
}

.inner {
  margin-left: auto;
  margin-right: auto;
  /*whatever width you want*/
}
</style>

