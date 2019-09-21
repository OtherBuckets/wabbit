<template>
  <div id="container" class="fill-parent">
    <template v-if="isOnWelcome">
      <div id="welcome">
        <h1
          class="fade-in-from-above"
        >
          Welcome to Wabbit. We're happy you're here.
        </h1>
        <button
          type="button"
          class="btn-large btn-light fade-in-from-below"
          @click="nextStep"
        >
          Let's Get Started
        </button>
      </div>
    </template>
    <div id="page-indicators">
      <div :class="{ 'current-page': isOnWelcome }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

enum OnboardingStep {
  Welcome,
  AwsSetup,
  InitialUpload,
}

@Component({})
export default class Onbording extends Vue {
  private currentStep = OnboardingStep.Welcome;

  get isOnWelcome() {
    return this.currentStep === OnboardingStep.Welcome;
  }

  nextStep() {
    switch (this.currentStep) {
      case OnboardingStep.Welcome:
        this.currentStep = OnboardingStep.AwsSetup;
        break;
      default:
        throw Error(`No next behavior defined for step ${this.currentStep}`);
    }
  }
}
</script>

<style scoped lang="scss">
.fill-parent {
  background-color: $brand-accent-color;
}

#container {
  align-items: center;
  display: flex;
  justify-content: center;
}

#welcome {
  height: 140px;
  position: absolute;
  width: 100%;

  h1 {
    color: $text-color-light;
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

#page-indicators {
  bottom: 10%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  width: 65px;

  div {
    border: 1px solid $brand-color;
    border-radius: 5px;
    height: 10px;
    width: 10px;

    &.current-page {
      background-color: $brand-color;
    }
  }
}
</style>
