<template>
    <div>
        <p class="title is-5 has-text-centered">User Page</p>
        <div v-for="user in users" :key="user.id">
            <div class="card" @click="onUserSelected(user.id)">
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4"> {{user.name}} </p>                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    </div>   
</template>

<script>
import axios from 'axios';

export default {
    data: function(){
        return {
            users: []
        }
    },
    mounted: async function(){
        axios.get('http://localhost:8080/users.json')
         .then(res => {
             this.users = res.data;
         })  
    },
    methods: {
        onUserSelected: function(id){
            this.$router.push({
                name: 'UserDetails',
                params: {
                    id: id
                }
            })
        }
    }
}
</script>

<style scoped>
    .card{
        width: 500px;
        margin: 10px auto;
        display: block;
        cursor: pointer;
    }
</style>