import { getUserInfo, getUserList } from "../../api/AxiosService";
import { UserList, UserInfo } from "../../types/InterfaceCollections";
import {
  Module,
  VuexModule,
  Mutation,
  Action,
  MutationAction,
} from "vuex-module-decorators";

@Module({ namespaced: true, name: "GitSearchStore" })
export default class GitSearchStore extends VuexModule {
  userList: UserList[] = [];
  userInfo: UserInfo = {
    //무조건 초기화 필요해?
    login: "login",
    avatar_url: "avatar_url",
    html_url: "html_url",
    blog: "blog",
    public_repos: 0,
    bio: "bio",
  };

  @Mutation
  userListMut(data: UserList[]) {
    this.userList = data;
  }

  @Action({ commit: "userListMut" })
  async getUserListAct(keyword: string) {
    const data = await getUserList(keyword);
    return data;
  }

  @MutationAction({ mutate: ["userInfo"] })
  async getUserInfoMuAct(keyword: string) {
    const currData = await getUserInfo(keyword);
    return { userInfo: currData };
  }
}
