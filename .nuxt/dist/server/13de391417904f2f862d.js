exports.ids=[1],exports.modules={48:function(t,e,n){"use strict";e.a={endpoint:"https://jsonplaceholder.typicode.com"}},49:function(t,e,n){var content=n(52);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("8fe0fe6c",content,!0,t)}},51:function(t,e,n){"use strict";n.r(e);var r=n(49),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},52:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".container[data-v-6899500b]{text-align:center}header[data-v-6899500b]{margin-top:10%;margin-bottom:10%}",""])},56:function(t,e,n){"use strict";n.r(e);n(12);var r=n(47),o=n.n(r),c=n(48),d={name:"AlbumIndPages",data:()=>({album:{},photos:[]}),created:async function(){let t=await o.a.get(`${c.a.endpoint}/albums/${this.$route.params.id}`);this.album=t.data;let e=await o.a.get(`${c.a.endpoint}/albums/${this.$route.params.id}/photos`);this.photos=e.data}},l=n(1);var component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._ssrNode("<header data-v-6899500b>","</header>",[n("nuxt-link",{attrs:{to:"/"}},[t._v("REGRESAR")])],1),t._ssrNode(' <h1 class="title" data-v-6899500b>'+t._ssrEscape(t._s(t.album.title))+'</h1> <div class="columns is-multiline" data-v-6899500b>'+t._ssrList(t.photos,(function(e){return'<div class="column is-one-quarter" data-v-6899500b><img'+t._ssrAttr("src",e.url)+t._ssrAttr("alt",e.id)+" data-v-6899500b></div>"}))+"</div>")],2)}),[],!1,(function(t){var e=n(51);e.__inject__&&e.__inject__(t)}),"6899500b","23e6e8f3");e.default=component.exports}};
//# sourceMappingURL=13de391417904f2f862d.js.map