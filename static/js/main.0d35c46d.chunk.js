(this.webpackJsonpsimbir=this.webpackJsonpsimbir||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(22),r=a.n(c),i=(a(50),a(80)),o=a(81),j=a(82),d=a(2),u=a(20),l=(a(51),a(12)),h=a(78),b=a(0);function O(e){var t=e.click,a=e.leagues;return Object(b.jsx)(b.Fragment,{children:null===a||void 0===a?void 0:a.map((function(e){var a,n,s;return Object(b.jsxs)("tr",{onClick:function(){return t(e.id)},children:[Object(b.jsx)("td",{children:null===(a=e.area)||void 0===a?void 0:a.name}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:null===(n=e.currentSeason)||void 0===n?void 0:n.startDate}),Object(b.jsx)("td",{children:null===(s=e.currentSeason)||void 0===s?void 0:s.endDate})]},e.id)}))})}var m=a(84),g=a(83);function v(e){var t=e.matches;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"\u041c\u0430\u0442\u0447\u0438 \u0432 \u0442\u0443\u0440\u0435"}),t&&t.map((function(e){return Object(b.jsx)(m.a,{children:Object(b.jsx)(g.a,{children:Object(b.jsxs)(g.a.Item,{className:"".concat("FINISHED"===e.status?"match__finished":"match__scheduled"),children:[Object(b.jsx)("div",{className:"match_stat",children:new Date(e.utcDate).toLocaleDateString()}),Object(b.jsxs)("div",{className:"match_stat",children:[e.homeTeam.name," ",e.score.fullTime.homeTeam," : ",e.score.fullTime.awayTeam," ",e.awayTeam.name," "]}),Object(b.jsxs)("div",{className:"match_stat",children:["\u0413\u0440\u0443\u043f\u043f\u0430: ",e.group]})]})})},e.id)}))]})}var x=a(23),f=a(29);function p(e){var t=e.cb,a=e.data,n=s.a.useState(a),c=Object(l.a)(n,2),r=c[0],i=c[1],o=function(e){i(Object(f.a)(Object(f.a)({},r),{},Object(x.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"\u041e\u0442"}),Object(b.jsx)("input",{type:"date",name:"startDate",onChange:o,value:(null===r||void 0===r?void 0:r.startDate)||""}),Object(b.jsx)("span",{children:"\u0414\u043e"}),Object(b.jsx)("input",{type:"date",name:"endDate",onChange:o,value:(null===r||void 0===r?void 0:r.endDate)||""}),Object(b.jsx)("button",{type:"button",onClick:function(){r&&t(r)},children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})]})}function S(e){var t=e.cb,a=e.data,n=s.a.useState(a),c=Object(l.a)(n,2),r=c[0],i=c[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",{type:"text",placeholder:"YYYY",value:r,onInput:function(e){i(e.target.value)},onBlur:function(){t(r)}})})}var L=a(85);function w(e){var t=Object(d.f)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(L.a,{onClick:function(){t.goBack()},children:"\u041d\u0430\u0437\u0430\u0434"})})}var k=a(19),y=a(4),E=a.n(y),T=a(10),F=a(11),N=a(5),I=a(44),C=a.n(I),_=a(28),D=a.n(_);C.a.config(),console.log("12e61288dd6a46c3904348b5e08c24d4"),D.a.interceptors.request.use((function(e){return e.headers["X-Auth-token"]="12e61288dd6a46c3904348b5e08c24d4",e}));var M=function e(){Object(F.a)(this,e),this.setSessionStorage=function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},this.getItemFromSessionStorage=function(e){return sessionStorage.getItem(e)},this.getLeague=function(){var e=Object(T.a)(E.a.mark((function e(t){var a,n,s,c,r,i=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:"",n=i.length>2&&void 0!==i[2]?i[2]:"",s=i.length>3&&void 0!==i[3]?i[3]:"",e.next=5,D.a.get("http://api.football-data.org/v2/competitions/".concat(t,"/matches?season=").concat(a,"&dateFrom=").concat(n,"&dateTo=").concat(s));case 5:return c=e.sent,r=c.data,e.abrupt("return",r.matches);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};Object(N.b)({enforceActions:"never"});var A=new function e(){var t=this;Object(F.a)(this,e),this.league=[],this.isLoading=!1,this.isError={message:null},this.setLeague=function(e){t.league=e},this.setSessionStorage=function(e,a){t.leagueService.setSessionStorage(e,a)},this.getSessionStorage=function(e){return JSON.parse(t.leagueService.getItemFromSessionStorage(e))},this.getLeague=function(){var e=Object(T.a)(E.a.mark((function e(a,n,s,c){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.leagueService.getLeague(a,n,s,c);case 4:r=e.sent,t.setLeague(r),t.isLoading=!1,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.isError.message=e.t0.message;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a,n,s){return e.apply(this,arguments)}}(),Object(N.d)(this),this.leagueService=new M},B=Object(k.a)((function(e){var t=Object(d.g)().id,a=s.a.useState({}),n=Object(l.a)(a,2),c=n[0],r=n[1],i=s.a.useState(""),o=Object(l.a)(i,2),j=o[0],u=o[1],h=A.league,O=A.isLoading,m=A.isError,g=A.getLeague,x=A.setSessionStorage,f=A.getSessionStorage;s.a.useEffect((function(){g(t,j,c.startDate,c.endDate)}),[c,j,t,g]),s.a.useEffect((function(){var e=f("dateLeague"),t=f("season");e&&r(e),t&&u(t)}),[f]);return(null===m||void 0===m?void 0:m.message)?Object(b.jsx)("h3",{children:null===m||void 0===m?void 0:m.message}):O?Object(b.jsx)("h3",{children:"Loading..."}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"league_ma",children:[Object(b.jsx)(w,{}),Object(b.jsxs)("div",{className:"search__type",children:[Object(b.jsx)(p,{cb:function(e){x("dateLeague",e),r(e)},data:c}),Object(b.jsx)(S,{cb:function(e){x("season",e),u(e)},data:j})]}),Object(b.jsx)(v,{matches:h})]})})}));function q(e){var t=e.cb,a=e.datas,n=e.paramsFilterBy,c=s.a.useState(""),r=Object(l.a)(c,2),i=r[0],o=r[1],j=s.a.useState([]),d=Object(l.a)(j,2),u=d[0],h=d[1];s.a.useEffect((function(){h(a)}),[a]);var O=function(e){return null===u||void 0===u?void 0:u.filter((function(t){var a=m(t,n).toLowerCase(),s=e.toLowerCase();return a.includes(s)}))},m=function(e,t){for(var a=t.split("."),n=e,s=0;s<a.length;s++)if(!(n=n["".concat(a[s])]))return;return n};return Object(b.jsx)("div",{className:"input_for_search",children:Object(b.jsxs)("label",{children:[" \u041f\u043e\u0438\u0441\u043a: ",Object(b.jsx)("input",{type:"text",onInput:function(e){localStorage.setItem("input",e.target.value),o(e.target.value),t(O(e.target.value))},value:i,id:"search"})," "]})})}var J=function e(){Object(F.a)(this,e),this.getLeagues=Object(T.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("http://api.football-data.org/v2/competitions/");case 2:return t=e.sent,a=t.data,e.abrupt("return",a.competitions);case 5:case"end":return e.stop()}}),e)})))};Object(N.b)({enforceActions:"never"});var Y=new function e(){var t=this;Object(F.a)(this,e),this.leagues=[],this.isLoading=!1,this.isError={message:null},this.setLeagues=function(e){t.leagues=e},this.getLeagues=Object(T.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.leaguesService.getLeagues();case 4:a=e.sent,t.setLeagues(a),t.isLoading=!1,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.isError.message=e.t0.message;case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),Object(N.d)(this),this.leaguesService=new J},U=Object(k.a)((function(e){var t=s.a.useState(),a=Object(l.a)(t,2),n=a[0],c=a[1],r=s.a.useState("name"),i=Object(l.a)(r,2),o=i[0],j=i[1],u=Y.leagues,m=Y.isLoading,g=Y.isError,v=Y.getLeagues,x=Object(d.f)();s.a.useEffect((function(){localStorage.getItem("filter")&&j(localStorage.getItem("filter")),v()}),[v]),s.a.useEffect((function(){c(u)}),[u]);return(null===g||void 0===g?void 0:g.message)?Object(b.jsx)("h3",{children:null===g||void 0===g?void 0:g.message}):m?Object(b.jsx)("h3",{children:"Loading..."}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(d.c,{children:[Object(b.jsxs)(d.a,{exact:!0,path:"/leagues",children:[Object(b.jsx)(w,{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043b\u0438\u0433"}),Object(b.jsxs)("div",{className:"search__type",children:[Object(b.jsx)(q,{cb:function(e){console.log(e),c(e)},datas:u,paramsFilterBy:o}),Object(b.jsxs)("select",{defaultValue:o,onChange:function(e){j(e.target.value)},children:[Object(b.jsx)("option",{disabled:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"}),Object(b.jsx)("option",{value:"name",selected:"name"===o,children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043b\u0438\u0433\u0438"}),Object(b.jsx)("option",{value:"area.name",selected:"area.name"===o,children:"\u0421\u0442\u0440\u0430\u043d\u0430"})]})]})]}),Object(b.jsxs)(h.a,{responsive:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u0421\u0442\u0440\u0430\u043d\u0430"}),Object(b.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(b.jsx)("th",{children:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430"}),Object(b.jsx)("th",{children:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f"})]})}),Object(b.jsx)("tbody",{children:Object(b.jsx)(O,{leagues:n,click:function(e){x.push("/leagues/".concat(e))}})})]})]}),Object(b.jsx)(d.a,{path:"/leagues/:id",children:Object(b.jsx)(B,{})})]})})})),V=a(79);function H(e){var t=e.click,a=e.teams;return a?Object(b.jsx)(b.Fragment,{children:a.map((function(e){var a;return Object(b.jsxs)("tr",{onClick:function(){return t(e.id)},children:[Object(b.jsx)("div",{className:"crestUrl",children:Object(b.jsx)(V.a,{src:e.crestUrl})}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.shortName}),Object(b.jsx)("td",{children:null===(a=e.area)||void 0===a?void 0:a.name}),Object(b.jsx)("td",{children:e.clubColors.split("/").map((function(e){return Object(b.jsx)("span",{style:{display:"inline-block",width:"15px",height:"15px",borderRadius:"50%",backgroundColor:e.split(" ").join(""),marginLeft:"5px"}},"".concat(e))}))})]},e.id)}))}):Object(b.jsx)("tr",{children:Object(b.jsx)("td",{children:"Loading"})})}var R=function e(){Object(F.a)(this,e),this.getTeam=function(){var e=Object(T.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("http://api.football-data.org/v2/teams/".concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};Object(N.b)({enforceActions:"never"});var W=new function e(){var t=this;Object(F.a)(this,e),this.team=[],this.squad=[],this.matches=[],this.activeCompetitions=[],this.isLoading=!1,this.isError={message:null},this.setTeam=function(e){t.team=e},this.setMatches=function(e){t.matches=e},this.setSquad=function(e){t.squad=e},this.setActiveCompetitions=function(e){t.activeCompetitions=e},this.getTeam=function(){var e=Object(T.a)(E.a.mark((function e(a){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.teamService.getTeam(a);case 4:n=e.sent,t.setTeam(n),t.setSquad(n.squad),t.setActiveCompetitions(n.activeCompetitions),t.isLoading=!1,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t.isError.message=e.t0.message;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),this.getMatches=function(){var e=Object(T.a)(E.a.mark((function e(a){var n,s,c,r=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:"",s=r.length>2&&void 0!==r[2]?r[2]:"",e.prev=2,t.isLoading=!0,e.next=6,t.teamService.getMatchesForTeam(a,n,s);case 6:c=e.sent,t.setMatches(c),t.isLoading=!1,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),t.isError.message=e.t0.message;case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),Object(N.d)(this),this.teamService=new R},X=function e(){Object(F.a)(this,e),this.setSessionStorage=function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},this.getItemFromSessionStorage=function(e){return sessionStorage.getItem(e)},this.getMatchesForTeam=function(){var e=Object(T.a)(E.a.mark((function e(t,a,n){var s,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("http://api.football-data.org/v2/teams/".concat(t,"/matches?dateFrom=").concat(a,"&dateTo=").concat(n));case 2:return s=e.sent,c=s.data,e.abrupt("return",c.matches);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()};Object(N.b)({enforceActions:"never"});var z=new function e(){var t=this;Object(F.a)(this,e),this.matches=[],this.isLoading=!1,this.isError={message:null},this.setMatches=function(e){t.matches=e},this.setSessionStorage=function(e,a){t.calendarService.setSessionStorage(e,a)},this.getSessionStorage=function(e){return JSON.parse(t.calendarService.getItemFromSessionStorage(e))},this.getMatches=function(){var e=Object(T.a)(E.a.mark((function e(a){var n,s,c,r=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:"",s=r.length>2&&void 0!==r[2]?r[2]:"",e.prev=2,t.isLoading=!0,e.next=6,t.calendarService.getMatchesForTeam(a,n,s);case 6:c=e.sent,t.setMatches(c),t.isLoading=!1,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),t.isError.message=e.t0.message;case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),Object(N.d)(this),this.calendarService=new X},G=Object(k.a)((function(){var e=Object(d.g)().id,t=s.a.useState({}),a=Object(l.a)(t,2),n=a[0],c=a[1],r=z.matches,i=z.getMatches,o=z.isError,j=z.isLoading,u=z.clearStorage,h=z.setSessionStorage,O=z.getSessionStorage;s.a.useEffect((function(){i(e,n.startDate,n.endDate)}),[e,n,i,u,O]),s.a.useEffect((function(){var e=O("date");e&&c(e)}),[O]);return(null===o||void 0===o?void 0:o.message)?Object(b.jsx)("h3",{children:null===o||void 0===o?void 0:o.message}):j?Object(b.jsx)("h3",{children:"Loading..."}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"team_calendar_match",children:[Object(b.jsx)(w,{}),Object(b.jsx)("h3",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430: "}),Object(b.jsx)(p,{cb:function(e){h("date",e),c(e)},data:n}),Object(b.jsx)(v,{matches:r})]})})})),K=Object(k.a)((function(e){var t=Object(d.g)().id,a=W.isLoading,n=W.isError,c=W.team,r=W.getTeam,i=W.squad,o=W.activeCompetitions;return s.a.useEffect((function(){r(t)}),[t,r]),(null===n||void 0===n?void 0:n.message)?Object(b.jsx)("h3",{children:null===n||void 0===n?void 0:n.message}):a?Object(b.jsx)("h3",{children:"Loading..."}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(d.c,{children:[Object(b.jsxs)(d.a,{exact:!0,path:"/teams/:id",children:[Object(b.jsx)(w,{}),Object(b.jsx)("div",{className:"team",children:Object(b.jsxs)(m.a,{children:[Object(b.jsx)(m.a.Img,{variant:"top",src:null===c||void 0===c?void 0:c.crestUrl}),Object(b.jsxs)(m.a.Body,{children:[Object(b.jsx)(m.a.Title,{children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043a\u043e\u043c\u0430\u043d\u0434\u0435"}),Object(b.jsxs)(m.a.Text,{children:[Object(b.jsxs)("p",{children:["\u041e\u0441\u043d\u043e\u0432\u0430\u043d: ",null===c||void 0===c?void 0:c.founded]}),Object(b.jsxs)("p",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",null===c||void 0===c?void 0:c.name]}),Object(b.jsxs)("p",{children:["\u0410\u0434\u0440\u0435\u0441: ",null===c||void 0===c?void 0:c.address]}),Object(b.jsxs)("p",{children:["E-mail: ",null===c||void 0===c?void 0:c.email]}),Object(b.jsxs)("p",{children:["Website: ",null===c||void 0===c?void 0:c.website]}),Object(b.jsx)(u.b,{to:"/teams/".concat(t,"/calendar"),children:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043c\u0430\u0442\u0447\u0435\u0439"})]})]})]})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"\u0421\u043e\u0441\u0442\u0430\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),Object(b.jsx)("div",{className:"team_squad",children:i.map((function(e){return Object(b.jsx)(m.a,{children:Object(b.jsxs)(m.a.Body,{children:[Object(b.jsx)(m.a.Title,{children:e.name}),Object(b.jsxs)(m.a.Text,{children:[Object(b.jsxs)("p",{children:["\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c: ",e.nationality]}),Object(b.jsxs)("p",{children:["\u041f\u043e\u0437\u0438\u0446\u0438\u044f: ",e.position]}),Object(b.jsxs)("p",{children:["\u0421\u0442\u0440\u0430\u043d\u0430 \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0440\u043e\u0434\u0438\u043b\u0441\u044f: ",e.countryOfBirth]})]})]})},e.id)}))})]}),Object(b.jsxs)("div",{className:"team_competitions",children:[Object(b.jsx)("h3",{children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u044f"}),o.map((function(e){return Object(b.jsx)(m.a,{children:Object(b.jsxs)(g.a,{children:[Object(b.jsxs)(g.a.Item,{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u0439: ",e.name]}),Object(b.jsxs)(g.a.Item,{children:["\u041a\u043e\u0434: ",e.code]}),Object(b.jsxs)(g.a.Item,{children:["\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f: ",null===e||void 0===e?void 0:e.area.name]})]})},e.id)}))]})]}),Object(b.jsx)(d.a,{path:"/teams/:id/calendar",children:Object(b.jsx)(G,{})})]})})})),P=function e(){Object(F.a)(this,e),this.getTeams=Object(T.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("http://api.football-data.org/v2/teams");case 2:return t=e.sent,a=t.data,e.abrupt("return",a.teams);case 5:case"end":return e.stop()}}),e)})))};Object(N.b)({enforceActions:"never"});var Q=new function e(){var t=this;Object(F.a)(this,e),this.teams=[],this.isLoading=!1,this.isError={message:null},this.setTeams=function(e){t.teams=e},this.getTeams=Object(T.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.teamsService.getTeams();case 4:a=e.sent,t.setTeams(a),t.isLoading=!1,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.isError.message=e.t0.message;case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),Object(N.d)(this),this.teamsService=new P},Z=Object(k.a)((function(e){var t=s.a.useState([]),a=Object(l.a)(t,2),n=a[0],c=a[1],r=Q.teams,i=Q.isLoading,o=Q.getTeams,j=Q.isError,u=s.a.useState("name"),O=Object(l.a)(u,2),m=O[0],g=O[1],v=Object(d.f)();s.a.useEffect((function(){o()}),[o]),s.a.useEffect((function(){c(r)}),[r]);return(null===j||void 0===j?void 0:j.message)?Object(b.jsx)("h3",{children:null===j||void 0===j?void 0:j.message}):i?Object(b.jsx)("h3",{children:"Loading..."}):Object(b.jsxs)(d.c,{children:[Object(b.jsxs)(d.a,{exact:!0,path:"/teams",children:[Object(b.jsx)(w,{}),Object(b.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u0430\u043d\u0434"}),Object(b.jsxs)("div",{className:"search__type",children:[Object(b.jsx)(q,{datas:r,cb:function(e){c(e)},paramsFilterBy:m}),Object(b.jsxs)("select",{defaultValue:"name",onChange:function(e){g(e.target.value)},children:[Object(b.jsx)("option",{disabled:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"}),Object(b.jsx)("option",{value:"name",selected:"name"===m,children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),Object(b.jsx)("option",{value:"area.name",selected:"area.name"===m,children:"\u0421\u0442\u0440\u0430\u043d\u0430"})]})]}),Object(b.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Crest"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Short name"}),Object(b.jsx)("th",{children:"Area"}),Object(b.jsx)("th",{children:"Club colors"})]})}),Object(b.jsx)("tbody",{children:Object(b.jsx)(H,{click:function(e){v.push("/teams/".concat(e))},teams:n})})]})]}),Object(b.jsx)(d.a,{path:"/teams/:id",children:Object(b.jsx)(K,{})})]})}));var $=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{exact:!0,path:"/",children:Object(b.jsxs)(o.a,{className:"main justify-content-md-center align-items-md-center",children:[Object(b.jsx)(u.b,{to:"/leagues",children:Object(b.jsx)(j.a,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043b\u0438\u0433"})}),Object(b.jsx)(u.b,{to:"/teams",children:Object(b.jsx)(j.a,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u0430\u043d\u0434"})})]})}),Object(b.jsx)(d.a,{path:"/leagues",children:Object(b.jsx)(U,{})}),Object(b.jsx)(d.a,{path:"/teams",children:Object(b.jsx)(Z,{})})]})})};r.a.render(Object(b.jsx)(u.a,{children:Object(b.jsx)($,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.0d35c46d.chunk.js.map