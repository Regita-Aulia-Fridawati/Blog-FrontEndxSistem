<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import quote from '@/components/quote.vue';
import { ref } from 'vue';
const activeLink = ref('');
</script>

<template>
  <MainLayout>
      <div class="p-16 bg-x-lavender ">
        <div class="flex m-8 border space-x-6">
          <div class="text-center flex-col md:flex-row items-center justify-center md:text-left md:max-w-md">
            <p class="text-cap1 font-semibold uppercase tracking-wide">Featured Post</p>
            <h2 class="text-h2 font-bold mt-2">Step-by-step guide to choosing great font pairs</h2>
            <p class="text-body1 mb-3 text-x-darkgrey">
            By <span class="text-x-puple">John Doe</span> | May 23, 2022
            </p>
            <p class=" text-body1 text-x-mediumgrey mt-4 ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <button class="mt-4">
              <a href="#" class="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white bg-x-yellow hover:bg-x-puple">
              Read More >
              </a>
            </button>
          </div>
          <div class="flex-shrink-0">
            <img src="@/assets/images/misc/foto3.png" alt="Author at desk" class="w-30 h-30" />
          </div>
        </div>
      </div>

      <div class="p-16 m-8 ">
          <h1 class="text-h1 font-bold mb-2">All posts</h1>
          <hr class="mt-3"/>
          <div class=" space-y-4">
          <div class="flex items-start space-x-6 mt-5 ">
            <div >
              <img src="@/assets/images/misc/foto4.png" alt="Design Tips"  class="w-50 h-56" >
            </div>
            <div class="flex-1 m-5 items-center  ">
              <div class="text-cap1 text-x-puple uppercase tracking-wider mb-2">
                <router-link to="/blogpost" @click="activeLink = 'blogpost'"> StartUp</router-link>
              </div>
              <h2 class="text-h2 font-bold mb-2">
                Design tips for designers that cover everything you need
              </h2>
              <p class="text-x-mediumgrey text-body1">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
            </div>

            <div class="flex items-start space-x-6 ">
              <div>
                <img src="@/assets/images/misc/foto18.png" alt="Design Tips" class="w-50 h-56">
              </div>
              <div class="flex-1 m-5 items-center py-2">
                <div class="text-cap1 text-x-puple uppercase tracking-wider mb-2">
                  <router-link to="/blogpost" @click="activeLink = 'blogpost'"> Business</router-link>
                </div>
                <h2 class="text-h2 font-bold mb-2">
                  How to build rapport with your web design clients
                </h2>
                <p class="text-x-mediumgrey text-body1">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </div>

          <div class="flex items-start space-x-6">
            <div>
              <img src="@/assets/images/misc/foto19.png" alt="Design Tips" class="w-50 h-56">
            </div>
            <div class="flex-1 m-5 items-center py-2 ">
              <div class="text-cap1 text-x-puple uppercase tracking-wider mb-2">
                <router-link to="/blogpost" @click="activeLink = 'blogpost'"> StartUp</router-link>
              </div>
              <h2 class="text-h2 font-bold mb-2">
                Logo design trends to avoid in 2022
              </h2>
              <p class="text-x-mediumgrey text-body1">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-6 ">
            <div>
              <img src="@/assets/images/misc/foto20.png" alt="Design Tips" class="w-50 h-56">
            </div>
            <div class="flex-1 m-5 items-center py-2">
              <div class="text-cap1 text-x-puple uppercase tracking-wider mb-2">
                <router-link to="/blogpost" @click="activeLink = 'blogpost'"> Technology</router-link>
              </div>
              <h2 class="text-h2 font-bold mb-2">
                8 Figma design systems you can download for free today
              </h2>
              <p class="text-x-mediumgrey text-body1">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-6 ">
            <div>
              <img src="@/assets/images/misc/foto21.png" alt="Design Tips" class="w-50 h-56">
            </div>
            <div class="flex-1 m-5 items-center py-2">
              <div class="text-cap1 text-x-puple uppercase tracking-wider mb-2">
                <router-link to="/blogpost" @click="activeLink = 'blogpost'"> Economy</router-link>
              </div>
              <h2 class="text-h2 font-bold mb-2">
                Font sizes in UI design: The complete guide to follow
              </h2>
              <p class="text-x-mediumgrey text-body1">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div class=" p-8">
              <div class="flex justify-center items-center space-x-4">
                <button class="text-x-mediumgrey hover:text-x-black">
                  <span> < Prev </span>
                </button>
                <button class="">
                  <span class="text-x-mediumgrey hover:text-x-black">Next > </span>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div class="py-16 bg-x-light">
          <div class="max-w-screen-lg mx-auto px-4 text-center">
            <h2 class="text-h2 font-bold mb-8">Choose A Category</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div  class="category-box border border-gray-200 p-6 rounded-lg text-left hover:bg-x-yellow hover:text-x-light shadow cursor-pointer  ">
                <div class="icon mb-4 flex justify-center items-center bg-x-lightyellow rounded-md p-4 w-12 h-12 mx-auto">
                  <img src="@/assets/images/misc/bsn.png" alt="Business Icon" class="mx-auto h-10 w-10" />
                </div>
                <h3 class="text-h3 font-semibold hover:text-x-light">                
                  <router-link to="/category" @click="activeLink = 'category'">Business</router-link>
                </h3>
                <p class="text-body1 text-x-mediumgrey hover:text-x-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div class="category-box border border-gray-200 p-6 rounded-lg text-left hover:bg-x-yellow shadow cursor-pointer hover:text-x-light">
                <div class="icon mb-4 flex justify-center items-center bg-x-lightyellow rounded-md p-4 w-12 h-12 mx-auto">
                  <img src="@/assets/images/misc/stup.png" alt="Technology Icon" class="mx-auto h-6 w-6" />
                </div>
                <h3 class="text-h3 hover font-semibold hover:text-x-light">
                  <router-link to="/category" @click="activeLink = 'category'">StartUp</router-link>
                </h3>
                <p class="text-body1 text-x-mediumgrey hover:text-x-light" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              
              <div class="category-box border border-gray-200 p-6 rounded-lg text-left hover:bg-x-yellow shadow cursor-pointer hover:text-x-light">
                <div class="icon mb-4 flex justify-center items-center bg-x-lightyellow rounded-md p-4 w-12 h-12 mx-auto">
                  <img src="@/assets/images/misc/eko.png" alt="Economy Icon" class="mx-auto h-10 w-10" />
                </div>
                <h3 class="text-h3 font-semibold hover:text-x-light">
                  <router-link to="/category" @click="activeLink = 'category'">Economy</router-link>
                </h3>
                <p class="text-body1 text-x-mediumgrey hover:text-x-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div class="category-box border border-gray-200 p-6 rounded-lg text-left hover:bg-x-yellow shadow cursor-pointer hover:text-x-light">
                <div class="icon mb-4 flex justify-center items-center bg-x-lightyellow rounded-md p-4 w-12 h-12 mx-auto">
                  <img src="@/assets/images/misc/tekno.png" alt="Technology Icon" class="mx-auto h-6 w-6" />
                </div>
                <h3 class="text-h3 font-semibold hover:text-x-light">
                  <router-link to="/category" @click="activeLink = 'category'">Technology</router-link>
                </h3>
                <p class="text-body1 text-x-mediumgrey hover:text-x-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      <quote/>
  </MainLayout>
</template>