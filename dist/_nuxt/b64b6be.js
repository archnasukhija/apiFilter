(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(t,e,r){var content=r(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("7388ab72",content,!0,{sourceMap:!1})},111:function(t,e,r){var content=r(247);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("56b15182",content,!0,{sourceMap:!1})},205:function(t,e,r){"use strict";var n={},o=(r(246),r(76)),c=r(108),l=r.n(c),f=r(298),d=r(300),h=r(301),v=r(299),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{dark:""}},[e("v-app-bar",{attrs:{fixed:"",app:"",color:"green"}},[e("blockquote",{staticClass:"textCenter",attrs:{"align-center":"",center:""}},[e("b",[this._v("Keyword Search ")])])]),this._v(" "),e("v-main",[e("v-container",[e("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:f.a,VAppBar:d.a,VContainer:h.a,VMain:v.a})},217:function(t,e,r){r(218),t.exports=r(219)},240:function(t,e,r){"use strict";var n=r(109);r.n(n).a},241:function(t,e,r){(e=r(31)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},246:function(t,e,r){"use strict";var n=r(111);r.n(n).a},247:function(t,e,r){(e=r(31)(!1)).push([t.i,".textCenter{display:block;margin:0 auto}",""]),t.exports=e},275:function(t,e,r){"use strict";r.r(e);r(75);var n=r(11),o=r(69);e.default=function(){return new o.a.Store({state:{apiData:[]},actions:{getSearchData:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,c="https://graph.facebook.com/search?type=adinterest&q=[".concat(e,"]&limit=10000&locale=en_US&access_token=562476534284148%7CXnt3BLJJ5LrFULeEuLJqVOyUv9E"),n.next=4,r.$axios.get(c);case 4:if(null!=(l=n.sent)){n.next=10;break}return console.log("Error occured"),n.abrupt("return");case 10:o("SET_DATA",l.data.data);case 11:case"end":return n.stop()}}),n)})))()}},mutations:{SET_DATA:function(t,data){t.apiData=data}}})}},60:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(240),r(76)),c=r(108),l=r.n(c),f=r(298),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[217,4,1,5]]]);