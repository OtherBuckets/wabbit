import { RootState } from '@/store/types';

export default {
  hasBeenOnboarded(state: RootState): boolean {
    return state.hasBeenOnboarded;
  },
};
