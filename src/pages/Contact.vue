<script setup lang="ts"></script>
<template>
  <div class="container-fluid lg:h-screen flex flex-col">
    <div
      class="border-black w-full h-fit p-5 text-7xl lg:text-9xl font-semibold font-organical"
    >
      Let's connect!
    </div>
    <div class="flex flex-col h-full lg:flex-row">
      <div
        class="border-2 border-black w-full lg:w-1/2 flex flex-col items-start p-8 lg:p-20 bg-amber-400"
      >
        <h1 class="text-4xl underline underline-offset-4">
          Want to talk to me? Don't be shy!
        </h1>

        <div class="flex flex-col mt-10">
          <label for="name">Name</label>
          <input
            name="name"
            type="text"
            class="border-2 border-black p-2 w-80"
          />
        </div>
        <div class="flex flex-col mt-5">
          <label for="name">Email</label>
          <input
            name="name"
            type="text"
            class="border-2 border-black p-2 w-80"
          />
        </div>
        <div class="flex flex-col mt-5">
          <label for="name">Message</label>
          <input
            name="name"
            type="text"
            class="border-2 border-black p-2 w-80"
          />
        </div>
        <div
          class="mt-10 text-2xl px-4 py-2 bg-black text-white flex items-center justify-center w-max"
        >
          Submit
        </div>
      </div>
      <div
        class="border-black text-white bg-black flex flex-col items-start p-8 lg:p-20 w-full lg:w-1/2"
      >
        <div class="flex flex-col">
          <h1 class="text-4xl underline underline-offset-4">Socials</h1>
          <div class="flex mt-8">
            <img
              src="@/assets/icons/linkedin.svg"
              class="h-12 w-12 mr-3 hover:scale-125 cursor-pointer"
              alt=""
            />
          </div>
        </div>

        <div class="flex flex-col mt-10">
          <h1 class="text-4xl underline underline-offset-4">Links</h1>
          <div class="flex mt-8">
            <img
              src="@/assets/icons/github.svg"
              class="h-12 w-12 mr-3 hover:scale-125 cursor-pointer"
              alt=""
            />
          </div>
        </div>

        <div class="flex flex-col mt-20">
          <h1 class="text-2xl">@Jackson Almeida - 2023</h1>
        </div>
      </div>
    </div>
  </div>
</template>
