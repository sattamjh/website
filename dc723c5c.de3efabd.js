(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n(2),b=n(6),l=(n(0),n(185)),r={id:"columns",title:"columns"},c={id:"config/columns",isDocsHomePage:!1,title:"columns",description:"To define the columns of the table",source:"@site/docs/config/columns.md",permalink:"/docs/config/columns",editUrl:"https://github.com/grid-js/website/edit/master/docs/config/columns.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1595703892,sidebar:"sidebar",previous:{title:"from",permalink:"/docs/config/from"},next:{title:"server",permalink:"/docs/config/server"}},i=[],o={rightToc:i};function m(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"To define the columns of the table"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"optional")," (you can render a table without the header)"),Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"string[]")," or ",Object(l.b)("inlineCode",{parentName:"li"},"TColumn[]"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'new Grid({\n  columns: ["Name", "Email", "Phone Number"]\n});\n')),Object(l.b)("p",null,"or"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'new Grid({\n  columns: [{\n    name: "Name",\n    sort: true,\n  }, {\n    name: "Email"\n  }, {\n    name: "Phone Number",\n    width: \'50%\'\n  }]\n});\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"TColumn")," type has the following properties:"),Object(l.b)("div",{className:"full-width"},Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"id ",Object(l.b)("inlineCode",{parentName:"td"},"optional")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"column ID for JSON data"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string or function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"phoneNumber")," or ",Object(l.b)("inlineCode",{parentName:"td"},"(row) => row.name.firstName"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"column name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Name"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"width ",Object(l.b)("inlineCode",{parentName:"td"},"optional")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"width of the column"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"200px")," or ",Object(l.b)("inlineCode",{parentName:"td"},"30%"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"sort ",Object(l.b)("inlineCode",{parentName:"td"},"optional")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"to enable/disable sort"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"formatter ",Object(l.b)("inlineCode",{parentName:"td"},"optional")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"custom cell formatting"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(cell: TCell, row: Row<TCell>, column: TColumn) => ComponentChild;")))))),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/examples/cell-formatting"}),"Cell formatting")," example for more details."))))}m.isMDXComponent=!0}}]);