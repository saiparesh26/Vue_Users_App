<template>
    <nav class="navbar has-background-grey-lighter"> 
        <div class="navbar-menu mt-1">
            <div class="navbar-start">
                <router-link to="/"><a class="navbar-item">Home</a></router-link>
                <router-link to="/user"><a class="navbar-item">Users</a></router-link>                
                               
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

</style>