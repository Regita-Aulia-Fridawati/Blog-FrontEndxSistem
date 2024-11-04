<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
const activeLink = ref('');


onMounted(() => {
    initFlowbite();
})

const email = ref('')


</script>

<template>
    <footer class="px-12 w-full h-[480px] bg-x-black flex justify-between">
      <div class="p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="@/assets/images/logo/Logo2.png" class="h-8" alt="lee Logo" />
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-x-mediumgrey sm:mb-0 dark:text-x-lightgrey">
                <li>
                    <router-link 
                        to="/abotus" 
                        class="hover:underline me-4 md:me-6"
                        :class="{
                          'text-x-yellow': activeLink === 'abotus',
                          'hover:text-yellow-300': activeLink !== 'abotus'
                        }"
                        @click="activeLink = 'abotus'">
                        About
                    </router-link>
                </li>
                <li>
                    <router-link 
                        to="/privacipolicy" 
                        class="hover:underline me-4 md:me-6"
                        :class="{
                          'text-x-yellow': activeLink === 'privacipolicy',
                          'hover:text-yellow-300': activeLink !== 'privacipolicy'
                        }"
                        @click="activeLink = 'privacipolicy'">
                        Privacy Policy
                    </router-link>
                </li>
                <li>
                    <router-link 
                        to="/" 
                        class="hover:underline me-4 md:me-6"
                        :class="{
                          'text-x-yellow': activeLink === 'home',
                          'hover:text-yellow-300': activeLink !== 'home'
                        }"
                        @click="activeLink = 'home'">
                        Licensing
                    </router-link>
                </li>
                <li>
                    <router-link 
                        to="/contact" 
                        class="hover:underline me-4 md:me-6"
                        :class="{
                          'text-x-yellow': activeLink === 'contact',
                          'hover:text-yellow-300': activeLink !== 'contact'
                        }"
                        @click="activeLink = 'contact'">
                        Contact
                    </router-link>
                </li>
               
          </ul>
        </div>
  
 
        <div class="p-4 my-8 bg-x-darkgrey border-x-mediumgrey shadow-md sm:p-6 lg:p-8">
          <div class="h-[165px] p-8 mb-8">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 text-x-lightgrey">
              <h2 class="text-[36px] font-semibold">
                Subscribe to our newsletter to get the latest updates and news
              </h2>
              <div class="flex gap-2">
                <input type="email" 
                       v-model="email"
                       placeholder="Enter Your Email" 
                       class="px-4 py-2 bg-x-darkgrey text-white focus:outline-none focus:ring-2 focus:ring-x-blue" />
                       <button>
                        <a href="#" class="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white bg-x-yellow hover:bg-[#EDC14A]">
                        Subcribe
                      </a>
                    </button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-4">
          <div class="flex justify-between items-center">
            <p class="text-sm text-x-lightgrey">Finstreet 118 2561 Fintown</p>
            <div class="flex space-x-4">
              <a href="" class="text-x-lightgrey hover:text-white transition-colors">
                <img src="@/assets/images/misc/facebook.png" alt="Facebook" class="w-5 h-5" />
              </a>
              <a href="BlogView.vue" class="text-x-lightgrey hover:text-white transition-colors">
                <img src="@/assets/images/misc/twitter.png" alt="Twitter" class="w-5 h-5" />
              </a>
              <a href="#" class="text-x-lightgrey hover:text-white transition-colors">
                <img src="@/assets/images/misc/instagram.png" alt="Instagram" class="w-5 h-5" />
              </a>
              <a href="#" class="text-x-lightgrey hover:text-white transition-colors">
                <img src="@/assets/images/misc/linkedin.png" alt="LinkedIn" class="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <p class="text-sm text-x-lightgrey">Hello@finsweet.com  020 7993 2905</p>
          </div>
        </div>
      </div>    
    </footer>
  </template>
  


