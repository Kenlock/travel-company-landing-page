(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(158).concat([function(t,a,n){var i={"./bus-fill.svg":162,"./bus-solid.svg":187,"./bus.svg":188,"./css/device.sass":189,"./css/global.sass":191,"./facebook-logo.svg":175,"./fasilitas-detail-travel/fasilitas-ac.png":176,"./fasilitas-detail-travel/fasilitas-air-mineral.png":177,"./fasilitas-detail-travel/fasilitas-bantal.png":178,"./fasilitas-detail-travel/fasilitas-door-to-door.png":179,"./fasilitas-detail-travel/fasilitas-makan.png":194,"./fasilitas-detail-travel/fasilitas-musik.png":180,"./fasilitas-detail-travel/fasilitas-pool-to-pool.png":195,"./fasilitas-detail-travel/fasilitas-selimut.png":181,"./fasilitas-detail-travel/fasilitas-snack.png":182,"./fasilitas-detail-travel/fasilitas-stop-kontak.png":196,"./fasilitas-detail-travel/fasilitas-wifi.png":197,"./googleplay.png":183,"./instagram-logo.svg":184,"./like.svg":198,"./logo-travel/nusa-indah-travel-white.png":199,"./logo-travel/nusa-indah-travel.png":200,"./logo-travelbox/travelbox_black@2x.png":201,"./logo-travelbox/travelbox_color@2x.png":202,"./logo-travelbox/travelbox_color@4x.png":203,"./logo-travelbox/travelbox_white2@4x.png":185,"./photo-nusa-indah-travel/halaman_kirim_paket.jpg":204,"./photo-nusa-indah-travel/halaman_sewa_mobil.jpg":205,"./photo-nusa-indah-travel/halaman_tentang.jpg":206,"./photo-nusa-indah-travel/mobil-sewa/fortuner.png":207,"./photo-nusa-indah-travel/mobil-sewa/new-toyota-innova.png":208,"./photo-nusa-indah-travel/mobil-sewa/toyota-alphard.png":209,"./photo-nusa-indah-travel/mobil-sewa/toyota-avanza.png":210,"./photo-nusa-indah-travel/mobil-sewa/toyota-hiace.png":211,"./photo-nusa-indah-travel/mobil-sewa/toyota-innova.png":212,"./photo-nusa-indah-travel/mobil-sewa/toyota-pajero.png":213,"./photo-nusa-indah-travel/paket/paket50cm.jpg":214,"./photo-nusa-indah-travel/paket/paket>50cm.jpg":215,"./photo-nusa-indah-travel/photo1.jpeg":216,"./photo-nusa-indah-travel/photo10.jpeg":217,"./photo-nusa-indah-travel/photo11.jpeg":218,"./photo-nusa-indah-travel/photo12.jpeg":219,"./photo-nusa-indah-travel/photo13.jpeg":220,"./photo-nusa-indah-travel/photo14.jpeg":221,"./photo-nusa-indah-travel/photo15.jpeg":222,"./photo-nusa-indah-travel/photo16.jpeg":223,"./photo-nusa-indah-travel/photo2.jpeg":224,"./photo-nusa-indah-travel/photo3.jpeg":225,"./photo-nusa-indah-travel/photo4.jpeg":226,"./photo-nusa-indah-travel/photo5.jpeg":227,"./photo-nusa-indah-travel/photo6.jpeg":228,"./photo-nusa-indah-travel/photo7.jpeg":229,"./photo-nusa-indah-travel/photo8.jpeg":230,"./photo-nusa-indah-travel/photo9.jpeg":231,"./photo-nusa-indah-travel/rute-paket.jpg":232,"./quote-right-solid.svg":186,"./school-bus.svg":233,"./shield.svg":234,"./whatsapp.svg":159};function s(t){var a=o(t);return n(a)}function o(t){var a=i[t];if(!(a+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return a}s.keys=function(){return Object.keys(i)},s.resolve=o,t.exports=s,s.id=158},function(t,a,n){t.exports=n.p+"img/47c77bf.svg"},function(t,a,n){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("footer",{staticClass:"footer",style:t.color_styling_footer},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column footer-column"},[i("div",{staticClass:"logo"},[i("img",{attrs:{src:t.getImgUrl(t.$store.state.logo_travel_white),width:"150"}})]),t._v(" "),i("div",{staticClass:"footer-travel-name"},[t._v("\n                "+t._s(t.$store.state.nama_travel)+"\n            ")]),t._v(" "),t._l(t.$store.state.alamat_travel,function(a,n){return i("div",{key:n,staticClass:"footer-travel-place"},[i("div",{staticClass:"footer-travel-address-name"},[t._v("\n                    "+t._s(a.nama_kantor)+"\n                ")]),t._v(" "),i("div",{staticClass:"footer-travel-address"},[t._v("\n                    "+t._s(a.alamat_kantor)+"\n                ")])])})],2),t._v(" "),i("div",{staticClass:"column footer-column"},[i("div",{staticClass:"footer-travel-contact"},[i("div",{staticClass:"footer-travel-contact-label"},[t._v("\n                    Kontak\n                ")]),t._v(" "),t._l(t.$store.state.kontak_travel,function(a,n){return i("div",{key:n,staticClass:"footer-travel-contact-number"},[t._v("\n                    "+t._s(a)+"\n                ")])})],2),t._v(" "),i("div",{staticClass:"footer-travel-social-media"},[i("div",{staticClass:"footer-travel-social-media-label"},[t._v("\n                    Media Sosial\n                ")]),t._v(" "),i("div",[i("span",[i("a",{attrs:{href:t.$store.state.media_sosial_travel.facebook_link}},[i("img",{staticClass:"image-socmed-logo",attrs:{src:n(175)}})])]),t._v(" "),i("span",[i("a",{attrs:{href:t.$store.state.media_sosial_travel.instagram_link}},[i("img",{staticClass:"image-socmed-logo",attrs:{src:n(184)}})])])])]),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"column is-2 footer-column"},[i("div",{staticClass:"nav button",style:t.color_styling_nav,on:{click:function(a){t.$router.push("/")}}},[t._v(" Home ")]),t._v(" "),i("div",{staticClass:"nav button",style:t.color_styling_nav,on:{click:function(a){t.$router.push("/jadwal")}}},[t._v(" Jadwal ")]),t._v(" "),i("div",{staticClass:"nav button",style:t.color_styling_nav,on:{click:function(a){t.$router.push("/tentang")}}},[t._v(" Tentang ")]),t._v(" "),i("div",{staticClass:"nav button",style:t.color_styling_nav,on:{click:function(a){t.$router.push("/sewa-mobil")}}},[t._v("Sewa Mobil ")]),t._v(" "),i("div",{staticClass:"nav button",style:t.color_styling_nav,on:{click:function(a){t.$router.push("/kirim-paket")}}},[t._v("Kirim Paket")])])])])};i._withStripped=!0;var s={data:function(){return{color_styling_footer:{background:"linear-gradient(to right, "+this.$store.state.primary_color_dark+","+this.$store.state.primary_color_dark2+")"},color_styling_nav:{background:this.$store.state.primary_color}}},methods:{getImgUrl:function(t){return n(158)("./"+t)}}},o=(n(238),n(15)),e=Object(o.a)(s,i,[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"footer-travel-place"},[a("div",{staticClass:"footer-travel-address-name"},[this._v("\n                    Dibuat Oleh\n                ")]),this._v(" "),a("div",{staticClass:"footer-travel-address"},[this._v("\n                    www.travelbox.id\n                ")])])}],!1,null,"7b81981d",null);e.options.__file="Footer.vue";a.a=e.exports},function(t,a,n){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return t.render_now?i("nav",{staticClass:"navbar is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[i("div",{staticClass:"navbar-brand"},[i("a",{attrs:{href:"/"}},[i("div",{staticClass:"logo-container"},[i("img",{staticClass:"logo",attrs:{src:t.getImgUrl(t.$store.state.logo_travel_color)}})])]),t._v(" "),i("a",{staticClass:"navbar-burger",class:{"is-active":t.navbar_burger_active},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(a){t.navbar_burger_active=!t.navbar_burger_active}}},[i("span",{style:t.color_styling_burger,attrs:{"aria-hidden":"true"}}),t._v(" "),i("span",{style:t.color_styling_burger,attrs:{"aria-hidden":"true"}}),t._v(" "),i("span",{style:t.color_styling_burger,attrs:{"aria-hidden":"true"}})])]),t._v(" "),t.navbar_burger_active?i("div",{staticClass:"navbar-end"},[i("nuxt-link",{staticClass:"navbar-item navbar-item-right",attrs:{to:"/"}},[i("a",{staticClass:"nav-text",style:t.color_styling_nav_text},[t._v("\n                Home\n            ")])]),t._v(" "),i("nuxt-link",{staticClass:"navbar-item navbar-item-right",attrs:{to:"/jadwal"}},[i("a",{staticClass:"nav-text",style:t.color_styling_nav_text},[t._v("\n                Jadwal\n            ")])]),t._v(" "),i("nuxt-link",{staticClass:"navbar-item navbar-item-right",attrs:{to:"/tentang"}},[i("a",{staticClass:"nav-text",style:t.color_styling_nav_text},[t._v("\n                Tentang\n            ")])]),t._v(" "),i("nuxt-link",{staticClass:"navbar-item navbar-item-right",attrs:{to:"/sewa-mobil"}},[i("a",{staticClass:"nav-text",style:t.color_styling_nav_text},[t._v("\n                Sewa Mobil\n            ")])]),t._v(" "),i("nuxt-link",{staticClass:"navbar-item navbar-item-right",attrs:{to:"/kirim-paket"}},[i("a",{staticClass:"nav-text",style:t.color_styling_nav_text},[t._v("\n                Kirim Paket\n            ")])]),t._v(" "),i("a",{staticClass:"navbar-item"},[i("a",{staticClass:"button button-pesan-online"},[i("span",{staticClass:"icon"},[i("img",{staticClass:"bus-icon",attrs:{src:n(162)}})]),t._v(" "),i("span",{staticClass:"pesan-online-text"},[t._v("Pesan Online")])])])],1):t._e(),t._v(" "),i("div",{staticClass:"navbar-end navbar-end-desktop"},[i("nuxt-link",{staticClass:"navbar-item navbar-item-right",attrs:{to:"/"}},[i("a",{staticClass:"nav-text",style:t.color_styling_nav_text},[t._v("\n                Home\n            ")])]),t._v(" "),i("nuxt-link",{staticClass:"navbar-item navbar-item-right",attrs:{to:"/jadwal"}},[i("a",{staticClass:"nav-text",style:t.color_styling_nav_text},[t._v("\n                Jadwal\n            ")])]),t._v(" "),i("nuxt-link",{staticClass:"navbar-item navbar-item-right",attrs:{to:"/tentang"}},[i("a",{staticClass:"nav-text",style:t.color_styling_nav_text},[t._v("\n                Tentang\n            ")])]),t._v(" "),i("nuxt-link",{staticClass:"navbar-item navbar-item-right",attrs:{to:"/sewa-mobil"}},[i("a",{staticClass:"nav-text",style:t.color_styling_nav_text},[t._v("\n                Sewa Mobil\n            ")])]),t._v(" "),i("nuxt-link",{staticClass:"navbar-item navbar-item-right",attrs:{to:"/kirim-paket"}},[i("a",{staticClass:"nav-text",style:t.color_styling_nav_text},[t._v("\n                Kirim Paket\n            ")])]),t._v(" "),i("a",{staticClass:"navbar-item"},[i("a",{staticClass:"button button-pesan-online",style:t.color_styling_button_pesan_online,attrs:{href:"https://play.google.com/store/apps/details?id=com.kunkun.sikomoID&hl=en_US"}},[i("span",{staticClass:"icon"},[i("img",{staticClass:"bus-icon",attrs:{src:n(162)}})]),t._v(" "),i("span",{staticClass:"pesan-online-text"},[t._v("Pesan Online")])])])],1)]):t._e()};i._withStripped=!0;var s={data:function(){return{render_now:!1,navbar_burger_active:!1,color_styling_burger:{background:this.$store.state.primary_color},color_styling_nav_text:{color:this.$store.state.primary_color_dark2},color_styling_button_pesan_online:{background:this.$store.state.primary_color,border:this.$store.state.primary_color_dark+" !important"}}},mounted:function(){this.$nextTick(function(){this.render_now=!0})},methods:{getImgUrl:function(t){return n(158)("./"+t)}}},o=(n(235),n(15)),e=Object(o.a)(s,i,[],!1,null,"2c92231c",null);e.options.__file="Header.vue";a.a=e.exports},function(t,a,n){t.exports=n.p+"img/371fe6f.svg"},function(t,a,n){},function(t,a,n){},,,,,,,,,,,function(t,a){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgOTAgOTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkwIDkwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggaWQ9IkZhY2Vib29rX194MjhfYWx0X3gyOV8iIGQ9Ik05MCwxNS4wMDFDOTAsNy4xMTksODIuODg0LDAsNzUsMEgxNUM3LjExNiwwLDAsNy4xMTksMCwxNS4wMDF2NTkuOTk4ICAgQzAsODIuODgxLDcuMTE2LDkwLDE1LjAwMSw5MEg0NVY1NkgzNFY0MWgxMXYtNS44NDRDNDUsMjUuMDc3LDUyLjU2OCwxNiw2MS44NzUsMTZINzR2MTVINjEuODc1QzYwLjU0OCwzMSw1OSwzMi42MTEsNTksMzUuMDI0VjQxICAgaDE1djE1SDU5djM0aDE2YzcuODg0LDAsMTUtNy4xMTksMTUtMTUuMDAxVjE1LjAwMXoiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"},function(t,a,n){t.exports=n.p+"img/f9d8c1f.png"},function(t,a,n){t.exports=n.p+"img/e41b449.png"},function(t,a,n){t.exports=n.p+"img/8447d76.png"},function(t,a,n){t.exports=n.p+"img/4303658.png"},function(t,a,n){t.exports=n.p+"img/85ffcc4.png"},function(t,a,n){t.exports=n.p+"img/54cfe4a.png"},function(t,a,n){t.exports=n.p+"img/017d837.png"},function(t,a,n){t.exports=n.p+"img/96de0c8.png"},function(t,a,n){t.exports=n.p+"img/58fec83.svg"},function(t,a,n){t.exports=n.p+"img/358778e.png"},function(t,a){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJxdW90ZS1yaWdodCIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXF1b3RlLXJpZ2h0IGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDY0IDMySDMzNmMtMjYuNSAwLTQ4IDIxLjUtNDggNDh2MTI4YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDgwdjY0YzAgMzUuMy0yOC43IDY0LTY0IDY0aC04Yy0xMy4zIDAtMjQgMTAuNy0yNCAyNHY0OGMwIDEzLjMgMTAuNyAyNCAyNCAyNGg4Yzg4LjQgMCAxNjAtNzEuNiAxNjAtMTYwVjgwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4em0tMjg4IDBINDhDMjEuNSAzMiAwIDUzLjUgMCA4MHYxMjhjMCAyNi41IDIxLjUgNDggNDggNDhoODB2NjRjMCAzNS4zLTI4LjcgNjQtNjQgNjRoLThjLTEzLjMgMC0yNCAxMC43LTI0IDI0djQ4YzAgMTMuMyAxMC43IDI0IDI0IDI0aDhjODguNCAwIDE2MC03MS42IDE2MC0xNjBWODBjMC0yNi41LTIxLjUtNDgtNDgtNDh6Ij48L3BhdGg+PC9zdmc+"},function(t,a){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJidXMiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1idXMgZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik00ODggMTI4aC04VjgwYzAtNDQuOC05OS4yLTgwLTIyNC04MFMzMiAzNS4yIDMyIDgwdjQ4aC04Yy0xMy4yNSAwLTI0IDEwLjc0LTI0IDI0djgwYzAgMTMuMjUgMTAuNzUgMjQgMjQgMjRoOHYxNjBjMCAxNy42NyAxNC4zMyAzMiAzMiAzMnYzMmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyYzE3LjY3IDAgMzItMTQuMzMgMzItMzJ2LTMyaDE5MnYzMmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyYzE3LjY3IDAgMzItMTQuMzMgMzItMzJ2LTMyaDYuNGMxNiAwIDI1LjYtMTIuOCAyNS42LTI1LjZWMjU2aDhjMTMuMjUgMCAyNC0xMC43NSAyNC0yNHYtODBjMC0xMy4yNi0xMC43NS0yNC0yNC0yNHpNMTEyIDQwMGMtMTcuNjcgMC0zMi0xNC4zMy0zMi0zMnMxNC4zMy0zMiAzMi0zMiAzMiAxNC4zMyAzMiAzMi0xNC4zMyAzMi0zMiAzMnptMTYtMTEyYy0xNy42NyAwLTMyLTE0LjMzLTMyLTMyVjEyOGMwLTE3LjY3IDE0LjMzLTMyIDMyLTMyaDI1NmMxNy42NyAwIDMyIDE0LjMzIDMyIDMydjEyOGMwIDE3LjY3LTE0LjMzIDMyLTMyIDMySDEyOHptMjcyIDExMmMtMTcuNjcgMC0zMi0xNC4zMy0zMi0zMnMxNC4zMy0zMiAzMi0zMiAzMiAxNC4zMyAzMiAzMi0xNC4zMyAzMi0zMiAzMnoiPjwvcGF0aD48L3N2Zz4="},function(t,a,n){t.exports=n.p+"img/1e6a27d.svg"},function(t,a,n){},,function(t,a,n){},,,function(t,a,n){t.exports=n.p+"img/24ef03b.png"},function(t,a,n){t.exports=n.p+"img/5f8b09f.png"},function(t,a,n){t.exports=n.p+"img/cb1e0b7.png"},function(t,a,n){t.exports=n.p+"img/012a869.png"},function(t,a,n){t.exports=n.p+"img/22bdb30.svg"},function(t,a,n){t.exports=n.p+"img/a06626c.png"},function(t,a,n){t.exports=n.p+"img/4586d70.png"},function(t,a,n){t.exports=n.p+"img/adea41d.png"},function(t,a,n){t.exports=n.p+"img/ae2c2a6.png"},function(t,a,n){t.exports=n.p+"img/e76f6fc.png"},function(t,a,n){t.exports=n.p+"img/03ef214.jpg"},function(t,a,n){t.exports=n.p+"img/6ac87df.jpg"},function(t,a,n){t.exports=n.p+"img/c09eae6.jpg"},function(t,a,n){t.exports=n.p+"img/2bc0d3f.png"},function(t,a,n){t.exports=n.p+"img/2920a41.png"},function(t,a,n){t.exports=n.p+"img/e5fd464.png"},function(t,a,n){t.exports=n.p+"img/6612976.png"},function(t,a,n){t.exports=n.p+"img/cd9ca35.png"},function(t,a,n){t.exports=n.p+"img/7f73fe5.png"},function(t,a,n){t.exports=n.p+"img/d17675c.png"},function(t,a,n){t.exports=n.p+"img/ba087e2.jpg"},function(t,a,n){t.exports=n.p+"img/350e05a.jpg"},function(t,a,n){t.exports=n.p+"img/65f2b90.jpeg"},function(t,a,n){t.exports=n.p+"img/484a6a1.jpeg"},function(t,a,n){t.exports=n.p+"img/8327c7f.jpeg"},function(t,a,n){t.exports=n.p+"img/26e4101.jpeg"},function(t,a,n){t.exports=n.p+"img/d615d8f.jpeg"},function(t,a,n){t.exports=n.p+"img/a7054b1.jpeg"},function(t,a,n){t.exports=n.p+"img/28032ef.jpeg"},function(t,a,n){t.exports=n.p+"img/23779c0.jpeg"},function(t,a,n){t.exports=n.p+"img/c632ade.jpeg"},function(t,a,n){t.exports=n.p+"img/1f59f82.jpeg"},function(t,a,n){t.exports=n.p+"img/f5a55f5.jpeg"},function(t,a,n){t.exports=n.p+"img/945bad3.jpeg"},function(t,a,n){t.exports=n.p+"img/1b31009.jpeg"},function(t,a,n){t.exports=n.p+"img/ed790d2.jpeg"},function(t,a,n){t.exports=n.p+"img/f63ef9e.jpeg"},function(t,a,n){t.exports=n.p+"img/a5b001d.jpeg"},function(t,a,n){t.exports=n.p+"img/c7e159a.jpg"},function(t,a,n){t.exports=n.p+"img/1ed7678.svg"},function(t,a,n){t.exports=n.p+"img/cf0348a.svg"},function(t,a,n){"use strict";var i=n(163);n.n(i).a},,,function(t,a,n){"use strict";var i=n(164);n.n(i).a}])]);