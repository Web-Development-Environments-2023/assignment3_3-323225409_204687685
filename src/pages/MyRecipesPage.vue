
<template>
  <div class="myrecipes-container">
    <RecipePreviewList ref="myrecipes" title="My Recipes" route_name="/users/myRecipes" class="MyRecipes"/>
  </div>
</template>
  
<script>
import RecipePreviewList from '../components/RecipePreviewList.vue'
export default {
  name:"MyRecipes",
  components: {
      RecipePreviewList,
  },
  mounted() {
    this.$refs.myRecipes.updateMyRecipes();
  },
}
</script>
  
<style>
.myrecipes-container {
  display: flex;  
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
}
</style>

<!-- 
<template>
    <div class="container">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p>My Recipes Page</p>
      <br/>
    </div>
</template>
  

  <script>
  export default {
    name: 'MyRecipesPage'
  };
  </script>

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
   -->
