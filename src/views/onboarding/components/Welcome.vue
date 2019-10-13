<template>
  <div id="welcome">
    <h1 class="fade-in-from-above">Welcome to Wabbit. We're happy you're here.</h1>
    <button
      type="button"
      class="btn-large btn-light fade-in-from-below"
      @click="next"
    >
      Let's Get Started
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Welcome extends Vue {
  @Prop({ type: Function, required: true })
  private next!: () => void;
}
</script>

<style scoped lang="scss">
#welcome {
  height: 140px;
  position: absolute;
  width: 100%;

  h1 {
    top: 0;
    width: 500px;
  }

  button {
    animation-delay: 2s;
    bottom: 0;
  }

  h1, button {
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
}

h1 {
  color: $text-color-light;
}
</style>
