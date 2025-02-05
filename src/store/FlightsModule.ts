
const FlightsModule = {
  namespaced: true,
  state() {
  return {
    count: 0,
    flights: [],
    isLoading: true
  }
},
  getters: {
    getFlights(state) {
      return state.flights
    },
    isLoading(state) {
      return state.isLoading
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    startLoading(state) {
      state.isLoading = true
    },
    stopLoading(state) {
      state.isLoading = false
    },
    setFlights(state, data) {
      state.flights = data;
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    },
    startLoading() {
      this.$store.commit('startLoading')
    },
    stopLoading() {
      this.$store.commit('stopLoading')
    }
  },
  actions: {
    getFlights({commit}) {
      commit("startLoading")
      setTimeout(() => {
        commit("setFlights", [
          {
            destination: "Barcelona",
            flightNumber: "UO1234",
            time: "18:55",
            id: 1
          },
          {
            destination: "Milan",
            flightNumber: "UO1235",
            time: "18:55",
            id: 2
          },
          {
            destination: "Frankfurt",
            flightNumber: "UO1236",
            time: "18:55",
            id: 3
          }])
        commit("stopLoading")
      }, 1500)
    }
  }
}

export default FlightsModule;
