

<template>
  <div class="container">
    <br/>
    <br/>
    <br/>
    <img src="../assets/404sad.png">
    <br/>
    <br/>
    <p>Oops! The page you are looking for does not exist.</p>
    <br/>
    <router-link to="/" exact>Go to Main Page</router-link>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
  font-family: Arial, sans-serif;
  color: rgb(36, 133, 63);
}

p {
  font-size: 30px;
}
</style>

<script>
export default {
  name: 'NotFound'
};
</script>