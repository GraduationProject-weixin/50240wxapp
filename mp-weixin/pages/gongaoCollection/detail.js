(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gongaoCollection/detail"],{"010e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,o,r,a,u){try{var c=e[a](u),i=c.value}catch(l){return void n(l)}c.done?t(i):Promise.resolve(i).then(o,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var u=e.apply(t,n);function c(e){a(u,o,r,c,i,"next",e)}function i(e){a(u,o,r,c,i,"throw",e)}c(void 0)}))}}var c={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},collectionFlag:0}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var t=this;return u(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.id=e.id;case 1:case"end":return n.stop()}}),n)})))()},onShow:function(t){var n=this;return u(o.default.mark((function t(){var r,a,u;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.init(),r=e.getStorageSync("nowTable"),t.next=4,n.$api.session(r);case 4:a=t.sent,n.user=a.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),u=e.getStorageSync("pingluenStateState"),u&&(e.removeStorageSync("pingluenStateState"),n.mescroll.num=1,n.upCallback(n.mescroll));case 9:case"end":return t.stop()}}),t)})))()},destroyed:function(){},methods:{download:function(t){var n=this;e.downloadFile({url:t,success:function(e){200===e.statusCode&&(n.$utils.msg("下载成功"),window.open(t))}})},init:function(){var e=this;return u(o.default.mark((function t(){var n;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.info("gongaoCollection",e.id);case 2:n=t.sent,e.detail=n.data,e.swiperList=e.detail.gongaoCollectionPhoto?e.detail.gongaoCollectionPhoto.split(","):[];case 5:case"end":return t.stop()}}),t)})))()},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(e){var t=this;return u(o.default.mark((function e(){return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.mescroll.endByPage(t.mescroll.num,10);case 1:case"end":return e.stop()}}),e)})))()}}};t.default=c}).call(this,n("543d")["default"])},"56bd":function(e,t,n){"use strict";n.r(t);var o=n("7fa2"),r=n("e1ca");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("ba30");var u,c=n("f0c5"),i=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=i.exports},"6e29":function(e,t,n){"use strict";(function(e){n("48e8");o(n("66fd"));var t=o(n("56bd"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"7fa2":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"aa08"))}},r=function(){var e=this,t=e.$createElement;e._self._c},a=[]},ba30:function(e,t,n){"use strict";var o=n("c346"),r=n.n(o);r.a},c346:function(e,t,n){},e1ca:function(e,t,n){"use strict";n.r(t);var o=n("010e"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a}},[["6e29","common/runtime","common/vendor"]]]);