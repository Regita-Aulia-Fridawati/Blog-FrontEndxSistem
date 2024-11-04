<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <div class="bg-x-lavender p-20  border">
      <div class="flex items-start space-x-4 mb-6 mr-12">
      <div class="w-50 h-66">
        <img src="@/assets/images/misc/foto15.png" alt="Design Tips" class="w-full h-full object-cover">
      </div>
      <div class="flex-1 items-center py-2">
        <h1 class="text-h1 font-bold mb-2">
          Hey there, I'm Andrew Jonhson and welcome to my Blog
        </h1>
        <p class="text-x-mediumgrey text-body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
        </p>
        <div class="bg-x-puple h-6 w-[80%] absolute left-20  bottom-[48px]"></div>
      </div>
    </div>
    
    </div>
        <div class="p-8 m-24">
          <h1 class="text-h1 font-bold">My Posts</h1>
          <div>
            <div class="flex items-start space-x-4 mb-6 mt-10">
              <div class="w-50 h-50">
                <img src="@/assets/images/misc/foto16.png" alt="Design Tips" class="w-full h-full object-cover">
              </div>

              <div class="item-center py-4  ">
                <div class="text-cap1 text-x-puple uppercase tracking-wider mb-2">Business</div>
                <h2 class="text-h2 font-bold mb-2">
                  Font sizes in UI design: The complete guide to follow
                </h2>
                <p class="text-x-mediumgrey text-body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
          </div>
        </div>
        <div class="flex items-start space-x-4 mb-6 mt-5">
              <div class="w-50 h-50">
                <img src="@/assets/images/misc/foto17.png" alt="Design Tips" class="w-full h-full object-cover">
              </div>

              <div class="item-center py-4 mt-5 ">
                <div class="text-cap1 text-x-puple uppercase tracking-wider mb-2">Economy</div>
                <h2 class="text-h2 font-bold mb-2">
                  How to build rapport with your web design clients
                </h2>
                <p class="text-x-mediumgrey text-body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
          </div>
      </div>
  </MainLayout>
</template>
