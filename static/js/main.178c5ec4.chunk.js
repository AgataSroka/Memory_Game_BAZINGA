(this.webpackJsonpbazinga=this.webpackJsonpbazinga||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(8),l=n(0),c=n.n(l),i=n(7),r=n.n(i),o=n(1),s=n(2),u=n(4),m=n(3),d=n(5),E=(n(14),n(15),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("div",{className:"game_over_text"},c.a.createElement("h2",null," Congratulations! ",c.a.createElement("br",null)," You are the best! "),c.a.createElement("h3",null," Time of your game ",sessionStorage.getItem("game_time")," "),c.a.createElement("button",null," Click to run new game! ")))}}]),t}(l.Component)),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null," Bazinga "),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"settings"},c.a.createElement("div",{className:"main_settings"},c.a.createElement("div",{className:"main_info"},"Previous game time: ",c.a.createElement("span",null," ",sessionStorage.getItem("game_time"),"  ")),c.a.createElement("div",{className:"main_info"},"Flips: ",c.a.createElement("span",{id:"display_count"},"  "))),c.a.createElement("section",{className:"cards"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))),c.a.createElement(E,null)))}}]),t}(l.Component);r.a.render(c.a.createElement(v,null),document.getElementById("root"));var f=["red","red","yellow","yellow","yellowgreen","yellowgreen","blue","blue","pink","pink","violet","violet","orange","orange","darkviolet","darkviolet","grey","grey","turquoise","turquoise"],g=Object(a.a)(document.querySelectorAll(".cards > div"));console.log(g);var h=document.getElementById("display_count");console.log(h);var p=(new Date).getTime(),b=0,y="",k=[],j=g.length/2,O=0,w=function e(){(y=this)!==k[0]&&(y.classList.remove("hidden"),0===k.length?(console.log("first card"),b++,k[0]=y):(console.log("second card"),b++,g.forEach((function(t){return t.removeEventListener("click",e)})),h.innerHTML=b/2,k[1]=y,setTimeout((function(){if(k[0].className===k[1].className){console.log("winner"),k.forEach((function(e){return e.classList.add("off")})),O++,g=g.filter((function(e){return!e.classList.contains("off")}));if(function(){if(1===O)c.a.createElement(E,null)}(),O===j){var t=((new Date).getTime()-p)/1e3;sessionStorage.setItem("game_time","".concat(t.toFixed(0),"s"))}}else console.log("loser"),k.forEach((function(e){return e.classList.add("hidden")}));y="",k.length=0,g.forEach((function(t){return t.addEventListener("click",e)}))}),1e3)))};g.forEach((function(e){var t=Math.floor(Math.random()*f.length);e.classList.add(f[t]),f.splice(t,1)})),setTimeout((function(){g.forEach((function(e){e.classList.add("hidden"),e.addEventListener("click",w)}))}),3e3)},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.178c5ec4.chunk.js.map