(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{3858:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(1664),l=n(5893),s=function(){return(0,l.jsx)("svg",{className:"fill-current w-3 h-3 mx-3 text-sajilo-yellow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,l.jsx)("path",{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})})},a=function(e){var t=e.items;return(0,l.jsx)("nav",{className:"text-sajilo font-bold mb-8","aria-label":"Breadcrumb",children:(0,l.jsx)("ol",{className:"list-none p-0 inline-flex",children:t.map((function(e,n){return(0,l.jsxs)("li",{className:"flex items-center",children:[(0,l.jsx)(r.default,{href:e.url,children:(0,l.jsx)("a",{className:"".concat(n===t.length-1?"text-gray-500":""),children:e.title})}),n!==t.length-1&&(0,l.jsx)(s,{})]},n)}))})})}},7063:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.children;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:t})}},6879:function(e,t,n){"use strict";var r=n(1664),l=n(5893);t.Z=function(){return(0,l.jsx)(r.default,{href:"/",children:(0,l.jsxs)("a",{className:"hover:underline h-8 subpixel-antialiased text-sajilo ",children:[(0,l.jsx)("span",{className:"text-sajilo-yellow mr-1",children:"<"}),"\u0908\u0936\u093e\u0928 \u0921\u0902\u0917\u094b\u0932",(0,l.jsx)("span",{className:"text-sajilo-yellow ml-1",children:"/>"})]})})}},1655:function(e,t,n){"use strict";var r=n(2809),l=n(1664),s=n(7063),a=n(1163),i=n(7294),c=n(6879),o=n(5893);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=[{url:"/",title:"Home"},{url:"/experience",title:"Experience"},{url:"/portfolio",title:"Portfolio",dynamic:!0},{url:"/portfolio/sajilorecharge",title:"Sajilo Recharge",dynamic:!0}],u=function(e){var t=e.url,n=e.title,r=e.className;return(0,o.jsx)(l.default,{href:t,children:(0,o.jsx)("a",{className:"block mt-4 lg:inline-block lg:mt-0 hover:text-gray-800 mr-4 ".concat(r||""),children:n})})};t.Z=function(e){var t=e.className,n=(0,a.useRouter)(),r=(0,i.useState)(!1),x=r[0],m=r[1];return(0,o.jsx)("nav",{className:"z-10 flex items-center font-bold justify-between flex-wrap  pt-5 pb-5 lg:p-6 ".concat(t||""," sticky top-0 bg-white"),children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)("div",{className:"flex lg:hidden",children:[(0,o.jsx)("div",{className:"flex-auto text-left py-1 text-xl",children:(0,o.jsx)(c.Z,{})}),(0,o.jsx)("button",{onClick:function(){m(!x)},className:"flex items-center px-3 py-2 border rounded text-gray-700 border-sajilo-yellow hover:text-gray-800 hover:border-gray-800 font-bold",children:(0,o.jsxs)("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("title",{children:"Menu"}),(0,o.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})]}),(0,o.jsxs)("div",{className:"inline flex-grow lg:flex lg:items-center lg:w-auto lg:text-right",children:[(0,o.jsx)("div",{className:"lg:inline-block lg:align-middle hidden text-2xl",children:(0,o.jsx)(c.Z,{})}),(0,o.jsxs)("div",{className:"text-sm lg:flex-grow ".concat(x?"":"hidden"," lg:inline"),children:[f.map((function(e,t){var r=e.dynamic,l=e.url;return r?(0,o.jsx)(u,d(d({},e),{},{className:n.asPath.includes(l)?"text-gray-900 border-b-2 py-1 border-sajilo-yellow":"text-gray-700"}),l+t):(0,o.jsx)(u,d(d({},e),{},{className:n.asPath==="".concat(l,"/")||n.asPath==="".concat(l)?"text-gray-900 border-b-2 py-1 border-sajilo-yellow":"text-gray-700"}),l+t)})),(0,o.jsx)("a",{href:"https://ishandongol.github.io/assets/ishan_dongol_2021.pdf",target:"_blank",className:"inline-block text-sm px-4 py-2 leading-none border-2 rounded-full mr-4 hover:shadow-md text-gray-700",rel:"noreferrer noopener",children:"R\xe9sum\xe9"}),(0,o.jsx)(l.default,{href:"/contact",children:(0,o.jsx)("a",{className:"inline-block text-sm px-4 py-2 leading-none border-2 border-sajilo-yellow rounded-full ".concat("/contact"===n.asPath||"/contact/"===n.asPath?" bg-sajilo-yellow text-sajilo":"text-gray-700"," hover:shadow-md mt-4 lg:mt-0"),children:"Contact"})})]})]})]})})}},9209:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7063),l=n(1664),s=n(9644),a=n(6879),i=n(5893),c=function(){return(0,i.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:(0,i.jsx)(r.Z,{children:(0,i.jsxs)("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:[(0,i.jsxs)("div",{className:" lg:w-3/4",children:[(0,i.jsx)("div",{className:"font-bold text-center lg:text-left text-2xl lg:text-xl mb-12 lg:mb-5",children:(0,i.jsx)(a.Z,{})}),(0,i.jsxs)("h3",{className:"text-3xl lg:text-5xl font-bold tracking-tighter text-gray-800 leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4",children:["the full stack developer you would ",(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-10 w-10 inline-block text-sajilo-yellow",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})})," to work with."]}),(0,i.jsx)(s.Z,{})]}),(0,i.jsx)("div",{className:"flex flex-col lg:flex-row justify-center items-center mt-3 lg:pl-4 lg:w-1/4",children:(0,i.jsx)(l.default,{href:"/contact",children:(0,i.jsx)("a",{className:"mx-3 w-full lg:w-auto bg-sajilo hover:bg-sajilo-yellow hover:text-sajilo border border-sajilo text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 rounded-full text-center",children:"Contact Now"})})})]})})})},o=n(2779),x=n(1655),d=function(e){e.preview;var t=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{}),(0,i.jsxs)("div",{className:"min-h-screen text-sajilo",children:[(0,i.jsx)(x.Z,{className:"mb-4 lg:mb-12 shadow-sm"}),(0,i.jsx)("main",{children:t})]}),(0,i.jsx)(c,{})]})}},2779:function(e,t,n){"use strict";var r=n(9008),l=n(2624),s=n(5893);t.Z=function(){return(0,s.jsxs)(r.default,{children:[(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,s.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,s.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,s.jsx)("meta",{name:"theme-color",content:"#000"}),(0,s.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,s.jsx)("meta",{name:"description",content:"".concat(l.yf,"'s Personal Portfilio.")}),(0,s.jsx)("meta",{property:"og:image",content:l.vC})]})}},2351:function(e,t,n){"use strict";var r=n(7814),l=n(8947),s=n(5893);t.Z=function(e){var t=e.children,n=e.subTitle,a=e.alignLeft,i=void 0===a||a,c=e.additionalHeaderClass,o=e.url;return(0,s.jsxs)("div",{className:"mb-12",children:[(0,s.jsx)("h1",{className:"text-6xl text-sajilo md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none ".concat(c||"","  ").concat(i?"text-left":"text-center md:text-left"),children:o?(0,s.jsxs)("a",{href:o,target:"_blank",rel:"noreferrer",children:[t,(0,s.jsx)(r.G,{icon:(0,l.N)({prefix:"fas",iconName:"external-link-alt"}),className:"ml-4 mb-2 text-sm text-gray-500"}),(0,s.jsx)("i",{className:"ml-2 las la-external-link-alt text-4xl text-gray-500"})]}):t}),n&&(0,s.jsx)("p",{className:"text-lg pl-1 pt-2 font-bold ".concat(i?"text-left":"text-center md:text-left"," text-gray-500"),children:n})]})}},9644:function(e,t,n){"use strict";var r=n(2624),l=n(7814),s=n(8947),a=n(5893);t.Z=function(e){var t=e.star,n=e.containerClassName,i=e.iconClassName,c=t?r.nb.filter((function(e){return e.star})):r.nb;return(0,a.jsx)("div",{className:"".concat(n||"mb-12 lg:mb-0 lg:inline-flex text-center"),children:c.map((function(e,t){return(0,a.jsx)(l.G,{className:"".concat(i||"flex-1 hover:text-sajilo-yellow text-gray-700 text-center pl-2 pr-2 pt-4 lg:pt-6 lg:pl-0 lg:pr-6 text-6xl lg:text-7xl"),icon:(0,s.N)({prefix:"fab",iconName:e.name})},e.name+t)}))})}},2624:function(e,t,n){"use strict";n.d(t,{yf:function(){return r},vC:function(){return l},nb:function(){return s}});var r="Ishan Dongol",l="/assets/media/ishan.jpg",s=[{name:"ubuntu",star:!0},{name:"node-js",star:!0},{name:"rust",star:!0},{name:"js-square",star:!1},{name:"react",star:!0},{name:"sass",star:!1},{name:"npm",star:!1},{name:"yarn",star:!1},{name:"android",star:!1},{name:"java",star:!1},{name:"git-alt",star:!1},{name:"python",star:!0}]},5056:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return b},default:function(){return v}});var r=n(2809),l=n(7063),s=n(9209),a=n(9008),i=n(2624),c=n(2351),o=n(5893),x=function(e){var t=e.title,n=e.subTitle,r=e.content,l=e.date;return(0,o.jsxs)("div",{className:"flex flex-col w-full rounded-lg shadow bg-white px-4 py-5",children:[(0,o.jsx)("div",{className:"text-sajilo mb-2 flex justify-between font-bold text-2xl",children:t}),(0,o.jsxs)("div",{className:"text-sajilo mb-2 flex justify-between text-sm font-bold",children:[n," | ",l]}),(0,o.jsx)("div",{className:"text-sajilo mt-4",children:r})]})},d=function(e){var t=e.children,n=e.className;return(0,o.jsx)("div",{className:"w-full lg:px-2 pb-10 lg:py-10 ".concat(n||""),children:t})},f=function(){return(0,o.jsx)("div",{className:"lg:w-1/5 justify-center hidden lg:flex",children:(0,o.jsx)("div",{className:"relative h-full lg:w-1 bg-sajilo-yellow items-center justify-center"})})},u=function(e){var t=e.children;return(0,o.jsx)("div",{className:"flex flex-row w-full",children:t})},m=function(e){return(0,o.jsxs)(u,{children:[(0,o.jsx)(d,{className:"hidden lg:block"}),(0,o.jsx)(f,{}),(0,o.jsx)(d,{children:(0,o.jsx)(x,{title:e.role,subTitle:"".concat(e.org),date:"".concat(e.startYear," - ").concat(e.endYear),content:e.description})})]})},h=function(e){return(0,o.jsxs)(u,{children:[(0,o.jsx)(d,{children:(0,o.jsx)(x,{title:e.role,subTitle:"".concat(e.org),date:"".concat(e.startYear," - ").concat(e.endYear),content:e.description})}),(0,o.jsx)(f,{}),(0,o.jsx)(d,{className:"hidden lg:block"})]})},j=n(3858);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=!0,v=function(e){var t=e.data,n="Experience";return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(a.default,{children:(0,o.jsxs)("title",{children:[n," | ",i.yf]})}),(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(j.Z,{items:[{title:"Home",url:"/"},{title:n,url:"/experience"}]}),(0,o.jsx)(c.Z,{subTitle:"In beta version with constant improvement.",children:n}),(0,o.jsx)("div",{className:"min-h-screen flex justify-center lg:my-24",children:(0,o.jsx)("div",{className:"w-full mx-auto",children:t&&t.map((function(e,t){return t%2===0?(0,o.jsx)(h,p({},e),t):(0,o.jsx)(m,p({},e),t)}))})})]})]})})}},8350:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experience",function(){return n(5056)}])}},function(e){e.O(0,[774,591,888,179],(function(){return t=8350,e(e.s=t);var t}));var t=e.O();_N_E=t}]);