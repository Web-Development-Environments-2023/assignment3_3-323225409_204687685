<template>
    <!-- <b-navbar type="dark" variant="info" class="nav-bar"> -->
    <VueScrollFixedNavbar>
      <b-navbar toggleable="lg"  class="nav-bar"> 

        <b-navbar-nav id="logo">
          <img src= "../assets/logo.jpg"  />
        </b-navbar-nav>

        <router-link tag="b-navbar-brand" :to="{name:'main'}" style="font-weight: 1000; color: rgb(215, 141, 52)">Foodie</router-link>
        
        <!-- Home -->
        <b-navbar-nav id="navnav">
          <router-link :to="{name:'main'}"><b style="color: rgb(0, 0, 0)">Home</b></router-link>
        </b-navbar-nav>
        <!-- Search -->
        <b-navbar-nav id="navnav">
          <router-link :to="{name:'search'}"><b style="color: rgb(0, 0, 0)">Search</b></router-link >
        </b-navbar-nav>
        <!-- About -->
        <b-navbar-nav id="navnav">
          <router-link to="/AboutUs"><b style="color: rgb(0, 0, 0)">About</b></router-link>
        </b-navbar-nav>
        <!-- Registred user  -->
        <b-navbar-nav v-if="$root.store.username">
          <!-- Create Recipe Modal -->
          <b-navbar-nav id="navnav">
          <b-nav-item v-b-modal.modal-1 id="modal-1" @click="showModal"
            ><b style="color: rgb(0, 0, 0)">Create Recipe</b></b-nav-item>
            <CreateRecipePage v-if="createRecipeClicked"></CreateRecipePage>
        </b-navbar-nav>
          <!-- Personal dropdown: Favorites, My Recipes, My Family Recipes -->
          <b-nav-item-dropdown text="Personal" class="bold-option">
            <router-link tag="b-dropdown-item" :to="{name:'FavoritePage'}"><b style="color: white" >Favorites</b></router-link>     
            <router-link tag="b-dropdown-item" :to="{name:'MyRecipesPage'}"><b style="color: white">My Recipes</b></router-link>
            <router-link tag="b-dropdown-item" :to="{name:'FamilyRecipes'}"><b style="color: white">My Family Recipes</b></router-link>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <!-- Hello guest dropdown: Register & Login -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="!$root.store.username" right class="bold-option" text="Hello guest" style="color:white ;">
            <router-link tag="b-dropdown-item" :to="{name:'register'}"><b style="color:white ;">Register</b></router-link>
            <router-link tag="b-dropdown-item" :to="{name:'login'}"><b style="color:white ;">Login</b></router-link>
          </b-nav-item-dropdown>
          <!-- Logout -->
          <span v-else>
            <b-nav-item>
              <b-row> 
                <b-col>
                  <b-navbar-item><h3 style="color:rgb(0, 0, 0) ;">Hello {{$root.store.username}}!</h3></b-navbar-item>  
                </b-col> 
                <router-link v-b-modal.modal-1 id="modal-1" to="/" @click.native="Logout()" ><b style="color:rgb(255, 0, 0) ;">Logout</b></router-link>
              </b-row>
              <!-- <button @click="Logout" id="button"><b>Logout</b></button> -->
            </b-nav-item>
          </span>
        </b-navbar-nav>
      </b-navbar>
    </VueScrollFixedNavbar>
  </template>
  
  
  <script>
  import CreateRecipePage from '../pages/CreateRecipePage.vue';
  export default {
    name: "NavBar",
    components: {
      CreateRecipePage
    },
    data() {
      return {
        createRecipeClicked: false,
        }
      },
    mounted() {
      this.createRecipeClicked = false;
    },
    methods: {
      Logout() {
        this.$root.store.logout();
        this.$root.toast("Logout", "User logged out successfully", "success");
        this.$router.push("/").catch(() => {
          this.$forceUpdate();
        });
      },
    showModal(){
        this.createRecipeClicked = true
      }
    },
  };
  </script>
  
  
  <style>
  .nav-bar{
    top: 0;
    z-index: 10;
    font-family: cursive;
    background-color: rgba(241, 215, 182, 0.785)!important;
    height:50px ;
    color: white;
  }
   

  

  .bold-option .dropdown-toggle {
    color: rgb(0, 0, 0) !important;
  }
  .bold-option .dropdown-menu {
    background-color: rgba(166, 113, 59, 0.658)!important;
  }
  .bold-option .dropdown-item:hover {
    background-color: #c35e0030;
  }
  .bold-option{
    font-weight: 800;
  }

  #logo{
    zoom: 7%;
    margin-left: -16vw;
    margin-right: 6vw;
  }
  #navnav{
    padding-left: 1.5vw;
    padding-right: 1.5vw;
  }

  </style>