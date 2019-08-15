(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3c6d":function(t,n,e){"use strict";e.r(n),e.d(n,"GESTURE_CONTROLLER",function(){return c}),e.d(n,"createGesture",function(){return h});var i,r=e("3eIi"),o=(e("lSdy"),function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new l(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new u(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,n,e){return this.canStart(t)?(this.requestedStart.set(n,e),!0):(this.requestedStart.delete(n),!1)},t.prototype.capture=function(t,n,e){if(!this.start(t,n,e))return!1;var i=this.requestedStart,r=-1e4;if(i.forEach(function(t){r=Math.max(r,t)}),r===e){this.capturedId=n,i.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(o),!0}return i.delete(n),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,n){var e=this.disabledGestures.get(t);void 0===e&&(e=new Set,this.disabledGestures.set(t,e)),e.add(n)},t.prototype.enableGesture=function(t,n){var e=this.disabledGestures.get(t);void 0!==e&&e.delete(n)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(a)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(a)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var n=this.disabledGestures.get(t);return!!(n&&n.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}()),l=function(){function t(t,n,e,i,r){this.id=n,this.name=e,this.disableScroll=r,this.priority=1e6*i+n,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),u=function(){function t(t,n,e,i){this.id=n,this.disable=e,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,n=this.disable;t<n.length;t++)this.ctrl.disableGesture(n[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,n=this.disable;t<n.length;t++)this.ctrl.enableGesture(n[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),a="backdrop-no-scroll",c=new o,s=function(t,n,e,i){var r,o,l=d(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(r="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(r="addEventListener",o="removeEventListener"),t[r](n,e,l),function(){t[o](n,e,l)}},d=function(t){if(void 0===i)try{var n=Object.defineProperty({},"passive",{get:function(){i=!0}});t.addEventListener("optsTest",function(){},n)}catch(e){i=!1}return!!i},f=function(t){return t instanceof Document?t:t.ownerDocument},h=function(t){var n=!1,e=!1,i=!0,o=!1,l=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),u=l.canStart,a=l.onWillStart,d=l.onStart,h=l.onEnd,m=l.notCaptured,g=l.onMove,y=l.threshold,w={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},S=function(t,n,e){var i=l.maxAngle*(Math.PI/180),r="x"===l.direction,o=Math.cos(i),u=n*n,a=0,c=0,s=!1,d=0;return{start:function(t,n){a=t,c=n,d=0,s=!0},detect:function(t,n){if(!s)return!1;var e=t-a,i=n-c,l=e*e+i*i;if(l<u)return!1;var f=Math.sqrt(l),h=(r?e:i)/f;return d=h>o?1:h<-o?-1:0,s=!1,!0},isGesture:function(){return 0!==d},getDirection:function(){return d}}}(0,l.threshold),k=c.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),E=function(){n&&(o=!1,g&&g(w))},C=function(){return!(k&&!k.capture()||(n=!0,i=!1,w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp,a?a(w).then(L):L(),0))},L=function(){d&&d(w),i=!0},z=function(){n=!1,e=!1,o=!1,i=!0,k.release()},I=function(t){var e=n,r=i;z(),r&&(p(w,t),e?h&&h(w):m&&m(w))},T=function(t,n,e,i,r){var o,l,u,a,c,d,h,p=0,v=function(i){p=Date.now()+2e3,n(i)&&(!l&&e&&(l=s(t,"touchmove",e,r)),u||(u=s(t,"touchend",m,r)),a||(a=s(t,"touchcancel",m,r)))},b=function(i){p>Date.now()||n(i)&&(!d&&e&&(d=s(f(t),"mousemove",e,r)),h||(h=s(f(t),"mouseup",g,r)))},m=function(t){y(),i&&i(t)},g=function(t){w(),i&&i(t)},y=function(){l&&l(),u&&u(),a&&a(),l=u=a=void 0},w=function(){d&&d(),h&&h(),d=h=void 0},S=function(){y(),w()},k=function(n){n?(o&&o(),c&&c(),o=c=void 0,S()):(o||(o=s(t,"touchstart",v,r)),c||(c=s(t,"mousedown",b,r)))};return{setDisabled:k,stop:S,destroy:function(){k(!0),i=e=n=void 0}}}(l.el,function(t){var n=b(t);return!(e||!i)&&(v(t,w),w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp=n,w.velocityX=w.velocityY=w.deltaX=w.deltaY=0,w.event=t,(!u||!1!==u(w))&&(k.release(),!!k.start()&&(e=!0,0===y?C():(S.start(w.startX,w.startY),!0))))},function(t){n?!o&&i&&(o=!0,p(w,t),Object(r.n)(E)):(p(w,t),S.detect(w.currentX,w.currentY)&&(S.isGesture()&&C()||x()))},I,{capture:!1}),x=function(){z(),T.stop(),m&&m(w)};return{setDisabled:function(t){t&&n&&I(void 0),T.setDisabled(t)},destroy:function(){k.destroy(),T.destroy()}}},p=function(t,n){if(n){var e=t.currentX,i=t.currentY,r=t.timeStamp;v(n,t);var o=t.currentX,l=t.currentY,u=(t.timeStamp=b(n))-r;if(u>0&&u<100){var a=(l-i)/u;t.velocityX=(o-e)/u*.7+.3*t.velocityX,t.velocityY=.7*a+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=l-t.startY,t.event=n}},v=function(t,n){var e=0,i=0;if(t){var r=t.changedTouches;if(r&&r.length>0){var o=r[0];e=o.clientX,i=o.clientY}else void 0!==t.pageX&&(e=t.pageX,i=t.pageY)}n.currentX=e,n.currentY=i},b=function(t){return t.timeStamp||Date.now()}},"6WfQ":function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o});var i=e("mrSG"),r=function(t,n,e,r,o){return i.b(void 0,void 0,void 0,function(){var l;return i.e(this,function(i){switch(i.label){case 0:if(t)return[2,t.attachViewToDom(n,e,o,r)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return l="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e,r&&r.forEach(function(t){return l.classList.add(t)}),o&&Object.assign(l,o),n.appendChild(l),l.componentOnReady?[4,l.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,l]}})})},o=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},Dgxi:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i=function(t){try{if("string"!=typeof t||""===t)return t;var n=document.createDocumentFragment(),e=document.createElement("div");n.appendChild(e),e.innerHTML=t,u.forEach(function(t){for(var e=n.querySelectorAll(t),i=e.length-1;i>=0;i--){var l=e[i];l.parentNode?l.parentNode.removeChild(l):n.removeChild(l);for(var u=o(l),a=0;a<u.length;a++)r(u[a])}});for(var i=o(n),l=0;l<i.length;l++)r(i[l]);var a=document.createElement("div");a.appendChild(n);var c=a.querySelector("div");return null!==c?c.innerHTML:a.innerHTML}catch(s){return console.error(s),""}},r=function(t){if(!t.nodeType||1===t.nodeType){for(var n=t.attributes.length-1;n>=0;n--){var e=t.attributes[n],i=e.name;if(l.includes(i.toLowerCase())){var u=e.value;null!=u&&u.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}else t.removeAttribute(i)}var a=o(t);for(n=0;n<a.length;n++)r(a[n])}},o=function(t){return null!=t.children?t.children:t.childNodes},l=["class","id","href","src","name","slot"],u=["script","style","iframe","meta","link","object","embed"]},SF24:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o}),e.d(n,"c",function(){return l}),e.d(n,"d",function(){return i});var i=function(){var t=window.TapticEngine;t&&t.selection()},r=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},l=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}},fXh5:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return l}),e.d(n,"c",function(){return r}),e.d(n,"d",function(){return a});var i=e("mrSG"),r=function(t,n){return null!==n.closest(t)},o=function(t){var n;return"string"==typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0},l=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n},u=/^[a-z][a-z0-9+\-.]*:/,a=function(t,n,e){return i.b(void 0,void 0,void 0,function(){var r;return i.e(this,function(i){return null!=t&&"#"!==t[0]&&!u.test(t)&&(r=document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[2,r.push(t,e)]):[2,!1]})})}},i1UR:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a}),e.d(n,"c",function(){return u}),e.d(n,"d",function(){return f}),e.d(n,"e",function(){return h}),e.d(n,"f",function(){return o}),e.d(n,"g",function(){return r}),e.d(n,"h",function(){return d}),e.d(n,"i",function(){return c}),e.d(n,"j",function(){return s}),e.d(n,"k",function(){return l});var i=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},r=function(t){return!!t.shadowRoot&&!!t.attachShadow},o=function(t){var n=t.closest("ion-item");return n?n.querySelector("ion-label"):null},l=function(t,n,e,i,o){if(t||r(n)){var l=n.querySelector("input.aux-input");l||((l=n.ownerDocument.createElement("input")).type="hidden",l.classList.add("aux-input"),n.appendChild(l)),l.disabled=o,l.name=e,l.value=i||""}},u=function(t,n,e){return Math.max(t,Math.min(n,e))},a=function(t,n){if(!t){var e="ASSERT: "+n;throw console.error(e),new Error(e)}},c=function(t){return t.timeStamp||Date.now()},s=function(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},d=function(t){var n="rtl"===document.dir;switch(t){case"start":return n;case"end":return!n;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},f=function(t,n){var e=t._original||t;return{_original:t,emit:h(e.emit.bind(e),n)}},h=function(t,n){var e;return void 0===n&&(n=0),function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(e),e=setTimeout.apply(void 0,[t,n].concat(i))}}},i7WA:function(t,n,e){"use strict";e.d(n,"a",function(){return w}),e.d(n,"b",function(){return g}),e.d(n,"c",function(){return S}),e.d(n,"d",function(){return l});var i=e("mrSG"),r=e("3eIi"),o=e("bjU6"),l=function(t){return new Promise(function(n,e){Object(r.n)(function(){u(t),a(t).then(function(e){e.animation&&e.animation.destroy(),c(t),n(e)},function(n){c(t),e(n)})})})},u=function(t){var n=t.enteringEl,e=t.leavingEl;k(n,e,t.direction),t.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),S(n,!1),e&&S(e,!1)},a=function(t){return i.b(void 0,void 0,void 0,function(){var n;return i.e(this,function(e){switch(e.label){case 0:return[4,s(t)];case 1:return[2,(n=e.sent())?d(n,t):f(t)]}})})},c=function(t){var n=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},s=function(t){return i.b(void 0,void 0,void 0,function(){var n;return i.e(this,function(i){switch(i.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,e.e(96).then(e.bind(null,"72vL"))]:[2,void 0];case 1:return n=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,e.e(97).then(e.bind(null,"LoTI"))];case 3:n=i.sent().mdTransitionAnimation,i.label=4;case 4:return[2,n]}})})},d=function(t,n){return i.b(void 0,void 0,void 0,function(){var r;return i.e(this,function(i){switch(i.label){case 0:return[4,h(n,!0)];case 1:return i.sent(),[4,e.e(1).then(e.bind(null,"6Qsj")).then(function(e){return e.create(t,n.baseEl,n)})];case 2:return r=i.sent(),b(n.enteringEl,n.leavingEl),[4,v(r,n)];case 3:return i.sent(),n.progressCallback&&n.progressCallback(void 0),r.hasCompleted&&m(n.enteringEl,n.leavingEl),[2,{hasCompleted:r.hasCompleted,animation:r}]}})})},f=function(t){return i.b(void 0,void 0,void 0,function(){var n,e;return i.e(this,function(i){switch(i.label){case 0:return n=t.enteringEl,e=t.leavingEl,[4,h(t,!1)];case 1:return i.sent(),b(n,e),m(n,e),[2,{hasCompleted:!0}]}})})},h=function(t,n){return i.b(void 0,void 0,void 0,function(){var e;return i.e(this,function(i){switch(i.label){case 0:return e=(void 0!==t.deepWait?t.deepWait:n)?[w(t.enteringEl),w(t.leavingEl)]:[y(t.enteringEl),y(t.leavingEl)],[4,Promise.all(e)];case 1:return i.sent(),[4,p(t.viewIsReady,t.enteringEl)];case 2:return i.sent(),[2]}})})},p=function(t,n){return i.b(void 0,void 0,void 0,function(){return i.e(this,function(e){switch(e.label){case 0:return t?[4,t(n)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})},v=function(t,n){var e=n.progressCallback,i=new Promise(function(n){return t.onFinish(n)});return e?(t.progressStart(),e(t)):t.play(),i},b=function(t,n){g(n,o.c),g(t,o.a)},m=function(t,n){g(t,o.b),g(n,o.d)},g=function(t,n){if(t){var e=new CustomEvent(n,{bubbles:!1,cancelable:!1});t.dispatchEvent(e)}},y=function(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()},w=function(t){return i.b(void 0,void 0,void 0,function(){var n;return i.e(this,function(e){switch(e.label){case 0:return(n=t)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(w))];case 3:e.sent(),e.label=4;case 4:return[2]}})})},S=function(t,n){n?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},k=function(t,n,e){void 0!==t&&(t.style.zIndex="back"===e?"99":"101"),void 0!==n&&(n.style.zIndex="100")}},j1ZV:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i=function(){return function(){}}()},kVNm:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i=function(){return function(){this.enFavoritos=!1}}()},kXsu:function(t,n,e){"use strict";var i=e("CcnG"),r=e("oBZk"),o=e("ZZ/e"),l=e("Ip0R"),u=function(){return function(){}}(),a=i.qb({encapsulation:0,styles:[[""]],data:{}});function c(t){return i.Lb(0,[(t()(),i.sb(0,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),i.Jb(1,null,[" Autor: "," "]))],null,function(t,n){t(n,1,0,n.component.noticia.author)})}function s(t){return i.Lb(0,[i.Eb(0,l.d,[i.u]),(t()(),i.sb(1,0,null,null,8,"ion-label",[],null,null,null,r.P,r.p)),i.rb(2,49152,null,0,o.L,[i.h,i.k,i.z],null,null),(t()(),i.hb(16777216,null,0,1,null,c)),i.rb(4,16384,null,0,l.j,[i.N,i.K],{ngIf:[0,"ngIf"]},null),(t()(),i.sb(5,0,null,0,4,"p",[],null,null,null,null,null)),(t()(),i.Jb(-1,null,[" Fecha de publicaci\xf3n: "])),(t()(),i.sb(7,0,null,null,2,"time",[],null,null,null,null,null)),(t()(),i.Jb(8,null,["",""])),i.Fb(9,2)],function(t,n){t(n,4,0,n.component.noticia.author)},function(t,n){var e=n.component,r=i.Kb(n,8,0,t(n,9,0,i.Db(n,0),e.noticia.publishedAt,"dd/MM/yyyy"));t(n,8,0,r)})}var d=e("mrSG"),f=e("9B/o"),h=e("CjQN"),p=e("wie5"),v=function(){function t(t,n,e,i){this.inAppBrowserService=t,this.actionSheetCtrl=n,this.socialSharing=e,this.dataLocalService=i,this.details=!1}return t.prototype.lanzarMenu=function(){return d.b(this,void 0,void 0,function(){var t=this;return d.e(this,function(n){switch(n.label){case 0:return[4,this.actionSheetCtrl.create({buttons:[{text:"Compartir",icon:"share",cssClass:"action-dark",handler:function(){console.log("Share clicked"),t.socialSharing.share(t.noticia.title,t.noticia.source.name,"",t.noticia.url)}},this.enFavoritos?{text:"Quitar de favoritos",icon:"trash",cssClass:"action-dark",handler:function(){console.log("Borrar de favorito"),t.dataLocalService.borrarNoticia(t.noticia)}}:{text:"Favorito",icon:"star",cssClass:"action-dark",handler:function(){console.log("Favorito"),t.dataLocalService.guardarNoticia(t.noticia)}},{text:"Cancelar",icon:"close",cssClass:"action-dark",role:"cancel",handler:function(){console.log("Cancel clicked")}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},t.prototype.viewDetails=function(){this.details=!this.details},t}(),b=i.qb({encapsulation:0,styles:[[".noticia-more[_ngcontent-%COMP%]{font-size:25px!important;position:absolute;right:-10px;top:-18px}"]],data:{}});function m(t){return i.Lb(0,[(t()(),i.sb(0,0,null,null,1,"ion-img",[["class","animated fadeIn faster"]],null,null,null,r.M,r.m)),i.rb(1,49152,null,0,o.B,[i.h,i.k,i.z],{src:[0,"src"]},null)],function(t,n){t(n,1,0,n.component.noticia.urlToImage)},null)}function g(t){return i.Lb(0,[(t()(),i.sb(0,0,null,null,1,"app-noticia-details",[],null,null,null,s,a)),i.rb(1,49152,null,0,u,[],{noticia:[0,"noticia"]},null)],function(t,n){t(n,1,0,n.component.noticia)},null)}function y(t){return i.Lb(0,[(t()(),i.sb(0,0,null,null,29,"ion-card",[["color","dark"]],null,null,null,r.G,r.c)),i.rb(1,49152,null,0,o.k,[i.h,i.k,i.z],{color:[0,"color"]},null),(t()(),i.sb(2,0,null,0,15,"ion-card-header",[],null,null,null,r.D,r.e)),i.rb(3,49152,null,0,o.m,[i.h,i.k,i.z],null,null),(t()(),i.sb(4,0,null,0,10,"ion-card-subtitle",[],null,null,null,r.E,r.f)),i.rb(5,49152,null,0,o.n,[i.h,i.k,i.z],null,null),(t()(),i.sb(6,0,null,0,1,"span",[["class","text-primary"]],null,null,null,null,null)),(t()(),i.Jb(7,null,["",". "])),(t()(),i.sb(8,0,null,0,1,"span",[["class","noticia-source-name"]],null,null,null,null,null)),(t()(),i.Jb(9,null,["",""])),(t()(),i.sb(10,0,null,0,4,"div",[["class","noticia-more"]],null,null,null,null,null)),(t()(),i.sb(11,0,null,null,3,"ion-button",[["fill","clear"]],null,[[null,"click"]],function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.lanzarMenu()&&i),i},r.B,r.b)),i.rb(12,49152,null,0,o.i,[i.h,i.k,i.z],{fill:[0,"fill"]},null),(t()(),i.sb(13,0,null,0,1,"ion-icon",[["name","more"],["slot","icon-only"]],null,null,null,r.L,r.l)),i.rb(14,49152,null,0,o.A,[i.h,i.k,i.z],{name:[0,"name"]},null),(t()(),i.sb(15,0,null,0,2,"ion-card-title",[],null,null,null,r.F,r.g)),i.rb(16,49152,null,0,o.o,[i.h,i.k,i.z],null,null),(t()(),i.Jb(17,0,["",""])),(t()(),i.hb(16777216,null,0,1,null,m)),i.rb(19,16384,null,0,l.j,[i.N,i.K],{ngIf:[0,"ngIf"]},null),(t()(),i.sb(20,0,null,0,9,"ion-card-content",[],null,null,null,r.C,r.d)),i.rb(21,49152,null,0,o.l,[i.h,i.k,i.z],null,null),(t()(),i.sb(22,0,null,0,1,"p",[],null,null,null,null,null)),(t()(),i.Jb(23,null,["",""])),(t()(),i.sb(24,0,null,0,3,"ion-button",[["fill","clear"]],null,[[null,"click"]],function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.viewDetails()&&i),i},r.B,r.b)),i.rb(25,49152,null,0,o.i,[i.h,i.k,i.z],{fill:[0,"fill"]},null),(t()(),i.sb(26,0,null,0,1,"ion-icon",[["name","information-circle"],["slot","icon-only"]],null,null,null,r.L,r.l)),i.rb(27,49152,null,0,o.A,[i.h,i.k,i.z],{name:[0,"name"]},null),(t()(),i.hb(16777216,null,0,1,null,g)),i.rb(29,16384,null,0,l.j,[i.N,i.K],{ngIf:[0,"ngIf"]},null)],function(t,n){var e=n.component;t(n,1,0,"dark"),t(n,12,0,"clear"),t(n,14,0,"more"),t(n,19,0,e.noticia.urlToImage),t(n,25,0,"clear"),t(n,27,0,"information-circle"),t(n,29,0,e.details)},function(t,n){var e=n.component;t(n,7,0,e.i+1),t(n,9,0,e.noticia.source.name),t(n,17,0,e.noticia.title),t(n,23,0,e.noticia.description)})}e("kVNm"),e.d(n,"a",function(){return w}),e.d(n,"b",function(){return k});var w=i.qb({encapsulation:0,styles:[[""]],data:{}});function S(t){return i.Lb(0,[(t()(),i.sb(0,0,null,null,3,"ion-col",[["size","12"],["size-lg","3"],["size-md","4"],["size-sm","6"],["size-xs","12"]],null,null,null,r.H,r.h)),i.rb(1,49152,null,0,o.r,[i.h,i.k,i.z],{size:[0,"size"]},null),(t()(),i.sb(2,0,null,0,1,"app-noticia",[],null,null,null,y,b)),i.rb(3,49152,null,0,v,[f.a,o.a,h.a,p.a],{noticia:[0,"noticia"],i:[1,"i"],enFavoritos:[2,"enFavoritos"]},null)],function(t,n){var e=n.component;t(n,1,0,"12"),t(n,3,0,n.context.$implicit,n.context.index,e.enFavoritos)},null)}function k(t){return i.Lb(0,[(t()(),i.sb(0,0,null,null,5,"ion-grid",[["fixed",""]],null,null,null,r.J,r.j)),i.rb(1,49152,null,0,o.y,[i.h,i.k,i.z],{fixed:[0,"fixed"]},null),(t()(),i.sb(2,0,null,0,3,"ion-row",[],null,null,null,r.Q,r.q)),i.rb(3,49152,null,0,o.gb,[i.h,i.k,i.z],null,null),(t()(),i.hb(16777216,null,0,1,null,S)),i.rb(5,278528,null,0,l.i,[i.N,i.K,i.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){var e=n.component;t(n,1,0,""),t(n,5,0,e.noticias)},null)}},wie5:function(t,n,e){"use strict";e.d(n,"a",function(){return u});var i=e("mrSG"),r=e("ZZ/e"),o=e("CcnG"),l=e("iw74"),u=function(){function t(t,n){this.storage=t,this.toastController=n,this.noticias=[],this.cargarFavoritos()}return t.prototype.presentToast=function(t){return i.b(this,void 0,void 0,function(){return i.e(this,function(n){switch(n.label){case 0:return[4,this.toastController.create({message:t,duration:1500})];case 1:return n.sent().present(),[2]}})})},t.prototype.guardarNoticia=function(t){this.noticias.find(function(n){return n.title===t.title})||(this.noticias.unshift(t),this.storage.set("favoritos",this.noticias)),this.presentToast("Agregado a favoritos")},t.prototype.cargarFavoritos=function(){return i.b(this,void 0,void 0,function(){var t;return i.e(this,function(n){switch(n.label){case 0:return[4,this.storage.get("favoritos")];case 1:return(t=n.sent())&&(this.noticias=t),[2]}})})},t.prototype.borrarNoticia=function(t){this.noticias=this.noticias.filter(function(n){return n.title!==t.title}),this.storage.set("favoritos",this.noticias),this.presentToast("Eliminado de favoritos")},t.ngInjectableDef=o.Ob({factory:function(){return new t(o.Pb(l.b),o.Pb(r.Ib))},token:t,providedIn:"root"}),t}()},zbXe:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var i=e("t/Na"),r=e("AytR"),o=e("CcnG"),l=r.a.apiUrl,u=new i.g({"X-Api-key":r.a.apiKey}),a=function(){function t(t){this.http=t,this.headlinesPage=0,this.categoriaActual="",this.categoriaPage=0}return t.prototype.ejecutarQuery=function(t){return this.http.get(t=l+t,{headers:u})},t.prototype.getTopHeadlines=function(){return this.headlinesPage++,this.ejecutarQuery("/top-headlines?country=mx&page="+this.headlinesPage)},t.prototype.getTopHeadlinesCategoria=function(t){return this.categoriaActual===t?this.categoriaPage++:(this.categoriaPage=1,this.categoriaActual=t),this.ejecutarQuery("/top-headlines?country=mx&category="+t+"&page="+this.categoriaPage)},t.prototype.setNoticia=function(t){this.noticia=t},t.prototype.getNoticia=function(){return this.noticia},t.ngInjectableDef=o.Ob({factory:function(){return new t(o.Pb(i.c))},token:t,providedIn:"root"}),t}()}}]);