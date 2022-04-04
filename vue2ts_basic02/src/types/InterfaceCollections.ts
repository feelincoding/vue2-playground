interface UserList {
  login: string;
  avatar_url: string;
  // "login": "Leejeong",
  //   "id": 17895086,
  //   "node_id": "MDQ6VXNlcjE3ODk1MDg2",
  //   "avatar_url": "https://avatars.githubusercontent.com/u/17895086?v=4",
  //   "gravatar_id": "",
  //   "url": "https://api.github.com/users/Leejeong",
  //   "html_url": "https://github.com/Leejeong",
  //   "followers_url": "https://api.github.com/users/Leejeong/followers",
  //   "following_url": "https://api.github.com/users/Leejeong/following{/other_user}",
  //   "gists_url": "https://api.github.com/users/Leejeong/gists{/gist_id}",
  //   "starred_url": "https://api.github.com/users/Leejeong/starred{/owner}{/repo}",
  //   "subscriptions_url": "https://api.github.com/users/Leejeong/subscriptions",
  //   "organizations_url": "https://api.github.com/users/Leejeong/orgs",
  //   "repos_url": "https://api.github.com/users/Leejeong/repos",
  //   "events_url": "https://api.github.com/users/Leejeong/events{/privacy}",
  //   "received_events_url": "https://api.github.com/users/Leejeong/received_events",
  //   "type": "User",
  //   "site_admin": false,
  //   "score": 1.0
}

interface UserInfo {
  login: string;
  avatar_url: string;
  html_url: string;
  blog: string;
  public_repos: number;
  bio: string;
  //   "login": "leejeongpil",
  //   "id": 32156820,
  //   "node_id": "MDQ6VXNlcjMyMTU2ODIw",
  //   "avatar_url": "https://avatars.githubusercontent.com/u/32156820?v=4",
  //   "gravatar_id": "",
  //   "url": "https://api.github.com/users/leejeongpil",
  //   "html_url": "https://github.com/leejeongpil",
  //   "followers_url": "https://api.github.com/users/leejeongpil/followers",
  //   "following_url": "https://api.github.com/users/leejeongpil/following{/other_user}",
  //   "gists_url": "https://api.github.com/users/leejeongpil/gists{/gist_id}",
  //   "starred_url": "https://api.github.com/users/leejeongpil/starred{/owner}{/repo}",
  //   "subscriptions_url": "https://api.github.com/users/leejeongpil/subscriptions",
  //   "organizations_url": "https://api.github.com/users/leejeongpil/orgs",
  //   "repos_url": "https://api.github.com/users/leejeongpil/repos",
  //   "events_url": "https://api.github.com/users/leejeongpil/events{/privacy}",
  //   "received_events_url": "https://api.github.com/users/leejeongpil/received_events",
  //   "type": "User",
  //   "site_admin": false,
  //   "name": "Lee_Jeong_Pil",
  //   "company": null,
  //   "blog": "https://ablaze-capybara-bcc.notion.site/Lee-JeongPil-67bd73b192f0405fac46949d6100483f",
  //   "location": null,
  //   "email": null,
  //   "hireable": null,
  //   "bio": "Notion address",
  //   "twitter_username": null,
  //   "public_repos": 18,
  //   "public_gists": 0,
  //   "followers": 0,
  //   "following": 0,
  //   "created_at": "2017-09-21T06:47:47Z",
  //   "updated_at": "2021-08-03T18:07:16Z"
}

export { UserList, UserInfo };
