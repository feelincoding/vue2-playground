<template>
  <div id="app" style="text-align: center">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand tag="h1">PlayGround Page</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">Home</b-nav-item>
          <!-- <b-nav-item><router-link to="/">Home</router-link> </b-nav-item> -->
          <b-nav-item href="/about">About</b-nav-item>
          <!-- <b-nav-item><router-link to="/about">About</router-link></b-nav-item> -->
          <b-nav-item href="/search">Search</b-nav-item>
          <!-- <b-nav-item><router-link to="/search">Search</router-link></b-nav-item> -->
          <b-nav-item href="/favoriteList">FavoriteList</b-nav-item>
          <!-- <b-nav-item><router-link to="/favoriteList">FavoriteList</router-link></b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
