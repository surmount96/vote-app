const state = {
  party: false,
  groupName: "",
  voteTitle: ""
};

const getters = {};

const mutations = {
  updateParty(state) {
    if (!state.party) {
      state.party = true;
    } else {
      state.party = false;
    }
  },
  updatePartyTable(state) {
    state.partyTable = true;
  },
  setGroupName(state, data) {
    state.groupName = data;
  },
  updateVoteTitle(state, data) {
    state.voteTitle = data;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
