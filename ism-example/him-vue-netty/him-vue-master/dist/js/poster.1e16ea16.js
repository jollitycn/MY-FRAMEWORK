(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["poster"],{3481:function(t,n,e){"use strict";var a=e("daf2"),r=e.n(a);r.a},"435b":function(t,n,e){t.exports=e.p+"img/poster-bg.55617934.png"},daf2:function(t,n,e){},eaf1:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"view-box"},[e("canvas",{ref:"posterCanvas",staticClass:"poster-canvas",attrs:{width:"",height:""}}),null!==t.posterImgUrl?e("img",{staticClass:"poster-img",attrs:{src:t.posterImgUrl,alt:""}}):t._e()])},r=[],s=(e("ac6a"),e("cadf"),e("551c"),e("097d"),{name:"poster",data:function(){return{ctx:null,posterImgUrl:null}},components:{},methods:{canIUseCanvas:function(t){return!!t.getContext("2d")},drawBackground:function(){var t=this;return new Promise(function(n){console.log(t.ctx);var a=new Image;a.src=e("435b"),a.onload=function(){t.ctx.drawImage(a,0,0,t.ctx.canvas.width,t.ctx.canvas.height),n()}})},drawText:function(){var t=this;return new Promise(function(n){t.ctx.fillStyle="green",t.ctx.fillRect(0,0,800,300),t.ctx.fillStyle="#fff",t.ctx.strokeStyle="#fff",t.ctx.font="bold 40px '字体','字体','微软雅黑','宋体'",t.ctx.textBaseline="hanging",t.ctx.fillText("长按二维码",10,40),n()})},drawAvatar:function(){return new Promise(function(t){t()})},drawQrCode:function(){return new Promise(function(t){t()})},drawAll:function(){return Promise.all([this.drawBackground(),this.drawText(),this.drawAvatar(),this.drawQrCode()])}},mounted:function(){var t=this,n=this.$refs.posterCanvas;this.canIUseCanvas(n)&&(this.ctx=n.getContext("2d"),this.drawAll().then(function(){t.posterImgUrl=t.ctx.canvas.toDataURL("image/png")}))},created:function(){}}),o=s,c=(e("3481"),e("2877")),i=Object(c["a"])(o,a,r,!1,null,null,null);i.options.__file="poster.vue";n["default"]=i.exports}}]);
//# sourceMappingURL=poster.1e16ea16.js.map