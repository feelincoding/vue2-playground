<template>
  <div>
    <b-conatainer class="bv-example-row">
      <b-row>
        <b-col>
          <h4>Users</h4>
          <div v-if="userSearchResultCheck">
            <ul style="list-style: none">
              <li v-for="(user, index) in userSearchResult" :key="index">
                <b-list-group-item>
                  <b-avatar
                    button
                    @click="userClick(user.login)"
                    :src="`${user.avatar_url}`"
                  ></b-avatar>
                  {{ user.login }}
                </b-list-group-item>
              </li>
            </ul>
            <div class="overflow-auto">
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
              ></b-pagination>

              <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->
            </div>
          </div>
        </b-col>
        <b-col>
          <h4>User Info</h4>
          <div v-if="userInfoCheck">
            <b-card
              :title="`${userInfo.login}`"
              :img-src="`${userInfo.avatar_url}`"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                {{ userInfo.name }}
                <br />
                {{ userInfo.bio }}
                <br />
                Count Repo: {{ userInfo.public_repos }}
                <br />
                <a :href="`${userInfo.html_url}`">Go Github</a>
                <br />
                <a :href="`${userInfo.blog}`">Go Blog</a>
              </b-card-text>

              <b-button @click="addFavorituser(userInfo)" variant="primary"
                >Add Favorite</b-button
              >
            </b-card>
          </div>
        </b-col>
        <b-col>
          <h4>My Favorite</h4>
          <ul style="list-style: none">
            <li v-for="(user, index) in favoriteUsers" :key="index">
              <!-- {{ index }} , {{ fu.login }}, {{ fu.name }} -->
              <b-list-group-item>
                <b-avatar button :src="`${user.avatar_url}`"> </b-avatar>
                <a :href="`${user.html_url}`"> {{ user.login }} </a>
                <b-button @click="removeFavoritUser(user)" variant="danger">
                  Delete
                </b-button>
              </b-list-group-item>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-conatainer>
  </div>
</template>
<script lang="ts">
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import Vue from "vue";
import { UserList } from "../../types/InterfaceCollections";
const GitSearchStore = "GitSearchStore";

// declare module "vue/types/vue" {
//   interface Vue {
//     test: number;
//     // testfunc: () => void;
//   }
// }
export default Vue.extend({
  data() {
    return {
      perPage: 8,
      currentPage: 1,
      userSearchResult: [],
      userSearchResultCheck: false,
      userInfoCheck: false,
    };
  },
  computed: {
    ...mapState(GitSearchStore, ["userList", "userInfo"]),
    rows() {
      return this.userList.length;
    },
  },
  methods: {
    ...mapActions(GitSearchStore, ["getUserListAct", "getUserInfoAct"]),
    linkGen(pageNum: any) {
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
    },
    userClick(user: any) {
      (this as any).getUserInfoAct(user);
      (this as any).userInfoCheck = true;
    },
  },
  watch: {
    currentPage(newValue, oldValue) {
      (this as any).userSearchResult = this.userList.slice(
        (newValue - 1) * (this as any).perPage,
        (newValue - 1) * (this as any).perPage +
          (this as any).perPage +
          0 * oldValue
      );
    },
    userList() {
      (this as any).userSearchResult = this.userList.slice(0, 8);
      (this as any).userSearchResultCheck = true;
    },
  },
});
</script>
<style lang=""></style>
