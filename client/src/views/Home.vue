<template>
  <div>
    <b-card class="text-center">
    <!-- <DropSection msg="This is dropsection component."/> -->
    <hr>
    <FormFile/>

    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src
import FormFile from '@/components/FormFile.vue'

export default {
  name: 'home',
  components: {
    FormFile
  }
}
</script>
