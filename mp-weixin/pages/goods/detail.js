(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/detail"],{"098f":function(t,e,n){"use strict";n.r(e);var o=n("27c9"),r=n("ed44");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("2782");var i,u=n("f0c5"),c=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=c.exports},2172:function(t,e,n){"use strict";(function(t){n("48e8");o(n("66fd"));var e=o(n("098f"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},2782:function(t,e,n){"use strict";var o=n("6d70"),r=n.n(o);r.a},"27c9":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"aa08"))}},r=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"35c7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,o,r,a,i){try{var u=t[a](i),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(o,r)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function u(t){a(i,o,r,u,c,"next",t)}function c(t){a(i,o,r,u,c,"throw",t)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},collectionFlag:0}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var e=this;return i(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id;case 1:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return i(o.default.mark((function e(){var r,a,i;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),r=t.getStorageSync("nowTable"),e.next=4,n.$api.session(r);case 4:a=e.sent,n.user=a.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),i=t.getStorageSync("pingluenStateState"),i&&(t.removeStorageSync("pingluenStateState"),n.mescroll.num=1,n.upCallback(n.mescroll));case 9:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{download:function(e){var n=this;t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},init:function(){var t=this;return i(o.default.mark((function e(){var n;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("goods",t.id);case 2:n=e.sent,t.detail=n.data,t.swiperList=t.detail.goodsPhoto?t.detail.goodsPhoto.split(","):[];case 5:case"end":return e.stop()}}),e)})))()},onSubmit:function(){t.setStorageSync("orderGoods",[{goodsId:this.detail.id,goodsName:this.detail.goodsName,goodsPhoto:this.swiperList[0],buyNumber:1,goodsNewMoney:this.detail.goodsNewMoney}]),this.$utils.jump("../goodsOrder/confirm")},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return i(o.default.mark((function n(){var r;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.list("goodsCommentback",{page:t.num,limit:t.size,goodsId:e.id});case 2:r=n.sent,1==t.num&&(e.commentList=[]),e.commentList=e.commentList.concat(r.data.list),0==r.data.list.length&&(e.hasNext=!1),t.endSuccess(t.size,e.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onCommentTap:function(){var t=this;return i(o.default.mark((function e(){return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$utils.jump("../goodsCommentback/add-or-update?goodsId=".concat(t.id));case 1:case"end":return e.stop()}}),e)})))()}}};e.default=u}).call(this,n("543d")["default"])},"6d70":function(t,e,n){},ed44:function(t,e,n){"use strict";n.r(e);var o=n("35c7"),r=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=r.a}},[["2172","common/runtime","common/vendor"]]]);