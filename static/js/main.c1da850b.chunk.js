(this.webpackJsonpeffecss=this.webpackJsonpeffecss||[]).push([[0],{12:function(t,e,s){},14:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var a=s(1),n=s.n(a),c=s(7),i=s.n(c),o=(s(12),s(2)),r=s(3),l=s(5),u=s(4),d=s(0),m=(a.Component,s(14),function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={actualTime:0,stopBtn:!1,playBtn:!1,times:[],isCounting:!1,active:"",achivement:"&#9813;",totalTime:0,playPause:"gg-play-button-o",hours:0,minutes:0,secunds:0,preSeconds:0,preMinutes:0,lastTime:""},t.time=function(){t.setState({actualTime:t.state.actualTime+1,secunds:t.state.actualTime,minutes:parseInt(t.state.actualTime/60)}),t.state.secunds<10?t.setState({preSeconds:"0"}):t.state.secunds>=10&&t.setState({preSeconds:""}),t.state.actualTime>59&&(t.setState({minutes:parseInt(t.state.actualTime/60),secunds:t.state.actualTime-60*t.state.minutes}),t.state.secunds<10?t.setState({preSeconds:"0"}):t.state.secunds>=10&&t.setState({preSeconds:""})),t.state.minutes>9&&t.setState({preMinutes:""})},t.calcTotal=function(){t.setState({totalTime:t.state.times.reduce((function(t,e){return t+e}))})},t.handleStart=function(){if(t.setState({playPause:"gg-play-pause-o"}),!0!==t.state.isCounting){t.setState({stopBtn:!1,active:"white"});var e=setInterval((function(){!0===t.state.stopBtn?clearInterval(e):!1===t.state.stopBtn&&(t.setState({isCounting:!0}),t.time())}),1e3)}else t.setState({stopBtn:!0,isCounting:!1,playPause:"gg-play-button-o"})},t.handlePause=function(){t.setState({})},t.handleStop=function(){var e=t.state.times;e.push(t.state.actualTime),t.setState({times:e,stopBtn:!0,isCounting:!1,active:"",playPause:"gg-play-button-o",lastTime:"".concat(t.state.minutes," min ").concat(t.state.secunds," sec")}),t.calcTotal()},t.handleReset=function(){t.setState({actualTime:0,hours:0,minutes:0,secunds:0,preSeconds:0,preMinutes:0,isCounting:!1})},t}return Object(r.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"stripsWrapper",children:[Object(d.jsx)("div",{className:"strip a",style:{transform:"rotateY(0deg) rotate(".concat(-this.state.actualTime,"deg)")},children:Object(d.jsx)("div",{className:"resultsWrapper"})}),Object(d.jsx)("div",{className:"strip b",style:{transform:"rotateY(0deg) rotate(".concat(3*this.state.actualTime,"deg)")}}),Object(d.jsxs)("div",{className:"strip c",children:[""===this.state.lastTime?Object(d.jsx)("div",{className:"mainTitle",children:"neon stopwatch"}):Object(d.jsxs)("div",{className:"lastTime",children:["Last time: ",this.state.lastTime]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"clockWrapper",children:[Object(d.jsxs)("div",{className:"clock",children:[this.state.preMinutes,this.state.minutes,":",this.state.preSeconds,this.state.secunds]}),Object(d.jsxs)("div",{className:"controlsWrapper",children:[Object(d.jsx)("div",{className:"".concat(this.state.playPause," controls"),onClick:this.handleStart,style:{color:"".concat(this.state.active)}}),Object(d.jsx)("div",{className:"gg-play-stop-o controls",onClick:this.handleStop})]}),Object(d.jsx)("button",{onClick:this.handleReset,className:"reset",children:"reset"})]})]}),Object(d.jsxs)("div",{className:"strip d",style:{transform:"rotateY(0deg) rotate(".concat(this.state.actualTime,"deg)")},children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}),Object(d.jsx)("div",{className:"strip e",style:{transform:"rotateY(0deg) rotate(".concat(1.5*-this.state.actualTime,"deg)")}}),Object(d.jsx)("div",{className:"clockWrapper"})]})}}]),s}(n.a.Component)),p=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,c=e.getLCP,i=e.getTTFB;s(t),a(t),n(t),c(t),i(t)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.c1da850b.chunk.js.map