<script setup lang="ts">

import FlightsComponent from "@/components/Flights/FlightsComponent.vue";
</script>

<template>
  <div>
    <div class="w-full h-[12rem] overflow-hidden relative">
      <img alt="header logo image" src="/images/saint-jerome-split.jpg"
           class="w-full object-contain absolute top-0 bottom-0 right-0 left-0 m-auto"/>
      <div
        class="absolute bottom-0 left-0 right-0 h-[3rem] bg-gradient-to-t from-[#FFFFFF] to-[#FFFFFF00]"/>
    </div>
    <div class="w-full max-w-[24rem] m-auto">
      <FlightsComponent/>
    </div>
  </div>
</template>
