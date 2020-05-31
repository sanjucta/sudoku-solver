(this["webpackJsonpsudoku-solver"]=this["webpackJsonpsudoku-solver"]||[]).push([[0],{154:function(e,t,n){e.exports=n(489)},158:function(e,t,n){},159:function(e,t,n){},417:function(e,t,n){},418:function(e,t,n){},489:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(15),i=n.n(o),u=(n(158),n(30)),c=n(31),s=n(33),l=n(32),d=(n(159),n(92)),v=(n(160),n(417),function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={editing:!1,inputElem:null},a}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(){this.state.inputElem&&this.state.inputElem.focus()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"grid-square"},this.state.editing?r.a.createElement("div",null,r.a.createElement("input",{type:"number",min:"1",max:"9",ref:function(t){e.state.inputElem=t},onChange:function(t){e.props.updateValue(t.target.value)},onBlur:function(){e.setState({editing:!1})}})):r.a.createElement("div",{onClick:function(){e.setState({editing:!0})}},this.props.value))}}]),n}(a.Component));n(418);function f(e,t){var n=0,a=0,r=[],o=[],i=[];!function e(u,c){if(function(e){for(var t=0;t<9;t++)for(var n=0;n<9;n++)if(0===e[t][n])return!1;return!0}(u))return void t(u);if(n<9&&a<9){for(;0!==u[n][a];)a<8?a++:n<8&&(a=0,n++);for(var s=c;s<10&&!1===m(u,n,a,s);)s++;if(10===s){console.log("Reset [".concat(n,"][").concat(a,"] ")),u=r.pop();var l=o.pop()+1,d=i.pop();return n=d.i,a=d.j,void setTimeout((function(){e(u,l)}),0)}var v=(f=u,JSON.parse(JSON.stringify(f)));return r.push(v),o.push(s),i.push({i:n,j:a}),u[n][a]=s,void setTimeout((function(){e(u,1)}),0)}var f}(e,1)}function m(e,t,n,a){return!e[t].includes(a)&&(!(r=e,o=n,r.map((function(e){return e[o]}))).includes(a)&&!function(e,t,n){for(var a=[],r=3*Math.floor(t/3),o=3*Math.floor(n/3),i=r;i<r+3;i++)for(var u=o;u<o+3;u++)a.push(e[i][u]);return a}(e,t,n).includes(a));var r,o}var p=n(153),h=n.n(p),b=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).updateValue=function(t,n,a){var r=h()(e.state.board),o=parseInt(a);0===o||m(r,t,n,o)?e.setState((function(e){var a=Object(d.a)(e.board);return a[t][n]=o,{board:a,entryErr:!1}})):e.setState({entryErr:!0})},e.state={board:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],msg:"Any number can only appear once in any row, column or grid",entryErr:!1,working:!1,solved:!1},e}return Object(c.a)(n,[{key:"reset",value:function(){var e=Object(d.a)(this.state.board);e.forEach((function(e){e.fill(0)})),this.setState({board:e,solved:!1})}},{key:"solvePuzzle",value:function(){var e=this;this.setState({working:!0,solved:!1}),f(this.state.board,(function(t){e.setState({board:t,solved:!0,working:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:this.state.working?"working":null},r.a.createElement("div",{className:this.state.solved?"grid solved":"grid"},this.state.board.map((function(t,n){return r.a.createElement("div",{key:"".concat(n),className:"wrapper"},t.map((function(t,a){return r.a.createElement(v,{key:"".concat(n,"-").concat(a),value:t,updateValue:e.updateValue.bind(e,n,a)})})))}))),r.a.createElement("div",{className:"action-buttons"},r.a.createElement("button",{onClick:function(){return e.solvePuzzle()}},"Solve"),r.a.createElement("button",{onClick:function(){return e.reset()}},"Reset")),r.a.createElement("div",{className:"error"},this.state.entryErr?this.state.msg:"")),this.state.working?r.a.createElement("div",{id:"loader"}):null)}}]),n}(a.Component),E=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Sudoku Solver"),r.a.createElement("p",null,"Create your own puzzle and press 'Solve'"),r.a.createElement(b,null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.d5d37cb6.chunk.js.map