<!-- 

<template>
    <div class="container">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p>My Favorite racipes Page</p>
      <br/>
    </div>
</template>
  

  <script>
  export default {
    name: 'FavoritePage'
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
  

  <template>
  <div class="favorites-container">
    <RecipePreviewList ref="favoriterecipes" title="Favorite Recipes" route_name="/users/favorites" class="FavortiesRecipes"/>
  </div>
</template>

<script>
import RecipePreviewList from '../components/RecipePreviewList.vue'
export default {
  components: {
      RecipePreviewList,
  },
  mounted() {
    this.$refs.myRecipes.updateMyRecipes();
  },
}
</script>

<style>
.favorites-container {
  display: flex;  
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
}
</style> -->



