const state = {
  currentDevice: {
    Para: "",
    SystemID: "",
    Name: "",
    Num: ""
  },
  currentNum: "",
  slideList: []
};

const mutations = {
  set_current_device(state, params) {
    state.currentDevice = params;
  },
  set_slide_list(state, params) {
    state.slideList = params;
  },
  set_current_num(state, params) {
    state.currentNum = params;
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
