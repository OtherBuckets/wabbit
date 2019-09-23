<template>
  <div id="app" class="fill-parent">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

@Component({})
export default class App extends Vue { }
</script>

<style lang="scss">
@import 'scss/main';
</style>
