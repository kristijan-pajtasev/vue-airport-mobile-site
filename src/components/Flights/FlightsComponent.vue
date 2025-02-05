<script setup lang="ts">
import {Ref, ref, computed} from "vue";
import HomePageTiles from "@/components/HomePageTiles.vue";
import IconArrivals from "@/components/icons/IconArrivals.vue";
import IconDepartures from "@/components/icons/IconDepartures.vue";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import {useStore} from 'vuex'

const store = useStore();
console.log("useStore: ", store, store.state.FlightsModule.count)
store.dispatch("FlightsModule/getFlights")

interface FlightsType {
  destination: string;
  flightNumber: string;
  time: string;
  id: number
}

// const flights: Ref<Array<FlightsType>> = ref(store.getters.getFlights)
const flights = computed(() => {
  return store.getters["FlightsModule/getFlights"]
})
const isLoading = computed(() => {
  return store.getters["FlightsModule/isLoading"]
})

const flightDisplayType = ref("ARRIVALS")

const toggleFlights = (type: string) => {
  if (flightDisplayType.value !== type)
    flightDisplayType.value = type;
}

</script>

<template>
  <div class="flex flex-row border border-[#cccccc]">
    <button type="button"
            @click="toggleFlights('ARRIVALS')"
            class="flex-[1] flex flex-row gap-[0.5rem] items-center justify-center text-center p-[0.5rem] border-r border-r-[#cccccc]"
            :class="flightDisplayType === 'ARRIVALS' ? '' : 'bg-[#cccccc]'">
      <span class="inline-block h-[1.5rem]"><IconArrivals/></span>
      Arrivals
    </button>
    <button type="button"
            @click="toggleFlights('DEPARTURES')"
            class="flex-[1] flex flex-row gap-[0.5rem] items-center justify-center text-center p-[0.5rem]"
            :class="flightDisplayType === 'DEPARTURES' ? '' : 'bg-[#cccccc]'">
      <span class="inline-block h-[1.5rem]"><IconDepartures/></span>
      Departures
    </button>
  </div>
  <div v-if="isLoading" class="text-center p-[1rem] border border-[#cccccc] border-t-0">Loading data
    ...
  </div>
  <div v-if="!isLoading" v-for="(flight, index) in flights" :key="flight.id"
       class="border border-[#cccccc] border-t-0">
    <div class="flex">
      <div class="w-[4rem] p-[0.5rem]">{{ flight.time }}</div>
      <div class="flex-[1]">
        <div>{{ flight.destination }}</div>
        <div>{{ flight.flightNumber }}</div>
      </div>
      <div class="w-[2rem] flex flex-row items-center">
        <div class="h-[1rem]"><a :href="`/flight/${flight.id}`">
          <IconArrowRight/>
        </a></div>
      </div>
    </div>
  </div>
  <div class="text-center p-[0.5rem] text-white bg-[#1565C0]">
    Show more flights
  </div>
  <HomePageTiles/>
</template>
