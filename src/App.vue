<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import './index.css';
</script>

<template>
  <header>

    <div class="fixed top-0 h-[4rem] shadow-md p-[0.5rem] left-0 right-0 z-[10] w-full bg-white">
      <div class="flex flex-row justify-center w-full h-full">
        <img alt="header logo image" src="/images/zracna-luka-split-airport-eng.jpg"
             class="h-full w-[60%] object-contain object-center m-auto "/>
      </div>
<!--      <nav>-->
        <!--        <RouterLink to="/">Home</RouterLink>-->
        <!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
    </div>
  </header>
  <div class="pt-[4rem]">
    <RouterView/>
  </div>
</template>

<style scoped>
/*
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
*/

</style>
