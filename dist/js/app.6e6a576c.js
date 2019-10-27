(function(t){function e(e){for(var n,s,l=e[0],i=e[1],u=e[2],f=0,v=[];f<l.length;f++)s=l[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);c&&c(e);while(v.length)v.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,l=1;l<o.length;l++){var i=o[l];0!==r[i]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=i;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},3399:function(t,e,o){},"41d2":function(t,e,o){"use strict";var n=o("3399"),r=o.n(n);r.a},"452c":function(t,e,o){},5557:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Panel"),o("div",{staticClass:"container"},[o("div",{staticClass:"github-link"},[o("a",{attrs:{href:"https://github.com/shayaulman/elevator-simulation",target:"_blank"}},[o("svg",{staticClass:"github-link",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M11.135,1.665A9.733,9.733,0,0,0,8.06,20.632c.486.09.664-.211.664-.468,0-.231-.008-.843-.013-1.656C6,19.1,5.432,17.2,5.432,17.2a2.579,2.579,0,0,0-1.08-1.424c-.884-.6.066-.591.066-.591a2.043,2.043,0,0,1,1.491,1A2.072,2.072,0,0,0,8.741,17a2.082,2.082,0,0,1,.618-1.3c-2.161-.246-4.433-1.081-4.433-4.81a3.763,3.763,0,0,1,1-2.612,3.5,3.5,0,0,1,.1-2.575s.817-.262,2.676,1a9.239,9.239,0,0,1,4.872,0c1.858-1.259,2.674-1,2.674-1a3.491,3.491,0,0,1,.1,2.575,3.757,3.757,0,0,1,1,2.612c0,3.738-2.275,4.561-4.443,4.8a2.326,2.326,0,0,1,.66,1.8c0,1.3-.012,2.35-.012,2.67,0,.26.175.563.67.467A9.734,9.734,0,0,0,11.135,1.665Z",transform:"translate(-1.404 -1.665)"}})])])]),t._l(t.elevatorSystem.elevators,(function(e,n){return o("Elevator",{key:n,staticClass:"con",attrs:{buildingHeight:t.elevatorSystem.floorHeight*t.elevatorSystem.numOfFloors,floorHeight:t.elevatorSystem.floorHeight,floor:t.elevatorSystem.floorHeight*e.onFloor,control:e.onFloor,state:e.state}})})),o("ElevatorButtons")],2)],1)},a=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"panel"},[o("p",{staticClass:"floor-info"},[t._v(t._s(t.elevatorSystem.numOfFloors-1))]),o("span",[t._v("Floors")]),o("button",{on:{click:function(e){return t.elevatorSystem.addFloor()}}},[t._v("+")]),o("button",{on:{click:function(e){return t.elevatorSystem.removeFloor()}}},[t._v("-")]),o("span",[t._v("Elevators")]),o("button",{on:{click:function(e){return t.elevatorSystem.addElevator()}}},[t._v("+")]),o("button",{on:{click:function(e){return t.elevatorSystem.removeElevator()}}},[t._v("-")]),o("span",[t._v("Floor")]),o("span",[t._v("Height")]),o("input",{attrs:{value:"40",min:"30",type:"number"},on:{input:function(e){return t.elevatorSystem.updateFloorHeight(e.target.value)}}})])},l=[],i={data:function(){return{elevatorSystem:this.$store.state.elevatorSystem}}},u=i,c=(o("cc7d"),o("2877")),f=Object(c["a"])(u,s,l,!1,null,"0f9d5ebc",null),v=f.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"control",class:t.state},[o("strong",[t._v(t._s(t.control.toFixed()))])]),o("div",{ref:"con",staticClass:"elevator-con",style:t.shaftStyle},[o("div",{staticClass:"elevator",style:t.elevatorHeight},[o("div",{staticClass:"room",style:t.roomHeight},[o("div",{staticClass:"left-door",class:["opening"===t.state?"open":""]}),o("div",{staticClass:"right-door",class:["opening"===t.state?"open":""]})])])])])},p=[],m=(o("99af"),o("a9e3"),{props:{buildingHeight:Number,floorHeight:Number,floor:Number,state:String,control:Number},data:function(){return{elevatorSystem:this.$store.state.elevatorSystem}},computed:{shaftStyle:function(){return{height:"".concat(this.buildingHeight,"px"),background:"repeating-linear-gradient(\n          to bottom,\n          var(--color-2),\n          var(--color-2) ".concat(this.elevatorSystem.floorHeight,"px,\n          var(--color-2-op) ").concat(this.elevatorSystem.floorHeight,"px,\n          var(--color-2-op) ").concat(2*this.elevatorSystem.floorHeight,"px\n        )")}},elevatorHeight:function(){return{height:"".concat(this.buildingHeight,"px")}},roomHeight:function(){return{height:"".concat(this.elevatorSystem.floorHeight,"px"),bottom:"".concat(this.floor,"px")}}},methods:{}}),d=m,g=(o("41d2"),Object(c["a"])(d,h,p,!1,null,"476f35a4",null)),y=g.exports,b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"buttons-container"},t._l(t.elevatorSystem.numOfFloors,(function(e,n){return o("div",{key:n,staticClass:"buttons",style:{height:t.elevatorSystem.floorHeight+"px"}},[o("button",{on:{click:function(e){return t.elevatorSystem.callElevator(n)}}},[t._v("▲")]),o("button",{on:{click:function(e){return t.elevatorSystem.callElevator(n)}}},[t._v("▼")])])})),0)},F=[],S={data:function(){return{elevatorSystem:this.$store.state.elevatorSystem}}},_=S,O=(o("9827"),Object(c["a"])(_,b,F,!1,null,"621df661",null)),k=O.exports,x={data:function(){return{elevatorSystem:this.$store.state.elevatorSystem}},components:{Panel:v,Elevator:y,ElevatorButtons:k}},H=x,E=(o("f671"),o("b0a0"),Object(c["a"])(H,r,a,!1,null,"60669c25",null)),w=E.exports,C=o("2f62"),j=(o("4de4"),o("4e82"),o("b680"),o("9f12")),M=o("53fe"),T=function(){function t(e,o){Object(j["a"])(this,t),this.numOfFloors=e,this.numOfElevators=o,this.floorHeight=35,this.msEachFloor=1e3,this.elevators=this.initElevators()}return Object(M["a"])(t,[{key:"callElevator",value:function(t){var e=this.elevators.filter((function(t){return"free"===t.state})),o=e.sort((function(e,o){return Math.abs(e.onFloor-t)===Math.abs(o.onFloor-t)?o.onFloor-e.onFloor:Math.abs(e.onFloor-t)-Math.abs(o.onFloor-t)}))[0];console.log(this.elevators),this.goToFloor(o,o.onFloor,t)}},{key:"goToFloor",value:function(t,e,o){if(e>o?t.state="goingDown":e<o?t.state="goingUp":(t.state="arrived",setTimeout((function(){return t.state="opening"}),500)),t.onFloor!==o){var n=setInterval((function(){"goingUp"===t.state?t.onFloor+=.1:t.onFloor-=.1,+t.onFloor.toFixed(6)===o&&(t.onFloor=+t.onFloor.toFixed(),clearInterval(n),t.state="arrived",setTimeout((function(){return t.state="opening"}),500),setTimeout((function(){return t.state="free"}),3e3))}),100);console.log("arrrived")}else console.log(t.onFloor,e)}},{key:"getDistance",value:function(t,e,o){Math.abs(t-e)}},{key:"initElevators",value:function(){for(var t=[],e=0;e<this.numOfElevators;e++)t[e]={num:e,onFloor:Math.floor(Math.random()*this.numOfFloors),state:"free"};return t}},{key:"timeToTravel",value:function(t,e,o){var n=[t,e].sort((function(t,e){return t-e}));return n[1]-n[0]*o}},{key:"addElevator",value:function(){this.elevators.push({num:this.elevators.length,onFloor:Math.floor(Math.random()*this.numOfFloors),state:"free"})}},{key:"removeElevator",value:function(){this.elevators.pop()}},{key:"addFloor",value:function(){this.numOfFloors++}},{key:"removeFloor",value:function(){this.numOfFloors--}},{key:"updateFloorHeight",value:function(t){this.floorHeight=t}}]),t}();n["a"].use(C["a"]);var P=new C["a"].Store({state:{elevatorSystem:new T(15,4)},mutations:{}});o("e008");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(w)},store:P}).$mount("#app")},6e3:function(t,e,o){},9827:function(t,e,o){"use strict";var n=o("6000"),r=o.n(n);r.a},"9e8a":function(t,e,o){},b0a0:function(t,e,o){"use strict";var n=o("452c"),r=o.n(n);r.a},cc7d:function(t,e,o){"use strict";var n=o("9e8a"),r=o.n(n);r.a},e008:function(t,e,o){},f671:function(t,e,o){"use strict";var n=o("5557"),r=o.n(n);r.a}});
//# sourceMappingURL=app.6e6a576c.js.map