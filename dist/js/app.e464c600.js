(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)i=s[p],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1147:function(e,t,n){},2600:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"input-container"},[n("vue-google-autocomplete",{attrs:{id:"autocomplete2",placeholder:"Enter your address...",country:"us",value:e.addressString},on:{placechanged:e.addressChange}})],1),n("Delivery"),n("Grocery"),n("MapBox"),n("LocatorModal")],1)},a=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("0118"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal"}},[e.modalOpen?n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("h1",[e._v("Find out where you can get Willie’s!")]),n("vue-google-autocomplete",{attrs:{id:"autocomplete",placeholder:"Enter your address...",country:"us",autofocus:""},on:{placechanged:e.addressChange}}),n("label",[e._v("Start typing your address, and choose the best option that pops up!")])],1)])]):e._e()])},l=[],u=n("2f62"),p={name:"LocatorModal",components:{VueGoogleAutocomplete:s["a"]},computed:Object(u["c"])({modalOpen:function(e){return e.modalOpen}}),mounted:function(){this.$store.commit("toggleModal",!0)},methods:{addressChange:function(e){this.$store.commit("setAddress",e),this.$store.commit("toggleModal",!1)}}},d=p,f=(n("cf0d"),n("2877")),m=Object(f["a"])(d,c,l,!1,null,"410a572e",null),b=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("drawer",{staticClass:"yellow",attrs:{open:e.open}},[n("span",{staticClass:"header",attrs:{slot:"header"},on:{click:function(t){e.open=!e.open}},slot:"header"},[e._v("Home alcohol delivery services ("+e._s(e.options)+")")]),e.open?n("div",{attrs:{slot:"options"},slot:"options"},[e._v("Minibar")]):e.loading?n("div",{staticClass:"loader",attrs:{slot:"options"},slot:"options"},[n("fai",{attrs:{icon:"cog",spin:"","fixed-width":""}})],1):e._e(),n("div",{attrs:{slot:"content"},slot:"content"},e._l(e.products,function(t){return n("div",{key:t.id,staticClass:"product"},[n("img",{attrs:{src:t.thumb_url}}),n("div",{staticClass:"name"},[e._v(e._s(t.name))]),n("div",{staticClass:"price"},[e._v("$"+e._s(t.price))]),n("div",{staticClass:"volume"},[e._v(e._s(t.volume.replace("cans","")))]),n("div",{staticClass:"button",on:{click:function(n){return e.buttonClick(t)}}},[e._v("Order Now")])])}),0)])},h=[],g=(n("7f7f"),n("55dd"),n("96cf"),n("3b8d")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"drawer"},[n("fai",{class:["caret",{open:e.open}],attrs:{icon:"angle-right",size:"2x"}}),e._t("header"),n("div",{staticClass:"options"},[e._t("options")],2),n("div",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"content"},[e._t("content")],2)],2)},y=[],O={name:"drawer",props:{open:{type:Boolean,required:!0}}},j=O,_=(n("8574"),Object(f["a"])(j,w,y,!1,null,"667b57e1",null)),P=_.exports,C=n("bc3a"),k=n.n(C),x=n("4328"),S=n.n(x);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var E={"Willie's Superbrew Pomegranate & Acai":"https://minibardelivery.com/store/product/willie-s-superbrew-pomegranate-acai-6-pack/","Willie's Superbrew Sparkling Mango & Passionfruit":"https://minibardelivery.com/store/product/willie-s-superbrew-mango-passionfruit/","Willie's Superbrew Sparkling Ginger Lemon":"https://minibardelivery.com/store/product/willie-s-superbrew-ginger-lemon-1a800/"},$={name:"Delivery",components:{Drawer:P},data:function(){return{open:!1,loading:!1,minibar:{url:"https://minibardelivery.com/",id:"6a5ede78e518df233ee25beeee17637ea1ae4eabc285564509639e959ba76a6a",secret:"37beb6ab595a6511fe3c70ebd5e7fd7549304a8874914e84005a03a6bdb042ae",auth:null,suppliers:[],products:[]}}},computed:D({},Object(u["b"])(["address"]),{options:function(){var e=0;return this.minibar.products.length&&e++,e?"".concat(e," available"):"0 currently in your area"},products:function(){return this.minibar.products},minibarHeaders:function(){return{Authorization:"Bearer ".concat(this.minibar.auth.access_token)}}}),watch:{address:{handler:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}return this.open=!1,this.loading=!0,this.minibar.products=[],e.next=6,this.getMinibarToken();case 6:return e.next=8,this.checkMinibar();case 8:this.loading=!1,this.products.length&&(this.open=!0);case 10:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},methods:{getMinibarToken:function(){var e=this;return new Promise(function(t){e.minibar.auth?t():k.a.post("".concat(e.minibar.url,"oauth/token"),{client_id:e.minibar.id,client_secret:e.minibar.secret,grant_type:"client_credentials"}).then(function(n){var r=n.data;e.minibar.auth=r,t()}).catch(function(e){return console.error(e)})})},checkMinibar:function(){var e=this;return new Promise(function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(n){var r,o,a,i,s,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.minibar.suppliers=[],r=S.a.stringify({coords:{lat:e.address.latitude,lng:e.address.longitude}},{encode:!1}),t.next=4,k.a.get("".concat(e.minibar.url,"api/v2/suppliers?").concat(r),{headers:e.minibarHeaders});case 4:if(o=t.sent,a=o.data,console.log(a),e.minibar.suppliers=a.suppliers,!e.minibar.suppliers.length){t.next=16;break}return i=e.minibar.suppliers.map(function(e){return e.id}).join(),t.next=12,k.a.get("".concat(e.minibar.url,"api/v2/supplier/").concat(i,"/products"),{headers:e.minibarHeaders,params:{query:"Willie's Superbrew"}});case 12:s=t.sent,c=s.data,console.log(c),e.minibar.products=c.products.sort(function(e,t){return e.name.localeCompare(t.name)});case 16:n();case 17:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())},buttonClick:function(e){window.open("".concat(E[e.name]).concat(e.permalink),"_blank")}}},T=$,L=Object(f["a"])(T,v,h,!1,null,null,null),A=L.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("drawer",{staticClass:"pink",attrs:{open:e.open}},[n("span",{staticClass:"header",attrs:{slot:"header"},on:{click:function(t){e.open=!e.open}},slot:"header"},[e._v("Grocery delivery options ("+e._s(e.options)+")")]),e.open?n("div",{attrs:{slot:"options"},slot:"options"}):e._e(),n("div",{attrs:{slot:"content"},slot:"content"},e._l(e.products,function(t){return n("div",{key:t.id,staticClass:"product"},[n("img",{attrs:{src:t.thumb_url}}),n("div",{staticClass:"name"},[e._v(e._s(t.name))]),n("div",{staticClass:"price"},[e._v("$"+e._s(t.price))]),n("div",{staticClass:"volume"},[e._v(e._s(t.volume.replace("cans","")))]),n("div",{staticClass:"button",on:{click:function(n){return e.buttonClick(t)}}},[e._v("Order Now")])])}),0)])},G=[];function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var N,q={name:"Grocery",components:{Drawer:P},data:function(){return{open:!1}},computed:H({},Object(u["b"])(["address"]),{options:function(){return"0 currently in your area"},products:function(){return[]}}),watch:{address:{handler:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}},methods:{buttonClick:function(e){}}},I=q,J=Object(f["a"])(I,B,G,!1,null,null,null),R=J.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("drawer",{staticClass:"orange",attrs:{open:e.open}},[n("span",{staticClass:"header",attrs:{slot:"header"},on:{click:function(t){e.open=!e.open}},slot:"header"},[e._v("Locations near you")]),e.open?n("div",{attrs:{slot:"options"},slot:"options"}):e._e(),n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"content-container"},[n("div",{staticClass:"img-container"},[n("img",{attrs:{src:"https://images.squarespace-cdn.com/content/v1/5a9827308f51303fb5c9f4be/1558627060882-MYUQSJW26Z5K5HGF33QY/ke17ZwdGBToddI8pDm48kFbHyiaqzKjpddqViNudU3LlfiSMXz2YNBs8ylwAJx2qgRUppHe6ToX8uSOdETM-XldvY_sAIyUlfjhoEMtv77FisOkbpBjeI4FIBUZPqpY8GIsmWneP-r9jaCKUuajR9P_ZvJPBNg4ijehBznvvgzk/Asset+20%400.5x.png?format=750w"}})]),n("div",{staticClass:"map-container"},[n("div",{attrs:{id:"map"}}),n("div",{attrs:{id:"listings"}},[n("h1",[e._v("Our locations")]),n("div",{attrs:{id:"results"}})])])])])])},W=[];n("a481");function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Y(e){var t=e.title||e.Title||e["Address components"]||"";return t.toLowerCase().replace(/[^0-9a-z-]/g,"")}function V(e,t){N.flyTo(Z({center:e.geometry.coordinates},t?{zoom:t}:{}))}function K(e){window.$(".mapboxgl-popup").remove(),new window.mapboxgl.Popup({closeOnClick:!1}).setLngLat(e.geometry.coordinates).setHTML("<h3>"+(e.properties.title||e.properties.Title)+"</h3><br><p>"+e.properties["Address components"]+"</p>").addTo(N)}function Q(){var e=N.queryRenderedFeatures({layers:["farmer-willies-locations"]}),t=document.getElementById("results");window.$("#results .item:not(.active)"+e.map(function(e){return":not(#"+Y(e.properties)+")"}).join("")).remove();for(var n=0;n<e.length;n++){var r=e[n],o=r.properties,a=Y(o);if(!window.$("#"+a).length){var i=t.appendChild(document.createElement("div"));i.className="item",i.id=a;var s=i.appendChild(document.createElement("a"));s.href="#",s.className="title",s.dataPosition=n,s.innerHTML=o.title||o.Title;var c=i.appendChild(document.createElement("div"));c.innerHTML=o["Address components"],s.addEventListener("click",function(t){t.preventDefault(),window.$("#results .item.active").removeClass("active"),this.parentNode.classList.add("active");var n=e[this.dataPosition];V(n),K(n)})}}}var X=function(){window.mapboxgl.accessToken="pk.eyJ1IjoiZmFybWVyd2lsbGllcyIsImEiOiJqTEFZd3d3In0.GBgh7oDoeAgvuHUlJdLJSQ",N=new window.mapboxgl.Map({container:"map",style:"mapbox://styles/farmerwillies/cjh59ph8d3w0s2rnw4z4vfmaw"}),N.addControl(new window.mapboxgl.NavigationControl({showZoom:!0}),"top-left"),window.$.getJSON("https://cdn.jsdelivr.net/gh/z3nz/farmer-willies/features.geojson").done(function(e){N.on("load",function(){N.addSource("the-goods",{type:"geojson",data:e}),N.on("click",function(e){var t=N.queryRenderedFeatures(e.point);if(t.length){var n=t[0];window.$("#results .item.active").removeClass("active"),window.$("#"+Y(n.properties)).addClass("active"),V(n),K(n)}})})}),N.on("render",Q)},ee={name:"MapBox",components:{Drawer:P},data:function(){return{open:!0}},computed:Z({},Object(u["b"])(["address"])),watch:{address:{handler:function(e){e&&V({geometry:{coordinates:[e.longitude,e.latitude]}},13)}}},mounted:function(){X()}},te=ee,ne=(n("70c0"),Object(f["a"])(te,F,W,!1,null,null,null)),re=ne.exports;function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ie={name:"app",components:{VueGoogleAutocomplete:s["a"],LocatorModal:b,Delivery:A,Grocery:R,MapBox:re},data:function(){return{}},computed:ae({},Object(u["b"])(["addressString"])),methods:{addressChange:function(e){this.$store.commit("setAddress",e)}}},se=ie,ce=(n("5c0b"),Object(f["a"])(se,o,a,!1,null,null,null)),le=ce.exports;r["a"].use(u["a"]);var ue=new u["a"].Store({state:{address:null,modalOpen:!1},getters:{address:function(e){return e.address},addressString:function(e){var t=e.address;return t?"".concat(t.street_number," ").concat(t.route,", ").concat(t.locality,", ").concat(t.administrative_area_level_1," ").concat(t.postal_code):""}},mutations:{setAddress:function(e,t){e.address=t},toggleModal:function(e,t){e.modalOpen=t}},actions:{}}),pe=n("ecee"),de=n("c074"),fe=n("ad3d");pe["c"].add(de["b"],de["a"]),r["a"].component("fai",fe["a"]),r["a"].config.productionTip=!1,new r["a"]({store:ue,render:function(e){return e(le)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"70c0":function(e,t,n){"use strict";var r=n("2600"),o=n.n(r);o.a},8574:function(e,t,n){"use strict";var r=n("1147"),o=n.n(r);o.a},cf0d:function(e,t,n){"use strict";var r=n("ec35"),o=n.n(r);o.a},ec35:function(e,t,n){}});
//# sourceMappingURL=app.e464c600.js.map