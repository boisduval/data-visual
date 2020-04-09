const state = {
  os: ""
};

const mutations = {
  set_os(state, params) {
    state.os = params;
  }
};

const actions = {};

const namespaced = true;

export default {
  state,
  mutations,
  actions,
  namespaced
};
