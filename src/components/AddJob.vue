<template>
    <div>
        <Header />
        <br><br><br>
        <h1 class="text-center">Hello {{name}}, Welcome on Add Job Page</h1>
        <br>
        
         <form class="form bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-1/2 mx-auto">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Job Title
      </label>
      <!-- <input  id="username" type="text"  v-model="name" placeholder="Enter Your Name" required> -->
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="Job.name" name="name" id="" placeholder="Enter Job Title">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Job Description
      </label>
     
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="Job.description" name="name" id="" placeholder="Enter Job Description">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Skills Required
      </label>
     
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="Job.skill" name="name" id="" placeholder="Enter Job Description">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Experience
      </label>
        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="text" v-model="Job.experience" name="experience" id="" placeholder="Enter required Experience">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Job Author
      </label>
     
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="Job.author" name="name" id="" placeholder="Job author">
    </div>
    <div class="flex items-center justify-between">
      <button @click="AddJob" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Add New Job
      </button>
      <!-- <a class="" href="#">
        Forgot Password?
      </a> -->
      <br>
      <br>

    
    </div>
  </form>
    </div>
</template>


<script>
import Header from "./Header.vue";
import axios from 'axios'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Add',
    components:{
        Header
    },
    data(){
        return{
            name:'',
            Job:{
                name:'',
                description:'',
                experience:'',
                author:'',
                skill:''
            }
        }
    },
    methods:{
        async AddJob(e){
            e.preventDefault()
            console.log(this.Job);
              let result = await axios.post("http://localhost:3000/jobPosts",{
                  name:this.Job.name,
                  description:this.Job.description,
                  experience:this.Job.experience,
                  author:this.Job.author,
                  skill:this.Job.skill
              })

              console.warn("result", result);
               if(result.status == 201)
            {
                this.$router.push({name:'Home'})
            }
            
        }
    },
    async mounted(){
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if(!user){
                this.$router.push({name:'SignUp'})
        }
      
    }
} 
</script>