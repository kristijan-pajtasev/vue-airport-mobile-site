<script lang="ts" setup>
import {Ref, ref, computed} from "vue";
import {useStore} from 'vuex'

const store = useStore()
store.dispatch("FlightModule/getFlight");
const isLoading = computed(() => {
  return store.getters["FlightModule/isLoading"]
})
const flight = computed(() => {
  return store.getters["FlightModule/flight"]
})
console.log("flightData", flight)
</script>

<template>
  <h1 class="text-center">Departure to: <span>Zagreb</span></h1>
  <div v-if="isLoading">Loading flight details ... </div>
  <ul v-if="!isLoading" class="mt-[1rem]">
    <li class="flex flex-row gap-[1rem]">
      <div class="w-[40%]">Via:</div>
      <div>{{flight.via}}</div>
    </li>
    <li class="flex flex-row gap-[1rem]">
      <div class="w-[40%]">Status:</div>
      <div>{{flight.status}}</div>
    </li>
    <li class="flex flex-row gap-[1rem]">
      <div class="w-[40%]">Time:</div>
      <div>{{flight.time}}</div>
    </li>
    <li class="flex flex-row gap-[1rem]">
      <div class="w-[40%]">Flight No.</div>
      <div>{{ flight.flightNo }}</div>
    </li>
    <li class="flex flex-row gap-[1rem]">
      <div class="w-[40%]">Airline</div>
      <div>{{flight.airline}}</div>
    </li>
  </ul>
</template>
