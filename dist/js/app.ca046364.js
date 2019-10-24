(function(t){function e(e){for(var n,l,s=e[0],a=e[1],c=e[2],f=0,v=[];f<s.length;f++)l=s[f],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&v.push(r[l][0]),r[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,s=1;s<o.length;s++){var a=o[s];0!==r[a]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=o[0]))}return t}var n={},r={app:0},i=[];function l(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=n,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(o,n,function(e){return t[e]}.bind(null,n));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=a;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},1697:function(t,e,o){},"452c":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[t._l(t.elevatorSystem.elevators,(function(e,n){return o("div",{key:n,staticClass:"con"},[o("Elevator",{ref:"elev",refInFor:!0,attrs:{floorHeight:t.height+"px",floor:t.height*e.onFloor+"px",control:e.onFloor}})],1)})),o("div",{staticClass:"controls"},[o("button",{on:{click:function(e){return t.test(1)}}},[t._v("test")])])],2)},i=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"control"},[t._v(t._s(t.control))]),o("div",{ref:"con",staticClass:"elevator-con"},[o("div",{staticClass:"elevator"},[o("div",{staticClass:"room",style:{height:t.floorHeight,bottom:t.floor}},[o("div",{staticClass:"left-door"}),o("div",{staticClass:"right-door"})])])])])},s=[],a={props:["floorHeight","floor","control"],methods:{}},c=a,u=(o("665d"),o("2877")),f=Object(u["a"])(c,l,s,!1,null,"2e528d4e",null),v=f.exports,h=(o("4de4"),o("4e82"),o("9f12")),d=o("53fe"),p=function(){function t(e,o){Object(h["a"])(this,t),this.numOfFloors=e,this.numOfElevators=o,this.msEachFloor=500,this.elevators=this.initElevators()}return Object(d["a"])(t,[{key:"callElevator",value:function(t){var e,o=this.elevators.filter((function(t){return!t.isEngaged}));return o.sort((function(e,o){return e.onFloor-t<o.onFloor-t})),e=o[0],e.onFloor=t,console.log(e),{elevator:e,toFloor:t}}},{key:"goToFloor",value:function(t,e,o){var n=this;this.elevators[t.num].isEngaged=!0,setTimeout((function(){n.elevators[t.num].onFloor=o,n.elevators[t.num].isEngaged=!1}),this.timeToTravel(e,o,this.msEachFloor))}},{key:"initElevators",value:function(){for(var t=[],e=0;e<this.numOfElevators;e++)t[e]={num:e,onFloor:Math.floor(Math.random()*this.numOfFloors),isEngaged:!1};return t}},{key:"timeToTravel",value:function(t,e,o){var n=[t,e].sort((function(t,e){return t-e}));return n[1]-n[0]*o}}]),t}(),g={data:function(){return{elevatorSystem:new p(10,3),height:"",floor:""}},components:{Elevator:v},methods:{getHeight:function(){return this.$children[0].$el.childNodes[1].clientHeight/this.elevatorSystem.numOfFloors},test:function(){this.elevatorSystem.callElevator(3)}},mounted:function(){this.height=this.getHeight(),console.log(this.$children[0].$el.childNodes[1].clientHeight)}},m=g,b=(o("9b74"),o("b0a0"),Object(u["a"])(m,r,i,!1,null,"75f7cc60",null)),y=b.exports,O=o("2f62");n["a"].use(O["a"]);var E=new O["a"].Store({state:{},mutations:{}});o("e008");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(y)},store:E}).$mount("#app")},"665d":function(t,e,o){"use strict";var n=o("924d"),r=o.n(n);r.a},"924d":function(t,e,o){},"9b74":function(t,e,o){"use strict";var n=o("1697"),r=o.n(n);r.a},b0a0:function(t,e,o){"use strict";var n=o("452c"),r=o.n(n);r.a},e008:function(t,e,o){}});
//# sourceMappingURL=app.ca046364.js.map