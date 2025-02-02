<script setup lang="ts">
import {Ref, ref} from "vue";
import IconCheckIn from "@/components/icons/IconCheckIn.vue";
import IconBus from "@/components/icons/IconBus.vue";
import IconParking from "@/components/icons/IconParking.vue";
import IconContact from "@/components/icons/IconContact.vue";
import HomePageTiles from "@/components/HomePageTiles.vue";
import IconArrivals from "@/components/icons/IconArrivals.vue";
import IconDepartures from "@/components/icons/IconDepartures.vue";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";

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
    <button type="button" class="flex-[1] flex flex-row items-center justify-center text-center p-[0.5rem] border-r border-r-[#cccccc]">
      <span class="inline-block h-[1.5rem]"><IconArrivals/></span>
      Departures
    </button>
    <button type="button" class="flex-[1] flex flex-row items-center justify-center text-center p-[0.5rem]">
      <span class="inline-block h-[1.5rem]"><IconDepartures/></span>
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
        <div class="h-[1rem]"><IconArrowRight /></div>
      </div>
    </div>
  </div>
  <div class="text-center p-[0.5rem] text-white bg-[#1565C0]">
    Show more flights
  </div>
  <HomePageTiles/>
</template>
