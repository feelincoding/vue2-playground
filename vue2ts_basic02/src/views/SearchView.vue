<template>
  <div class="main-container">
    <h1>SearchView</h1>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <h2>Search Bar</h2>
          <search-bar></search-bar>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h2>Search List</h2>
          <search-list></search-list>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Vue from "vue";
import Component from "vue-class-component";

import SearchBar from "../components/Search/SearchBar.vue";
import SearchList from "../components/Search/SearchList.vue";
@Component({
  components: {
    SearchBar,
    SearchList,
  },
})
export default class SearchView extends Vue {}
</script>
<style>
.main-container {
  justify-content: center;
}
</style>
