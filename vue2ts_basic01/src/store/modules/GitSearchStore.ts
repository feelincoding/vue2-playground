import { getUserInfo, getUserList } from "../../api/AxiosService";
import { UserList, UserInfo } from "../../types/InterfaceCollections";
import {
  Module,
  GetterTree,
  MutationTree,
  ActionTree,
  ActionContext,
} from "vuex";

export class State {
  public userList: UserList[] = [];

  public userInfo: UserInfo = {
    //무조건 초기화 필요해?
    login: "login",
    avatar_url: "avatar_url",
    html_url: "html_url",
    blog: "blog",
    public_repos: 0,
    bio: "bio",
  };
  public count = 0;
}

// state를 출력하면서, 표시를 다르게 하기위해 설정(state를 동시에 컴포넌트 이용시)
const getters: GetterTree<State, any> = {
  doubleCount(state: State): number {
    return state.count;
  },
};

// state를 바로 변경할 수 없게함. 꼭 mutate를 통해 변경 가능
const mutations: MutationTree<State> = {
  increment(state: State, step: number) {
    state.count = state.count + step;
  },
  userList(state: State, data: UserList[]) {
    state.userList = data;
  },
  userInfo(state: State, data: UserInfo) {
    state.userInfo = data;
  },
};

// action은 지연된 상태 변경이 가능하다(비동기적 처리)
const actions: ActionTree<State, any> = {
  inc(state: ActionContext<State, any>, step: number) {
    state.commit(`increment`, step);
  },
  async getUserListAct(state: ActionContext<State, any>, keyword: string) {
    const data = await getUserList(keyword);
    state.commit(`userList`, data);
  },
  async getUserInfoAct(state: ActionContext<State, any>, keyword: string) {
    console.log("store/modules/git~/actions/getUserInfo/keyword: " + keyword);
    const data = await getUserInfo(keyword);
    console.log(data);
    state.commit(`userInfo`, data);
  },
};

// module간 state, getters, mutations, actions 따로 관리 가능하다.
const GitSearchStore: Module<State, any> = {
  namespaced: true, // <- false일 경우, getters, mutations, actions의 이름을 공용으로 사용
  state: new State(),
  getters,
  mutations,
  actions,
};

export default GitSearchStore;
