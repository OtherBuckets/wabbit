<template>
  <div id="container" class="fill-parent">
    <transition name="slide-fade" mode="out-in">
      <Welcome
        key="1"
        :next="goToAwsStep"
        v-if="isOnWelcome"
      />
      <AwsInfo
        key="2"
        :next="goToUploadStep"
        :profile="awsProfile"
        v-else-if="isOnAwsInfo"
      />
    </transition>
    <div id="page-indicators">
      <div :class="{ 'current-page': isOnWelcome }"></div>
      <div :class="{ 'current-page': isOnAwsInfo }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Welcome from '@/views/onboarding/components/Welcome.vue';
import AwsInfo from '@/views/onboarding/components/AwsInfo.vue';
import { AwsProfile } from '@/types';

enum OnboardingStep {
  WelcomeUser,
  AwsSetup,
  InitialUpload,
}

@Component({
  components: {
    AwsInfo,
    Welcome,
  },
})
export default class Onbording extends Vue {
  private currentStep = OnboardingStep.WelcomeUser;

  private awsProfile: AwsProfile = new AwsProfile();

  get isOnWelcome() {
    return this.currentStep === OnboardingStep.WelcomeUser;
  }

  get isOnAwsInfo() {
    return this.currentStep === OnboardingStep.AwsSetup;
  }

  goToAwsStep() {
    this.currentStep = OnboardingStep.AwsSetup;
  }

  goToUploadStep() {
    this.currentStep = OnboardingStep.InitialUpload;
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

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
