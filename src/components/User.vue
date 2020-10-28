<template>
    <div>
        <p class="title is-5 has-text-centered">Users Page</p>
        <div v-if="users.length > 0">
            <div v-for="user in users" :key="user.id">
                <div class="card" @click="onUserSelected(user.id)">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4 has-text-white"> {{user.name}} </p>                            
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div v-else class="has-text-centered">
            <img src="../assets/loader.gif" class="img">
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
        setTimeout(() => {
            axios.get('http://localhost:8080/users.json')
         .then(res => {
             this.users = res.data;
         }) 
        }, 1000) 
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
        background: rgb(243, 104, 104);
    }
    .img{
        margin: 100px auto;
        width: 100px;
        height: 100px;
        opacity: 0.8;
    }
</style>