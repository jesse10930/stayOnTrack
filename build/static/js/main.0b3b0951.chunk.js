(this["webpackJsonpstay-ontrack"]=this["webpackJsonpstay-ontrack"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(6),r=a.n(c),l=a(1),i=function(e){var t=e.startBtn,a=e.sessList;return!t&&s.a.createElement("div",{className:"all-sessions-container"},Object.keys(a).map((function(e,t){return s.a.createElement("div",{className:"session-container",key:Math.floor(1e3*Math.random()+1)},s.a.createElement("h3",null,"Session ",Object.keys(a).indexOf(e)+1," End - ",e),s.a.createElement("br",null),s.a.createElement("ul",{className:"session-ul"},a[e].map((function(e,t){return s.a.createElement("li",{className:"session-task",key:t},e)}))))})))},m=function(e){var t=e.curTaskList;return s.a.createElement("div",{className:"curr-task-ul-container"},s.a.createElement("ul",{className:"curr-task-ul"},t.map((function(e,t){return s.a.createElement("li",{key:t},e)}))))},o=function(e){var t=e.curTaskList,a=e.updateCurTaskListState,c=e.sessList,r=e.updateSessListState,i=e.startBtn,o=Object(n.useState)(""),u=Object(l.a)(o,2),d=u[0],E=u[1],p=Object(n.useState)(""),f=Object(l.a)(p,2),v=f[0],b=f[1],k=Object(n.useState)(""),g=Object(l.a)(k,2),N=g[0],S=g[1],O=Object(n.useState)(" am"),h=Object(l.a)(O,2),y=h[0],j=h[1];return s.a.createElement("div",{className:"user-input-comp-container",style:{display:i?"none":""}},s.a.createElement("div",{className:"form-container"},s.a.createElement("form",{className:"task-form",autoComplete:"off",onSubmit:function(e){e.preventDefault(),d?(t.push(d),a(t),E(""),document.getElementById("add-task").blur(),e.target.reset()):alert("No Task Entered!")}},s.a.createElement("input",{type:"text",name:"task",placeholder:"Enter New Task...",onChange:function(e){E(e.target.value)}}),s.a.createElement("br",null),s.a.createElement("input",{id:"add-task",type:"submit",className:"add-task-btn",value:"Add Task"})),s.a.createElement("form",{className:"time-form",autoComplete:"off",onSubmit:function(e){e.preventDefault(),0===v.length||0===N.length?alert("No time entered!"):0===t.length?alert("Enter all session tasks before end time"):(c[v+N+y]=t,r(c),a([]),document.getElementById("add-end-time").blur(),e.target.reset(),j(" am"))}},s.a.createElement("select",{name:"hours",id:"hours",onChange:function(e){b(e.target.value)}},s.a.createElement("option",{value:""},"hr"),s.a.createElement("option",{value:"01"},"1"),s.a.createElement("option",{value:"02"},"2"),s.a.createElement("option",{value:"03"},"3"),s.a.createElement("option",{value:"04"},"4"),s.a.createElement("option",{value:"05"},"5"),s.a.createElement("option",{value:"06"},"6"),s.a.createElement("option",{value:"07"},"7"),s.a.createElement("option",{value:"08"},"8"),s.a.createElement("option",{value:"09"},"9"),s.a.createElement("option",{value:"10"},"10"),s.a.createElement("option",{value:"11"},"11"),s.a.createElement("option",{value:"12"},"12")),s.a.createElement("select",{name:"minutes",id:"minutes",onChange:function(e){S(e.target.value)}},s.a.createElement("option",{value:""},"min"),s.a.createElement("option",{value:":00"},":00"),s.a.createElement("option",{value:":15"},":15"),s.a.createElement("option",{value:":30"},":30"),s.a.createElement("option",{value:":45"},":45")),s.a.createElement("select",{name:"am-pm",id:"am-pm",onChange:function(e){j(e.target.value)}},s.a.createElement("option",{value:" am",defaultValue:!0},"am"),s.a.createElement("option",{value:" pm"},"pm")),s.a.createElement("br",null),s.a.createElement("input",{id:"add-end-time",type:"submit",className:"end-time-btn",value:"Add End Time"}))),s.a.createElement("div",{className:"current-tasks-container"},s.a.createElement(m,{curTaskList:t})))},u=function(e){var t=e.startBtn,a=e.sessList,n=e.updateStartButtonState;return s.a.createElement("div",{className:"start-btn-comp-container",style:{display:t?"none":""}},s.a.createElement("div",{className:"start-btn-activate"},Object.keys(a).length>0?s.a.createElement("div",{className:"start-btn-comp-container"},s.a.createElement("input",{id:"start",type:"submit",className:"start-btn",value:"Start Day!",onClick:function(e){e.preventDefault(),n(),document.getElementById("start").blur()}})):null))},d=a(4),E=function(e){var t=e.totCountdownSecs,a=e.sessEndTime,c=e.curEndTimeSecs,r=Object(n.useState)(t),i=Object(l.a)(r,2),m=i[0],o=i[1],u=Object(n.useState)(!1),d=Object(l.a)(u,2),E=d[0],p=d[1],f=document.getElementById("beep");Object(n.useEffect)((function(){var e;if(m>0)return E||p(!0),e=setInterval((function(){var e=new Date,t=60*(60*e.getHours()+e.getMinutes())+e.getSeconds();o(c-t)}),1e3),function(){return clearInterval(e)};E&&(setTimeout((function(){f.play()}),1e3),p(!1))}),[m]),Object(n.useEffect)((function(){return o(t)}),[t]);return s.a.createElement("div",{className:"countdown-comp-container"},s.a.createElement("div",{className:"countdown-timer"},function(e){var t=(e-e%60)/60,a=(t-t%60)/60,n=String(a<10?"0"+a:a),s=t-60*a<10?"0"+String(t-60*a):String(t-60*a),c=e-60*t<10?"0"+String(e-60*t):String(e-60*t);return e-60*t<0?"".concat(n,":").concat(s,":00"):"".concat(n,":").concat(s,":").concat(c)}(m)),s.a.createElement("div",{className:"countdown-endtime"},a))},p=function(e){var t=e.sessTasks,a=e.onCheck;return void 0!==t&&s.a.createElement("form",{className:"checklist-comp-container"},t.map((function(e,t){return s.a.createElement("div",{key:Math.floor(1e3*Math.random()+t),className:"check-item"},s.a.createElement("input",{className:"check",type:"checkbox",id:t,name:e,onClick:a}),s.a.createElement("label",{className:"item",htmlFor:e},e))})))},f=function(e){var t=e.id,a=e.time,n=e.sessTasks;return s.a.createElement("div",{className:"endofdayitem-container"},s.a.createElement("h3",null,"Session ",t," - ",a),s.a.createElement("br",null),s.a.createElement("div",{className:"endofdayitem-lists"},s.a.createElement("ul",{className:"endofdayitem-ul"},n[0].map((function(e,t){return s.a.createElement("li",{className:"completed-task",key:t},e)}))),s.a.createElement("ul",{className:"endofdayitem-ul"},n[1].map((function(e,t){return s.a.createElement("li",{className:"not-completed-task",key:t},e)})))))},v=function(e){var t=e.endTimes,a=e.tasks;return s.a.createElement("div",{className:"endofdaylist-comp-container"},t.map((function(e,n){return s.a.createElement(f,{id:t.indexOf(e)+1,key:n,time:e,sessTasks:a[t.indexOf(e)]})})))},b=function(e){var t=e.sessList,a=Object(n.useState)(0),c=Object(l.a)(a,2),r=c[0],i=c[1],m=Object(n.useState)([]),o=Object(l.a)(m,2),u=o[0],f=o[1],b=Object(n.useState)(0),k=Object(l.a)(b,2),g=k[0],N=k[1],S=Object(n.useState)(Object.keys(t)),O=Object(l.a)(S,1)[0],h=Object(n.useState)(0),y=Object(l.a)(h,2),j=y[0],T=y[1],L=[],C=t[O[r-1]];Object(n.useEffect)((function(){var e=new Date,t=60*(60*e.getHours()+e.getMinutes())+e.getSeconds(),a=O[r].substring(0,2),n=O[r].substring(3,5),s=O[r].charAt(6),c=60*(60*parseInt(a)+parseInt(n))+("p"===s?43200:0);12===parseInt(a)&&("a"===s?c+=43200:c-=43200),T(c),N(c-t),i(r+1)}),[]);return s.a.createElement("div",{className:"timer-comp-container"},O.length>0&&g>0&&r<=O.length&&s.a.createElement("div",{className:"countDown-container"},s.a.createElement(E,{sessEndTime:O[r-1],totCountdownSecs:g,curEndTimeSecs:j})),s.a.createElement("div",{className:"checklist-container"},s.a.createElement(p,{sessTasks:t[O[r-1]],onCheck:function(e){e.target.checked?(L.push(e.target.name),C.splice(C.indexOf(e.target.name),1)):(C.push(e.target.name),L.splice(L.indexOf(e.target.name),1))}})),r<=O.length&&s.a.createElement("div",{className:"next-btn-container"},s.a.createElement("input",{id:"next",type:"submit",className:"next-btn",value:r===O.length?"End Day!":"Next Session",onClick:function(e){if(e.preventDefault(),r<O.length){var t=new Date,a=60*(60*t.getHours()+t.getMinutes())+t.getSeconds(),n=O[r].substring(0,2),s=O[r].substring(3,5),c=O[r].charAt(6),l=60*(60*parseInt(n)+parseInt(s))+("p"===c?43200:0);12===parseInt(n)&&("a"===c?l+=43200:l-=43200),i(r+1),f((function(e){return[].concat(Object(d.a)(e),[[L,C]])})),N(l-a),T(l)}else i(r+1),f((function(e){return[].concat(Object(d.a)(e),[[L,C]])}));document.getElementById("next").blur()}})),r>O.length&&s.a.createElement("div",{className:"endofdaylist-container"},s.a.createElement(v,{tasks:u,endTimes:O})))},k=(a(12),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({}),m=Object(l.a)(r,2),d=m[0],E=m[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),v=f[0],k=f[1];return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"user-input-container"},s.a.createElement(o,{curTaskList:a,sessList:d,startBtn:v,updateCurTaskListState:function(e){c(e)},updateSessListState:function(e){E(e)}})),s.a.createElement("div",{className:"sessions-container"},s.a.createElement(i,{sessList:d,startBtn:v})),s.a.createElement("div",{className:"start-day-button-container"},s.a.createElement(u,{sessList:d,startBtn:v,updateStartButtonState:function(){k(!0)}})),v&&s.a.createElement("div",{className:"timer-container"},s.a.createElement(b,{sessList:d})))});r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.0b3b0951.chunk.js.map