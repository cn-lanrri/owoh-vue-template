<template>
  <div id="app a">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'app'
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '$assets/scss/app.scss';
</style>
