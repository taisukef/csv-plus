(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6,10],{309:function(t,n,o){},311:function(t,n,o){"use strict";o(309)},312:function(t,n,o){},313:function(t,n,o){"use strict";o.r(n);o(317);var s=o(318),a={name:"MdiIcon",props:{icon:{type:String,required:!0},size:{type:[String,Number],default:96},color:{type:String,default:"inherit"}},data:function(){return{icons:{windows:s.d,apple:s.a,linux:s.c,download:s.b}}}},e=(o(311),o(44)),i=Object(e.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{staticClass:"svg-icon",style:{"--color":this.color},attrs:{viewBox:"0 0 24 24",width:this.size+"px",height:this.size+"px"}},[n("path",{staticClass:"svg-icon__path",attrs:{d:this.icons[this.icon]}})])}),[],!1,null,"7420804d",null);n.default=i.exports},319:function(t,n,o){"use strict";o(312)},346:function(t,n,o){},351:function(t,n,o){"use strict";o.r(n);var s={name:"DownloadButton",components:{MdiIcon:o(313).default},props:{href:{type:String,required:!0},title:{type:String,required:!0},subtitle:{type:String,required:!0}}},a=(o(319),o(44)),e=Object(a.a)(s,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("a",{staticClass:"download-button",attrs:{href:t.href}},[o("div",{staticClass:"download-button__title"},[t._v("\n    "+t._s(t.title)+" "),o("MdiIcon",{attrs:{icon:"download",color:"#fff",size:"21"}})],1),t._v(" "),o("div",{staticClass:"download-button__subtitle"},[t._v(t._s(t.subtitle))])])}),[],!1,null,"47b64c9d",null);n.default=e.exports},393:function(t,n,o){"use strict";o(346)},399:function(t,n,o){"use strict";o.r(n);var s=o(64),a=(o(102),o(95),o(96),o(71),o(375)),e=o.n(a),i=o(313),d=o(351),l={name:"DownloadButtons",components:{MdiIcon:i.default,DownloadButton:d.default},data:function(){return{downloads:{windows:null,mac:null,ubuntu:null,linux:null}}},mounted:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.a.defaults={headers:{accept:"application/vnd.github.v3+json"},baseURL:"https://api.github.com"},n.next=3,e.a.get("/repos/plusone-masaki/csv-plus/releases/latest");case 3:o=n.sent,o.data.assets.forEach((function(n){/\.msi$/.test(n.name)&&(t.downloads.windows=n),/\.dmg$/.test(n.name)&&(t.downloads.mac=n),/\.deb$/.test(n.name)&&(t.downloads.ubuntu=n),/\.AppImage$/.test(n.name)&&(t.downloads.linux=n)}));case 6:case"end":return n.stop()}}),n)})))()}},u=(o(393),o(44)),r=Object(u.a)(l,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"downloads"},[t.downloads.windows?o("div",{staticClass:"downloads__os"},[o("div",{staticClass:"downloads__os--icon"},[o("MdiIcon",{attrs:{icon:"windows"}})],1),t._v(" "),o("div",{staticClass:"downloads__os--buttons"},[o("DownloadButton",{attrs:{title:"Windows",subtitle:t.downloads.windows.name,href:t.downloads.windows.browser_download_url}})],1)]):t._e(),t._v(" "),t.downloads.mac?o("div",{staticClass:"downloads__os"},[o("div",{staticClass:"downloads__os--icon"},[o("MdiIcon",{attrs:{icon:"apple"}})],1),t._v(" "),o("div",{staticClass:"downloads__os--buttons"},[o("DownloadButton",{attrs:{title:"MacOS",subtitle:t.downloads.mac.name,href:t.downloads.mac.browser_download_url}})],1)]):t._e(),t._v(" "),t.downloads.ubuntu||t.downloads.linux?o("div",{staticClass:"downloads__os"},[o("div",{staticClass:"downloads__os--icon"},[o("MdiIcon",{attrs:{icon:"linux"}})],1),t._v(" "),o("div",{staticClass:"downloads__os--buttons"},[t.downloads.ubuntu?o("DownloadButton",{attrs:{title:"Ubuntu",subtitle:t.downloads.ubuntu.name,href:t.downloads.ubuntu.browser_download_url}}):t._e(),t._v(" "),t.downloads.linux?o("DownloadButton",{attrs:{title:"Linux",subtitle:t.downloads.linux.name,href:t.downloads.linux.browser_download_url}}):t._e()],1)]):t._e()])}),[],!1,null,"30094138",null);n.default=r.exports}}]);