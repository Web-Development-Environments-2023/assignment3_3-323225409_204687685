<template>
  <div class="container">
    <h1 class="header">Welcome</h1>
    <p>
      We are Natalia and Ayelet, third-year students studying Software and Information Systems Engineering.
    </p>
    <h3 class="subtitle">Our Project: Ayenat Recipes</h3>
    <p>
      Ayenat Recipes is a platform where you can discover and explore various recipes. We source our recipes from an external API called Spoonacular.
    </p>
    <p>
      Whether you are a registered user or a guest, you can search for recipes and apply various filters. Registered users have additional features such as creating personal recipes, saving favorites, and viewing personal and family recipes.
    </p>
    <p>
      Each recipe on our site is labeled with dietary information such as vegan, vegetarian, and gluten-free options.
    </p>
    <p>
      We hope you enjoy using Ayenat Recipes!
    </p>
    <h3 class="subtitle">Our Previous Project</h3>
    <p>
      In our previous project, we developed a fun and exciting game called Space Invaders. Feel free to check it out!
    </p>
    <a href="https://web-development-environments-2023.github.io/assignment2-204687685_323225409/">Space Invaders Game</a>
    <br/>
    <br/>
    <h3 class="subtitle">Our Personal Websites</h3>
    <p>
      Apart from our collaboration on Tasty Recipes, we also created individual websites, each with its own unique style and beauty.
    </p>
    <p>
      Natalia's Website: <a href="https://web-development-environments-2023.github.io/323225409/">Visit Natalia's Site</a>
    </p>
    <p>
      Ayelet's Website: <a href="https://web-development-environments-2023.github.io/204687685/">Visit Ayelet's Site</a>
    </p>
    <h3 class="subtitle">Contact Us</h3>
    <p>
      Natalia: <a href="mailto:katnat@post.bgu.ac.il">katnat@post.bgu.ac.il</a>
      <br/>
      Ayelet: <a href="mailto:ayelem@post.bgu.ac.il">ayelem@post.bgu.ac.il</a>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
  max-width: 950px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.header {
  font-size: 40px;
  font-weight: bold;
  color: #7150c5;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.subtitle {
  font-size: 24px;
  font-weight: bold;
  color: #c181df;
  margin-top: 30px;
}

p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 15px;
}

a {
  color: #510bb3;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #f24a88;
}

.personal-websites {
  margin-top: 40px;
}

.personal-websites p {
  margin-bottom: 5px;
}

.personal-websites a {
  color: #f25360;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s;
}

.personal-websites a:hover {
  color: #f29f4a;
}

.contact-info {
  margin-top: 40px;
}

.contact-info a {
  color: #0d9488;
  text-decoration: none;
  transition: color 0.3s;
}

.contact-info a:hover {
  text-decoration: underline;
}

.contact-info p {
  margin-top: 10px;
}
</style>