<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import quote from '@/components/quote.vue';
import { ref } from 'vue';
const activeLink = ref('');
</script>

<template>
  <MainLayout>
    <div class="container mx-auto px-4 py-36">
        <div class="relative flex justify-center pt-24 mr-16 ml-16 ">
          <img 
            src="@/assets/images/misc/foto22.png" 
            alt="Group of friends sitting together" 
            class="shadow-lg"
            style="width: 1150px; height: 444px;" 
          />
          <div class="absolute -top-36 left-[30%] transform -translate-x-1/2 bg-x-light p-8 md:w-[80%] lg:w-[600px] text-left z-10">
            <p class="text-cap1 font-semibold uppercase mb-2">About Us</p>
            <h1 class="text-h1 font-bold  mb-4">We are a team of content writers who share their learnings</h1>
          </div>
          <div class="absolute top-[-40px] left-[80%] transform -translate-x-1/2 bg-x-light p-2 w-[480px] text-x-darkgrey z-10">
            <p class="text-body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div class="absolute bottom-0 left-[35%] transform -translate-x-1/2 bg-x-yellow md:p-8 shadow-lg w-[60%] md:w-[80%] lg:w-[600px] flex justify-around text-white z-0 ">
            <div class="text-center">
              <p class="text-display font-bold">12+</p>
              <p class="text-body1">Blogs Published</p>
            </div>
            <div class="text-center">
              <p class="text-display font-bold">18K+</p>
              <p class="text-body1">Views on Finsweet</p>
            </div>
            <div class="text-center">
              <p class="text-display font-bold">30K+</p>
              <p class="text-body1">Total active Users</p>
            </div>
            <div class="">
            <div class="bg-x-puple h-6 w-[120%] absolute left-0 bottom-[0px]"></div>
            </div>
          </div>
        </div>
        <div class="bg-x-lavender mr-16 ml-16 mb-16">
      <div class="grid grid-cols-2 ">
        <div class="m-10 ">
          <p class="text-body1 font-semibold uppercase tracking-wider">Our mision</p>
          <h3 class="text-h3 font-bold mt-3">Creating valuable content for creatives all around the world</h3>
          <p class="text-body1 text-x-mediumgrey mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
        </div>
        <div class="m-10 ">
          <p class="text-body1 font-semibold uppercase tracking-wider">Our Vision</p>
          <h3 class="text-h3 font-bold mt-3">A platform that empowers individuals to improve</h3>
          <p class="text-body1 text-x-mediumgrey mt-3">Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
        </div>
      </div>
    </div>
    </div>

    <div class=" p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center">
        <div class="m-10">
          <h2 class="text-h2 font-bold">Our team of creatives</h2>
          <h4 class="text-h4 font-bold mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </h4>
          <p class="text-body1 text-x-mediumgrey mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div class="m-10 relative items-center">
          <div class="absolute left-[-40px] top-1/3 transform -translate-y-1/2 w-20 h-20 bg-blue-500 rounded-tl-[40px]"></div>
          <img class="ml w-90 h-95" src="@/assets/images/misc/foto13.png" alt="Team Hands ">
        </div>
      </div>
    </div>

    <div class=" p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center">
        <div class="m-10 relative items-center">
          <div class="absolute left-40 bottom-0 transform transform translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-x-puple rounded-full"></div>
          <img class="ml w-90 h-95" src="@/assets/images/misc/foto14.png" alt="Team Hands ">
        </div>
        <div class="m-10">
          <h2 class="text-h2 font-bold">Our team of creatives</h2>
          <h4 class="text-h4 font-bold mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </h4>
          <p class="text-body1 text-x-mediumgrey mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
      </div>
    </div>

   <div class="p-8 m-8 ">
    <h2 class="text-h2 font-bold text-center">List Of Author</h2>
    <div class="grid grid-cols-4 gap-6 mt-10">
      <div class=" bg-x-lightgrey hover:bg-x-lightyellow p-8">
        <div class=" item-center flex justify-center ">
          <img src="@/assets/images/misc/profil1.png" class="h-22 w-22"/>
        </div>
        <div class="text-center mt-5">
          <h3 class="text-h3 font-bold ">
            <router-link to="/author" @click="activeLink = 'author'">Floyd Miles</router-link>
          </h3>
          <p class="text-body2 text-x-mediumgrey mt-1">Content Writer @Company</p>
        </div>
        <div class="flex justify-center space-x-4 mt-5">
          <img src="@/assets/images/misc/facebook.png" alt="Facebook" class="w-5 h-5" />
          <img src="@/assets/images/misc/twitter.png" alt="Twitter" class="w-5 h-5" />
          <img src="@/assets/images/misc/instagram.png" alt="Instagram" class="w-5 h-5" />
          <img src="@/assets/images/misc/linkedin.png" alt="LinkedIn" class="w-5 h-5" />
         </div>
      </div>

      <div class=" bg-x-lightgrey hover:bg-x-lightyellow p-8">
        <div class=" item-center flex justify-center ">
          <img src="@/assets/images/misc/profil2.png" class="h-22 w-22"/>
        </div>
        <div class="text-center mt-5">
          <h3 class="text-h3 font-bold ">
            <router-link to="/author" @click="activeLink = 'author'">Dianne Russell</router-link>
          </h3>
          <p class="text-body2 text-x-mediumgrey mt-1">Content Writer @Company</p>
        </div>
        <div class="flex justify-center space-x-4 mt-5">
          <img src="@/assets/images/misc/facebook.png" alt="Facebook" class="w-5 h-5" />
          <img src="@/assets/images/misc/twitter.png" alt="Twitter" class="w-5 h-5" />
          <img src="@/assets/images/misc/instagram.png" alt="Instagram" class="w-5 h-5" />
          <img src="@/assets/images/misc/linkedin.png" alt="LinkedIn" class="w-5 h-5" />
        </div>
      </div>

      <div class=" bg-x-lightgrey hover:bg-x-lightyellow p-8">
        <div class=" item-center flex justify-center ">
          <img src="@/assets/images/misc/profil3.png" class="h-22 w-22"/>
        </div>
        <div class="text-center mt-5">
          <h3 class="text-h3 font-bold ">
            <router-link to="/author" @click="activeLink = 'author'">Jenny Wilson</router-link>
          </h3>
          <p class="text-body2 text-x-mediumgrey mt-1">Content Writer @Company</p>
        </div>
        <div class="flex justify-center space-x-4 mt-5">
          <img src="@/assets/images/misc/facebook.png" alt="Facebook" class="w-5 h-5" />
          <img src="@/assets/images/misc/twitter.png" alt="Twitter" class="w-5 h-5" />
          <img src="@/assets/images/misc/instagram.png" alt="Instagram" class="w-5 h-5" />
          <img src="@/assets/images/misc/linkedin.png" alt="LinkedIn" class="w-5 h-5" />
        </div>
      </div>

      <div class=" bg-x-lightgrey hover:bg-x-lightyellow p-8">
        <div class=" item-center flex justify-center ">
          <img src="@/assets/images/misc/profil4.png" class="h-22 w-22"/>
        </div>
        <div class="text-center mt-5">
          <h3 class="text-h3 font-bold ">
            <router-link to="/author" @click="activeLink = 'author'">Leslie Alexander</router-link>
          </h3>
          <p class="text-body2 text-x-mediumgrey mt-1">Content Writer @Company</p>
        </div>
        <div class="flex justify-center space-x-4 mt-5">
          <img src="@/assets/images/misc/facebook.png" alt="Facebook" class="w-5 h-5" />
          <img src="@/assets/images/misc/twitter.png" alt="Twitter" class="w-5 h-5" />
          <img src="@/assets/images/misc/instagram.png" alt="Instagram" class="w-5 h-5" />
          <img src="@/assets/images/misc/linkedin.png" alt="LinkedIn" class="w-5 h-5" />
         </div>
      </div>

      <div class=" bg-x-lightgrey hover:bg-x-lightyellow p-8">
        <div class=" item-center flex justify-center ">
          <img src="@/assets/images/misc/profil6.png" class="h-22 w-22"/>
        </div>
        <div class="text-center mt-5">
          <h3 class="text-h3 font-bold ">
            <router-link to="/author" @click="activeLink = 'author'">Guy Hawkins</router-link>
          </h3>
          <p class="text-body2 text-x-mediumgrey mt-1">Content Writer @Company</p>
        </div>
        <div class="flex justify-center space-x-4 mt-5">
          <img src="@/assets/images/misc/facebook.png" alt="Facebook" class="w-5 h-5" />
          <img src="@/assets/images/misc/twitter.png" alt="Twitter" class="w-5 h-5" />
          <img src="@/assets/images/misc/instagram.png" alt="Instagram" class="w-5 h-5" />
          <img src="@/assets/images/misc/linkedin.png" alt="LinkedIn" class="w-5 h-5" />
         </div>
      </div>

      <div class=" bg-x-lightgrey hover:bg-x-lightyellow p-8">
        <div class=" item-center flex justify-center ">
          <img src="@/assets/images/misc/profil7.png" class="h-22 w-22"/>
        </div>
        <div class="text-center mt-5">
          <h3 class="text-h3 font-bold ">
            <router-link to="/author" @click="activeLink = 'author'">Eleanor Pena</router-link>
          </h3>
          <p class="text-body2 text-x-mediumgrey mt-1">Content Writer @Company</p>
        </div>
        <div class="flex justify-center space-x-4 mt-5">
          <img src="@/assets/images/misc/facebook.png" alt="Facebook" class="w-5 h-5" />
          <img src="@/assets/images/misc/twitter.png" alt="Twitter" class="w-5 h-5" />
          <img src="@/assets/images/misc/instagram.png" alt="Instagram" class="w-5 h-5" />
          <img src="@/assets/images/misc/linkedin.png" alt="LinkedIn" class="w-5 h-5" />
        </div>
      </div>

      <div class=" bg-x-lightgrey hover:bg-x-lightyellow p-8">
        <div class=" item-center flex justify-center ">
          <img src="@/assets/images/misc/profil8.png" class="h-22 w-22"/>
        </div>
        <div class="text-center mt-5">
          <h3 class="text-h3 font-bold ">
            <router-link to="/author" @click="activeLink = 'author'">Robert Fox</router-link>
          </h3>
          <p class="text-body2 text-x-mediumgrey mt-1">Content Writer @Company</p>
        </div>
        <div class="flex justify-center space-x-4 mt-5">
          <img src="@/assets/images/misc/facebook.png" alt="Facebook" class="w-5 h-5" />
          <img src="@/assets/images/misc/twitter.png" alt="Twitter" class="w-5 h-5" />
          <img src="@/assets/images/misc/instagram.png" alt="Instagram" class="w-5 h-5" />
          <img src="@/assets/images/misc/linkedin.png" alt="LinkedIn" class="w-5 h-5" />
        </div>
      </div>

      <div class=" bg-x-lightgrey hover:bg-x-lightyellow p-8">
        <div class=" item-center flex justify-center ">
          <img src="@/assets/images/misc/profil9.png" class="h-22 w-22"/>
        </div>
        <div class="text-center mt-5">
          <h3 class="text-h3 font-bold ">
            <router-link to="/author" @click="activeLink = 'author'">Jacob Jones</router-link>
          </h3>
          <p class="text-body2 text-x-mediumgrey mt-1">Content Writer @Company</p>
        </div>
        <div class="flex justify-center space-x-4 mt-5">
          <img src="@/assets/images/misc/facebook.png" alt="Facebook" class="w-5 h-5" />
          <img src="@/assets/images/misc/twitter.png" alt="Twitter" class="w-5 h-5" />
          <img src="@/assets/images/misc/instagram.png" alt="Instagram" class="w-5 h-5" />
          <img src="@/assets/images/misc/linkedin.png" alt="LinkedIn" class="w-5 h-5" />
         </div>
      </div>

    </div>
   </div>
    


    



    <quote/>
  </MainLayout>
</template>
