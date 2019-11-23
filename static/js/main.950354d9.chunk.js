(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{29:function(e,t,n){e.exports=n(42)},34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(14),o=n.n(l),c=(n(34),n(35),n(15)),s=n(16),i=n(27),u=n(18),f=n(28),d=function(e){var t=e.boxClass,n=e.id,a=e.selectBox,l=e.row,o=e.col;return r.a.createElement("div",{className:t,id:n,role:"button",onClick:function(){return a(l,o)},"aria-label":"Box",tabIndex:"0",onKeyDown:!0})},m=function(e){var t=e.cols,n=e.selectBox,a=e.gridFull,l=14*t,o="",c=a.map((function(e,t){return e.map((function(e,l){var c="".concat(t,"_").concat(l);return o=a[t][l]?"box on":"box off",r.a.createElement(d,{boxClass:o,key:c,boxId:c,row:t,col:l,selectBox:n})}))}));return r.a.createElement("div",{className:"grid",style:{width:l}},c)},p=n(44),b=n(20),y=n(45),v=n(12),h=function(e){var t=e.playButton,n=e.pauseButton,a=e.clear,l=e.slow,o=e.fast,c=e.seed,s=e.gridSize;return r.a.createElement("div",{className:"center"},r.a.createElement(p.a,null,r.a.createElement(b.a,{className:"btn btn-default",onClick:t},"play"),r.a.createElement(b.a,{className:"btn btn-default",onClick:n},"pause"),r.a.createElement(b.a,{className:"btn btn-default",type:"button",onClick:a},"clear"),r.a.createElement(b.a,{className:"btn btn-default",type:"button",onClick:l},"slow"),r.a.createElement(b.a,{className:"btn btn-default",type:"button",onClick:o},"fast"),r.a.createElement(b.a,{className:"btn btn-default",type:"button",onClick:c},"seed"),r.a.createElement(y.a,{title:"Grid Size",id:"size-menu",onSelect:function(e){return s(e)}},r.a.createElement(v.a.Item,{eventKey:"1"},"20 X 10"),r.a.createElement(v.a.Item,{eventKey:"2"},"50 X 30"),r.a.createElement(v.a.Item,{eventKey:"3"},"70 X 70"))))},g=(n(40),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).rows=30,n.cols=50,n.speed=100,n.state={generation:0,gridFull:Array(n.rows).fill().map((function(){return Array(n.cols).fill(!1)}))},n.selectBox=function(e,t){var a=n.state.gridFull.map((function(n,a){return n.map((function(n,r){return a===e&&r===t?!n:n}))}));n.setState((function(){return{gridFull:a}}))},n.seed=function(){var e=n.state.gridFull.map((function(e){return e.map((function(){return 1===Math.floor(4*Math.random())}))}));n.setState((function(){return{gridFull:e}}))},n.playButton=function(){clearInterval(n.intervalId),n.intervalId=setInterval(n.play,n.speed)},n.pauseButton=function(){return clearInterval(n.intervalId)},n.slow=function(){n.speed=n.speed+100,n.playButton()},n.fast=function(){n.speed=n.speed-100,n.playButton()},n.clear=function(){var e=Array(n.rows).fill().map((function(){return Array(n.cols).fill(!1)}));n.setState({gridFull:e,generation:0})},n.gridSize=function(e){switch(e){case"1":n.cols=20,n.rows=10;break;case"2":n.cols=50,n.rows=30;break;default:n.cols=70,n.rows=50}n.clear()},n.play=function(){for(var e=n.state,t=e.gridFull,a=e.generation,r=n.arrayClone(t),l=0;l<n.rows;l+=1)for(var o=0;o<n.cols;o+=1){var c=0;l>0&&t[l-1][o]&&(c+=1),l>0&&o>0&&t[l-1][o-1]&&(c+=1),l>0&&o<n.cols-1&&t[l-1][o+1]&&(c+=1),o<n.cols-1&&t[l][o+1]&&(c+=1),o>0&&t[l][o-1]&&(c+=1),l<n.rows-1&&t[l+1][o]&&(c+=1),l<n.rows-1&&o>0&&t[l+1][o-1]&&(c+=1),l<n.rows-1&&n.cols-1&&t[l+1][o+1]&&(c+=1),t[l][o]&&(c<2||c>3)&&(r[l][o]=!1),t[l][o]||3!==c||(r[l][o]=!0)}n.setState({gridFull:r,generation:a+1})},n.arrayClone=function(e){return JSON.parse(JSON.stringify(e))},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.seed(),this.playButton()}},{key:"render",value:function(){var e=this.state,t=e.generation,n=e.gridFull;return r.a.createElement("div",null,r.a.createElement("h1",null,"The Game of Life"),r.a.createElement(h,{playButton:this.playButton,pauseButton:this.pauseButton,slow:this.slow,fast:this.fast,clear:this.clear,seed:this.seed,gridSize:this.gridSize}),r.a.createElement(m,{gridFull:n,rows:this.rows,cols:this.cols,selectBox:this.selectBox}),r.a.createElement("h2",null,"Generation: ",t))}}]),t}(a.Component));n(41);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))};o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.950354d9.chunk.js.map