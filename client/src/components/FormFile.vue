<template>
<div>
  <fileupload
    name="recfile" 
    target="http://localhost:8081/upload"  
    action="POST" 
    v-on:progress="progress" 
    v-on:start="startUpload" 
    v-on:finish="finishUpload">
    </fileupload>
    <!-- <hr>
    {{res}} -->
</div>
</template>

<script>
import FileUpload from 'vue-simple-upload/dist/FileUpload'
  export default {
    components: {
    'fileupload': FileUpload
  },
    data () {
      return {
        res: {
          status: '',
          data: {
          }
        }
      }
    },
    methods: {
    startUpload(e) {
      // file upload start event
      console.log(e);
    },
    finishUpload(e) {
      // file upload finish event
      
      console.log(e);
      console.log(e.currentTarget.response);
      this.res = JSON.parse(e.currentTarget.response).res;
      console.log(this.res);
      
    },
    progress (e) {
      // file upload progress
      // returns false if progress is not computable
      console.log(e)
    }
  }
}
</script>
