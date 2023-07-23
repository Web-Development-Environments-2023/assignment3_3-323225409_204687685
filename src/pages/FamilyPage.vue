<template>
  <div class="family-page">
    <h1>Our Family Recipes</h1>
    <p id="primeText">
      Our family recipes are like precious treasures, handed down from one generation to the next. Each bite carries the flavors of our history and love, making every meal special. These cherished dishes bring us together, filling our hearts with warmth and tradition. Sharing these recipes is a way to celebrate our culinary heritage, creating lasting memories with every delicious taste.    
    </p >

    <div class="project-image">
    <img src= "../assets/family.png" alt="Foodie Recipes" />
  </div>

    <div class="family-recipes">
      <div v-for="recipe in familyRecipes" :key="recipe.title" class="family-recipe">
        <h3>{{ recipe.title }}</h3>
        <h4>Chef: {{recipe.chef}}</h4>
        <h2 id="desc">{{recipe.description}}</h2>
      <br>
        <img :src="recipe.image" :alt="recipe.title" class="image" />
        <h2 >Ingredients:</h2>
        <ul id="list">
          <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
        </ul>
        <h2>Instructions:</h2>
        <ul id="list">
          <li v-for="instruction in recipe.instructions" :key="instruction">{{ instruction }}</li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
import pilmeni from "../assets/pilmeni.png"
import piroshki from "../assets/piroshki.jpeg"
import shmenet from "../assets/shmenet.png"


export default {
  
  data() {
    
    return {
      familyRecipes: [
        {
          title: "HOMEMADE PILMENY",
          chef:"Savta Tatiana",
          description: "Discover the cherished Russian pelmeni, filled with succulent meat, onions, and seasoning. Embrace their warmth on cold winter days, served with sour cream or melted butter. Passed down through generations, these dumplings carry the essence of tradition and joy. Knead, shape, and boil them to perfection, filling the air with a delightful aroma. Gather loved ones around the table, savoring every bite as you create lasting memories together. Let this culinary treasure bring comfort and togetherness to your heart and home.",
          ingredients: ["1 large egg", "1 teaspoon salt", "1 teaspoon vegetable oil", "¾ cup warm water, or more as needed", "3 cups all-purpose flour", "1 tablespoon all-purpose flour for dusting", "18 ounces ground beef", "1 small onion, chopped","1 ½ tablespoons ice-cold water","freshly ground pepper to taste","1 tablespoon coarse salt"],
          instructions: ["Make dough: Combine egg, oil, and salt in a liquid measuring cup; add enough warm water to fill to 1 cup. Pour into a large bowl and knead in 3 cups flour until smooth and elastic. Cover with a dish towel and let dough rest for 30 minutes.", "Meanwhile, make filling: Combine ground beef, onion, water, salt, and pepper in a medium bowl; mix thoroughly by hand or using a fork. Set aside.", "Dust a baking sheet lightly with 1 tablespoon flour; set aside.", "Roll out a portion of dough very thinly on a lightly floured surface; keep remaining dough covered with a dish towel to avoid drying out. Cut out 2 1/2-inch rounds with a cookie cutter. Place about 1 teaspoon filling on one side of each dough circle. Fold dough over and seal the edges using your fingers, forming a crescent. Join the ends and pinch them together. Place on the prepared baking sheet. Repeat with remaining dough and filling. Freeze pelmeni for 30 minutes to prevent them from sticking together.", "Bring a large pot of lightly salted water to a simmer. Working in batches, cook frozen pelmeni in simmering water until meat is cooked through and pelmeni float to the top, about 5 minutes. Continue cooking for 5 more minutes. Transfer to serving plates using a slotted spoon."],
          image: pilmeni
        },

        {
          title: "SHAMENET PITRIOT",
          chef:"Saba Ziv",
          description: "Creamy Mushroom Pasta is a delectable and comforting dish that combines perfectly cooked pasta with a rich and velvety cream sauce. The star of the dish is the earthy and tender sautéed mushrooms, adding depth to the flavors. Topped with a sprinkle of fresh herbs and grated Parmesan, this dish is a delightful fusion of creaminess and umami, sure to satisfy any pasta lover's cravings.",
          ingredients: ["Tbsp. extra-virgin olive oil", "lb. mixed mushrooms (such as maitake, oyster, crimini, and/or shiitake), torn into bite-size pieces", "2 medium shallots, finely chopped", "1 lb. spaghetti or bucatini", "1/2 cup heavy cream", "1/3 cup finely chopped parsley", "Zest and juice of ½ lemon", "2 Tbsp. unsalted butter, cut into pieces", "1/2 oz. Parmesan, finely grated (about ½ cup), plus more for serving"],
          instructions: ["Heat 2 Tbsp. oil in a Dutch oven or other large pot over medium-high. Cook half of mushrooms in a single layer, undisturbed, until edges are brown and starting to crisp, about 3 minutes. Give mushrooms a toss and continue to cook, tossing occasionally, until all sides are brown and crisp, about 5 minutes more. Using a slotted spoon, transfer mushrooms to a plate; season with salt. Repeat with remaining 2 Tbsp. oil and mushrooms and more salt.", "Reduce heat to medium-low and return all of the mushrooms to the pot. Add shallots and cook, stirring often, until shallots are translucent and softened, about 2 minutes.", "Meanwhile, cook pasta in a large pot of boiling salted water, stirring occasionally, until very al dente, about 2 minutes less than package directions.", "Using tongs, transfer pasta to pot with mushrooms and add cream and 1 cup pasta cooking liquid. Increase heat to medium, bring to a simmer, and cook, tossing constantly, until pasta is al dente and liquid is slightly thickened, about 3 minutes.", "Remove pot from heat. Add lemon zest and juice, parsley, butter, ½ oz. Parmesan, and lots of pepper and toss to combine. Taste and season with more salt if needed.","Divide pasta among bowls and top with more Parmesan."],
          image: shmenet
        },
        {title: "RUSSIAN PIROSHKI",
          chef:"Savta Donya",
          description: "My grandmother works her magic in the kitchen, crafting delectable Piroshki – soft yeast dough buns enveloping a variety of delightful fillings, lovingly baked or fried to perfection. These Russian treasures come in different shapes and sizes, reminiscent of charming American pies. As she prepares these savory delights, we eagerly await the feast ahead. Often served as a main course, my grandmother pairs them with a light, comforting soup or an easy side salad, turning every meal into a heartwarming affair.",
          ingredients: ["1 tbsp olive oil", "10g butter", "1 brown onion, finely chopped", "2 garlic cloves, crushed", "300g beef mince", "2 cups shredded savoy cabbage", "1 small carrot, peeled, coarsely grated", "2 tbsp finely chopped fresh dill leaves", "1 tsp of Paprika", "2 tsp Coles Italian Red Wine Vinegar","Vegetable oil, to deep-fry","450g (3 cups) plain flour","1 tsp salt","2 tsp (7g sachet) dried yeast","310ml (11/4 cups) warm water","1 1/2 tbsp vegetable oil"],
          instructions: [" To make the dough, combine the flour, salt and yeast in a large bowl. Make a well in the centre. Pour in the water and vegetable oil. Stir until just combined. Turn the dough onto a lightly floured surface. Knead for 5 minutes or until smooth and elastic. Place in a large, lightly oiled bowl. Cover with a clean tea towel. Set aside in a warm, draught-free place for 1 hour or until dough doubles in size. Punch down the dough. Knead on a lightly floured surface for 2 minutes or until smooth. Return the dough to the bowl. Cover and set aside in a warm, draught-free place for 30 minutes to prove.", "Meanwhile, heat the olive oil and butter in a large frying pan over medium-high heat. Add the onion and garlic. Cook, stirring, for 3-4 minutes or until onion softens. Add the beef and cook, breaking up any lumps with a wooden spoon, for 2-3 minutes or until beef is browned. Add cabbage and carrot. Cook, stirring, for 2-3 minutes or until cabbage wilts. Add dill, paprika and vinegar. Cook for 2 minutes. Season well. Transfer to a large bowl and set aside to cool completely.","Turn dough onto a lightly floured surface. Knead for 1 minute or until smooth. Shape into a 30cm-long log. Cut log into 16 equal portions. Working with 4 portions at a time (cover remaining portions with a clean tea towel), roll each portion out to a 12cm disc. Spoon 2 tablespoonfuls of beef mixture onto 1 half of each disc. Fold over dough to enclose filling, pinching edge to seal. Repeat with remaining dough and beef mixture. 4 Add vegetable oil to a wok or large saucepan to come halfway up side of pan. Heat over medium-high heat. Deep-fry the piroshki, in batches, turning, for 2-3 minutes or until puffed and golden. Use a slotted spoon to transfer to a tray lined with paper towel to drain then serve."],
          image: piroshki
        },

      ],
   
    };
  },
  computed: {
  // Get the recipes based on the user ID
},



};
</script>

