<script setup lang="ts">
import IconCheckIn from "@/components/icons/IconCheckIn.vue";
import IconBus from "@/components/icons/IconBus.vue";
import IconContact from "@/components/icons/IconContact.vue";
import IconParking from "@/components/icons/IconParking.vue";
</script>

<template>
  <div class="grid grid-cols-2 gap-[1rem] mt-[1rem] pb-[1rem]">
    <div class="aspect-[1] border border-[#ccc] rounded-lg hover:bg-[#e4e4e4]">
      <div class="w-full h-full  flex flex-row justify-center items-center">
        <div>
          <div class="m-auto mb-[0.5rem] w-[4rem] h-[4rem] aspect-[1]">
            <IconCheckIn/>
          </div>
          <div class="text-center text-[1.1rem]">Check In
          </div>
        </div>
      </div>
    </div>
    <a href="/getting-here" class="aspect-[1] border border-[#ccc] rounded-lg hover:bg-[#e4e4e4]">
      <div class="w-full h-full  flex flex-row justify-center items-center">
        <div>
          <div class="m-auto mb-[0.5rem] w-[4rem] h-[4rem] aspect-[1]">
            <IconBus/>
          </div>
          <div class="text-center text-[1.1rem]">Getting Here
          </div>
        </div>
      </div>
    </a>
    <a href="/parking" class="aspect-[1] border border-[#ccc] rounded-lg hover:bg-[#e4e4e4]">
      <div class="w-full h-full  flex flex-row justify-center items-center">
        <div>
          <div class="m-auto mb-[0.5rem] w-[4rem] h-[4rem] aspect-[1]">
            <IconParking/>
          </div>
          <div class="text-center text-[1.1rem]">Parking
          </div>
        </div>
      </div>
    </a>
    <a href="/contact" class="aspect-[1] border border-[#ccc] rounded-lg hover:bg-[#e4e4e4]">
      <div class="w-full h-full  flex flex-row justify-center items-center">
        <div>
          <div class="m-auto mb-[0.5rem] w-[4rem] h-[4rem] aspect-[1]">
            <IconContact/>
          </div>
          <div class="text-center text-[1.1rem]">Contact
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
