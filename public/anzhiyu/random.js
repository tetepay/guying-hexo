var posts=["2023/06/01/anzhiyu主题标签/","2023/11/15/hello-world/","2023/06/10/api/","2023/06/07/颜色滑动选择弹窗/","2023/06/14/api/美女研究所/","2023/06/14/api/小爱聊天接口/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };