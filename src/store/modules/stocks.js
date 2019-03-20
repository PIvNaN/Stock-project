import stocks from '../../data/stocks'

const state = {
  stocks: []
};

const mutations = {
  SET_STOCKS(state, value) {
    state.stocks = value;
  },
  RANDOM_STOCKS(state) {

  }
};

const actions = {
  buyStock({commit}, order) {
    commit();
  },
  setStocks({commit}) {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks({commit}) {
    commit('RANDOM_STOCKS')
  }
};

export default {
  state,
  mutations,
  actions
}