import {createStore} from 'vuex'
import FlightsModule from "@/store/FlightsModule.ts";
import FlightModule from "@/store/FlightModule.ts";


const store = createStore({
  modules: {
    FlightsModule,
    FlightModule
  }
});

export default store
