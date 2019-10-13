import { shallowMount } from '@vue/test-utils';
import Onboarding from '@/views/onboarding/Onbording.vue';

describe('Onboarding.vue', () => {
  it('should render welcome view', () => {
    const wrapper = shallowMount(Onboarding);
    expect(wrapper).toMatchSnapshot();
  });

  it('should default to welcome stage', () => {
    const wrapper = shallowMount(Onboarding);

    const { currentStep } = wrapper.vm as any;
    expect(currentStep).toBe(0);
  });

  it('should update currentStep when advancing from welcome view', () => {
    const wrapper = shallowMount(Onboarding);
    const button = wrapper.find('#welcome button');

    button.trigger('click');

    const { currentStep } = wrapper.vm as any;
    expect(currentStep).toBe(1);
  });
});
