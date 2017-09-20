import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  naviActived: '1'
};

const mutations = {
  naviChange(state, activeNumber) {
    state.naviActived = activeNumber;
  }
};

export default new Vuex.Store({
  state,
  mutations
})
