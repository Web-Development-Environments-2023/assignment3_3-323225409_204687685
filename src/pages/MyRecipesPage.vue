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
    // this.$refs.myRecipes.updateMyRecipes();
  },
}
</script>
  
<style>
.myrecipes-container {
  /* display: flex;  
  align-items: center;
  justify-content: center;
  padding-bottom: 30px; */
  display: flex;
  justify-content: center;
  gap: 10px;
  max-width: 60%;
  margin: 0 auto;
  padding: 4vh;
  /* text-align: center; */
  background-color: #eee4db8a;
  font-family: cursive;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-weight: bold;
}
</style>