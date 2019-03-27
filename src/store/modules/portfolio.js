const state = {
  funds: 10000,
  stocks: []
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(item => item.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: stock.name,
        price: stock.price
      }
    });
  },
  funds(state) {
    return state.funds
  }
}

const mutations = {
  BUY_STOCK(state, {stockId, stockPrice, quantity}) {
    const record = state.stocks.find(item => item.id === stockId);

    if(record) {
      console.error('state.stocks', state.stocks);
      return record.quantity += quantity;
    }

    state.stocks.push({
      id: stockId,
      quantity: quantity
    })
  },
  SELL_STOCK(state, {stockId, stockPrice, quantity}) {
    const record = state.stocks.find(item => item.id === stockId);
    
    if(record.quantity > quantity) return record.quantity += quantity;
    state.stocks.splice(state.stocks.indexOf(record), 1);
  }
};

const actions = {
  buyStock({commit}, order) {
    commit('BUY_STOCK', order)
  },
  sellStock({commit}, order) {
    commit('SELL_STOCK', order)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}