const FlightModule = {
  namespaced: true,
  state: {
    isLoading: false,
    flight: undefined
  },
  getters: {
    isLoading(state) {
      return state.isLoading
    },
    flight(state) {
      return state.flight
    },
  },
  mutations: {
    startLoading(state) {
      state.isLoading = true
    },
    stopLoading(state) {
      state.isLoading = false
    },
    setFlight(state, flightData) {
      state.flight = flightData
    }
  },
  actions: {
    getFlight({commit}) {
      commit("startLoading")
      setTimeout(() => {
        commit("setFlight",
          {
            status: "",
            via: "",
            time: "6:50 05-02-2025",
            flightNo: "OU651",
            airline: "Croatia Airlines"
          })
        commit("stopLoading")
      }, 1500)
    }
  }
}

export default FlightModule;
