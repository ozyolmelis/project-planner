<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required />
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data()
  {
    return {
      title: '',
      details: '',
    };
  },
  methods:
  {
    handleSubmit()
    {
      let project = 
      {
        title: this.title,
        details: this.details,
        complete: false
      };
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(project)
      })
      .then(() => this.$router.push("/"))
      .catch((err) => console.log(err));
      
    }
  }
}
</script>

<style scoped>
* 
{
  display: grid;
  justify-content: center; 
}
input 
{
  height: 14px;
  margin: 10 10px;
  padding: 6px;
  border-radius: 0 10px;
  border-block-color: rgb(16, 118, 16);
}
textarea
{
  height: 10rem;
  width: 20rem;
  border-radius: 0 10px;
  border-block-color: rgb(16, 118, 16);
}
label
{
  font-size: 20px;
  margin: 10px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
}
button 
{
  align-items: center;
  border-radius: 5px;
  border-block-color: rgb(16, 118, 16);
  cursor: pointer;
  width: 100px;
  height: 45px;
  margin-left: 120px;
  margin-top: 5px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 16px;
  text-decoration-color: aqua;
}
</style>
