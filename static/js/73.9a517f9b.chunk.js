"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[73],{3073:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var r=n(885),a=n(2791),c=n(6871),u=n(7770),i={list:"CastPage_list__ievSZ",image:"CastPage_image__IC57Z"},s=n(184);function o(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],o=e[1],p=(0,c.UO)().movieId;return(0,a.useEffect)((function(){u.Z.getMovieCast(p).then(o)}),[p]),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:i.list,children:n&&n.map((function(t){return(0,s.jsxs)("li",{className:i.item,children:[(0,s.jsx)("img",{className:i.image,src:t.profile_path?"https://image.tmdb.org/t/p/w300".concat(t.profile_path):"https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",alt:t.name,width:"100",height:"150"}),(0,s.jsx)("h2",{children:t.name})]},t.id)}))})})}},7770:function(t,e,n){var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),i=n.n(u),s="ff8c1bd9b42b07cf6632c931dd788828",o="https://api.themoviedb.org/3/",p=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(o,"trending/movie/day?api_key=").concat(s),t.next=3,i().get(e);case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(o,"movie/").concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h={getTrendingMovie:p,getMovieById:f,getMovieByQuery:d,getMovieCast:l,getMovieReview:v};e.Z=h}}]);
//# sourceMappingURL=73.9a517f9b.chunk.js.map