var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e}function s(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}let f;function d(t){f=t}const h=[],m=[],p=[],g=[],$=Promise.resolve();let x=!1;function y(t){p.push(t)}let b=!1;const _=new Set;function w(){if(!b){b=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];d(e),v(e.$$)}for(h.length=0;m.length;)m.pop()();for(let t=0;t<p.length;t+=1){const e=p[t];_.has(e)||(_.add(e),e())}p.length=0}while(h.length);for(;g.length;)g.pop()();x=!1,b=!1,_.clear()}}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const E=new Set;function k(t,e){-1===t.$$.dirty[0]&&(h.push(t),x||(x=!0,$.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(a,s,i,u,l,h,m=[-1]){const p=f;d(a);const g=s.props||{},$=a.$$={fragment:null,ctx:null,props:h,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:m};let x=!1;if($.ctx=i?i(a,g,(t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&l($.ctx[t],$.ctx[t]=o)&&($.bound[t]&&$.bound[t](o),x&&k(a,t)),e}):[],$.update(),x=!0,o($.before_update),$.fragment=!!u&&u($.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);$.fragment&&$.fragment.l(t),t.forEach(c)}else $.fragment&&$.fragment.c();s.intro&&((b=a.$$.fragment)&&b.i&&(E.delete(b),b.i(_))),function(t,n,a){const{fragment:s,on_mount:i,on_destroy:c,after_update:u}=t.$$;s&&s.m(n,a),y(()=>{const n=i.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(y)}(a,s.target,s.anchor),w()}var b,_;d(p)}let H;function M(e){let n,o,r,a,f,d,h;return{c(){n=u("main"),o=u("h1"),r=l("Hello "),a=l(e[0]),f=l("! Yesss!"),d=l(" "),h=u("p"),h.innerHTML='Visit the <a href="https://svelte.dev/tutorial" target="_blank">Svelte tutorial</a> to learn how to build Svelte apps.',this.c=t},m(t,e){i(t,n,e),s(n,o),s(o,r),s(o,a),s(o,f),s(n,d),s(n,h)},p(t,[e]){1&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(a,t[0])},i:t,o:t,d(t){t&&c(n)}}}function S(t,e,n){let{name:o}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name)},[o]}"function"==typeof HTMLElement&&(H=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class T extends H{constructor(t){super(),this.shadowRoot.innerHTML="<style>main{text-align:center;padding:1em;max-width:240px;margin:0 auto}h1{color:#ff3e00;text-transform:uppercase;font-size:4em;font-weight:100}@media(min-width: 640px){main{max-width:none}}</style>",C(this,{target:this.shadowRoot},S,M,a,{name:0}),t&&(t.target&&i(t.target,this,t.anchor),t.props&&(this.$set(t.props),w()))}static get observedAttributes(){return["name"]}get name(){return this.$$.ctx[0]}set name(t){this.$set({name:t}),w()}}return customElements.define("svelte-snake",T),T}();
//# sourceMappingURL=snake.js.map
