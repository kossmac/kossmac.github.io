(this.webpackJsonpmetronomy=this.webpackJsonpmetronomy||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/metronome.a67d5ec0.svg"},,,,,,,function(e,t,n){e.exports=n(25)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),c=n.n(i),o=(n(19),n(20),n(1));var u=function(e){var t=e.title,n=e.onItemClicked,a=e.isActive;return r.a.createElement("div",{className:a?"tab":"tab tabitem--inactive",onClick:n},r.a.createElement("p",{className:"tabitem__title"},t))},l=(n(21),n(22),n(7)),s=n.n(l),m=new AudioContext,d=Object(a.createContext)({audioContext:m});var v=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(60),u=Object(o.a)(c,2),l=u[0],m=u[1],v=Object(a.useState)(null),f=Object(o.a)(v,2),p=f[0],y=f[1],h=Object(a.useContext)(d).audioContext;function b(){var e=h.createOscillator();e.type="sawtooth";var t=h.createGain();t.gain.exponentialRampToValueAtTime(1e-5,h.currentTime+.04),e.connect(t),t.connect(h.destination),e.start(0)}return r.a.createElement("div",{className:"metronome"},r.a.createElement("p",null,r.a.createElement("img",{src:s.a,alt:"metronome",className:n?"pendel animation":"pendel"})),r.a.createElement("label",null,"Enter BPM here: "),r.a.createElement("input",{readOnly:n,type:"number",id:"quantity",value:l,min:"5",max:"240",onChange:function(e){var t=function(e){return 6e4/e}(e.target.value);document.getElementsByClassName("pendel")[0].style.animationDuration=t+"ms",m(e.target.value)}}),r.a.createElement("button",{onClick:function(){n?clearInterval(p):(y(setInterval(b,6e4/l)),b()),i(!n)}},n?"Stop":"Start"))};n(23);var f=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,e.name),r.a.createElement("div",{className:"string",id:e.frequency,onMouseEnter:function(){return e.onHover(e.frequency)}}))};var p=function(){var e=Object(a.useContext)(d).audioContext,t=Object(a.useState)(void 0),n=Object(o.a)(t,2),i=n[0],c=n[1];function u(t){i.frequency.value=t,i.start(),i.stop(e.currentTime+1.5);var n=e.createOscillator();i.type="sawtooth",n.connect(e.destination),c(n)}return Object(a.useEffect)((function(){var t=e.createOscillator();t.type="sawtooth",t.connect(e.destination),c(t)}),[e]),r.a.createElement("div",{className:"guitar"},[{name:"e2",frequency:"82.41"},{name:"a2",frequency:"110"},{name:"d3",frequency:"146.83"},{name:"g3",frequency:"196.00"},{name:"b3",frequency:"246.94"},{name:"e4",frequency:"329.63"}].map((function(e,t){var n=e.name,a=e.frequency;return r.a.createElement(f,{name:n,frequency:a,onHover:u,key:t})})))};var y=function(){return r.a.createElement("div",null,r.a.createElement(p,null))},h=n(4),b=n.n(h),E=n(8),O=n(9),j=n(10),C=n(2),g=n(13),x=n(12),S=n(11);var w=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){!function(){var n=e.audioData,a=t.current.height,r=t.current.width,i=t.current.getContext("2d"),c=0,o=r/n.length,u=i.createLinearGradient(0,0,r,0);u.addColorStop("0","orange"),u.addColorStop("0.2","yellow"),u.addColorStop("0.4","green"),u.addColorStop("0.6","cyan"),u.addColorStop("0.8","blue"),u.addColorStop("1.0","violet"),i.lineWidth=4,i.strokeStyle=u,i.clearRect(0,0,r,a),i.beginPath(),i.moveTo(0,a/2);var l,s=Object(S.a)(n);try{for(s.s();!(l=s.n()).done;){var m=l.value/255*a;i.lineTo(c,m),c+=o}}catch(d){s.e(d)}finally{s.f()}i.lineTo(c,a/2),i.stroke()}()})),r.a.createElement("canvas",{width:"750",height:"300",ref:t,style:{paddingTop:"50px"}})},A=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).state={audioData:new Uint8Array(0)},a.animate=a.animate.bind(Object(C.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.audioContext=new window.AudioContext,this.analyser=this.audioContext.createAnalyser(),this.audioArray=new Uint8Array(this.analyser.frequencyBinCount),this.input=this.audioContext.createMediaStreamSource(this.props.audio),this.input.connect(this.analyser),this.aniID=requestAnimationFrame(this.animate)}},{key:"animate",value:function(){this.analyser.getByteTimeDomainData(this.audioArray),this.setState({audioData:this.audioArray}),this.aniID=requestAnimationFrame(this.animate)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.aniID),this.analyser.disconnect(),this.input.disconnect()}},{key:"render",value:function(){return r.a.createElement(w,{audioData:this.state.audioData})}}]),n}(a.Component);var k=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],i=t[1];function c(){return(c=Object(E.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0});case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"App"},n?r.a.createElement(A,{audio:n}):"")};var q=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1],c=[{title:"Metronome",content:r.a.createElement(v,null)},{title:"Tuner",content:r.a.createElement(y,null)},{title:"Visualization",content:r.a.createElement(k,null)}];return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"tabs"},c.map((function(e,t){var a=e.title;return r.a.createElement(u,{title:a,onItemClicked:function(){return i(t)},isActive:n===t,key:t})}))),r.a.createElement("div",{className:"content"},c.map((function(e,t){var a=e.content;return n===t?a:""}))))};var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Guitar-o-mate"),r.a.createElement(q,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.c89abecc.chunk.js.map