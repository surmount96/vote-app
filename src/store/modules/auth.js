import axios from "axios";
import * as Cookies from "js-cookie";

const state = {
  party: false,
  groupName: "",
  voteTitle: "",
  token:''
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
  },
  updateToken(state,data) {
    state.token = data;
  }
};

const actions = {
  /* eslint-disable */
  async verifyMail({commit}, credential) {
    // try{
      const res = await axios.post(`${process.env.VUE_APP_BASE_URL}login/start`,credential);
    
      console.log(res);

      return res;
    // }catch(err) {
    //   console.log(err)
    // }
  },
 // eslint-disable-next-line no-unused-vars
  async login({commit}, credential) {
    const res = await axios.post(`${process.env.VUE_APP_BASE_URL}login/finish`,credential);
    
    // console.log(res);
    commit('updateToken', res.data.access_token)
    Cookies.set('token', res.data.access_token);
    // localStorage.setItem('VOTE_TOKEN',res.data.access_token)
    return res;
  },
  async submitVote({commit}, credential) {
    const res = await axios.post(`${process.env.VUE_APP_BASE_URL}submit/vote`,credential,{
      headers:{
        'Authorization' : `Bearer ${Cookies.get('token')}`
      }
    });
    
    // console.log(res);

    return res;
  },
  async fetchContestant({commit}) {
    const res = await axios.get(`${process.env.VUE_APP_BASE_URL}contestants`,{
      headers:{
        'Authorization' : `Bearer ${Cookies.get('token')}`
      }
    });
    
    // console.log(res);

    return res;
  },
  async logout({commit}) {
   
    Cookies.remove('token')

    return true;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
