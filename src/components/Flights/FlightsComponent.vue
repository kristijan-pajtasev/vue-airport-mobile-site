<script setup lang="ts">
import {Ref, ref} from "vue";

interface FlightsType {
  destination: string;
  flightNumber: string;
  time: string;
  id: number
}

const flights: Ref<Array<FlightsType>> = ref([
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
  }
])
</script>

<template>
  <div class="flex flex-row border border-[#cccccc]">
    <button type="button" class="flex-[1] text-center p-[0.5rem] border-r border-r-[#cccccc]">
      Departures
    </button>
    <button type="button" class="flex-[1] text-center p-[0.5rem]">
      Arrivals
    </button>
  </div>
  <div v-for="(flight, index) in flights" :key="flight.id"
       class="border border-[#cccccc] border-t-0">
    <div class="flex">
      <div class="w-[4rem] p-[0.5rem]">{{ flight.time }}</div>
      <div class="flex-[1]">
        <div>{{ flight.destination }}</div>
        <div>{{ flight.flightNumber }}</div>
      </div>
      <div class="w-[2rem] flex flex-row items-center">
        {{ ">" }}
      </div>
    </div>
  </div>
</template>
