(window.webpackJsonp=window.webpackJsonp||[]).push([[14,65],{1310:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(201);a.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},162:function(e,a,t){"use strict";t.r(a);t(13);var n=t(0),l=t.n(n),c=t(166),r=t(170),i=t(46),s=t(201),o=t(2),m=t(191),u=t.n(m),d=t(1313),b=t(1314),h=t(192),p=t(207),f=t(113),E=t.n(f);function k({item:e,onItemClick:a,collapsible:t,...c}){const{items:r,href:i,label:s,type:m}=e,[d,b]=Object(n.useState)(e.collapsed),[f,E]=Object(n.useState)(null);e.collapsed!==f&&(E(e.collapsed),b(e.collapsed));const g=Object(n.useCallback)(e=>{e.preventDefault(),e.target.blur(),b(e=>!e)});switch(m){case"category":return r.length>0&&l.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":d}),key:s},l.a.createElement("a",Object(o.a)({className:u()("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&!e.collapsed}),href:"#!",onClick:t?g:void 0},c),s),l.a.createElement("ul",{className:"menu__list"},r.map(e=>l.a.createElement(k,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:a,collapsible:t}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:s},l.a.createElement(h.a,Object(o.a)({className:"menu__link",to:i},Object(p.a)(i)?{isNavLink:!0,activeClassName:"menu__link--active",exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},c),s))}}var g=function(e){const[a,t]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:c,hideOnScroll:i=!1}={}}}={},isClient:s}=Object(r.a)(),{logoLink:m,logoLinkProps:p,logoImageUrl:f,logoAlt:g}=Object(b.a)(),{docsSidebars:v,path:C,sidebar:N,sidebarCollapsible:_}=e;if(Object(d.a)(a),!N)return null;const w=v[N];if(!w)throw new Error(`Cannot find the sidebar "${N}" in the sidebar config!`);return _&&w.forEach(e=>function e(a,t){const{items:n,href:l,type:c}=a;switch(c){case"category":{const l=n.map(a=>e(a,t)).filter(e=>e).length>0;return a.collapsed=!l,l}case"link":default:return l===t}}(e,C)),l.a.createElement("div",{className:E.a.sidebar},i&&l.a.createElement(h.a,Object(o.a)({tabIndex:"-1",className:E.a.sidebarLogo,to:m},p),null!=f&&l.a.createElement("img",{key:s,src:f,alt:g}),null!=c&&l.a.createElement("strong",null,c)),l.a.createElement("div",{className:u()("menu","menu--responsive",E.a.menu,{"menu--show":a})},l.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{t(!a)}},a?l.a.createElement("span",{className:u()(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:E.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},w.map(e=>l.a.createElement(k,{key:e.label,item:e,onItemClick:e=>{e.target.blur(),t(!1)},collapsible:_})))))},v=t(204),C=t(1310),N=t(206),_=t(114),w=t.n(_);a.default=function(e){const{route:a,docsMetadata:t,location:n}=e,o=a.routes.find(e=>Object(N.b)(n.pathname,e))||{},{permalinkToSidebar:m,docsSidebars:u,version:d}=t,b=m[o.path],{siteConfig:{themeConfig:h={}}={},isClient:p}=Object(r.a)(),{sidebarCollapsible:f=!0}=h;return 0===Object.keys(o).length?l.a.createElement(C.default,e):l.a.createElement(s.a,{version:d,key:p},l.a.createElement("div",{className:w.a.docPage},b&&l.a.createElement("div",{className:w.a.docSidebarContainer},l.a.createElement(g,{docsSidebars:u,path:o.path,sidebar:b,sidebarCollapsible:f})),l.a.createElement("main",{className:w.a.docMainContainer},l.a.createElement(c.a,{components:v.a},Object(i.a)(a.routes)))))}},204:function(e,a,t){"use strict";var n=t(2),l=t(0),c=t.n(l),r=t(192),i=t(168),s=t(191),o=t.n(s),m=t(170),u=(t(93),t(94)),d=t.n(u);var b=e=>function({id:a,...t}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(m.a)();return a?c.a.createElement(e,t,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:o()("anchor",{[d.a.enhancedAnchor]:!n}),id:a}),c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#"),t.children):c.a.createElement(e,t)},h=t(95),p=t.n(h);a.a={code:e=>{const{children:a}=e;return"string"==typeof a?c.a.createElement(i.a,e):a},a:e=>/\.[^./]+$/.test(e.href)?c.a.createElement("a",e):c.a.createElement(r.a,e),pre:e=>c.a.createElement("div",Object(n.a)({className:p.a.mdxCodeBlock},e)),h1:b("h1"),h2:b("h2"),h3:b("h3"),h4:b("h4"),h5:b("h5"),h6:b("h6")}}}]);