<script setup lang="ts">
import { ref } from 'vue'

let projects = ref([
  {
    id: 1,
    name: 'Multi-disciplinar TO-DO App',
    techs: ['Javascript', 'HTML'],
    ref: 'github.com'
  },
  {
    id: 2,
    name: 'Mira',
    techs: ['Javascript', 'HTML'],
    ref: 'github.com'
  },
  {
    id: 3,
    name: 'Hey hola',
    techs: ['Javascript', 'HTML'],
    ref: 'github.com'
  }
])

let techs = ref([
  {
    id: 1,
    name: 'Vue',
    image: '/src/assets/icons/vue.svg'
  },
  {
    id: 2,
    name: 'Angular',
    image: '/src/assets/icons/angular.svg'
  },
  {
    id: 3,
    name: 'Typescript',
    image: '/src/assets/icons/typescript.svg'
  },
  {
    id: 4,
    name: 'Tailwind',
    image: '/src/assets/icons/tailwind.svg'
  }
])
</script>

<template>
  <div class="container-fluid min-h-screen flex-col flex md:flex-row">
    <div class="w-full md:w-1/2 p-4 md:p-10 flex flex-col items-center">
      <video
        class="m-0 md:m-5 border-4 border-black grayscale"
        autoplay
        muted
        loop
      >
        <source src="@/assets/imgs/skate.mp4" type="video/mp4" />
      </video>

      <div class="mt-10 md:mt-20 m-5 flex items-center gap-x-5">
        <img
          v-for="tech in techs"
          :key="tech.id"
          :src="tech.image"
          class="p-2 max-h-16 hover:scale-125 duration-200"
          :alt="tech.name"
        />
      </div>
    </div>
    <div class="w-full md:w-1/2 p-10 flex flex-col">
      <div class="border-b-2 border-black py-3">
        <h1 class="text-6xl md:text-4xl uppercase font-organical">
          Some of my projects
        </h1>
      </div>

      <div class="flex flex-col">
        <div
          class="flex flex-col mt-20"
          v-for="project in projects"
          :key="project.id"
        >
          <h1
            class="text-3xl md:text-5xl hover:underline hover:text-blue-600 cursor-pointer"
          >
            {{ project.name }}
          </h1>
          <div class="flex text-xl mt-2 md:mt-5">
            <div
              class="px-4 py-2 bg-slate-100 rounded-md text-zinc-700 mr-5"
              v-for="techs in project.techs"
              :key="techs"
            >
              {{ techs }}
            </div>
          </div>
        </div>

        <!-- <div class="flex flex-col mt-20">
          <h1
            class="text-5xl hover:underline hover:text-blue-600 cursor-pointer"
          >
            Portfolio
          </h1>
          <div class="flex text-xl mt-5">
            <div class="px-4 py-2 bg-slate-100 rounded-md text-zinc-700 mr-5">
              Vue
            </div>
            <div class="px-4 py-2 bg-slate-100 rounded-md text-zinc-700 mr-5">
              Tailwind
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-20">
          <h1
            class="text-5xl hover:underline hover:text-blue-600 cursor-pointer"
          >
            Landing Home Ensurance
          </h1>
          <div class="flex text-xl mt-5">
            <div class="px-4 py-2 bg-slate-100 rounded-md text-zinc-700 mr-5">
              Javascript
            </div>
            <div class="px-4 py-2 bg-slate-100 rounded-md text-zinc-700 mr-5">
              HTML
            </div>
            <div class="px-4 py-2 bg-slate-100 rounded-md text-zinc-700 mr-5">
              CSS
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-20">
          <h1
            class="text-5xl hover:underline hover:text-blue-600 cursor-pointer"
          >
            Modern dashboard UI
          </h1>
          <div class="flex text-xl mt-5">
            <div class="px-4 py-2 bg-slate-100 rounded-md text-zinc-700 mr-5">
              Vue
            </div>
            <div class="px-4 py-2 bg-slate-100 rounded-md text-zinc-700 mr-5">
              Vuetify
            </div>
            <div class="px-4 py-2 bg-slate-100 rounded-md text-zinc-700 mr-5">
              Typescript
            </div>
            <div class="px-4 py-2 bg-slate-100 rounded-md text-zinc-700 mr-5">
              Vitest
            </div>
          </div>
        </div> -->

        <div class="border-t-2 border-black mt-20 py-3">
          <h1 class="text-2xl">You can find more in my Github</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
