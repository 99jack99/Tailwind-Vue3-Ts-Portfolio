<script setup lang="ts">
import { ref } from 'vue'
let projects = ref([
  {
    id: 1,
    name: 'Example TO-DO App',
    techs: ['Angular', 'Typescript', 'Tailwind'],
    ref: 'github.com'
  },
  {
    id: 2,
    name: 'Example project',
    techs: ['Vue', 'Javascript', 'HTML', 'SASS'],
    ref: 'github.com'
  }
])
let techs = ref([
  {
    id: 1,
    name: 'Vue',
    image: new URL('/src/assets/icons/vue.svg', import.meta.url).href
  },
  {
    id: 2,
    name: 'Angular',
    image: new URL('/src/assets/icons/angular.svg', import.meta.url).href
  },
  {
    id: 3,
    name: 'Angular',
    image: new URL('/src/assets/icons/js.svg', import.meta.url).href
  },
  {
    id: 4,
    name: 'Typescript',
    image: new URL('/src/assets/icons/typescript.svg', import.meta.url).href
  },
  {
    id: 5,
    name: 'Tailwind',
    image: new URL('/src/assets/icons/tailwind.svg', import.meta.url).href
  }
])
</script>

<template>
  <div class="container-fluid lg:min-h-screen flex-col flex lg:flex-row">
    <div class="w-full lg:w-1/2 p-4 lg:p-10 flex flex-col items-center">
      <video
        class="m-0 lg:m-5 border-4 border-black grayscale"
        autoplay
        muted
        loop
      >
        <source src="@/assets/videos/skate.mp4" type="video/mp4" />
      </video>

      <div
        class="mt-10 lg:mt-20 m-5 flex flex-wrap items-center justify-center gap-x-5"
      >
        <img
          v-for="tech in techs"
          :key="tech.id"
          :src="tech.image"
          class="p-2 max-h-16 hover:scale-125 duration-200"
          :alt="tech.name"
        />
      </div>
    </div>
    <div class="w-full lg:w-1/2 p-10 flex flex-col">
      <div class="border-b-2 border-black py-3">
        <h1 class="text-6xl lg:text-4xl uppercase font-organical">
          Some of my projects
        </h1>
      </div>

      <div class="flex flex-col h-full justify-between">
        <div>
          <div
            class="flex flex-col items-start mt-20"
            v-for="project in projects"
            :key="project.id"
          >
            <h1
              class="text-3xl lg:text-5xl hover:underline hover:text-blue-600 cursor-pointer"
            >
              {{ project.name }}
            </h1>
            <div class="flex gap-x-5 gap-y-2 flex-wrap text-xl mt-2 lg:mt-5">
              <div
                class="px-4 py-2 bg-slate-100 rounded-md text-zinc-700"
                v-for="techs in project.techs"
                :key="techs"
              >
                {{ techs }}
              </div>
            </div>
          </div>
        </div>
        <div class="border-t-2 border-black mt-20 py-3">
          <h1 class="text-2xl">You can find more in my Github</h1>
        </div>
      </div>
    </div>
  </div>
</template>
