<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import quote from '@/components/quote.vue';
</script>

<template>
  <MainLayout>
        <div class="flex flex-col mr-52 ml-52 mt-20 ">
            <div class="basis-1/3 items-center ">
                <div class="flex">
                    <img class="rounded-full" src="@/assets/images/misc/profil5.png" alt="Author profile" />
                    <div class="ml-3">
                    <h3 class="text-x-puple text-h3 font-bold">Andrew Jonson</h3>
                    <p class="text-x-mediumgrey text-body1">Posted on 27th January 2022</p>
                    </div>
                </div>
            </div>
            <div class="basis-1/3 mt-3"></div>
                <h3 class="text-h1 font-bold ">Step-by-step guide to choosing great font pairs</h3>
            </div>
            <div class="basis-1/3 flex mt-3 space-x-3">
                <img src="@/assets/images/misc/stup.png" class="aspect-[1/1]"/>
                <h4 class="text-h4 font-bold">Startup</h4>
            </div>
        <div >
         <img src="@/assets/images/misc/foto9.png" class="item-center px-[80px] mt-10"/>
         </div>
        <div class="max-w-4xl mx-auto px-35 mt-10">
            <h2 class="text-h2 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p class="text-body1 text-x-mediumgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        </div>
        <div class="max-w-4xl mx-auto px-35 mt-10">
            <h2 class="text-h2 font-bold mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p class="text-body1 text-x-mediumgrey mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <p class="text-body1 text-x-mediumgrey mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <ul class="space-y-1 list-disc mt-5 list-inside ps-1"> 
            <li class="text-h4">Lorem ipsum dolor sit amet</li>
            <li class="text-h4">Non blandit massa enim nec scelerisque</li>
            <li class="text-h4">Neque egestas congue quisque egestas</li>
        </ul>
        <p class="text-body1 text-x-mediumgrey mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        </div>
        <div class="max-w-4xl mx-auto px-35 mt-10">
            <h2 class="text-h2 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p class="text-body1 text-x-mediumgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        </div>

        <div class="mt-20 px-[79px]">
            <h2 class="text-h2 font-bold ">What to read next</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-9 mt-5">
                <div class="grid gap-4">
                    <img src="@/assets/images/misc/foto10.png" alt="Artikel 1" class="w-full h-auto object-cover rounded-lg" />
                    <div>
                        <label class="text-label">By <span class="text-x-yellow">John Doe</span> | May 23, 2022</label>
                        <h3 class="text-h3 font-semibold mt-2">A UX Case Study Creating a Studious Environment for Students</h3>
                        <p class="text-body1 text-x-mediumgrey mt-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
                <div class="grid gap-4">
                    <img src="@/assets/images/misc/foto11.png" alt="Artikel 2" class="w-full h-auto object-cover rounded-lg" />
                    <div>
                        <label class="text-label">By <span class="text-x-yellow">John Doe</span> | May 23, 2022</label>
                        <h3 class="text-h3 font-semibold mt-2">A UX Case Study Creating a Studious Environment for Students</h3>
                        <p class="text-body1 text-x-mediumgrey mt-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
                <div class="grid gap-4">
                    <img src="@/assets/images/misc/foto12.png" alt="Artikel 3" class="w-full h-auto object-cover rounded-lg" />
                    <div>
                        <label class="text-label">By <span class="text-x-yellow">John Doe</span> | May 23, 2022</label>
                        <h3 class="text-h3 font-semibold mt-2">A UX Case Study Creating a Studious Environment for Students</h3>
                        <p class="text-body1 text-x-mediumgrey mt-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
            </div>
            <hr class="mt-8 "/>
        </div>
        
        <quote/>
  </MainLayout>
</template>
