!function(){"use strict";var e,t,n,c,o,r,i,a,l,d,s,u,m,h,f,v,g,y,b,x,p,L,_,E={1370:function(e){e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},6551:function(e,t,n){e.exports=n.p+"images/logo.svg"}},C={};function w(e){var t=C[e];if(void 0!==t)return t.exports;var n=C[e]={exports:{}};return E[e](n,n.exports,w),n.exports}w.m=E,w.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return w.d(t,{a:t}),t},w.d=function(e,t){for(var n in t)w.o(t,n)&&!w.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;w.g.importScripts&&(e=w.g.location+"");var t=w.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e+"../"}(),w.b=document.baseURI||self.location.href,p=w(1370),L=w.n(p),_=new URL(w(6551),w.b),L()(_),y=document.querySelectorAll(".header-currency__btn"),document.querySelectorAll(".dropdown-currency"),b=Array.from(document.querySelectorAll(".dropdown-currency__item_desktop")),x=Array.from(document.querySelectorAll(".dropdown-currency__item_mobile")),document.querySelectorAll(".main-filter-fields-list"),y.forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("header-currency_active"),e.children[2].classList.toggle("rotated")})),window.addEventListener("click",(function(t){!t.target.closest(".header-currency__btn")&&(e.classList.remove("header-currency_active"),e.children[2].classList.remove("rotated"))}))})),b.forEach((function(e){e.addEventListener("click",(function(){var t,n,c,o;y[0].children[2].classList.toggle("rotated"),"language"===e.getAttribute("data-currency-value")?(n=y[0].children[0].textContent,o=y[1].children[0].textContent,y[0].children[0].textContent="".concat(e.children[0].textContent),y[1].children[0].textContent="".concat(x[b.indexOf(e)].children[0].textContent),x[b.indexOf(e)].children[0].textContent=o,e.children[0].textContent=n):"currency"===e.getAttribute("data-currency-value")&&(t=y[0].children[1].textContent,c=y[1].children[1].textContent,y[0].children[1].textContent="".concat(e.children[0].textContent),y[1].children[1].textContent="".concat(x[b.indexOf(e)].children[0].textContent),x[b.indexOf(e)].children[0].textContent=c,e.children[0].textContent=t),y[0].classList.remove("header-currency_active")}))})),x.forEach((function(e){e.addEventListener("click",(function(){var t,n,c,o;y[1].children[2].classList.toggle("rotated"),console.log(b[x.indexOf(e)].children[0]),"language"===e.getAttribute("data-currency-value")?(n=y[0].children[0].textContent,o=y[1].children[0].textContent,y[1].children[0].textContent="".concat(e.children[0].textContent),y[0].children[0].textContent="".concat(b[x.indexOf(e)].children[0].textContent),b[x.indexOf(e)].children[0].textContent=n,e.children[0].textContent=o):"currency"===e.getAttribute("data-currency-value")&&(t=y[0].children[1].textContent,c=y[1].children[1].textContent,y[1].children[1].textContent="".concat(e.children[0].textContent),y[0].children[1].textContent="".concat(b[x.indexOf(e)].children[0].textContent),b[x.indexOf(e)].children[0].textContent=t,e.children[0].textContent=c),y[1].classList.remove("header-currency_active")}))})),e=document.getElementById("burgerBtn"),t=document.getElementById("closeMobileMenuBtn"),n=document.querySelector(".header-mobile-menu"),e.addEventListener("click",(function(){n.classList.add("showed"),document.querySelector("body").classList.add("mobile-menu-open")})),t.addEventListener("click",(function(){n.classList.remove("showed"),document.querySelector("body").classList.remove("mobile-menu-open")})),c=document.getElementById("mobileMenuSearchBtn"),o=document.querySelector(".header-mobile-menu-search"),r=document.getElementById("mobileMenuSearchInput"),i=document.getElementById("searchBtn"),a=document.querySelector(".header-search"),l=document.getElementById("clearSearchBtn"),i.addEventListener("click",(function(){return a.classList.toggle("showed")})),window.addEventListener("click",(function(e){!e.target.closest(".header-search")&&!e.target.closest("#searchBtn")&&a.classList.remove("showed")})),l.addEventListener("click",(function(){return r.value=""})),c.addEventListener("click",(function(){o.classList.toggle("header-mobile-menu-search_active"),c.classList.toggle("header-mobile-menu__btn_active")})),d=document.getElementById("callBackModal"),s=document.getElementById("callBackBtn"),u=document.querySelector(".header-mobile-menu__callback"),m=document.getElementById("closeCallBackBtn"),s.addEventListener("click",(function(){return d.classList.add("modal_opened")})),m.addEventListener("click",(function(){return d.classList.remove("modal_opened")})),u.addEventListener("click",(function(){return d.classList.add("modal_opened")})),window.addEventListener("click",(function(e){!e.target.closest(".modal__inner")&&!e.target.closest("#callBackBtn")&&!e.target.closest(".header-mobile-menu__callback")&&d.classList.remove("modal_opened")})),function(){document.getElementById("favouriteCounter");var e=document.querySelectorAll(".header-list__link_favourite"),t=document.querySelectorAll(".objects-swiper-slide__btn");e.forEach((function(e){new MutationObserver((function(){Number(e.getAttribute("data-count"))>9?e.innerText="9+":Number(e.getAttribute("data-count"))<=9&&(e.innerText=e.getAttribute("data-count"))})).observe(e,{attributes:!0})})),t.forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("objects-swiper-slide__btn_active"),e.children[0].classList.contains("icon-plus")?e.children[0].classList="icon-minus":e.children[0].classList="icon-plus"}))}))}(),h=document.getElementById("scrollToTopBtn"),f=document.querySelector("main"),h.addEventListener("click",(function(){return f.scrollIntoView({block:"start",behavior:"smooth"})})),document.getElementById("ymap"),window.addEventListener("DOMContentLoaded",(function(){var e=new YMaps.Map(YMaps.jQuery("#ymap")[0]),t=new YMaps.Style;t.iconStyle=new YMaps.IconStyle,t.iconStyle.href="src/images/placemark.svg";var n=new YMaps.Placemark(new YMaps.GeoPoint(31.99,36.54),{style:t});e.addOverlay(n),e.setCenter(new YMaps.GeoPoint(30.71,36.89),9)})),v=document.querySelectorAll(".header-mobile-menu-accordion"),g=document.querySelectorAll(".footer-navigation-accordion"),v.forEach((function(e){e.addEventListener("click",(function(){e.classList.contains("header-mobile-menu-accordion_active")?(e.classList.remove("header-mobile-menu-accordion_active"),e.querySelector(".header-mobile-menu-list").style.maxHeight="0"):(e.classList.add("header-mobile-menu-accordion_active"),e.querySelector(".header-mobile-menu-list").style.maxHeight="206px"),v.forEach((function(t){t!==e&&(t.classList.remove("header-mobile-menu-accordion_active"),t.querySelector(".header-mobile-menu-list").style.maxHeight="0")}))}))})),g.forEach((function(e){var t=e.querySelector(".footer-navigation-accordion-list");e.addEventListener("click",(function(){e.classList.contains("footer-navigation-accordion_active")?(e.classList.remove("footer-navigation-accordion_active"),t.style.maxHeight="0"):(e.classList.add("footer-navigation-accordion_active"),t.style.maxHeight="207px"),g.forEach((function(t){t!==e&&(t.classList.remove("footer-navigation-accordion_active"),t.querySelector(".footer-navigation-accordion-list").style.maxHeight="0")}))}))}))}();