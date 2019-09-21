import Vue from 'vue';
import Vuex from 'vuex';
import getters from '@/store/getters';

export interface RootState {
  hasBeenOnboarded: boolean;
}

const initialState: RootState = {
  hasBeenOnboarded: false,
};

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  state: initialState
});