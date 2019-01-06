<template>
  <div id="app">
  <div id="app-wrapper">
      <div id="scene">
          <img class="slide img-back" data-depth="0.05" src="../assets/jpk-back.png">
          <div class="slide img-front" data-depth="0.3">
            <img alt="JPK logo" src="../assets/jpk-front.png">
          </div>
            <div class="input-section slide button">
              <FormFile/>
            </div>
      </div>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import FormFile from '@/components/FormFile.vue'

import Parallax from 'parallax-js'

export default {
  name: 'home',
  components: {
    FormFile
  },
  mounted: function () {
    let scene = document.getElementById('scene')
    let parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      calibrateX: true,
      calibrateY: true
    })
  }
}

</script>

<style>

#app{
  display: table;
  height: 100%;
  width: 100%;
}

#app-wrapper{
display: table-cell;
vertical-align: middle;
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #4f5b69, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #ffffff, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
pointer-events: none ;
}

#scene{
      position: relative;
}

.slide {
      position: absolute;
}

.img-back{
  left: calc(50% - 200px) !important;
  top: calc(50% - 200px) !important;
  }

.img-front{
  left: calc(50% - 200px) !important;
  top: calc(50% - 228px) !important;
}

.input-section{
  position: absolute !important;
  left: calc(50% - 80px) !important;
  top: calc(50% + 200px) !important;
}

[type="file"]{
  display: inline;
}

.button{
  z-index: 10 !important;
  pointer-events: all;
}

</style>
