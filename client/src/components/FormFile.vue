<template>
<div>
  <vue-dropzone 
  ref="myVueDropzone" 
  id="dropzone" 
  :options="dropzoneOptions"
  @vdropzone-complete="afterComplete"
  ></vue-dropzone>
  <span>
      {{ response.status }}
  </span>
</div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone"
import PostsService from '@/services/PostsService'

export default {
  name: "app",
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function() {
    return {
      dropzoneOptions: {
        url: "http://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "Access-Control-Allow-Origin": "*" }
      },
      response: {
        status: ''
      } 
    };
  },

  methods: {
    afterComplete(file) {
      console.log(file)
      this.sendFile()
    },
    async sendFile () {
      const response = await PostsService.sendFile()
      this.response = response.data
    }
  }
};
</script>