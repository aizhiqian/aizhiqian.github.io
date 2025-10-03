var posts=["posts/75895afb/","posts/ecf98aaa/","posts/be246de6/","posts/b2c9bae0/","posts/54667693/","posts/2e57d1d6/","posts/49b73b87/","posts/9a08f1e0/","posts/35396a82/","posts/e4fbd1cb/","posts/ca2ce3bc/","posts/null/","posts/7e0916a3/","posts/5606d387/","posts/f642b107/","posts/97199c1b/","posts/38280779/","posts/46db2752/","posts/bc98c85d/","posts/ba339f20/","posts/e1d32862/","posts/da84be3e/","posts/5cabcd01/","posts/3bfe3c1d/","posts/c13c4f52/","posts/20eb6109/","posts/40b835fa/","posts/9d78f097/","posts/3238f337/","posts/cb3d58ea/","posts/82ca8098/","posts/d36cb6f7/","posts/f51fdc33/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"Butterfly","link":"https://butterfly.js.org/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"主题框架","siteshot":"https://jihulab.com/ainiz/img1/-/raw/main/2023/07/25/202307252024425.png"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://p0.meituan.net/csc/0d7ae911e1ffbd5a54b90d14e391a43a6108.jpg","descr":"生活明朗，万物可爱","siteshot":"https://p0.meituan.net/csc/b06eaa3d558f67ec52903d39c321a88f165808.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://p0.meituan.net/csc/0d7ae911e1ffbd5a54b90d14e391a43a6108.jpg","descr":"生活明朗，万物可爱","siteshot":"https://p0.meituan.net/csc/b06eaa3d558f67ec52903d39c321a88f165808.jpg","color":"vip","tag":"技术"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://p0.meituan.net/csc/894ce924bb90223e2da7fa6bf9d50e9d4068.jpg","descr":"分享设计与科技生活","siteshot":"https://p0.meituan.net/csc/398b86af7e7bbbaed5aa367522292ead255322.jpg","color":"vip","tag":"生活"},{"name":"杜老师说","link":"https://dusays.com/","avatar":"https://p1.meituan.net/csc/460a250fa806109925f98528c1ca5b8c3694.png","descr":"师者，传道，授业，解惑！","siteshot":"https://jihulab.com/aini/img/-/raw/main/2024/05/15/202405151809760.webp","color":"vip","tag":"技术"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://p0.meituan.net/csc/6081b77eda1424434118e383d1072c2a2907.jpg","descr":"分享网络安全与科技生活","siteshot":"https://p0.meituan.net/csc/8a54f859cb4619165c383960ab24eb8d146580.jpg","color":"vip"},{"name":"我不是咕咕鸽","link":"https://blog.laoda.de/","avatar":"https://jihulab.com/ainiz/img1/-/raw/main/2023/11/26/202311261356021.webp","descr":"服务器折腾不完全指南","siteshot":"https://jihulab.com/ainiz/img1/-/raw/main/2023/11/26/202311261405088.webp","color":"vip","tag":"Docker"},{"name":"夜梦星尘の折腾日记","link":"https://tech.yemengstar.com/","avatar":"https://jihulab.com/ainiz/img1/-/raw/main/2023/11/26/202311261405246.webp","descr":"实用工具的部署","siteshot":"https://jihulab.com/ainiz/img1/-/raw/main/2023/12/7/202312070000162.png","color":"speed","tag":"Docker"},{"name":"俊阳IT知识库","link":"https://blog.fanjunyang.zone/","avatar":"https://jihulab.com/ainiz/img1/-/raw/main/2023/12/7/202312070009970.webp","descr":"一个专注于前端领域的全栈博主","siteshot":"https://jihulab.com/ainiz/img1/-/raw/main/2023/12/7/202312070011095.webp","color":"speed","tag":"荐"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://p0.meituan.net/csc/33a8c883e626ce39918a2963b6d4008125068.jpg","descr":"进一寸有进一寸的欢喜","recommend":true},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://p0.meituan.net/csc/9429fe0aa09f82dfca776a46a408c8d722188.jpg","descr":"期待您的光临！","recommend":true},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://p0.meituan.net/csc/9e92e065ba9895206a8e27cd7154b9045744.png","descr":"Welcome to Fomalhaut🥝のTiny Home","recommend":true},{"name":"国光","link":"https://www.sqlsec.com/","avatar":"https://image.3001.net/images/20200922/16007336487809.jpg","descr":"逆水行舟，不进则退"},{"name":"蚊子🦟的小破站","link":"https://www.pupper.cn/","avatar":"https://img.pupper.cn/img/202307151348675.png","descr":"记录学习、生活中的点点滴滴~"},{"name":"小孙同学","link":"https://blog.sunguoqi.com/","avatar":"https://p1.meituan.net/csc/67754dff7abe74ee72778214e3e775f391612.png","descr":"路虽远行则将至，事虽难做则必成！"}];
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