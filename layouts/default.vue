<template>
  <v-app dark>
    
    <v-app-bar
      fixed
      app
      color="green"
    >
    <blockquote align-center center class="textCenter"> <b>Keyword Search </b> </blockquote>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  
}
</script>

<style>
.textCenter{
  display: block;
  margin: 0 auto
}
</style>
