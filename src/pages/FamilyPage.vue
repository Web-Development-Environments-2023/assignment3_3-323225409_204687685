<!-- 

<template>
    <div class="family- container">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <RecipePreviewList ref="familyrecipes" title="Family Recipes" route_name="/users/FamilyRecipes" class="familyRecipes"/>
      <br/>
    </div>
</template>
  

  <script>
  import RecipePreviewList from '../components/RecipePreviewList.vue'
  export default {
    name: 'FamilyPage',
    components: {
      RecipePreviewList,
  },
  mounted() {
    console.log(this.$refs);
    this.$refs.myRecipes.updateMyRecipes();
  },
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
  import shakshuka from "../assets/shakshuka.jpg"
  import kuskus from "../assets/kuskus.jpg"
  import vareniki from "../assets/vareniki.jpg"
  import falafel from "../assets/falafel.jpg"
  
  
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
            title: "SHAKSHUKA",
            chef:"Saba Moshe",
            description: "Indulge in the flavors of North Africa and the Middle East with Shakshuka, a delightful meal of poached eggs in a rich tomato sauce infused with aromatic spices. Quick, healthy, and ready in under 30 minutes, it's the perfect dish for a fuss-free yet satisfying meal. Whenever my grandchildren visit, I whip up this delicious treat to share the joy of good food and cherished family moments.",
            ingredients: ["2 tablespoons olive oil", "1 medium onion, diced", "1 red bell pepper, seeded and diced", "4 garlic cloves, finely chopped", "2 teaspoon paprika", "1 teaspoon cumin", "¼ teaspoon chili powder", "1 28-ounce can whole peeled tomatoes", "6 large eggs", "salt and pepper, to taste", "1 small bunch fresh cilantro, chopped", "1 small bunch fresh parsley, chopped"],
            instructions: ["Heat olive oil in a large sauté pan on medium heat. Add the chopped bell pepper and onion and cook for 5 minutes or until the onion becomes translucent.", "Add garlic and spices and cook an additional minute.", "Pour the can of tomatoes and juice into the pan and break down the tomatoes using a large spoon. Season with salt and pepper and bring the sauce to a simmer.", "Use your large spoon to make small wells in the sauce and crack the eggs into each well. Cover the pan and cook for 5-8 minutes, or until the eggs are done to your liking.", "Garnish with chopped cilantro and parsley."],
            image: shakshuka
          },
          {title: "RUSSIAN PIROSHKI",
            chef:"Savta Donya",
            description: "My grandmother works her magic in the kitchen, crafting delectable Piroshki – soft yeast dough buns enveloping a variety of delightful fillings, lovingly baked or fried to perfection. These Russian treasures come in different shapes and sizes, reminiscent of charming American pies. As she prepares these savory delights, we eagerly await the feast ahead. Often served as a main course, my grandmother pairs them with a light, comforting soup or an easy side salad, turning every meal into a heartwarming affair.",
            ingredients: ["1 tbsp olive oil", "10g butter", "1 brown onion, finely chopped", "2 garlic cloves, crushed", "300g beef mince", "2 cups shredded savoy cabbage", "1 small carrot, peeled, coarsely grated", "2 tbsp finely chopped fresh dill leaves", "1 tsp of Paprika", "2 tsp Coles Italian Red Wine Vinegar","Vegetable oil, to deep-fry","450g (3 cups) plain flour","1 tsp salt","2 tsp (7g sachet) dried yeast","310ml (11/4 cups) warm water","1 1/2 tbsp vegetable oil"],
            instructions: [" To make the dough, combine the flour, salt and yeast in a large bowl. Make a well in the centre. Pour in the water and vegetable oil. Stir until just combined. Turn the dough onto a lightly floured surface. Knead for 5 minutes or until smooth and elastic. Place in a large, lightly oiled bowl. Cover with a clean tea towel. Set aside in a warm, draught-free place for 1 hour or until dough doubles in size. Punch down the dough. Knead on a lightly floured surface for 2 minutes or until smooth. Return the dough to the bowl. Cover and set aside in a warm, draught-free place for 30 minutes to prove.", "Meanwhile, heat the olive oil and butter in a large frying pan over medium-high heat. Add the onion and garlic. Cook, stirring, for 3-4 minutes or until onion softens. Add the beef and cook, breaking up any lumps with a wooden spoon, for 2-3 minutes or until beef is browned. Add cabbage and carrot. Cook, stirring, for 2-3 minutes or until cabbage wilts. Add dill, paprika and vinegar. Cook for 2 minutes. Season well. Transfer to a large bowl and set aside to cool completely.","Turn dough onto a lightly floured surface. Knead for 1 minute or until smooth. Shape into a 30cm-long log. Cut log into 16 equal portions. Working with 4 portions at a time (cover remaining portions with a clean tea towel), roll each portion out to a 12cm disc. Spoon 2 tablespoonfuls of beef mixture onto 1 half of each disc. Fold over dough to enclose filling, pinching edge to seal. Repeat with remaining dough and beef mixture. 4 Add vegetable oil to a wok or large saucepan to come halfway up side of pan. Heat over medium-high heat. Deep-fry the piroshki, in batches, turning, for 2-3 minutes or until puffed and golden. Use a slotted spoon to transfer to a tray lined with paper towel to drain then serve."],
            image: piroshki
          },
          {
          title: "KUSKUS",
          chef: "Savta Miriam",
          description: "Kuskus is a delicious North African dish made from steamed couscous granules. It's usually served with vegetables, meat, or fish, and seasoned with aromatic spices.",
          ingredients: ["1 cup couscous", "1 cup boiling water", "1 tablespoon olive oil", "Salt to taste", "Assorted vegetables (carrots, zucchini, bell peppers, etc.)", "Cooked chicken or beef (optional)", "Harissa or other spices for seasoning"],
          instructions: ["Place couscous in a large bowl. Pour the boiling water over the couscous, add olive oil and a pinch of salt. Stir, then cover the bowl with a plate or lid and let it sit for 5 minutes.", "Meanwhile, chop the vegetables and sauté them in a pan with a little olive oil until tender. If using meat, add it to the pan and cook until fully cooked.", "Fluff the couscous with a fork. Serve the couscous on a plate, topped with the sautéed vegetables and meat. Season with harissa or your favorite spices for extra flavor."],
          image: kuskus
        },
        {
          title: "VARENIKI",
          chef: "Savta Tanya",
          description: "Vareniki are delicious Ukrainian dumplings filled with various fillings, such as potatoes, cheese, or cherries. They are usually served with sour cream and make for a comforting and tasty meal.",
          ingredients: ["2 cups all-purpose flour", "1/2 teaspoon salt", "1 cup warm water", "Potato and cheese filling (or any desired filling)", "Sour cream for serving"],
          instructions: ["In a large bowl, mix flour and salt. Add warm water gradually and knead the dough until smooth and elastic. Cover with a damp cloth and let it rest for 15-20 minutes.", "Roll out the dough on a floured surface to about 1/8-inch thickness. Cut circles from the dough using a glass or a cookie cutter.", "Place a spoonful of filling in the center of each circle. Fold the dough in half, forming a half-moon shape, and press the edges to seal.", "Bring a large pot of salted water to a boil. Add vareniki and cook until they float to the surface, then cook for an additional 2-3 minutes. Remove vareniki with a slotted spoon.", "Serve vareniki hot, topped with sour cream."],
          image: vareniki
        },
        {
          title: "FALAFEL",
          chef: "Savta Yafa",
          description: "Falafel is a popular Middle Eastern dish made from chickpeas or fava beans, flavored with herbs and spices, and deep-fried to perfection. Enjoy it in pita bread with salad and tahini sauce.",
          ingredients: ["1 cup dried chickpeas or canned chickpeas (drained)", "1 small onion, roughly chopped", "3-4 garlic cloves", "1 cup fresh parsley leaves", "1 cup fresh cilantro leaves", "1 teaspoon ground cumin", "1 teaspoon ground coriander", "1/2 teaspoon baking soda", "Salt and pepper to taste", "Oil for frying"],
          instructions: ["If using dried chickpeas, soak them overnight in water. Drain and rinse before using.", "In a food processor, combine chickpeas, onion, garlic, parsley, cilantro, cumin, coriander, baking soda, salt, and pepper. Pulse until everything is well combined and you get a coarse paste.", "Transfer the mixture to a bowl, cover, and refrigerate for 1-2 hours to firm up.", "Form the falafel mixture into small balls or patties.", "Heat oil in a deep frying pan or pot to 350°F (175°C). Fry falafel until golden brown and crispy on all sides.", "Serve falafel in pita bread with salad and tahini sauce or your favorite toppings."],
          image: falafel
        },
        ],
        userRecipesMap: {
        
        20: [0, 1, 2], // User ID 20 will see the same recipes as user ID 1 (indexes 0, 1, and 2)
        21: [3, 4, 5], // User ID 21 will see the same recipes as user ID 2 (indexes 3, 4, and 5)
      },
     
      };
    },
    computed: {
    // Get the recipes based on the user ID
    userRecipes() {
      const userRecipeIndexes = this.userRecipesMap[this.userId] || [];
      return userRecipeIndexes.map((index) => this.familyRecipes[index]);
    },
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