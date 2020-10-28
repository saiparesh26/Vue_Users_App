<template>
    <nav class="navbar has-background-danger mb-3"> 
        <div class="navbar-menu mt-1">
            <div class="navbar-start">
                <router-link to="/"><a class="navbar-item nav-item">Home</a></router-link>
                <router-link to="/user"><a class="navbar-item nav-item">Users</a></router-link>                
                               
            </div>  
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
    .nav-item{
        color: white;
    }
    .nav-item:hover{
        color: black;
    }
</style>