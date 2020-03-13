const state = {
  currentDevice: {
    Para: "",
    SystemID: "",
    Name: ""
  }
};

const mutations = {
  set_currentDevice(state, params) {
    state.currentDevice = params;
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
