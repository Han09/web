(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],l=0,f=[];l<o.length;l++)s=o[l],i[s]&&f.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},s={app:0},i={app:0},a=[];function o(t){return c.p+"assets/js/"+({about:"about"}[t]||t)+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var r="assets/css/"+({about:"about"}[t]||t)+".css",i=c.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var u=a[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.request=r,delete s[t],d.parentNode.removeChild(d),n(a)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){s[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t),u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+s+")");a.type=r,a.request=s,n[1](a)}i[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02fb":function(t,e,n){t.exports=n.p+"assets/img/1.png"},"034f":function(t,e,n){"use strict";var r=n("64a9"),s=n.n(r);s.a},"0728":function(t,e,n){},1:function(t,e){},"1db7":function(t,e,n){"use strict";var r=n("3430"),s=n.n(r);s.a},"326c":function(t,e,n){t.exports=n.p+"assets/img/3.png"},3430:function(t,e,n){},"46d5":function(t,e,n){},"46d7":function(t,e,n){t.exports=n.p+"assets/img/9.png"},"48a6":function(t,e,n){t.exports=n.p+"assets/img/2.png"},"4c66":function(t,e,n){"use strict";var r=n("aa4f"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("top-bar")],1),n("router-view"),n("bottom-bar")],1)},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"topBar"},[r("img",{attrs:{id:"sonyLogo",src:n("8a20")}}),r("button",{attrs:{id:"sidebarSwitch"},on:{click:function(e){t.topMenu.show=!t.topMenu.show}}},[r("div",{attrs:{id:"line"}})]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.topMenu.show,expression:"topMenu.show"}],attrs:{id:"topMenu"}},[r("ul",[r("li",{on:{click:function(e){t.topMenu.show=!t.topMenu.show}}},[r("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),r("li",{on:{click:function(e){t.topMenu.show=!t.topMenu.show}}},[r("a",{attrs:{href:"https://service.sony.com.cn/index.html"}},[t._v("服务与支持")])]),r("li",{on:{click:function(e){t.topMenu.show=!t.topMenu.show}}},[r("a",{attrs:{href:"https://www.sonystyle.com.cn/products/xperia/10plus/10plus_blue.html"}},[t._v("新品速览")])]),r("li",{on:{click:function(e){t.topMenu.show=!t.topMenu.show}}},[r("router-link",{attrs:{to:"/Personnel"}},[t._v("人才招聘")])],1),r("li",{on:{click:function(e){t.topMenu.show=!t.topMenu.show}}},[r("router-link",{attrs:{to:"/about"}},[t._v("关于索尼")])],1)])])])},o=[],c={name:"TopBar",data:function(){return{topMenu:{show:!1}}}},u=c,l=(n("d3e8"),n("2877")),f=Object(l["a"])(u,a,o,!1,null,"40926548",null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footerLis"},[t._l(t.Me,function(e,r){return n("div",{key:r,staticClass:"footerLi"},[n("h3",[t._v(t._s(e.title))]),n("ul",t._l(e.content,function(e,r){return n("li",{key:r},[t._v(t._s(e))])}),0)])}),t._m(0)],2),n("hr"),t._m(1),t._m(2)])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footerLi"},[n("h3",[t._v("关注我们")]),n("ul",[n("li",{staticClass:"follow"},[t._v("索尼(中国)官方微博")]),n("li",{staticClass:"follow"},[t._v("索尼(中国)官方微信")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"info"},[r("img",{attrs:{id:"logo",src:n("8a20"),alt:"SONY"}}),r("table",{attrs:{id:"copyright"}},[r("th",[t._v("2009 - 2019 索尼(中国)有限公司版权所有")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"outLink"}},[n("a",{attrs:{id:"xinlang"}}),n("a",{attrs:{id:"tengxun"}}),n("a",{attrs:{id:"souhu"}}),n("a",{attrs:{id:"renren"}}),n("a",{attrs:{id:"QQ"}})])}],h={name:"BottomBar",data:function(){return{Me:[{title:"商品购买",content:["索尼签约经销商","Sony Store 直营店","Sony Store 在线商城","Sony Store 手机客户端","在线订购指南","咨询.订购.服务热线"]},{title:"会员天地",content:["产品注册","索尼会员注册","会员权益详细","帮助中心","索尼影像课堂"]},{title:"相关链接",content:["索尼中国研究院","行业解决方案"]},{title:"您周围的经销商",content:["就近门店查询"]},{title:"保持联络",content:["获取最新商品/活动邮件"]}]}}},m=h,g=(n("5ced"),Object(l["a"])(m,p,v,!1,null,"517d23d0",null)),_=g.exports,b={components:{BottomBar:_,TopBar:d}},x=b,y=(n("034f"),Object(l["a"])(x,s,i,!1,null,null,null)),w=y.exports,C=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("banner"),n("SlideMenu"),n("new-infos")],1)},I=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"banner"}},[n("div",{attrs:{id:"windows"},on:{mouseleave:t.automatic,mouseover:t.getInto}},[n("ul",{staticClass:"ImgS",style:t.ImgStyle},[n("li",{staticClass:"bannerImg",style:{background:"url("+t.imgUrl[t.imgUrl.length-1].SRC+") white no-repeat 0px 0px/cover"}}),t._l(t.imgUrl,function(t,e){return n("li",{key:e,staticClass:"bannerImg",style:{background:"url("+t.SRC+") white no-repeat 0px 0px/cover"}})}),n("li",{staticClass:"bannerImg",style:{background:"url("+t.imgUrl[0].SRC+") white no-repeat 0px 0px/cover"}})],2),n("button",{ref:"turnLeft",attrs:{id:"turnLeft"},on:{click:function(e){return t.move(100,1)}}},[t._v("《")]),n("button",{ref:"turnRight",attrs:{id:"turnRight"},on:{click:function(e){return t.move(100,-1)}}},[t._v(" 》")]),n("ul",{staticClass:"dots"},t._l(t.imgUrl,function(e,r){return n("li",{key:r,class:{dotted:r===t.currentIndex-1},on:{click:function(e){return t.jump(r+1)}}})}),0)])])},R=[],E={name:"Banner",data:function(){return{imgUrl:[{SRC:n("6563")},{SRC:n("abb7")},{SRC:n("9875")}],currentIndex:1,distance:-100}},computed:{ImgStyle:function(){return{transform:"translateX( ".concat(this.distance,"vw )")}}},methods:{animate:function(t){var e=this,n=setInterval(function(){e.distance>-100&&(e.distance=-400),e.distance<-400&&(e.distance=-100),e.distance+=1*t,e.distance%100===0&&clearInterval(n)},1)},move:function(t,e){1===e?this.currentIndex--:this.currentIndex++,this.currentIndex>3&&(this.currentIndex=1),this.currentIndex<1&&(this.currentIndex=3),this.animate(e)},automatic:function(){var t=this;this.temp=setInterval(function(){t.move(100,-1)},5e3)},getInto:function(){clearInterval(this.temp)},jump:function(t){var e=t-this.currentIndex;if(e<0)for(var n=0;e<n;e++)this.$refs.turnLeft.click();if(e>0)for(var r=0;r<e;r++)this.$refs.turnRight.click()}},mounted:function(){this.automatic()}},M=E,j=(n("1db7"),Object(l["a"])(M,k,R,!1,null,"4ca6a8b5",null)),$=j.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{attrs:{id:"BarTitle"}},[t._v("索尼产品")]),n("div",{attrs:{id:"SlideBar"}},[n("ul",t._l(t.list,function(t,e){return n("li",{key:e},[n("a",[n("img",{staticClass:"menuImg",attrs:{src:t.SRC}})])])}),0)])])},L=[],P={name:"SlideMenu",data:function(){return{list:[{SRC:n("02fb")},{SRC:n("742b")},{SRC:n("c980")},{SRC:n("c85f")},{SRC:n("f762")},{SRC:n("46d7")},{SRC:n("e682")},{SRC:n("68c0")},{SRC:n("fb9a")},{SRC:n("63e6")},{SRC:n("8f33")},{SRC:n("326c")},{SRC:n("48a6")},{SRC:n("7346")}]}}},B=P,T=(n("8589"),Object(l["a"])(B,O,L,!1,null,"7c231f2e",null)),N=T.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{background:"white",padding:"5px 0"}},[n("h3",{staticClass:"title"},[t._v("便携音频")]),n("div",{attrs:{id:"con"}},[n("div",{attrs:{id:"img1"}}),n("div",{attrs:{id:"con2"}},[n("div",{attrs:{id:"img2"}},[n("hgroup",[n("span",{staticClass:"text1"},[t._v("SRS-X99")]),n("h2",{staticClass:"text2",staticStyle:{"font-weight":"400"}},[t._v("高解析度无线扬声器")])])]),n("div",{attrs:{id:"con3"}},[n("div",{attrs:{id:"img3"}},[n("hgroup",{staticStyle:{color:"white"}},[n("span",{staticClass:"text1"},[t._v("WI - 1000X")]),n("h2",{staticClass:"text2"},[t._v("降噪静界 智能聆听")])])]),n("div",{attrs:{id:"con4"}},[n("div",{attrs:{id:"img4"}}),n("div",{attrs:{id:"img5"}},[n("hgroup",{staticStyle:{margin:"0",padding:"20px"}},[n("span",{staticClass:"text1"},[t._v("ICD-UX560F")]),n("h2",{staticClass:"text2",staticStyle:{"font-weight":"400"}},[t._v("高质量数码"),n("br"),t._v("录音笔")])])])])])])]),n("h3",{staticClass:"title"},[t._v("数码影像")]),n("div",{attrs:{id:"cons"}},[n("div",{attrs:{id:"imgs1"}},[n("hgroup",{staticStyle:{color:"white"}},[n("span",{staticClass:"text1"},[t._v("ILCE-7M3+SEL55F18Z")]),n("h2",{staticClass:"text2",staticStyle:{"font-weight":"400"}},[t._v("大光圈人像定焦蔡司镜头套装"),n("br"),t._v("F1.8大光圈 柔美焦外")])])]),n("div",{attrs:{id:"cons2"}},[n("div",{attrs:{id:"imgs2"}},[n("hgroup",{staticStyle:{color:"white"}},[n("span",{staticClass:"text1"},[t._v("SEL135F18GM")]),n("h2",{staticClass:"text2",staticStyle:{"font-weight":"400"}},[t._v("大光圈"),n("br"),t._v("远摄定焦"),n("br"),t._v("G大师镜头")])])]),n("div",{attrs:{id:"imgs3"}},[n("hgroup",[n("span",{staticClass:"text1"},[t._v("新一代黑卡© RX100 VI")]),n("h2",{staticClass:"text2",staticStyle:{"font-weight":"400"}},[t._v("小机身 大变焦"),n("br"),t._v("DSC-RX100M6"),n("br"),t._v("握柄套装")])])]),n("div",{attrs:{id:"cons3"}},[n("div",{attrs:{id:"imgs5"}},[n("hgroup",[n("span",{staticClass:"text1"},[t._v("ILCE-6400+SELP1650")]),n("h2",{staticClass:"text2",staticStyle:{"font-weight":"400"}},[t._v("α6400L标准单镜套餐"),n("br"),t._v("轻巧便携")])])]),n("div",{attrs:{id:"imgs4"}},[n("hgroup",{staticStyle:{color:"white"}},[n("span",{staticClass:"text1"},[t._v("ILCE-7RM3")]),n("h2",{staticClass:"text2",staticStyle:{"font-weight":"400"}},[t._v("极速对焦"),n("br"),t._v("专业画质")])])])])])]),n("hr")])}],A={name:"NewInfos"},F=A,G=(n("9600"),Object(l["a"])(F,U,X,!1,null,"8536e868",null)),q=G.exports,D={name:"home",data:function(){return{}},components:{NewInfos:q,SlideMenu:N,Banner:$},created:function(){}},J=D,Q=Object(l["a"])(J,S,I,!1,null,null,null),V=Q.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view"},[n("h1",[t._v("索尼夏令营")]),n("table",[t._m(0),t._l(t.text,function(e){return n("tr",[n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.address.city))]),n("td",[t._v(t._s(e.email))])])})],2),n("h1",[t._v("人才招聘")]),n("table",[t._m(1),t._l(t.text,function(e){return n("tr",[n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.address.city))]),n("td",[t._v(t._s(e.email))])])})],2),n("h1",[t._v("校园职位")]),n("table",[t._m(2),t._l(t.text,function(e){return n("tr",[n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.address.city))]),n("td",[t._v(t._s(e.email))])])})],2)])},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("申请人")]),n("th",[t._v("地点")]),n("th",[t._v("投递邮箱")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("职位")]),n("th",[t._v("工作地点")]),n("th",[t._v("投递邮箱")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("职位")]),n("th",[t._v("工作地点")]),n("th",[t._v("投递邮箱")])])}],Y={name:"Personnel",methods:{},data:function(){return{text:{}}},created:function(){var t=this;this.$http.get("http://jsonplaceholder.typicode.com/users").then(function(e){t.text=e.body,console.log(t.text)})}},z=Y,H=(n("4c66"),Object(l["a"])(z,Z,W,!1,null,"4414490e",null)),K=H.exports;r["a"].use(C["a"]);var tt=new C["a"]({routes:[{path:"/",name:"home",component:V},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/Personnel",name:"Personnel",component:K}]}),et=n("5a4b");r["a"].config.productionTip=!1,r["a"].use(et["a"]),new r["a"]({router:tt,render:function(t){return t(w)}}).$mount("#app")},"5ced":function(t,e,n){"use strict";var r=n("9f62"),s=n.n(r);s.a},"63e6":function(t,e,n){t.exports=n.p+"assets/img/5.png"},"64a9":function(t,e,n){},6563:function(t,e,n){t.exports=n.p+"assets/img/bigG.jpg"},"68c0":function(t,e,n){t.exports=n.p+"assets/img/7.png"},7346:function(t,e,n){t.exports=n.p+"assets/img/11.png"},"742b":function(t,e,n){t.exports=n.p+"assets/img/13.png"},8589:function(t,e,n){"use strict";var r=n("46d5"),s=n.n(r);s.a},"8a20":function(t,e,n){t.exports=n.p+"assets/img/sony.svg"},"8f33":function(t,e,n){t.exports=n.p+"assets/img/4.png"},9600:function(t,e,n){"use strict";var r=n("b95f"),s=n.n(r);s.a},9875:function(t,e,n){t.exports=n.p+"assets/img/sonyVIP.jpg"},"9f62":function(t,e,n){},aa4f:function(t,e,n){},abb7:function(t,e,n){t.exports=n.p+"assets/img/IERZ1R.jpg"},b95f:function(t,e,n){},c85f:function(t,e,n){t.exports=n.p+"assets/img/12.png"},c980:function(t,e,n){t.exports=n.p+"assets/img/14.png"},d3e8:function(t,e,n){"use strict";var r=n("0728"),s=n.n(r);s.a},e682:function(t,e,n){t.exports=n.p+"assets/img/8.png"},f762:function(t,e,n){t.exports=n.p+"assets/img/10.png"},fb9a:function(t,e,n){t.exports=n.p+"assets/img/6.png"}});