(window.webpackJsonp=window.webpackJsonp||[]).push([[17,97],{162:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(166),r=t(22),i=t(27),o=t(177),s=t(3),m=t(171),u=t(172),d=t(183),b=t(210),h=t(211),p=t(209),E=t(173),v=t(178),f=t(230),k=t(83),O=t.n(k);const j=(e,a)=>"link"===e.type?Object(u.isSamePath)(e.href,a):"category"===e.type&&e.items.some((e=>j(e,a)));function C({item:e,onItemClick:a,collapsible:t,activePath:c,...r}){const{items:i,label:o}=e,u=j(e,c),d=function(e){const a=Object(n.useRef)(e);return Object(n.useEffect)((()=>{a.current=e}),[e]),a.current}(u),[b,h]=Object(n.useState)((()=>!!t&&(!u&&e.collapsed))),p=Object(n.useRef)(null),[E,v]=Object(n.useState)(void 0),f=(e=!0)=>{var a;v(e?`${null===(a=p.current)||void 0===a?void 0:a.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{u&&!d&&b&&h(!1)}),[u,d,b]);const k=Object(n.useCallback)((e=>{e.preventDefault(),E||f(),setTimeout((()=>h((e=>!e))),100)}),[E]);return 0===i.length?null:l.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":b}),key:o},l.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&u,[O.a.menuLinkText]:!t}),onClick:t?k:void 0,href:t?"#!":void 0},r),o),l.a.createElement("ul",{className:"menu__list",ref:p,style:{height:E},onTransitionEnd:()=>{b||f(!1)}},i.map((e=>l.a.createElement(N,{tabIndex:b?"-1":"0",key:e.label,item:e,onItemClick:a,collapsible:t,activePath:c})))))}function g({item:e,onItemClick:a,activePath:t,collapsible:n,...c}){const{href:r,label:i}=e,o=j(e,t);return l.a.createElement("li",{className:"menu__list-item",key:i},l.a.createElement(E.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":o}),to:r},Object(v.a)(r)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},c),i))}function N(e){switch(e.item.type){case"category":return l.a.createElement(C,e);case"link":default:return l.a.createElement(g,e)}}var _=function({path:e,sidebar:a,sidebarCollapsible:t=!0,onCollapse:c,isHidden:r}){const[i,o]=Object(n.useState)(!1),{navbar:{hideOnScroll:s},hideableSidebar:E}=Object(u.useThemeConfig)(),{isAnnouncementBarClosed:v}=Object(d.a)(),{scrollY:k}=Object(p.a)();Object(b.a)(i);const j=Object(h.a)();return Object(n.useEffect)((()=>{j===h.b.desktop&&o(!1)}),[j]),l.a.createElement("div",{className:Object(m.a)(O.a.sidebar,{[O.a.sidebarWithHideableNavbar]:s,[O.a.sidebarHidden]:r})},s&&l.a.createElement(f.a,{tabIndex:-1,className:O.a.sidebarLogo}),l.a.createElement("div",{className:Object(m.a)("menu","menu--responsive","thin-scrollbar",O.a.menu,{"menu--show":i,[O.a.menuWithAnnouncementBar]:!v&&0===k})},l.a.createElement("button",{"aria-label":i?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{o(!i)}},i?l.a.createElement("span",{className:Object(m.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:O.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},a.map((a=>l.a.createElement(N,{key:a.label,item:a,onItemClick:e=>{e.target.blur(),o(!1)},collapsible:t,activePath:e}))))),E&&l.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(m.a)("button button--secondary button--outline",O.a.collapseSidebarButton),onClick:c}))},y=t(180),w=t(203),S=t(176),M=t(84),I=t.n(M);function x({currentDocRoute:e,versionMetadata:a,children:t}){var i,s;const{siteConfig:d,isClient:b}=Object(r.default)(),{pluginId:h,permalinkToSidebar:p,docsSidebars:E,version:v}=a,f=p[e.path],k=E[f],[O,j]=Object(n.useState)(!1),[C,g]=Object(n.useState)(!1),N=Object(n.useCallback)((()=>{C&&g(!1),j(!O)}),[C]);return l.a.createElement(o.a,{key:b,searchMetadatas:{version:v,tag:Object(u.docVersionSearchTag)(h,v)}},l.a.createElement("div",{className:I.a.docPage},k&&l.a.createElement("div",{className:Object(m.a)(I.a.docSidebarContainer,{[I.a.docSidebarContainerHidden]:O}),onTransitionEnd:e=>{e.currentTarget.classList.contains(I.a.docSidebarContainer)&&O&&g(!0)},role:"complementary"},l.a.createElement(_,{key:f,sidebar:k,path:e.path,sidebarCollapsible:null===(i=null===(s=d.themeConfig)||void 0===s?void 0:s.sidebarCollapsible)||void 0===i||i,onCollapse:N,isHidden:C}),C&&l.a.createElement("div",{className:I.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:N,onClick:N})),l.a.createElement("main",{className:I.a.docMainContainer},l.a.createElement("div",{className:Object(m.a)("container padding-vert--lg",I.a.docItemWrapper,{[I.a.docItemWrapperEnhanced]:O})},l.a.createElement(c.a,{components:y.a},t)))))}a.default=function(e){const{route:{routes:a},versionMetadata:t,location:n}=e,c=a.find((e=>Object(S.matchPath)(n.pathname,e)));return c?l.a.createElement(x,{currentDocRoute:c,versionMetadata:t},Object(i.a)(a)):l.a.createElement(w.default,e)}},180:function(e,a,t){"use strict";var n=t(3),l=t(0),c=t.n(l),r=t(173),i=t(168),o=t(171),s=t(172),m=(t(55),t(56)),u=t.n(m);var d=e=>function({id:a,...t}){const{navbar:{hideOnScroll:n}}=Object(s.useThemeConfig)();return a?c.a.createElement(e,t,c.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(o.a)("anchor",{[u.a.enhancedAnchor]:!n}),id:a}),t.children,c.a.createElement("a",{className:"hash-link",href:`#${a}`,title:"Direct link to heading"},"#")):c.a.createElement(e,t)},b=t(57),h=t.n(b);const p={code:e=>{const{children:a}=e;return"string"==typeof a?a.includes("\n")?c.a.createElement(i.a,e):c.a.createElement("code",e):a},a:e=>c.a.createElement(r.a,e),pre:e=>c.a.createElement("div",Object(n.a)({className:h.a.mdxCodeBlock},e)),h1:d("h1"),h2:d("h2"),h3:d("h3"),h4:d("h4"),h5:d("h5"),h6:d("h6")};a.a=p},203:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(177);a.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("main",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);