/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=[{id:1,Oddział:"Dolnośląski Oddział Wójewódzki NFZ"},{id:2,Oddział:"Kujawsko-Pomorski Oddział Wójewódzki NFZ"},{id:3,Oddział:"Lubelski Oddział Wójewódzki NFZ"},{id:4,Oddział:"Lubuski Oddział Wójewódzki NFZ"},{id:5,Oddział:"Łódzki Oddział Wójewódzki NFZ"},{id:6,Oddział:"Małopolski Oddział Wójewódzki NFZ"},{id:7,Oddział:"Mazowiecki Oddział Wójewódzki NFZ"},{id:8,Oddział:"Opolski Oddział Wójewódzki NFZ"},{id:9,Oddział:"Podkarpacki Oddział Wójewódzki NFZ"},{id:10,Oddział:"Podlaski Oddział Wójewódzki NFZ"},{id:11,Oddział:"Pomorski Oddział Wójewódzki NFZ"},{id:12,Oddział:"Śląski Oddział Wójewódzki NFZ"},{id:13,Oddział:"Świętokrzyski Oddział Wójewódzki NFZ"},{id:14,Oddział:"Warmińsko-Mazurski Oddział Wójewódzki NFZ"},{id:15,Oddział:"Wielkopolski Oddział Wójewódzki NFZ"},{id:16,Oddział:"Zachodniopomorski Oddział Wójewódzki NFZ"}],e=function(t,i){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},e(t,i)};function i(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}var n=function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var a in e=arguments[i])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},n.apply(this,arguments)};Object.create;function a(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],n=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,a,r=i.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)o.push(n.value)}catch(t){a={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(a)throw a.error}}return o}function o(t,e,i){if(i||2===arguments.length)for(var n,a=0,r=e.length;a<r;a++)!n&&a in e||(n||(n=Array.prototype.slice.call(e,0,a)),n[a]=e[a]);return t.concat(n||Array.prototype.slice.call(e))}Object.create;var s=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();var d=function(){function t(t,e){for(var i=[],n=2;n<arguments.length;n++)i[n-2]=arguments[n];this.root=t,this.initialize.apply(this,o([],r(i))),this.foundation=void 0===e?this.getDefaultFoundation():e,this.foundation.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new s({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation.destroy()},t.prototype.listen=function(t,e,i){this.root.addEventListener(t,e,i)},t.prototype.unlisten=function(t,e,i){this.root.removeEventListener(t,e,i)},t.prototype.emit=function(t,e,i){var n;void 0===i&&(i=!1),"function"==typeof CustomEvent?n=new CustomEvent(t,{bubbles:i,detail:e}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root.dispatchEvent(n)},t}();function u(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var e=!1;try{var i={get passive(){return e=!0,!1}},n=function(){};t.document.addEventListener("test",n,i),t.document.removeEventListener("test",n,i)}catch(t){e=!1}return e}(t)&&{passive:!0}}function c(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}var l,p={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},f={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},v={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};var h=["touchstart","pointerdown","mousedown","keydown"],m=["touchend","pointerup","mouseup","contextmenu"],y=[],g=function(t){function e(i){var a=t.call(this,n(n({},e.defaultAdapter),i))||this;return a.activationAnimationHasEnded=!1,a.activationTimer=0,a.fgDeactivationRemovalTimer=0,a.fgScale="0",a.frame={width:0,height:0},a.initialSize=0,a.layoutFrame=0,a.maxRadius=0,a.unboundedCoords={left:0,top:0},a.activationState=a.defaultActivationState(),a.activationTimerCallback=function(){a.activationAnimationHasEnded=!0,a.runDeactivationUXLogicIfReady()},a.activateHandler=function(t){a.activateImpl(t)},a.deactivateHandler=function(){a.deactivateImpl()},a.focusHandler=function(){a.handleFocus()},a.blurHandler=function(){a.handleBlur()},a.resizeHandler=function(){a.layout()},a}return i(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return f},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return v},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var n=e.cssClasses,a=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame((function(){t.adapter.addClass(a),t.adapter.isUnbounded()&&(t.adapter.addClass(r),t.layoutInternal())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,n=i.ROOT,a=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter.removeClass(n),t.adapter.removeClass(a),t.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){t.layoutInternal(),t.layoutFrame=0}))},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var e,i;if(t){try{for(var n=a(h),r=n.next();!r.done;r=n.next()){var o=r.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(t){e={error:t}}finally{try{r&&!r.done&&(i=n.return)&&i.call(n)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var e,i;if("keydown"===t.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var n=a(m),r=n.next();!r.done;r=n.next()){var o=r.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{r&&!r.done&&(i=n.return)&&i.call(n)}finally{if(e)throw e.error}}},e.prototype.deregisterRootHandlers=function(){var t,e;try{for(var i=a(h),n=i.next();!n.done;n=i.next()){var r=n.value;this.adapter.deregisterInteractionHandler(r,this.activateHandler)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=a(m),n=i.next();!n.done;n=i.next()){var r=n.value;this.adapter.deregisterDocumentInteractionHandler(r,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,i=e.strings;Object.keys(i).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter.updateCssVariable(i[e],null)}))},e.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var n=this.previousActivationEvent;if(!(n&&void 0!==t&&n.type!==t.type))i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&y.length>0&&y.some((function(t){return e.adapter.containsEventTarget(t)}))?this.resetActivationState():(void 0!==t&&(y.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){y=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive(t),i.wasElementMadeActive&&e.animateActivation()),i.wasElementMadeActive||(e.activationState=e.defaultActivationState())})))}}},e.prototype.checkElementMadeActive=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},e.prototype.animateActivation=function(){var t=this,i=e.strings,n=i.VAR_FG_TRANSLATE_START,a=i.VAR_FG_TRANSLATE_END,r=e.cssClasses,o=r.FG_DEACTIVATION,s=r.FG_ACTIVATION,d=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",c="";if(!this.adapter.isUnbounded()){var l=this.getFgTranslationCoordinates(),p=l.startPoint,f=l.endPoint;u=p.x+"px, "+p.y+"px",c=f.x+"px, "+f.y+"px"}this.adapter.updateCssVariable(n,u),this.adapter.updateCssVariable(a,c),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer=setTimeout((function(){t.activationTimerCallback()}),d)},e.prototype.getFgTranslationCoordinates=function(){var t,e=this.activationState,i=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var n,a,r=e.x,o=e.y,s=r+i.left,d=o+i.top;if("touchstart"===t.type){var u=t;n=u.changedTouches[0].pageX-s,a=u.changedTouches[0].pageY-d}else{var c=t;n=c.pageX-s,a=c.pageY-d}return{x:n,y:a}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2}).x-this.initialSize/2,y:t.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,n=this.activationState,a=n.hasDeactivationUXRun,r=n.isActivated;(a||!r)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout((function(){t.adapter.removeClass(i)}),v.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return t.previousActivationEvent=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(e.isActivated){var i=n({},e);e.isProgrammatic?(requestAnimationFrame((function(){t.animateDeactivation(i)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()})))}},e.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?i:Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2))+e.numbers.PADDING;var n=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&n%2!=0?this.initialSize=n-1:this.initialSize=n,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,i=t.VAR_FG_SIZE,n=t.VAR_LEFT,a=t.VAR_TOP,r=t.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(r,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(n,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(a,this.unboundedCoords.top+"px"))},e}(s);new(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.disabled=!1,e}return i(e,t),e.attachTo=function(t,i){void 0===i&&(i={isUnbounded:void 0});var n=new e(t);return void 0!==i.isUnbounded&&(n.unbounded=i.isUnbounded),n},e.createAdapter=function(t){return{addClass:function(e){return t.root.classList.add(e)},browserSupportsCssVars:function(){return function(t,e){void 0===e&&(e=!1);var i,n=t.CSS;if("boolean"==typeof l&&!e)return l;if(!n||"function"!=typeof n.supports)return!1;var a=n.supports("--css-vars","yes"),r=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=a||r,e||(l=i),i}(window)},computeBoundingRect:function(){return t.root.getBoundingClientRect()},containsEventTarget:function(e){return t.root.contains(e)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,u())},deregisterInteractionHandler:function(e,i){return t.root.removeEventListener(e,i,u())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return c(t.root,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,u())},registerInteractionHandler:function(e,i){return t.root.addEventListener(e,i,u())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(e){return t.root.classList.remove(e)},updateCssVariable:function(e,i){return t.root.style.setProperty(e,i)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return Boolean(this.isUnbounded)},set:function(t){this.isUnbounded=Boolean(t),this.setUnbounded()},enumerable:!1,configurable:!0}),e.prototype.activate=function(){this.foundation.activate()},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.layout=function(){this.foundation.layout()},e.prototype.getDefaultFoundation=function(){return new g(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root;this.isUnbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded=function(){this.foundation.setUnbounded(Boolean(this.isUnbounded))},e}(d))(document.querySelector(".mdc-button"));console.log(t);t.map((function(t){var e=t.id,i=t.Oddział,n=document.getElementById("select"),a=document.createElement("option");a.text=i,a.value=e,n.add(a)}))})();
//# sourceMappingURL=main.js.map