(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goodsOrder/confirm"],{2334:function(e,t,r){"use strict";(function(e){r("48e8");n(r("66fd"));var t=n(r("4462"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=r,e(t.default)}).call(this,r("543d")["createPage"])},2657:function(e,t,r){"use strict";r.r(t);var n=r("a9c3"),a=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},4462:function(e,t,r){"use strict";r.r(t);var n=r("8b96"),a=r("2657");for(var o in a)"default"!==o&&function(e){r.d(t,e,(function(){return a[e]}))}(o);r("4d4b");var u,s=r("f0c5"),d=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=d.exports},"4d4b":function(e,t,r){"use strict";var n=r("fd6b"),a=r.n(n);a.a},"8b96":function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,r=(e._self._c,1==e.goodsOrderPaymentTypes?e.maxNewMouey.toFixed(2):null),n=1==e.goodsOrderPaymentTypes?(e.maxNewMouey*e.zhekou).toFixed(2):null,a=2==e.goodsOrderPaymentTypes?e.maxNewMouey.toFixed(2):null;e.$mp.data=Object.assign({},{$root:{g0:r,g1:n,g2:a}})},o=[]},a9c3:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r,n,a,o,u){try{var s=e[o](u),d=s.value}catch(i){return void r(i)}s.done?t(d):Promise.resolve(d).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function s(e){o(u,n,a,s,d,"next",e)}function d(e){o(u,n,a,s,d,"throw",e)}s(void 0)}))}}var s={data:function(){return{user:{},orderGoods:[],maxNewMouey:0,addresszhi:{},goodsOrderPaymentTypes:1,zhi:[{id:1,val:"余额"},{id:2,val:"积分"}],zhekou:1}},onLoad:function(t){var r=this;return u(n.default.mark((function t(){var a;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r.orderGoods=e.getStorageSync("orderGoods"),r.orderGoods.length>0)for(a=0;a<r.orderGoods.length;a++)r.maxNewMouey=r.maxNewMouey+parseFloat(r.orderGoods[a].goodsNewMoney)*r.orderGoods[a].buyNumber;e.removeStorageSync("orderGoods");case 3:case"end":return t.stop()}}),t)})))()},onShow:function(){var t=this;return u(n.default.mark((function r(){var a,o,u,s,d;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t,o=e.getStorageSync("nowTable"),r.next=4,a.$api.session(o);case 4:return u=r.sent,a.user=u.data,r.next=8,a.$api.page("dictionary",{dicCode:"huiyuandengji_types",dicName:"会员等级类型",codeIndexStart:a.user.huiyuandengjiTypes,codeIndexEnd:a.user.huiyuandengjiTypes});case 8:if(s=r.sent,s.data.list.length>0&&(a.zhekou=s.data.list[0].beizhu),d=e.getStorageSync("address"),e.removeStorageSync("address"),null==d||""==d){r.next=16;break}a.addresszhi=d,r.next=20;break;case 16:return r.next=18,a.$api.list("address",{yonghuId:a.user.id,isdefaultTypes:2});case 18:d=r.sent,d.data.list.length>0?a.addresszhi=d.data.list[0]:a.addresszhi=null;case 20:case"end":return r.stop()}}),r)})))()},methods:{onSubmitTap:function(){var t=this;return u(n.default.mark((function r(){var a;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=t,e.getStorageSync("nowTable"),e.showModal({title:"提示",content:"是否确认支付",success:function(){var e=u(n.default.mark((function e(t){var r;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=8;break}if(null!=a.addresszhi){e.next=4;break}return a.$utils.msg("请选择地址"),e.abrupt("return");case 4:return r={addressId:a.addresszhi.id,goodsId:a.orderGoods[0].goodsId,yonghuId:a.user.id,buyNumber:1,goodsOrderPaymentTypes:a.goodsOrderPaymentTypes},e.next=7,a.$api.add("goodsOrder",r);case 7:a.$utils.jump("/pages/goodsOrder/list");case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()});case 3:case"end":return r.stop()}}),r)})))()},onAddressTap:function(){var e=this;return u(n.default.mark((function t(){var r;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e,r.$utils.jump("/pages/address/list");case 2:case"end":return t.stop()}}),t)})))()}}};t.default=s}).call(this,r("543d")["default"])},fd6b:function(e,t,r){}},[["2334","common/runtime","common/vendor"]]]);