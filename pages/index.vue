<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
     <v-text-field 
     v-model="searchText"
     label="search"
     >
     </v-text-field>
     <v-btn align-center center class="textCenter"
     color="green"
     @click="search">
     Search</v-btn>
      <v-data-table
      background-color="red"
           depressed
          :headers="headers"
          :items="serachedItems"
          item-key="name"
          class="mt-3 elevation-2 lightGreen"
        >
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
        searchText: "",
         headers: [
        { text: "Keywords", value: "name" , align: 'left',  class: 'black--text title'},
        { text: 'Audience_size', value: 'audience_size' ,  class: 'black--text title'},
        { text: 'Topic', value: 'topic' , class: 'black--text title'},
       
      ],
    }
  },
  computed: {
     ...mapState({
      serachedItems: (state) => {
        return state.apiData
      },
    }),
  },
  methods: {
    search() {
      this.$store.dispatch('getSearchData',this.searchText)
    }
  }
  
}
</script>

<style>
.textCenter{
  display: block;
  margin: 0 auto
}
</style>