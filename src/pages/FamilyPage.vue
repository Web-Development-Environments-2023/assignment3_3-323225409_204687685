<!-- 

<template>
    <div class="container">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p>My Family racipes Page</p>
      <br/>
    </div>
</template>
  

  <script>
  export default {
    name: 'FamilyPage'
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
        Our family recipes are cherished heirlooms, passed down through generations, each one holding the essence of our shared history and love. With every bite, you can taste the warmth, tradition, and togetherness that define our culinary heritage.    
      </p >

      <div class="project-image">
      <img src= "../assets/family.png" alt="Foodie Recipes" />
    </div>
  
      <div class="family-recipes">
        <div v-for="recipe in familyRecipes" :key="recipe.title" class="family-recipe">
          <h3>{{ recipe.title }}</h3>
          <h4>Chef: {{recipe.chef}}</h4>
          <h2 id="desc">{{recipe.description}}</h2>
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
  import shamenet from "../assets/shmenet.png"
  import kuskus from "../assets/kuskus.jpg"
  
  
  export default {
    data() {
      return {
        familyRecipes: [
          {
            title: "HOMEMADE PILMENY",
            chef:"Savta Miri",
            description: "Jachnun is an iconic Yemenite bread that is cooked low and slow with lots of oil. It's a little bit sweet, a little bit savory and a whole lot delectable. Traditionally Jachnun is eaten on Shabbat day with eggs, pickles and tomato dip, it's ideal because it can be place raw in the very low heat oven before Shabbat and cooks and stays hot without breaking any of the laws of Shabbat .",
            ingredients: ["8 cups all-purpose flour", "¼ cup sugar", "½ teaspoon baking powder", "2 tablespoons honey", "1 tablespoon kosher salt", "2½ cups warm water", "1 tablespoon olive oil, plus more for coating", "½ cup butter or ghee or olive oil, plus more as needed"],
            instructions: ["Place flour, sugar, baking powder, honey, and salt in a large bowl.", "Add water and stir until the dough is shaggy and the water has been absorbed.", "Knead the dough in the bowl for 2 minutes.", "Set the dough aside at room temperature to rest for 5 minutes.", "Stretch and fold the dough a few times until the dough feels nice and smooth.  Cover with a towel and set aside for 1 hour.", "Lightly oil a large container or glass casserole.  Oil your hands and coat the dough with a thin layer of oil.", "Separate the dough into 10 balls.  Roll each one into a tight ball and place in oiled container. Cover with a towel and let rest 5 minutes.", "Preheat oven to 225℉. Line a deep pot with parchment paper and lightly oil.", "For each ball generously coat with oil and flatten as thin as possible with the palm of your hands.", "Spread butter, ghee or olive oil over top.  Then beginning folding and rolling.", "Fold the left side over towards the center and then the right side.  From the narrow edge slowly roll up the dough into a tight cylinder.  Place in prepared pot in a single layer, top with parchment then add the second layer on top, across in a crosshatch pattern, repeat with a third layer.  Top with parchment and layer of raw eggs.", "Cover and seal pot tightly.  Place in oven and bake for 12 hours. The next morning remove from oven and serve with eggs, pickles and tomato dip."],
            image: pilmeni
          },
  
          {
            title: "EASY SHAKSHUKA",
            chef:"Saba Hezi",
            description: "Shakshuka is a North African and Middle Eastern meal of poached eggs in a simmering tomato sauce with spices. It's easy, healthy and takes less than 30 minutes to make. I make this dish when the grandchildren come over.",
            ingredients: ["2 tablespoons olive oil", "1 medium onion, diced", "1 red bell pepper, seeded and diced", "4 garlic cloves, finely chopped", "2 teaspoon paprika", "1 teaspoon cumin", "¼ teaspoon chili powder", "1 28-ounce can whole peeled tomatoes", "6 large eggs", "salt and pepper, to taste", "1 small bunch fresh cilantro, chopped", "1 small bunch fresh parsley, chopped"],
            instructions: ["Heat olive oil in a large sauté pan on medium heat. Add the chopped bell pepper and onion and cook for 5 minutes or until the onion becomes translucent.", "Add garlic and spices and cook an additional minute.", "Pour the can of tomatoes and juice into the pan and break down the tomatoes using a large spoon. Season with salt and pepper and bring the sauce to a simmer.", "Use your large spoon to make small wells in the sauce and crack the eggs into each well. Cover the pan and cook for 5-8 minutes, or until the eggs are done to your liking.", "Garnish with chopped cilantro and parsley."],
            image: kuskus
          },
          {title: "CRISPY CHICKEN SCHNITZEL",
            chef:"Shoshana Hamalca",
            description: "We are about to share with you a secret schnitzel trick that may or may not change the way you make schnitzel. Forever. Chicken schnitzel has been eaten by Jews for centuries: In Austria under the name Wiener Schnitzel and in Italy as Cotoletta alla milanese. The schnitzel was finally introduced to Israel (Palestine at the time) by European immigrants moving to kibbutzim. Although they made schnitzel with veal and beef in Europe, chicken was always the cheapest option in Israel and now chicken schnitzel has become a staple on every Israeli family’s Shabbat table.",
            ingredients: ["6 boneless, skinless chicken breasts", "1 cup all-purpose flour", "2 cups breadcrumbs", "3 eggs", "1 tablespoon Dijon mustard", "1 tablespoon lemon zest (This is the secret ingredient. It's actually amazing!)", "⅓ cup sesame seeds", "salt and pepper", "Extra virgin olive oil for frying", "Lemon wedges for garnish"],
            instructions: ["Clean chicken breasts and rinse. Place between two layers of plastic wrap and hit with a mallet until 1/8th inch thickness. Have no mercy.", "Beat the eggs and stir in dijon mustard. Add lemon zest, sesame seeds salt and pepper to the breadcrumbs.", "Coat chicken breasts with flour completely and shake off excess. Dunk in the egg mixture, shake off excess. Finally the chicken goes into the breadcrumbs - make sure the chicken is completely and evenly covered.", "Bring oil in a frying pan to high heat. The oil should cover the schnitzel about halfway. Fry chicken on both sides until golden. Place on paper towels to soak up the leftover oil and serve with a lemon wedge."],
            image: shamenet
          }
        ]
      };
    }
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