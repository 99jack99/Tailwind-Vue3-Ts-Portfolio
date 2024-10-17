<script setup lang="ts">
import { ref } from 'vue'

let experiences = ref([
  {
    id: 1,
    name: 'Company 1',
    date: ['2021', '2019'],
    position: 'Frontend developer',
    description: 'Development of different features, and design systems',
    image: '/src/assets/icons/google.svg'
  },
  {
    id: 2,
    name: 'Company 2',
    date: ['2019', '2017'],
    position: 'Frontend developer',
    description: 'Development of different features, and design systems',
    image: '/src/assets/icons/google.svg'
  },
  {
    id: 3,
    name: 'Company 3',
    date: ['2017', '2013'],
    position: 'Frontend developer',
    description: 'Development of different features, and design systems',
    image: '/src/assets/icons/google.svg'
  }
])
</script>

<template>
  <div class="container-fluid flex flex-col items-center min-h-screen p-10">
    <h1 class="text-7xl sm:text-9xl font-semibold font-organical">
      My job timeline
    </h1>
    <div class="flex flex-col justify-center items-center w-full">
      <!-- CARD -->
      <div
        class="min-w-sm max-w-md flex items-center mt-20 p-5 border-4 border-black text-black"
        v-for="work in experiences"
        :key="work.id"
      >
        <div class="flex flex-col">
          <div
            class="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-lg"
          >
            <img :src="work.image" class="h-10 w-10" alt="" />
            <h1 class="text-xl font-semibold ml-4">{{ work.name }}</h1>
          </div>

          <h2 class="italic text-lg">
            from {{ work.date[0] }} till {{ work.date[1] }}
          </h2>
          <div class="inline mt-5">
            <span
              class="font-semibold relative z-0 before:content-[''] before:-z-10 before:absolute before:left-2 before:bottom-0 before:w-full before:h-3 before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500"
              >{{ work.position }}</span
            >
            -
            <span>{{ work.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
