import {createStore} from 'vuex'
import FlightsModule from "@/store/FlightsModule.ts";


const store = createStore({
  modules: {
    FlightsModule
  }
});

export default store
