import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      apiData: []
    },
    actions: {
      async getSearchData({ commit },searchText) {
        let request =`https://graph.facebook.com/search?type=adinterest&q=[${searchText}]&limit=10000&locale=en_US&access_token=562476534284148%7CXnt3BLJJ5LrFULeEuLJqVOyUv9E`
        const res = await this.$axios.get(request)
        if (res == undefined) {
          console.log("Error occured")
          return
        } else {
            commit('SET_DATA', res.data.data)
        }
    }
      },

      mutations: {
        SET_DATA(state, data) {
          state.apiData = data
        },
    },
   })
}

export default store