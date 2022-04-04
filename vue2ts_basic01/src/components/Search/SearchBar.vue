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
import { mapState, mapActions } from "vuex";
import Vue from "vue";
// import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
const GitSearchStore = "GitSearchStore";

export default Vue.extend({
  data() {
    return {
      userName: "",
    };
  },
  computed: {
    ...mapState(GitSearchStore, ["userList", "userInfo"]),
  },
  methods: {
    ...mapActions(GitSearchStore, ["getUserListAct"]),
    searchUser() {
      console.log(this.userName);
      this.getUserListAct(this.userName);
    },
  },
});
</script>
<style lang=""></style>
