<script setup lang="ts">
import { ref } from 'vue';
const activeLink = ref('');
</script>

<template>
  <nav class="w-full h-[60px] bg-x-black text-white flex items-center justify-between">
    <img src="../assets/images/logo/logo-join-sistem.png" alt="Join Sistem Logo" class="ml-20 h-7">
    <ul class="flex gap-4">
        <li>
            <router-link 
                to="/" 
                class="transition-colors duration-300" 
                :class="{
                  'text-x-yellow': activeLink === 'home',
                  'hover:text-yellow-300': activeLink !== 'home'
                }"
                @click="activeLink = 'home'">
                Home
            </router-link>
        </li>
        <li>
            <router-link 
                to="/blog" 
                class="transition-colors duration-300" 
                :class="{
                  'text-x-yellow': activeLink === 'blog',
                  'hover:text-yellow-300': activeLink !== 'blog'
                }"
                @click="activeLink = 'blog'">
                Blog
            </router-link>
        </li>
        <li>
            <router-link 
                to="/abotus" 
                class="transition-colors duration-300" 
                :class="{
                  'text-x-yellow': activeLink === 'abotus',
                  'hover:text-yellow-300': activeLink !== 'abotus'
                }"
                @click="activeLink = 'abotus'">
                About Us
            </router-link>
        </li>
        
    </ul>
    <button class="mr-20">
        <router-link 
            to="/contact" 
            class="bg-x-yellow px-4 py-2 rounded-full text-white hover:bg-x-puple transition duration-150 ease-in-out">
            Contact Us
        </router-link>
    </button>
  </nav>
</template>