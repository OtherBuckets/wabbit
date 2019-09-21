import { RootState } from '@/store/index';

export default {
  hasBeenOnboarded(state: RootState): boolean {
    return state.hasBeenOnboarded;
  }
};
