<script setup lang="ts"></script>

<template>
  <div class="container-fluid min-h-screen flex">
    <div class="w-1/2 p-10 flex flex-col">
      <!-- <img
        src="@/assets/imgs/projects.jpg"
        class="m-5 border-4 border-black"
        alt=""
      /> -->

      <video class="m-5 border-4 border-black grayscale" autoplay muted loop>
        <source src="@/assets/imgs/skate.mp4" type="video/mp4" />
      </video>

      <div class="mt-20 m-5 flex flex-wrap items-center">
        <img src="@/assets/imgs/figma.png" class="w-48 mr-3" alt="" />
        <img src="@/assets/imgs/figma.png" class="w-48 mr-3" alt="" />
        <img src="@/assets/imgs/figma.png" class="w-48 mr-3" alt="" />
        <img src="@/assets/imgs/figma.png" class="w-48 mr-3" alt="" />
        <img src="@/assets/imgs/figma.png" class="w-48 mr-3" alt="" />
      </div>
    </div>
    <div class="w-1/2 p-10 flex flex-col">
      <div class="border-b-2 border-black py-3">
        <h1 class="text-2xl uppercase">Some of my projects</h1>
      </div>

      <div class="flex flex-col">
        <div class="flex flex-col mt-20">
          <h1
            class="text-5xl hover:underline hover:text-blue-600 cursor-pointer"
          >
            Multi-disciplinar TO-DO App
          </h1>
          <div class="flex text-xl mt-5">
            <div class="px-4 py-2 bg-slate-100 rounded-md text-zinc-700 mr-5">
              Typescript
            </div>
            <div class="px-4 py-2 bg-slate-100 rounded-md text-zinc-700 mr-5">
              Vue
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-20">
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
        </div>

        <div class="border-t-2 border-black mt-20 py-3">
          <h1 class="text-2xl">You can find more in my Github</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
