import { api } from "../api/AxiosService";
import { UserInfo, UserList } from "@/types/InterfaceCollections";

const axiosApi = api;

const getUserListRepo = (keyword: string) => {
  console.log(keyword);
  return (
    api
      .get("/search/users", { params: { q: keyword } })
      // .get("/search/users", { params: { q: "leejeong" } })
      .then((response: { data: any }) => {
        console.log(response.data);
        const dataList: UserList[] = response.data.items;
        // return response.data;
        return dataList;
      })
  );
};
const getUserInfoRepo = (keyword: string) => {
  console.log("execute getUserInfo func");
  return (
    api
      .get("/users/" + keyword)
      // .get("/search/users", { params: { q: "leejeong" } })
      .then((response: { data: any }) => {
        console.log(response.data);
        // const dataList: UserList[] = response.data.items;
        // return response.data;
        // return dataList;
        const userInfo: UserInfo = response.data;
        return userInfo;
      })
  );
};
