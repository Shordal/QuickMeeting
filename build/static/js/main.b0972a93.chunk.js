(this.webpackJsonpquicksite=this.webpackJsonpquicksite||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(6),c=n(0),l=n.n(c),r=n(3),i=n.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(12);var s=n(4),u=n.n(s),m=n(5),p=function(e,t){switch(t.type){case"POPULATE_NOTES":return t.notes;case"ADD_NOTE":return[].concat(Object(o.a)(e),[{title:t.title,body:t.body}]);case"REMOVE_NOTE":return e.filter((function(e){return e.title!==t.title}));default:return e}},d=function(e,t){switch(t.type){case"HIDE":return t.visable=!1;case"SHOW":return{visable:!0};case"TOGGLE":return!t.visable;default:return e}},f=function(e){var t=e.setVisableToggle,n=e.visable,a=e.body,o=e.setTitle,c=e.setBody,r=e.addNote,i=e.title;return l.a.createElement("div",{className:"NoteApp-hide"},n&&l.a.createElement("p",{className:"NoteApp-inputheader"},"Add Content"),n&&l.a.createElement("form",{className:"NoteApp-inputcontainer",onSubmit:r},l.a.createElement("input",{className:"NoteApp-input",value:i,onChange:function(e){return o(e.target.value)},placeholder:"Title"}),l.a.createElement("textarea",{className:"NoteApp-input",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Body"}),l.a.createElement("div",{className:"Button__center"},l.a.createElement("button",{className:"Button",onClick:function(){t(n)}},n?"Hide":"Show"),l.a.createElement("button",{className:"Button"},"Add Content"))),l.a.createElement("div",{className:"NoteApp-bottom"},!n&&l.a.createElement("div",{className:"NoteApp-hide"},l.a.createElement("button",{className:"Button",onClick:function(){t(n)}},n?"Hide":"Add Content"))))},E=function(e){var t=e.note,n=e.removeNote;return Object(c.useEffect)((function(){return console.log("Setting\xa0up\xa0effect!"),function(){console.log("Cleaning\xa0up\xa0effect!")}}),[]),l.a.createElement("div",{className:"NoteApp-note"},l.a.createElement("h3",{className:"NoteApp-note-text"},t.title),l.a.createElement("p",{className:"NoteApp-note-text"},t.body),l.a.createElement("button",{className:"Button-body",onClick:function(){return n(t.title)}},"X"))};i.a.render(l.a.createElement((function(){document.title="Lone Star Quick Meeting";var e=Object(c.useReducer)(p,[]),t=Object(a.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(""),i=Object(a.a)(r,2),s=i[0],N=i[1],b=Object(c.useState)(""),v=Object(a.a)(b,2),g=v[0],O=v[1],S=Object(c.useReducer)(d,!0),y=Object(a.a)(S,2),h=y[0],A=y[1];Object(c.useEffect)((function(){console.log("Fetching\xa0local\xa0data");var e=JSON.parse(localStorage.getItem("notes"));e&&o({type:"POPULATE_NOTES",notes:e})}),[]),Object(c.useEffect)((function(){console.log("hide or not init load");var e=JSON.parse(localStorage.getItem("visable"));e&&o({type:"SHOW",visable:e})}),[]),Object(c.useEffect)((function(){localStorage.setItem("visable",JSON.stringify(h))}),[h]);var T=function(e){o({type:"REMOVE_NOTE",title:e})};Object(c.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(n))}),[n]);var j=Object(m.a)();return l.a.createElement("div",null,l.a.createElement("div",{className:"NoteApp"},l.a.createElement("img",{src:u.a,className:"App-logo",alt:"OTSBanner"}),n.map((function(e){return l.a.createElement(E,{key:e.title,note:e,removeNote:T})})),l.a.createElement("div",null,l.a.createElement(f,{key:"9",title:s,body:g,visable:h,setVisableToggle:function(e){console.log("Toggle"),A({type:"TOGGLE",visable:e})},setTitle:N,setBody:O,addNote:function(e){e.preventDefault(),o({type:"ADD_NOTE",title:s,body:g}),N(""),O("")}}))),l.a.createElement("div",{className:"NoteApp-bottom-left "},l.a.createElement("button",{className:"Button--fullScreen",onClick:j.toggle},j.fullScreen?"Exit FullScreen":"FullScreen")))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,n){e.exports=n.p+"static/media/OTS-Banner.a81e6ec6.svg"},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.b0972a93.chunk.js.map