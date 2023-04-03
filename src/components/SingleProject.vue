<template>
  <div class="project">
    <div class="actions">
        <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
    </div>
    <div class="icons">
        <router-link :to="{ name: 'EditProject', params: { id:project.id } }"><span class="material-icons">edit</span></router-link>
        <span @click="deleteProject" class="material-icons">delete</span>
        <span @click="doneProject" class="material-icons tick">done</span>
    </div>
    <div class="details">
        <p v-if="showDetails">{{project.details}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['project'],
   data()
   {
    return {
        showDetails: false,
        url: "http://localhost:3000/projects/" + this.project.id,
    };
   },
   methods:
   {
    deleteProject()
    {
        fetch(this.url, {method: "DELETE"})
        .then(() => this.$emit('delete', this.project.id))
    }
   }
}
</script>

<style>
.project
{
    width: 25rem;
    background: rgb(89, 157, 235);
    border-radius: 5px;
    margin: 20px auto;
    padding: 10px 20px;
    border-left: 10px 20px;
}
h3
{
    cursor: pointer;
    color: rgb(220, 233, 220);
}
.actions
{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

.material-icons
{
    cursor: pointer;
    margin-left: 10px;
    font-size: 24px;
}

.material-icons:hover
{
    color: rgb(9, 55, 46);
}
</style>