<template>
    <div>
        <Header />
         <br><br><br>
        <h1 class="text-center">Hello {{name}}, Welcome on Job Posts</h1>
        <br><br>
        <table class="table-auto text-center">
            <thead>
                <tr>
                    <th>Sr No.</th>
                    <th>Job Title</th>
                    <th>Experience Required</th>
                    <th class="w-1/3">Job Description</th>
                    <th>Skills Required</th>
                    <th>Job Author</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="job in jobPosts" :key="job.id">
                    <td>{{job.id}}</td>
                    <td>{{job.name}}</td>
                    <td>{{job.experience}}</td>
                    <td>{{job.description}}</td>
                    <td>{{job.skill}}</td>
                    <td>{{job.author}}</td>
                    <td>
                        <router-link :to="'/UpdateJob/'+job.id" class="text-gray-600">Update</router-link>/
                        <button @click="deleteJob(job.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
</table>
 

    </div>
</template>

<script>
import Header from "./Header.vue";
import axios from 'axios'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Home',
    data(){
        return{
            name:'',
            jobPosts:[],
        }
    },
    components:{
        Header
    },
    methods:{
        async deleteJob(id){
            console.log(id);
            let result = await axios.delete('http://localhost:3000/jobPosts/'+id);
            console.log(result)
            if(result.status == 200){
                this.loadData()
            }
        },
       async loadData(){
              let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if(!user){
                this.$router.push({name:'SignUp'})
        }
        let result = await axios.get('http://localhost:3000/jobPosts')
        console.log("result", result);
        this.jobPosts = result.data;  
        console.warn("Warning",this.jobPosts);  
        }
    },
     async mounted(){
      this.loadData();
    }
} 
</script>

<style scoped>
td{
    width: 160px;
    height: 40px;
}
</style>