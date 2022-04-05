<template>
    <div class="nav">

    </div>
<nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
    <img class="fill-current h-22 w-24 mr-2" width="100" height="100" :src="logo" alt="">
    <span class="font-semibold text-xl tracking-tight">DJT Careers </span>
  </div>

  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow ml-96 mx-auto">
      <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
        Home
      </router-link>
      <router-link to="/AddJob" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
        Add Job
      </router-link>
      <!-- <router-link to="/UpdateJob" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
        Update Job
      </router-link> -->
    </div>
    <div>
      <a @click="logout" class="inline-block pointer text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</a>
    </div>
  </div>
</nav>
</template>

<script>

import logo from "../assets/DJT_Logo_Dark.png"

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Header',
    data(){
        return{
            logo:logo
        }
    },
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
}
</script>

