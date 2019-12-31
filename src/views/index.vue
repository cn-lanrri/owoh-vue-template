<template>
  <div class="container index">
    <h1>This is an index page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'index'
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.index {
  position: relative;
}
</style>
