(this.webpackJsonpcoronavirus_app=this.webpackJsonpcoronavirus_app||[]).push([[0],{19:function(e,t,a){},24:function(e,t,a){e.exports=a(43)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),s=(a(29),a(30),a(6)),o=a(7),i=a(8),d=a(9),m=(a(31),a(32),a(5)),u=(a(19),function(e){return r.a.createElement("button",{className:"hamburger",onClick:e.click},r.a.createElement("div",{className:"hamburger-piece"}),r.a.createElement("div",{className:"hamburger-piece"}),r.a.createElement("div",{className:"hamburger-piece"}))}),p=function(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar_navigation"},r.a.createElement("div",null,r.a.createElement(u,{click:e.drawerClickHandler})),r.a.createElement("div",{className:"toolbar_logo"},r.a.createElement(m.b,{to:"/"},"Aurang!")),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"toolbar_navigation_items"},r.a.createElement("ul",null,r.a.createElement(m.b,{to:"/"},r.a.createElement("li",null,"Pakistan")),r.a.createElement(m.b,{to:"/worldwide"},r.a.createElement("li",null,"World Cases"))))))},h=a(12),v=a.n(h),E=a(14),y=function(e){var t=e.recoveredProps,a=t.newcases,n=t.oldRecover,c=t.todayRecover-n,l={fontSize:"12px",fontStyle:"italic",paddingLeft:"10px",color:"black"},s={fontSize:"12px",fontStyle:"italic",paddingLeft:"10px",color:"green",fontWeight:"bold"};return r.a.createElement("div",{className:"new_cases"},a.latest_stat_by_country.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",{className:"new_cases_title",style:{background:"#1ae396"}},r.a.createElement("h1",null,"Newly Recovered")),r.a.createElement("div",{className:"row",style:{padding:"20px 15px 5px 15px"}},r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{style:{textAlign:"right"}},"Today:")),r.a.createElement("div",{className:"col-6",style:{display:"flex"}},r.a.createElement("h4",{style:{textAlign:"left",paddingRight:"10px"}},e.total_recovered,r.a.createElement("span",{style:0===c?l:s},"+",c)))),r.a.createElement("div",{className:"row",style:{padding:"5px 15px 20px 15px"}},r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{style:{textAlign:"right"}},"Yesterday:")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{style:{textAlign:"left",paddingRight:"10px"}},n))))})))},g=(a(39),function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"loader"})}}]),a}(r.a.Component)),f=(a(40),function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,rank:null,emergency:10,dangerous:20,mild:30,threat:31},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(v.a.mark((function e(){var t,a,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",e.next=3,fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"7232dd1eaamshbe4d4b7f0daf8dfp1e2bc6jsnee3f849aead5"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,r=0,n=0;case 9:if(!(n<a.countries_stat.length)){e.next=16;break}if("Pakistan"!==a.countries_stat[n].country_name){e.next=13;break}return r=n,e.abrupt("break",16);case 13:n++,e.next=9;break;case 16:this.setState({loading:!1,rank:r});case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.rank,a=e.emergency,n=e.dangerous,c=e.mild,l="text";return t<=a&&(l="text e"),t>a&&t<=n&&(l="text d"),t>n&&t<=c&&(l="text m"),t>=e.threat&&(l="text t"),r.a.createElement(r.a.Fragment,null,"Pakistan's rank in the world for most cases: ",r.a.createElement("span",{className:l},r.a.createElement("strong",null,this.state.rank)))}}]),a}(r.a.Component)),x=function(e){var t=e.confirmedProps,a=t.heading,n=t.date,c=t.items,l=t.query;return r.a.createElement("div",null,c.latest_stat_by_country.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",{className:"cards"},r.a.createElement("div",{className:"start"},r.a.createElement("h4",null,a,l),r.a.createElement("h1",null,"Confirmed Cases: ",e.total_cases)),r.a.createElement("h5",null,r.a.createElement(f,null)),r.a.createElement("p",null,"Date: ",n[0]),r.a.createElement("p",{style:{paddingBottom:"5px"}},"Time: ",n[1])))})))},b=(a(41),function(e){var t=e.newcaseProps,a=t.newcases,n=t.oldcases;return r.a.createElement("div",{className:"new_cases"},a.latest_stat_by_country.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",{className:"new_cases_title",style:{background:"#e5a929"}},r.a.createElement("h1",null,"New Cases")),r.a.createElement("div",{className:"row",style:{padding:"20px 15px 5px 15px"}},r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{style:{textAlign:"right"}},"Today:")),r.a.createElement("div",{className:"col-6",style:{display:"flex"}},r.a.createElement("h4",{style:{textAlign:"left",paddingRight:"10px"}},e.new_cases))),r.a.createElement("div",{className:"row",style:{padding:"5px 15px 20px 15px"}},r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{style:{textAlign:"right"}},"Yesterday:")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{style:{textAlign:"left",paddingRight:"10px"}},n))))})))}),w=function(e){var t=e.deathProps,a=t.newcases,n=t.deathPrev,c={fontSize:"12px",fontStyle:"italic",paddingLeft:"10px",color:"red",fontWeight:"bold"};return r.a.createElement("div",{className:"new_cases"},a.latest_stat_by_country.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",{className:"new_cases_title",style:{background:"rgb(213,21,38)"}},r.a.createElement("h1",null,"Total Deaths")),r.a.createElement("div",{className:"row",style:{padding:"20px 15px 5px 15px"}},r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{style:{textAlign:"right"}},"Today:")),r.a.createElement("div",{className:"col-6",style:{display:"flex"}},r.a.createElement("h4",{style:{textAlign:"left",paddingRight:"10px"}},e.total_deaths,r.a.createElement("span",{style:c},"+",e.new_deaths)))),r.a.createElement("div",{className:"row",style:{padding:"5px 15px 20px 15px"}},r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{style:{textAlign:"right"}},"Yesterday:")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{style:{textAlign:"left",paddingRight:"10px"}},n))))})))},_=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,items:[],heading:"Covid-19 Cases in ",query:"Pakistan",date:[],newcases:null,oldcases:null,oldRecover:null,todayRecover:null,deathPrev:null},e.drawerToggleClickHandler=function(){e.setState((function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}))},e.backdropToggleClickHandler=function(){e.setState({sideDrawerOpen:!1})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(v.a.mark((function e(){var t,a,n,r,c,l,s,o,i,d,m,u,p,h,E;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(new Date).toISOString().slice(0,10),a="https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=".concat(this.state.query),e.next=4,fetch(a,{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"7232dd1eaamshbe4d4b7f0daf8dfp1e2bc6jsnee3f849aead5"}});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,l=[],l=(c=r).latest_stat_by_country[0].record_date,s=l.split(" "),o=s,i="https://coronavirus-monitor.p.rapidapi.com/coronavirus/history_by_particular_country_by_date.php?country=".concat(this.state.query,"&date=").concat(t),e.next=16,fetch(i,{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"7232dd1eaamshbe4d4b7f0daf8dfp1e2bc6jsnee3f849aead5"}});case 16:return d=e.sent,e.next=19,d.json();case 19:m=e.sent,u=m.stat_by_country[0].new_cases,p=r.latest_stat_by_country[0].total_recovered,h=m.stat_by_country[0].total_recovered,E=m.stat_by_country[0].total_deaths,this.setState({items:c,newcases:r,oldcases:u,date:o,oldRecover:h,todayRecover:p,deathPrev:E,loading:!1});case 25:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.items,n=e.query,c=e.heading,l=e.date,s=e.newcases,o={heading:c,date:l,items:a,query:n},i={newcases:s,oldcases:e.oldcases},d={newcases:s,oldRecover:e.oldRecover,todayRecover:e.todayRecover},m={newcases:s,deathPrev:e.deathPrev};return t?r.a.createElement(g,null):a?r.a.createElement("div",{style:{height:"100%"}},r.a.createElement("div",{style:{marginTop:"70px"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 offset-lg-2"},r.a.createElement(x,{confirmedProps:o}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(b,{newcaseProps:i})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(y,{recoveredProps:d})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(w,{deathProps:m})))))))):r.a.createElement("div",null,"Hello, sorry")}}]),a}(r.a.Component),k=function(){return r.a.createElement("div",{style:{marginTop:"70px"}},r.a.createElement("h2",{style:{textAlign:"center",paddingTop:"100px"}},"Coming soon"),r.a.createElement("p",{style:{textAlign:"center"}},"will be implemented once I reach home..."))},N=function(e){var t="side_drawer";return e.show&&(t="side_drawer open"),r.a.createElement("nav",{className:t,onClick:e.click},r.a.createElement("ul",null,r.a.createElement(m.b,{to:"/"},r.a.createElement("li",null,"Pakistan")),r.a.createElement(m.b,{to:"/worldwide"},r.a.createElement("li",null,"World Cases"))))},O=(a(42),function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.click})}),j=a(10),C=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).drawerToggleClickHandler=function(){e.setState((function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}))},e.backdropToggleClickHandler=function(){e.setState({sideDrawerOpen:!1})},e.state={sideDrawerOpen:!1,loading:!0},e}return Object(o.a)(a,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=r.a.createElement(O,{click:this.backdropToggleClickHandler})),r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(m.a,null,r.a.createElement(p,null),r.a.createElement(p,{drawerClickHandler:this.drawerToggleClickHandler}),r.a.createElement(N,{show:this.state.sideDrawerOpen,click:this.drawerToggleClickHandler}),e,r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/",exact:!0,component:_}),r.a.createElement(j.a,{path:"/worldwide",component:k}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.e712d203.chunk.js.map