<style scoped>
.family-page {
  max-width: 80%;
  margin: 0 auto;
  padding: 4vh;
  text-align: center;
  background-color: #eee4db8a;
  font-family: cursive;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


#desc{
  font-size: 1.5vw;
  color: rgb(63, 64, 68);

}

#list{
text-align: left;
}

.family-page h1 {
  font-weight: bold;
  font-size: 2.5vw;
  margin-top: 1.5vw;
  text-align: center;
  margin-bottom: 30px;
  color: rgb(224, 147, 53);
  text-shadow: 4px 4px 6px rgba(87, 46, 10, 0.3);
}

#primeText{
  /* font-weight: bold; */
  font-size: 1.5vw;
  /* margin-top: 1.5vw; */
  text-align: center;
  margin-bottom: 30px;
  color: rgb(184, 119, 38);
  text-shadow: 4px 4px 6px rgba(87, 46, 10, 0.3);

}

.project-image img {
max-width: 100%;
border-radius: 10px;
height: 22vh;
/* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
}

.family-page p {
  font-size: 2vw;
  line-height: 1.5;
  
}



.family-recipes {
  
  font-size: 15vw;
}

.family-recipe {
  margin-top: 6vw;
  margin-bottom: 2vw;
  color: rgb(63, 64, 68);
  font-size: 1.2vw;
}

.image {
  width: 30vw;
  height: 30vw;
  object-fit: cover;
  zoom: 60%;
/* background-color: #f8f8f8; */
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.family-recipe h2 {
  margin-top: 2vw;
  font-size: 2vw;
  font-weight: bold;
}

.family-recipe h3 {
  margin-top: 1vw;
  font-size: 2vw;
  font-weight: bold;
  color: rgb(184, 119, 38);
  text-shadow: 4px 4px 6px rgba(87, 46, 10, 0.3);
}

.family-recipe h4 {
  margin-top: 1vw;
  font-size: 1.5vw;
  font-weight: bold;
  color: rgb(224, 147, 53);
}

.family-recipe ul {
  font-size: 1.5vw;
  /* justify-content: left; */

}
</style>