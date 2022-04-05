<template>
<div class="container">

<div class="w-full max-w-xs">
  <form class="form bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"  v-model="email" placeholder="Enter Your Email" required>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" v-model="password" placeholder="Enter Your Password" required>
      
    </div>
    <div class="flex items-center justify-between">
      <button @click="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <!-- <a class="" href="#">
        Forgot Password?
      </a> -->
      <br>
      <br>

       <p class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-4">
            <router-link to="/SignUp">SignUp</router-link>
        </p>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2022 DJT Corp. All rights reserved.
  </p>
</div>
</div>


</template>

<script>
import axios from "axios";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login(){
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            // console.log(this.email, this.password);
            if(result.status==200 && result.data.length>0){
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'Home'})
            }
            console.warn(result);

        }
    },
    mounted(){
       let user = localStorage.getItem('user-info') ;
       if(user)
       {
           this.$router.push({name:'Home'})
       }
    }


}
</script>

<style scoped>
.container{
    max-width: 1300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}

.form{
    height: 25rem;
    width: 25rem;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>