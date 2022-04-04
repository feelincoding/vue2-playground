<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-img
          style="width: 250px"
          center
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="Center image"
        ></b-img>
      </b-row>
      <b-row>
        <b-col>
          <b-card>
            <b-form-input
              v-model="userName"
              @keyup.enter="searchUser"
              placeholder="Search User"
            ></b-form-input>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

// import { Module, VuexModule } from "vuex-module-decorators";
// import { mapState, mapActions } from "vuex";
import GitSearchStore from "../../store/modules/GitSearchStore";
import { getModule } from "vuex-module-decorators";

@Component
export default class SearchBar extends Vue {
  userName = "";

  myInstance = getModule(GitSearchStore, this.$store);
  searchUser() {
    this.myInstance.getUserListAct(this.userName);
  }
}
</script>
<style lang=""></style>
