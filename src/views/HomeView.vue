<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import quote from '@/components/quote.vue'
import { ref } from 'vue';
const activeLink = ref('');
</script>

<template>
  <MainLayout>
    <div class="relative bg-center bg-cover bg-no-repeat bg-[url('@/assets/images/misc/cover.png')] p-0 m-0">
      <div class="absolute inset-0 h-full bg-[radial-gradient(circle_at_left,_rgba(0,0,0,0.9),_transparent)]"></div>
      <div class="px-4 mx-auto max-w-screen-lg py-24 lg:py-48 relative z-10">
        <p class="text-base text-x-light mb-5">POSTED ON <b>STARTUP</b></p>
        <h1 class="mb-4 text-display font-bold tracking-tight leading-tight text-x-light md:text-4xl lg:text-5xl">
          Step-by-step guide to choosing
        </h1>
        <h1 class="mb-4 text-6xl font-bold tracking-tight leading-tight text-x-light md:text-4xl lg:text-5xl">
          great font pairs
        </h1>
        <p class="text-body1 text-x-light mb-6">
          By <span class="text-x-yellow">James West</span> | May 23, 2022
        </p>
        <p class="mb-8 text-body1 text-x-light lg:text-lg max-w-prose">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <button>
          <a href="#" class="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white bg-x-yellow hover:bg-x-puple">
            Read More >
          </a>
        </button>
      </div>
    </div>


    <div class="px-4 mx-auto max-w-screen-lg my-16">
      <div class="grid grid-cols-2 gap-8">
        <div>
          <h2 class="text-h2 font-bold mb-4">Feature Posts</h2>
          <div class="featured-post bg-white p-6 shadow">
            <img src="@/assets/images/misc/foto1.png" alt="Featured Post" class="w-full h-48 object-cover mb-4" />
            <p class="text-body1 mb-3">
            By <span class="text-x-puple">John Doe</span> | May 23, 2022
            </p>
            <h3 class="text-h3 font-bold mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
           <p class="text-x-mediumgrey text-body1 mb-3">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
           </p>
            <button>
              <a href="#" class="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white  bg-x-yellow hover:bg-[#EDC14A]">
              Read More >
              </a>
           </button>
           </div>
        </div>
        <div>
          <h2 class="text-h2 font-bold mb-4">All Posts</h2>
            <div class="all-posts bg-white p-6">
              <div class="space-y-4">
                <div class="post-item pb-4 hover:bg-x-lightyellow">
                  <p class="text-body1 ">
                  By <span class="text-x-puple">John Doe</span> | Aug 23, 2022
                  </p>
                  <h4 class="text-h4 font-semibold text-gray-900">
                    <router-link to="/blogpost" @click="activeLink = 'author'">8 Figma design systems that you can download for free today.</router-link>
                  </h4>
                </div>
                <div class="post-item pb-4 hover:bg-x-lightyellow">
                  <p class="text-body1 ">
                  By <span class="text-x-puple">John Doe</span> | Aug 23, 2022
                  </p>
                  <h4 class="text-h4 font-semibold text-gray-900">
                    <router-link to="/blogpost" @click="activeLink = 'author'">8 Figma design systems that you can download for free today.</router-link>
                  </h4>
                </div>
                <div class="post-item pb-4 hover:bg-x-lightyellow">
                  <p class="text-body1 ">
                  By <span class="text-x-puple">John Doe</span> | Aug 23, 2022
                  </p>
                  <h4 class="text-h4 font-semibold text-gray-900">
                    <router-link to="/blogpost" @click="activeLink = 'author'">8 Figma design systems that you can download for free today.</router-link>
                  </h4>
                </div>
                <div class="post-item pb-4 hover:bg-x-lightyellow">
                  <p class="text-body1 ">
                  By <span class="text-x-puple">John Doe</span> | Aug 23, 2022
                  </p>
                  <h4 class="text-h4 font-semibold text-gray-900">
                    <router-link to="/blogpost" @click="activeLink = 'author'">8 Figma design systems that you can download for free today.</router-link>
                  </h4>
                </div>
                </div>
              </div>
            </div>
         </div>
      </div>

      <div class="py-16">
          <div class="max-w-screen-lg mx-auto px-4 justify-items-end">
            <div class="h-3 bg-x-yellow w-3/4">
            <div class="h-3 bg-x-puple w-1/4"></div>
          </div>
          <div class="grid grid-cols-2 gap-8 bg-x-lavender p-3  shadow">
            <div>
              <p class="text-body1 font-bold  uppercase mb-2">About Us</p>
              <h2 class="text-h2 font-bold mb-4">
                We are a community of content writers who share their learnings
              </h2>
              <p class="text-x-mediumgrey mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" class="text-body1 text-x-puple">Read More >
              </a>
            </div>
            <div>
              <p class="text-body1 font-bold uppercase mb-2">Our Mission</p>
              <h3 class="text-h3 font-bold mb-4">
                Creating valuable content for creatives all around the world
              </h3>
              <p class="text-gx-mediumgrey text-body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
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

      <div class="bg-white px-[80px] py-[40px]">
          <div class="flex items-center relative">
            <img src="@/assets/images/misc/foto8.png" alt="People">
            <div class="w-[706px] bg-white p-[80px] flex flex-col gap-4 absolute right-0 bottom-0">
              <p class=" text-body1 text-start font-semibold tracking-[3px] leading-[20px]">WHY WE STARTED</p>
              <h1 class=" text-h1 font-bold leading-[64px] tracking-[-2px]">It started out as a simple idea and evolved into our passion</h1>
              <p class="text-body1 text-x-mediumgrey leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
              <a href="#" class="w-[269px] flex items-center justify-center bg-x-blue px-[48px] py-[16px] text-white font-bold bg-x-yellow hover:bg-x-puple transition duration-150 ease-in-out">
                Discover our story >
              </a>
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
                <router-link to="/author" @click="activeLink = 'author'"> Dianne Russell</router-link>
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
                <router-link to="/author" @click="activeLink = 'author'"> Jenny Wilson</router-link>
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
                <router-link to="/author" @click="activeLink = 'author'"> Leslie Alexander</router-link>
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

      <div>
        <div class="flex justify-center space-x-12 py-16">

        <img src="@/assets/images/misc/logo0.png" alt="Facebook" class="" />

        <img src="@/assets/images/misc/Logo1.png" alt="Twitter" class="" />

        <img src="@/assets/images/misc/Logo2.png" alt="Instagram" class="" />

        <img src="@/assets/images/misc/Logo3.png" alt="LinkedIn" class="" />

        <img src="@/assets/images/misc/Logo4.png" alt="LinkedIn" class="" />

        <img src="@/assets/images/misc/Logo5.png" alt="LinkedIn" class="" />
        </div>
      </div>

       <div class="py-16">
        <div class="max-w-screen-lg mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-2 gap-8 bg-x-lightyellow p-8 rounded-lg shadow-lg relative">
            <div class="text-left pr-4 border-r border-x-mediumgrey">
              <p class="text-body1 font-bold uppercase mb-2">Testimonials</p>
              <h2 class="text-h2 font-bold mb-4">What people say</h2>
              <h2 class="text-h2 font-bold mb-4">about our blog</h2>
              <p class="text-body1 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
            <div class="flex flex-col justify-center h-[255px] pl-4">
              <h4 class="font-bold text-h4 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h4>
              <div class="flex items-center mt-6">
               <img src="@/assets/images/misc/profil5.png" alt="Jonathan Vallem" class="w-10 h-10 rounded-full mr-4">
                <div>
                  <h4 class="font-h4 font-semibold">Jonathan Vallem</h4>
                  <p class="text-body1 text-gray-500">New York, USA</p>
                </div>
                <div class=" p-8">
                  <div class="flex justify-center items-center space-x-4">
                    <button class="flex justify-center items-center w-12 h-12 rounded-full bg-x-light hover:bg-x-black transition duration-150 ease-in-out' 'bg-x-black text-white' : 'bg-white text-x-black" aria-label="Previous">
                    <span class="text-xl">&larr;</span>
                    </button>
                    <button class="flex justify-center items-center w-12 h-12 rounded-full bg-x-light hover:bg-x-black transition duration-150 ease-in-out' 'bg-x-black text-white' : 'bg-white text-x-black" aria-label="Next">
                    <span class="text-xl">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>  
        </div>
    <quote/>
  </MainLayout>
</template>
