<template>
  <v-toolbar app flat>
    <h1><a href="#">Future Imperfect</a></h1>
    <nav class="links">
      <ul>
      <a href="#">Lorem</a>
      <a href="#">Ipsum</a>
      <a href="#">Feugiat</a>
      <a href="#">Tempus</a>
      <a href="#">Adipiscing</a></ul>
    </nav>
    <nav class="main">
      <ul>
        <li class="search">
          <a class="fa-search" href="#search">Search</a>
          <form id="search" method="get" action="#">
            <input type="text" name="query" placeholder="Search" />
          </form>
        </li>
        <li class="menu">
          <a class="fa-bars" href="#menu">Menu</a>
        </li>
      </ul>
    </nav>
  </v-toolbar>
</template>

<script>export default {}</script>