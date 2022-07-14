"use strict";(self.webpackChunkwiki_notex_app=self.webpackChunkwiki_notex_app||[]).push([[811],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),h=r,d=f["".concat(p,".").concat(h)]||f[h]||u[h]||a;return n?i.createElement(d,o(o({ref:t},s),{},{components:n})):i.createElement(d,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9806:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},p="Overview",c={unversionedId:"rpkg/gui/overview",id:"rpkg/gui/overview",isDocsHomePage:!1,title:"Overview",description:"The RPKG tool has two panels.",source:"@site/docs/rpkg/gui/overview.md",sourceDirName:"rpkg/gui",slug:"/rpkg/gui/overview",permalink:"/rpkg/gui/overview",editUrl:"https://github.com/glacier-modding/wiki.notex.app/blob/main/docs/rpkg/gui/overview.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Opening RPKGs",permalink:"/rpkg/gui/opening and finding files"},next:{title:"Rebuild files",permalink:"/rpkg/gui/rebuild"}},s=[{value:"Left panel",id:"left-panel",children:[],level:2},{value:"Right Panel",id:"right-panel",children:[],level:2},{value:"Functions",id:"functions",children:[],level:2}],u={toc:s};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The RPKG tool has two panels."),(0,a.kt)("h2",{id:"left-panel"},"Left panel"),(0,a.kt)("p",null,"The left panel includes the tabs Resource View, the Depenency View and the Search"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Resource View shows an overview of the currently loaded RPKG(s) and its content in a file tree structure. The content of RPKG's are sorted into categories according to ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.notex.app/glacier2/fileformats"},"File Formats"),". "),(0,a.kt)("li",{parentName:"ul"},"The Depenency View shows an overview of the currently loaded RPKG(s) and its content. Files can be expanded upon to show the dependencies."),(0,a.kt)("li",{parentName:"ul"},"The Search includes a search field which can be used to search a file containing the string in the filename. The content of RPKG's are sorted into categories according to ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.notex.app/glacier2/fileformats"},"File Formats"),". ")),(0,a.kt)("p",null,"In all three views the items can be collapsed or expanded upon and right clicking on a file will present you with the option to extract it or it's dependencies among other options."),(0,a.kt)("h2",{id:"right-panel"},"Right Panel"),(0,a.kt)("p",null,"Once a file has been selected by left clicking it's content can be viewed in the right panel which includes Details and Hex Viewer tabs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Details shows an overview of the selected files among which the location of the file in the RPKG, several HEX metadata properties, IOI String, Depenencies and Reverse Depenencies."),(0,a.kt)("li",{parentName:"ul"},"Hex Viewer present the Hex View of the file. It does not allow for modification to the file although copying is possible."),(0,a.kt)("li",{parentName:"ul"},"Image Viewer renders the file if it is an image. Only applicable to GFXI and TEXT files."),(0,a.kt)("li",{parentName:"ul"},"JSON Viewer presents the content of a JSON file. Only applicable to JSON and LOCR files."),(0,a.kt)("li",{parentName:"ul"},"3D Viewer renders a mesh of the content. Only applicable to RIM files."),(0,a.kt)("li",{parentName:"ul"},"Audio Player plays the content of a file. Only applicable to WWEM, WWES and WWEV  files.")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("p",null,"In addition to the two main panels the RPKG tool has additional functions which can be accessed through the menu bar.\nThese are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.notex.app/rpkg/gui/extracting"},"Extract")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.notex.app/rpkg/gui/generate"},"Generate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.notex.app/rpkg/gui/mass_extract"},"Mass Extract")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.notex.app/rpkg/gui/rebuild"},"Rebuild")),(0,a.kt)("li",{parentName:"ul"},"[Map Editing]"," ()"),(0,a.kt)("li",{parentName:"ul"},"Color Theme "),(0,a.kt)("li",{parentName:"ul"},"[Utilities]"," ()")),(0,a.kt)("p",null,"The wiki is currently a work in progress at the moment, please feel free to contribute @ ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/glacier-modding/wiki.notex.app"},"https://github.com/glacier-modding/wiki.notex.app")))}f.isMDXComponent=!0}}]);