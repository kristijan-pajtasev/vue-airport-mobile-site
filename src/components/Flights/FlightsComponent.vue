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
  <div class="text-center p-[0.5rem] text-white bg-[#1565C0]">
    Show more flights
  </div>
  <div class="grid grid-cols-2 gap-[1rem] mt-[1rem]">
    <div class="aspect-[1] border border-[#ccc]">
      <div class="w-full h-full  flex flex-row justify-center items-center">
        <div>
          <div class="m-auto mb-[0.5rem] w-[6rem] h-[6rem] aspect-[1] bg-[#AAAAAA]">Icon</div>
          <div class="text-center">Check In
            <!--      Getting here, Parking, Contact-->
          </div>
        </div>
      </div>
    </div>
    <div class="aspect-[1] border border-[#ccc]"></div>
    <div class="aspect-[1] border border-[#ccc]"></div>
    <div class="aspect-[1] border border-[#ccc]"></div>
  </div>
</template>
