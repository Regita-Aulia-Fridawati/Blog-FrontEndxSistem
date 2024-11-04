<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <div class="p-16 justify-center text-center ">
      <div class="mr-36 ml-36">
        <p class="text-cap1 font-bold uppercase tracking-wider">Contact us</p>
        <h1 class="text-h1  text-center m-4"> Let's Start a Conversation</h1>
        <p class="text- fonbody1 text-x-mediumgrey tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
    </div>

    <div>
      <div class="bg-x-puple p-6 mr-44 ml-44">
      <div class="grid grid-cols-2 ">
        <div class="m-10 ">
          <p class="text-body2 text-x-darkgrey">Working hours</p>
          <hr class="bg-black mt-5">
          <h5 class="text-h5 font-bold mt-3 text-x-darkgrey">Monday To Friday</h5>
          <h5 class="text-h5 font-bold mt-1 text-x-darkgrey">9:00 AM to 8:00 PM </h5>
          <p class="text-body1 text-x-darkgrey mt-3">Our Support Team is available 24/7</p>
        </div>
        <div class="m-10 ">
          <p class="text-body2 text-x-darkgrey">Contact Us</p>
          <hr class="bg-black mt-5"/>
          <h5 class="text-h5 font-bold mt-3 text-x-darkgrey">020 7993 2905</h5>
          <p class="text-body1 text-x-darkgrey mt-1">hello@finsweet.com</p>
        </div>
      </div>
    </div>
    </div>

    <div class="mt-10 mx-44 py-6 space-y-5">
      <div>
        <input type="text" class="w-full shadow border border-x-darkgrey py-3 px-4 " placeholder="Full Name"/>
      </div>
      <div>
        <input type="email" class="w-full shadow border border-x-darkgrey py-3 px-4 " placeholder="Your Email"/>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <select class="w-full shadow border border-x-darkgrey py-3 px-4 ">
            <option selected>Province</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select>
        </div>
        <div>
          <select class="w-full shadow border border-x-darkgrey py-3 px-4 ">
            <option selected>City</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select>
        </div>
      </div>
      <div>
        <textarea class="w-full shadow border border-x-darkgrey py-3 px-4 " rows="4" placeholder="Message"></textarea>
      </div>
      <button class="w-full bg-blue-600 text-white font-semibold py-3  hover:bg-blue-700 transition mb-10">
        Send Message
      </button>
      <div class="mt-20"></div>
    </div>


  </MainLayout>
</template>
