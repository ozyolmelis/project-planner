<template>
  <nav class="main-nav">
    <router-link :to="{ name:'HomePage' }">Projects</router-link>
    <router-link :to="{ name:'AddProject' }">Add New Project</router-link>
  </nav>
</template>


<style scoped>
.main-nav
{
    text-align: center;
    margin: 20 10px;
}
.main-nav a 
{
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 18px;
    color: rgb(0, 116, 97);
}
a.router-link-active
{
    border-bottom: 2px solid greenyellow;
    padding-bottom: 4px;
}

</style>
