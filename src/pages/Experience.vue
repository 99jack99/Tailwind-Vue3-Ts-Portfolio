<script setup lang="ts">
import { ref } from 'vue'
let experiences = ref([
  {
    id: 1,
    name: 'Company 1',
    date: ['2019', '2021'],
    position: 'Frontend developer',
    description: 'Development of different features, and design systems',
    image: '/src/assets/icons/companies/company.svg'
  },
  {
    id: 2,
    name: 'Company 2',
    date: ['2017', '2019'],
    position: 'Frontend developer',
    description: 'Development of different features, and design systems',
    image: '/src/assets/icons/companies/company.svg'
  },
  {
    id: 3,
    name: 'Company 3',
    date: ['2013', '2017'],
    position: 'Frontend developer',
    description: 'Development of different features, and design systems',
    image: '/src/assets/icons/companies/company.svg'
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
        class="max-w-3xl flex items-center mt-20 p-5 border-4 border-black text-black hover:bg-black hover:text-white hover:rounded-lg duration-300"
        v-for="work in experiences"
        :key="work.id"
      >
        <div class="flex flex-col">
          <div class="flex justify-between">
            <div>
              <div
                class="flex items-center w-max bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 rounded-md"
              >
                <h1 class="text-xl font-semibold">{{ work.name }}</h1>
              </div>

              <h2 class="text-lg">
                from {{ work.date[0] }} till {{ work.date[1] }}
              </h2>
            </div>
            <div><img :src="work.image" class="max-h-20 w-20" alt="" /></div>
          </div>

          <div class="mt-10">
            <p
              class="font-semibold relative z-0 before:content-[''] before:-z-10 before:absolute before:left-0 before:bottom-0 before:w-40 before:h-3 before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500"
            >
              {{ work.position }}
            </p>
            <p class="mt-5">{{ work.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
