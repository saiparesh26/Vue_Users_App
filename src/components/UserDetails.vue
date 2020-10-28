<template>
    <div>
        <p class="title is-5 has-text-centered">User Details</p>
        
            <div class="card" v-if="user">
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4"> {{user.name}} </p>
                            <p class="subtitle is-6"> {{user.email}} </p>
                        </div>
                    </div>

                    <div class="content">
                        <p class="subtitle is-6"> {{user.contact}} </p>
                    </div>
                </div>
            </div>
           
    </div>    
</template>

<script>
import axios from 'axios';

export default {
    data: function(){
        return{
            id: this.$route.params.id,
            user:null
        }
    },
    mounted: function(){
        axios.get('http://localhost:8080/users.json')
         .then(res => {
             this.user = res.data.filter(u => u.id == this.id);
             this.user = this.user[0];
         })
    }
}
</script>

<style scoped>
    .card{
        width: 500px;
        margin: 0 auto;
        display: block;
    }
</style>