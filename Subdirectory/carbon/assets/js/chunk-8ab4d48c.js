(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ab4d48c"],{"169d":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("van-nav-bar",{attrs:{title:"新闻详情","left-text":"返回","left-arrow":"","right-text":"收藏",fixed:""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),e("div",{staticStyle:{height:"3rem"}}),e("div",{ref:"cc",staticClass:"infos",domProps:{innerHTML:t._s(this.$store.state.NewsInfo)}}),e("div",{staticStyle:{height:"3rem"}})],1)},i=[],s={name:"NewsInfo",data:function(){return{}},methods:{onClickLeft:function(){this.$router.go(-1),this.$store.dispatch("UpDataNewsInfo","新闻找不到啦")},onClickRight:function(){this.$toast("收藏成功")},GoTop:function(){this.$refs.cc.scrollTop=0,console.log("回到顶部")}},mounted:function(){console.log("需要滚动到顶部"),this.GoTop()}},c=s,a=(e("8e47"),e("2877")),r=Object(a["a"])(c,o,i,!1,null,null,null);n["default"]=r.exports},"31a4":function(t,n,e){},"8e47":function(t,n,e){"use strict";var o=e("31a4"),i=e.n(o);i.a}}]);