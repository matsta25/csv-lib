<template>
<div class="upload-btn-wrapper">
  <button class="btn">Upload a file</button>
    <input type="file" name="fileUpload" @change="onFileChange">
  </div>
</template>

<script type="text/babel">
export default {
  name: 'fileupload',
  props: {
    target: {
      type: String
    },
    action: {
      type: String
    }
  },

  data () {
    return {
      file: null
    }
  },
  methods: {
    emitter (event, data) {
      this.$emit(event, data)
    },
    updateProgress (oEvent) {
      let vm = this
      if (oEvent.lengthComputable) {
        let percentComplete = Math.round(oEvent.loaded * 100 / oEvent.total)
        vm.emitter('progress', percentComplete)
      } else {
        // Unable to compute progress information since the total size is unknown
        vm.emitter('progress', false)
      }
    },
    onFileChange (e) {
      let vm = this

      if (!this.target || this.target === '') {
        console.log('Please provide the target url')
      } else if (!this.action || this.action === '') {
        console.log('Please provide file upload action ( POST / PUT )')
      } else if (this.action !== 'POST' && this.action !== 'PUT') {
        console.log('File upload component only allows POST and PUT Actions')
      } else {
        let files = e.target.files || e.dataTransfer.files

        if (!files.length) {
          return
        };

        /*global FormData XMLHttpRequest:true*/
        /*eslint no-undef: "error"*/

        this.file = files[0]
        let formData = new FormData()
        formData.append('file', this.file)

        var xhr = new XMLHttpRequest()
        xhr.open(this.action, this.target)

        xhr.onloadstart = function (e) {
          vm.emitter('start', e)
        }
        xhr.onloadend = function (e) {
          vm.emitter('finish', e)
        }
        xhr.upload.onprogress = vm.updateProgress
        xhr.send(formData)
      }
    }
  }
}
</script>

<style>
  .upload-btn-wrapper {
  position: relative !important;
  overflow: hidden;
  display: inline-block;
}

.btn {
  border: 2px solid gray !important;
  color: gray !important;
  background-color: white !important;
  padding: 8px 20px !important;
  border-radius: 8px !important;
  font-size: 20px !important;
  font-weight: bold !important;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute !important;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
