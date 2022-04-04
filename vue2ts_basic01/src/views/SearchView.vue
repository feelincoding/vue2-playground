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
import SearchBar from "../components/Search/SearchBar.vue";
import SearchList from "../components/Search/SearchList.vue";
export default {
  components: {
    SearchBar,
    SearchList,
  },
};
</script>
<style>
.main-container {
  justify-content: center;
}
</style>
