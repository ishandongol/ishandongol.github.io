(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9421)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,l){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(2648).Z,r=n(7273).Z,o=l(n(7294)),i=n(1003),a=n(7795),s=n(4465),c=n(2692),u=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function x(e,t,n,l){if(i.isLocalURL(t)){if(!l.bypassPrefetchedCheck){let r=void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+r;if(h.has(o))return;h.add(o)}Promise.resolve(e.prefetch(t,n,l)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let g=o.default.forwardRef(function(e,t){let n,l;let{href:a,as:h,children:g,prefetch:v,passHref:b,replace:j,shallow:y,scroll:_,locale:w,onClick:N,onMouseEnter:k,onTouchStart:C,legacyBehavior:E=!1}=e,M=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,E&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let P=!1!==v,O=o.default.useContext(c.RouterContext),S=o.default.useContext(u.AppRouterContext),L=null!=O?O:S,R=!O,{href:T,as:I}=o.default.useMemo(()=>{if(!O){let e=m(a);return{href:e,as:h?m(h):e}}let[e,t]=i.resolveHref(O,a,!0);return{href:e,as:h?i.resolveHref(O,h):t||e}},[O,a,h]),D=o.default.useRef(T),J=o.default.useRef(I);E&&(l=o.default.Children.only(n));let A=E?l&&"object"==typeof l&&l.ref:t,[H,K,q]=f.useIntersection({rootMargin:"200px"}),z=o.default.useCallback(e=>{(J.current!==I||D.current!==T)&&(q(),J.current=I,D.current=T),H(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[I,A,T,q,H]);o.default.useEffect(()=>{L&&K&&P&&x(L,T,I,{locale:w})},[I,T,K,w,P,null==O?void 0:O.locale,L]);let B={ref:z,onClick(e){E||"function"!=typeof N||N(e),E&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,l,r,a,s,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,l,{shallow:a,locale:c,scroll:s}):t[r?"replace":"push"](l||n,{forceOptimisticNavigation:!f})};u?o.default.startTransition(h):h()}(e,L,T,I,j,y,_,w,R,P)},onMouseEnter(e){E||"function"!=typeof k||k(e),E&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),L&&(P||!R)&&x(L,T,I,{locale:w,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){E||"function"!=typeof C||C(e),E&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),L&&(P||!R)&&x(L,T,I,{locale:w,priority:!0,bypassPrefetchedCheck:!0})}};if(!E||b||"a"===l.type&&!("href"in l.props)){let e=void 0!==w?w:null==O?void 0:O.locale,t=(null==O?void 0:O.isLocaleDomain)&&d.getDomainLocale(I,e,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);B.href=t||p.addBasePath(s.addLocale(I,e,null==O?void 0:O.defaultLocale))}return E?o.default.cloneElement(l,B):o.default.createElement("a",Object.assign({},M,B),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!o,[u,f]=l.useState(!1),d=l.useRef(null),p=l.useCallback(e=>{d.current=e},[]);l.useEffect(()=>{if(o){if(c||u)return;let e=d.current;if(e&&e.tagName){let l=function(e,t,n){let{id:l,observer:r,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},l=a.find(e=>e.root===n.root&&e.margin===n.margin);if(l&&(t=i.get(l)))return t;let r=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:r},a.push(n),i.set(n,t),t}(n);return o.set(e,t),r.observe(e),function(){if(o.delete(e),r.unobserve(e),0===o.size){r.disconnect(),i.delete(l);let e=a.findIndex(e=>e.root===l.root&&e.margin===l.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return l}}else if(!u){let e=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(e)}},[c,n,t,u,d.current]);let h=l.useCallback(()=>{f(!1)},[]);return[p,u,h]};var l=n(7294),r=n(4686);let o="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9321:function(e,t,n){"use strict";n.d(t,{N_:function(){return s},SL:function(){return i},bY:function(){return a},nb:function(){return o},pO:function(){return l},xs:function(){return r}});let l=[{href:"/",title:"Home"},{href:"/about",title:"About"},{href:"/portfolio",title:"Portfolio"},{href:"/contact",title:"Contact"}],r=[{icon:"icon-linkedin-2",link:"https://www.linkedin.com/in/ishandongol/",id:"ishandongol"},{icon:"icon-github-squared",link:"https://github.com/ishandongol",id:"ishandongol"},{icon:"icon-facebook-squared-1",link:"https://www.facebook.com/dongol.ishan",id:"dongol.ishan"},{icon:"icon-instagram-3",link:"https://www.instagram.com/is.an.official/",id:"is.an.official"},{icon:"icon-twitter-squared",link:"https://twitter.com/ishandongol",id:"ishandongol"}],o=[{title:"ReactJs",percentage:95},{title:"Typescript",percentage:95},{title:"Rust",percentage:60},{title:"Python",percentage:70},{title:"NodeJs",percentage:85},{title:"Android",percentage:75}],i=[{title:"Nepali",percentage:90},{title:"English",percentage:95},{title:"Newari",percentage:85},{title:"Hindi",percentage:60},{title:"Bahasa",percentage:20}],a={javascript:["React Js","Node Js","Express Js","Typescript"],android:["Flutter","Kotlin","Java"],html:["Tailwind","SASS","CSS","Bootstrap"],ai:["Natural Language Processing"]},s=["Natural Language Processing","Web Development","Mobile Development","Teaching"]},9421:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var l=n(5893);n(728),n(2653),n(8047);var r=n(9321),o=n(1664),i=n.n(o),a=n(1163),s=n(7294);let c=()=>{let[e,t]=(0,s.useState)(!1),{asPath:n}=(0,a.useRouter)(),o=()=>{t(e=>!e)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"tokyo_tm_topbar bg-white fixed top-0 left-0 right-0 h-[50px] z-[14] hidden",children:(0,l.jsxs)("div",{className:"topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]",children:[(0,l.jsx)("div",{className:"logo","data-type":"text",children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("h3",{className:"font-black font-poppins text-[25px] tracking-[2px]",children:"ईशान डंगोल"})})}),(0,l.jsx)("div",{className:"trigger relative top-[5px]",onClick:o,children:(0,l.jsx)("div",{className:"hamburger hamburger--slider ".concat(e?"is-active":""),children:(0,l.jsx)("div",{className:"hamburger-box w-[30px]",children:(0,l.jsx)("div",{className:"hamburger-inner"})})})})]})}),(0,l.jsx)("div",{className:"tokyo_tm_mobile_menu fixed top-[50px] right-[-200px] h-[100vh] w-[200px] z-[15] bg-white transition-all duration-300 ".concat(e?"opened":""),children:(0,l.jsx)("div",{className:"menu_list w-full h-auto clear-both float-left text-right px-[20px] pt-[100px] pb-[0px]",children:(0,l.jsx)("ul",{className:"transition_link list-none",children:r.pO.map(e=>{let{href:t,title:r}=e;return(0,l.jsx)("li",{className:"".concat(n.includes(t)?"active":""," mb-[7px]"),children:(0,l.jsx)(i(),{className:"text-black font-montserrat",href:t,onClick:o,children:r})},t)})})})})]})},u=()=>{let{asPath:e}=(0,a.useRouter)();return(0,l.jsx)("div",{className:"leftpart w-[450px] h-[100vh] fixed flex items-center z-[12] px-[100px] py-[0px] bg-white",children:(0,l.jsxs)("div",{className:"leftpart_inner w-full h-auto",children:[(0,l.jsx)("div",{className:"logo","data-type":"text",children:(0,l.jsx)(i(),{href:"/",children:(0,l.jsx)("h3",{className:"font-poppins font-black text-[31px] tracking-[2px]",children:"ईशान डंगोल"})})}),(0,l.jsx)("div",{className:"menu px-[0px] py-[50px] w-full float-left",children:(0,l.jsx)("ul",{className:"transition_link m-0 list-none",children:r.pO.map(t=>{let{href:n,title:r}=t;return(0,l.jsx)("li",{className:"".concat(e.includes(n)?"active":""," m-0 w-full float-left"),children:(0,l.jsx)(i(),{className:"text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black",href:n,children:r})},n)})})}),(0,l.jsx)("div",{className:"copyright w-full float-left",children:(0,l.jsxs)("p",{className:"text-[15px] text-[#999] font-montserrat leading-[25px]",children:["\xa9 ",new Date().getFullYear()," Ishan Dongol",(0,l.jsx)("br",{})]})})]})})},f=e=>{let{children:t}=e;return(0,l.jsxs)("div",{className:"tokyo_tm_all_wrap","data-magic-cursor":"show","data-enter":"fadeInLeft","data-exit":"",children:[(0,l.jsx)(c,{}),(0,l.jsx)(u,{}),(0,l.jsx)("div",{className:"rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]",children:(0,l.jsx)("div",{className:"rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]",children:t})})]})};function d(e){let{Component:t,pageProps:n}=e;return(0,l.jsx)(f,{children:(0,l.jsx)(t,{...n})})}},728:function(){},8047:function(){},2653:function(){},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);