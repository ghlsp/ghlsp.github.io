var posts=["p/20221022.html","p/20240302.html","p/20221006.html","p/20221123.html","p/20221007.html","p/20221006.html","p/20221017.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hc`Blog","link":"https://blog.ivil.top/","avatar":"https://cdn.jsdelivr.net/gh/ghlsp/picx-images-hosting@master/blog/1710157255328.es9mdto4v.png","descr":"记录生活","siteshot":"https://jsd.cdn.zzko.cn/gh/ghlsp/picx-images-hosting@master/blog/07.13liuts6c4.2yy3z0v95k.webp","color":"vip","tag":"生活"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/6503bb1b7fa1a.webp!avatar","descr":"分享网络安全与科技生活","siteshot":"https://avatar.qjqq.cn/1/647571edf20a9.webp!avatar","color":"vip","tag":"技术"},{"name":"JayHrn","link":"https://blog.lvhrn.cn","avatar":"https://npm.onmicrosoft.cn/hrn-img@1.0.0/img/avatar.jpg","descr":"念念不忘，必有回响","siteshot":"https://npm.onmicrosoft.cn/hrn-img@1.0.0/img/siteshot.jpg","color":"vip","tag":"技术"},{"name":"Mxne","link":"https://blog.mxne.cn/","avatar":"https://bu.dusays.com/2023/02/05/63df7de56a470.webp","descr":"学如逆水行舟，不进则退。","recommend":true},{"name":"七鳄の学习格","link":"https://blog.gmcj0816.top/","avatar":"https://blog.gmcj0816.top/img/SeriousWission_TouXiangPic.png","descr":"如果世界多了精彩，每一位都是创造者，大家都是你的观众"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };