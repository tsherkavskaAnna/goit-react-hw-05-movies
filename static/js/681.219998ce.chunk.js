"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{6681:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(885),a=n(2791),c=n(6871),u=n(7770),i="Review_reviews__OI+k5",s="Review_item__MXM8E",o="Review_author__ms+C9",p="Review_content__oqHHS",v="Review_noReviews__cIXFm",f=n(184);function d(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],d=t[1],h=(0,c.UO)().movieId;return(0,a.useEffect)((function(){u.Z.getMovieReview(h).then(d)}),[h]),(0,f.jsx)(f.Fragment,{children:0!==n.length?(0,f.jsx)("ul",{className:i,children:n.map((function(e){return(0,f.jsxs)("li",{className:s,children:[(0,f.jsxs)("h2",{className:o,children:["Author: ",e.author]}),(0,f.jsx)("p",{className:p,children:e.content})]},e.id)}))}):(0,f.jsx)("p",{className:v,children:"We don't have reviews for this movie"})})}},7770:function(e,t,n){var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),i=n.n(u),s="ff8c1bd9b42b07cf6632c931dd788828",o="https://api.themoviedb.org/3/",p=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"trending/movie/day?api_key=").concat(s),e.next=3,i().get(t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"movie/").concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={getTrendingMovie:p,getMovieById:v,getMovieByQuery:h,getMovieCast:f,getMovieReview:d};t.Z=l}}]);
//# sourceMappingURL=681.219998ce.chunk.js.map