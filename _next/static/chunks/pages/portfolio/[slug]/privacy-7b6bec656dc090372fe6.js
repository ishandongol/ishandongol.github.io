(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{3858:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var s=r(1664),n=r(5893),i=function(){return(0,n.jsx)("svg",{className:"fill-current w-3 h-3 mx-3 text-sajilo-yellow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,n.jsx)("path",{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})})},a=function(e){var t=e.items;return(0,n.jsx)("nav",{className:"text-sajilo font-bold mb-8","aria-label":"Breadcrumb",children:(0,n.jsx)("ol",{className:"list-none p-0 inline-flex",children:t.map((function(e,r){return(0,n.jsxs)("li",{className:"flex items-center",children:[(0,n.jsx)(s.default,{href:e.url,children:(0,n.jsx)("a",{className:"".concat(r===t.length-1?"text-gray-500":""),children:e.title})}),r!==t.length-1&&(0,n.jsx)(i,{})]},r)}))})})}},7063:function(e,t,r){"use strict";var s=r(5893);t.Z=function(e){var t=e.children;return(0,s.jsx)("div",{className:"container mx-auto px-5 md:px-4",children:t})}},6879:function(e,t,r){"use strict";var s=r(1664),n=r(5893);t.Z=function(){return(0,n.jsx)(s.default,{href:"/",children:(0,n.jsxs)("a",{className:"hover:underline h-8 subpixel-antialiased text-sajilo ",children:[(0,n.jsx)("span",{className:"text-sajilo-yellow mr-1",children:"<"}),"\u0908\u0936\u093e\u0928 \u0921\u0902\u0917\u094b\u0932",(0,n.jsx)("span",{className:"text-sajilo-yellow ml-1",children:"/>"})]})})}},1655:function(e,t,r){"use strict";var s=r(2809),n=r(1664),i=r(7063),a=r(1163),l=r(7294),o=r(6879),c=r(5893);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=[{url:"/",title:"Home"},{url:"/experience",title:"Experience"},{url:"/portfolio",title:"Portfolio",dynamic:!0},{url:"/portfolio/sajilorecharge",title:"Sajilo Recharge",dynamic:!0}],u=function(e){var t=e.url,r=e.title,s=e.className;return(0,c.jsx)(n.default,{href:t,children:(0,c.jsx)("a",{className:"block mt-4 lg:inline-block lg:mt-0 hover:text-gray-800 mr-4 ".concat(s||""),children:r})})};t.Z=function(e){var t=e.className,r=(0,a.useRouter)(),s=(0,l.useState)(!1),x=s[0],j=s[1];return(0,c.jsx)("nav",{className:"z-10 flex items-center font-bold justify-between flex-wrap  pt-5 pb-5 lg:p-6 ".concat(t||""," sticky top-0 bg-white"),children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)("div",{className:"flex lg:hidden",children:[(0,c.jsx)("div",{className:"flex-auto text-left py-1 text-xl",children:(0,c.jsx)(o.Z,{})}),(0,c.jsx)("button",{onClick:function(){j(!x)},className:"flex items-center px-3 py-2 border rounded text-gray-700 border-sajilo-yellow hover:text-gray-800 hover:border-gray-800 font-bold",children:(0,c.jsxs)("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("title",{children:"Menu"}),(0,c.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})]}),(0,c.jsxs)("div",{className:"inline flex-grow lg:flex lg:items-center lg:w-auto lg:text-right",children:[(0,c.jsx)("div",{className:"lg:inline-block lg:align-middle hidden text-2xl",children:(0,c.jsx)(o.Z,{})}),(0,c.jsxs)("div",{className:"text-sm lg:flex-grow ".concat(x?"":"hidden"," lg:inline"),children:[h.map((function(e,t){var s=e.dynamic,n=e.url;return s?(0,c.jsx)(u,d(d({},e),{},{className:r.asPath.includes(n)?"text-gray-900 border-b-2 py-1 border-sajilo-yellow":"text-gray-700"}),n+t):(0,c.jsx)(u,d(d({},e),{},{className:r.asPath==="".concat(n,"/")||r.asPath==="".concat(n)?"text-gray-900 border-b-2 py-1 border-sajilo-yellow":"text-gray-700"}),n+t)})),(0,c.jsx)("a",{href:"https://ishandongol.github.io/assets/ishan_dongol_2021.pdf",target:"_blank",className:"inline-block text-sm px-4 py-2 leading-none border-2 rounded-full mr-4 hover:shadow-md text-gray-700",rel:"noreferrer noopener",children:"R\xe9sum\xe9"}),(0,c.jsx)(n.default,{href:"/contact",children:(0,c.jsx)("a",{className:"inline-block text-sm px-4 py-2 leading-none border-2 border-sajilo-yellow rounded-full ".concat("/contact"===r.asPath||"/contact/"===r.asPath?" bg-sajilo-yellow text-sajilo":"text-gray-700"," hover:shadow-md mt-4 lg:mt-0"),children:"Contact"})})]})]})]})})}},9209:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var s=r(7063),n=r(1664),i=r(9644),a=r(6879),l=r(5893),o=function(){return(0,l.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:(0,l.jsx)(s.Z,{children:(0,l.jsxs)("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:[(0,l.jsxs)("div",{className:" lg:w-3/4",children:[(0,l.jsx)("div",{className:"font-bold text-center lg:text-left text-2xl lg:text-xl mb-12 lg:mb-5",children:(0,l.jsx)(a.Z,{})}),(0,l.jsxs)("h3",{className:"text-3xl lg:text-5xl font-bold tracking-tighter text-gray-800 leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4",children:["the full stack developer you would ",(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-10 w-10 inline-block text-sajilo-yellow",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})})," to work with."]}),(0,l.jsx)(i.Z,{})]}),(0,l.jsx)("div",{className:"flex flex-col lg:flex-row justify-center items-center mt-3 lg:pl-4 lg:w-1/4",children:(0,l.jsx)(n.default,{href:"/contact",children:(0,l.jsx)("a",{className:"mx-3 w-full lg:w-auto bg-sajilo hover:bg-sajilo-yellow hover:text-sajilo border border-sajilo text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 rounded-full text-center",children:"Contact Now"})})})]})})})},c=r(2779),x=r(1655),d=function(e){e.preview;var t=e.children;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{}),(0,l.jsxs)("div",{className:"min-h-screen text-sajilo",children:[(0,l.jsx)(x.Z,{className:"mb-4 lg:mb-12 shadow-sm"}),(0,l.jsx)("main",{children:t})]}),(0,l.jsx)(o,{})]})}},2779:function(e,t,r){"use strict";var s=r(9008),n=r(2624),i=r(5893);t.Z=function(){return(0,i.jsxs)(s.default,{children:[(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon.png"}),(0,i.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,i.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,i.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,i.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,i.jsx)("meta",{name:"theme-color",content:"#000"}),(0,i.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,i.jsx)("meta",{name:"description",content:"".concat(n.yf,"'s Personal Portfilio.")}),(0,i.jsx)("meta",{property:"og:image",content:n.vC})]})}},2351:function(e,t,r){"use strict";var s=r(7814),n=r(8947),i=r(5893);t.Z=function(e){var t=e.children,r=e.subTitle,a=e.alignLeft,l=void 0===a||a,o=e.additionalHeaderClass,c=e.url;return(0,i.jsxs)("div",{className:"mb-12",children:[(0,i.jsx)("h1",{className:"text-6xl text-sajilo md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none ".concat(o||"","  ").concat(l?"text-left":"text-center md:text-left"),children:c?(0,i.jsxs)("a",{href:c,target:"_blank",rel:"noreferrer",children:[t,(0,i.jsx)(s.G,{icon:(0,n.N)({prefix:"fas",iconName:"external-link-alt"}),className:"ml-4 mb-2 text-sm text-gray-500"}),(0,i.jsx)("i",{className:"ml-2 las la-external-link-alt text-4xl text-gray-500"})]}):t}),r&&(0,i.jsx)("p",{className:"text-lg pl-1 pt-2 font-bold ".concat(l?"text-left":"text-center md:text-left"," text-gray-500"),children:r})]})}},9644:function(e,t,r){"use strict";var s=r(2624),n=r(7814),i=r(8947),a=r(5893);t.Z=function(e){var t=e.star,r=e.containerClassName,l=e.iconClassName,o=t?s.nb.filter((function(e){return e.star})):s.nb;return(0,a.jsx)("div",{className:"".concat(r||"mb-12 lg:mb-0 lg:inline-flex text-center"),children:o.map((function(e,t){return(0,a.jsx)(n.G,{className:"".concat(l||"flex-1 hover:text-sajilo-yellow text-gray-700 text-center pl-2 pr-2 pt-4 lg:pt-6 lg:pl-0 lg:pr-6 text-6xl lg:text-7xl"),icon:(0,i.N)({prefix:"fab",iconName:e.name})},e.name+t)}))})}},2624:function(e,t,r){"use strict";r.d(t,{yf:function(){return s},vC:function(){return n},nb:function(){return i}});var s="Ishan Dongol",n="/assets/media/ishan.jpg",i=[{name:"ubuntu",star:!0},{name:"node-js",star:!0},{name:"rust",star:!0},{name:"js-square",star:!1},{name:"react",star:!0},{name:"sass",star:!1},{name:"npm",star:!1},{name:"yarn",star:!1},{name:"android",star:!1},{name:"java",star:!1},{name:"git-alt",star:!1},{name:"python",star:!0}]},1967:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return x}});var s=r(7063),n=r(9209),i=r(9008),a=r(2624),l=r(2351),o=r(3858),c=r(5893),x=!0;t.default=function(e){var t=e.post,r=t.slug,x=t.title;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(n.Z,{children:[(0,c.jsx)(i.default,{children:(0,c.jsxs)("title",{children:["Privacy Policy | ",a.yf]})}),(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(o.Z,{items:[{title:"Portfolio",url:"/portfolio"},{title:x,url:"/portfolio/".concat(r)},{title:"Privacy Policy",url:"/portfolio/".concat(r,"/privacy")}]}),(0,c.jsxs)("div",{className:"max-w-2xl mx-auto mb-20 pt-10",children:[(0,c.jsx)(l.Z,{children:"Privacy Policy"}),(0,c.jsx)("div",{className:"row",children:(0,c.jsxs)("div",{className:"col-sm-12",children:[(0,c.jsx)("h3",{children:"Privacy Policy"}),(0,c.jsx)("b",{children:"Effective date:"})," April 18, 2017",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"Welcome to ",x,' ("',x,'"," we","us", or"our"). ',x," provides a fast and fun way to recharge your mobile balance. Our app is not like other e-banking app, it is a simple app that scans the pin code from the recharge card with the help of phone rear camera and runs the USSD code as per the carrier. Our app currently support the two top carriers of Nepal, NTC and Ncell. So, with ",x," just scan and click Top-Up.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Our Privacy Policy explains what data the app collects and what it does with it."}),(0,c.jsx)("br",{}),(0,c.jsx)("li",{children:'By using our Service, you understand and agree that we are providing a platform for you to recharge your mobile phone with ease and fun. Our app is just a tool that provides the service provided by the Carriers ("Newtork Providers"). So, Problems in the app might be from our side or theirs. Have patience if you find a problem until it is sorted out.'}),(0,c.jsx)("br",{}),(0,c.jsx)("li",{children:'Our Policy applies to all visitors, users, and others who access the Service ("Users").'}),(0,c.jsx)("br",{})]}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("b",{children:"1. INFORMATION OUR APP COLLECTS"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("b",{children:"Information you provide:"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Your phone carrier."}),(0,c.jsx)("li",{children:"The USSD messages after you recharge your balance. (If and only if the accessibility setting is turned on)."}),(0,c.jsx)("li",{children:"Collects the scanned pin code"})]}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("b",{children:"Analytics information:"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"We use third-party analytics tools to help us measure trends and crashes for our app.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("b",{children:"2. HOW OUR APP USES YOUR INFORMATION"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"Our app collects the above-mentioned information just to function as intended.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"collects the current phone carrier just to display the options according to the detected carrier."}),(0,c.jsx)("li",{children:"reads the USSD message to determine if the recharge was successful or it failed."}),(0,c.jsx)("li",{children:"collects the detected pin code so that user can recharge their balance."})]}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("b",{children:"3. SHARING AND STORING OF YOUR INFORMATION"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"We do not rent or sell your information to third parties. Also, we do not share the detected pin code to others.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("b",{children:"4. YOUR CHOICES ABOUT YOUR INFORMATION"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("b",{children:"Accessibility settings:"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"The app works even without the accessibility settings, so you have the option to not enable accessibility settings.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("b",{children:"5. OTHER APPS AND SERVICES"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"We are not responsible for the practices employed by any websites or services linked to or from our app. Please remember that when you share the pin code via other app, our privacy policy does not apply to those third-party apps or services.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("b",{children:"6. HOW TO CONTACT US"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"If you have any questions about this Privacy Policy or our app, pleas find the appropriate support channel in the about section of the app.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("b",{children:"7. CHANGES TO OUR PRIVACY POLICY"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),x," may modify or update this Privacy Policy from time to time, so please review it periodically. We may provide you additional forms of notice of modifications or updates as appropriate. Your continued use of ",x," after any modification to this Privacy Policy will constitute your acceptance of such modification."]})})]})]})]})})}},8420:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/[slug]/privacy",function(){return r(1967)}])}},function(e){e.O(0,[774,591,888,179],(function(){return t=8420,e(e.s=t);var t}));var t=e.O();_N_E=t}]);