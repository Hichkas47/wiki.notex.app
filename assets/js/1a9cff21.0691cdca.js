(self.webpackChunkwiki_notex_app=self.webpackChunkwiki_notex_app||[]).push([[588],{6726:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return k},default:function(){return u}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i={sidebar_position:2},p={unversionedId:"glacier2/rpkgs",id:"glacier2/rpkgs",isDocsHomePage:!1,title:"RPKGs",description:"RPKGs (Retail/Runtime Packages) are the archive format Glacier 2 Engine games use.",source:"@site/docs/glacier2/rpkgs.md",sourceDirName:"glacier2",slug:"/glacier2/rpkgs",permalink:"/glacier2/rpkgs",editUrl:"https://github.com/Notexe/wiki.notex.app/blob/main/docs/glacier2/rpkgs.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"File Formats",permalink:"/glacier2/fileformats"},next:{title:"Information",permalink:"/rpkg/information"}},k=[{value:"HITMAN 3",id:"hitman-3",children:[]},{value:"HITMAN 2",id:"hitman-2",children:[]},{value:"HITMAN 1",id:"hitman-1",children:[]}],m={toc:k};function u(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"RPKGs (Retail/Runtime Packages) are the archive format Glacier 2 Engine games use."),(0,l.kt)("h3",{id:"hitman-3"},"HITMAN 3"),(0,l.kt)("h4",{id:"base-archive-structure"},"Base archive structure"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"2KPR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"chunk number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint16_t/uint8_t?"),(0,l.kt)("td",{parentName:"tr",align:null},"could be used with chunk number above, making the chunk number possibly uint16_t in size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"chunk patch number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x78)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x78)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file data table size")))),(0,l.kt)("h5",{id:"hash-file-data-table-per-entry"},"hash file data table, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file hash value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file data offset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file data size")))),(0,l.kt)("h5",{id:"hash-file-meta-data-table-per-entry"},"hash file meta data table, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file hash reference table size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash size final")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash size in memory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash size in video memory")))),(0,l.kt)("h5",{id:"if-the-hash-file-hash-reference-table-size-is--0-and-there-are-hash-references"},"if the hash file hash reference table size is > 0 and there are hash references"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash reference file count")))),(0,l.kt)("h5",{id:"hash-reference-file-typesflags-per-entry"},"hash reference file types/flags, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash reference file type/flag")))),(0,l.kt)("h5",{id:"hash-reference-file-hash-values-per-entry"},"hash reference file hash values, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file hash value")))),(0,l.kt)("h4",{id:"patch-archive-structure"},"Patch archive structure"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"2KPR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"chunk number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint16_t/uint8_t?"),(0,l.kt)("td",{parentName:"tr",align:null},"could be used with chunk number above, making the chunk number possibly uint16_t in size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"chunk patch number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x78)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x78)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file data table size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"patch deletion entry count")))),(0,l.kt)("h5",{id:"patch-entries-if-patch-deletion-entry-count--0"},"patch entries (if patch deletion entry count > 0):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file hash value")))),(0,l.kt)("h5",{id:"hash-file-data-table-per-entry-1"},"hash file data table, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file hash value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file data offset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file data size")))),(0,l.kt)("h5",{id:"hash-file-meta-data-table-per-entry-1"},"hash file meta data table, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file hash reference table size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"unknown (always seems to be 0x0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash size final")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash size in memory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash size in video memory")))),(0,l.kt)("h5",{id:"if-the-hash-file-hash-reference-table-size-is--0-and-there-are-hash-references-1"},"if the hash file hash reference table size is > 0 and there are hash references"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash reference file count")))),(0,l.kt)("h5",{id:"hash-reference-file-typesflags-per-entry-1"},"hash reference file types/flags, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash reference file type/flag")))),(0,l.kt)("h5",{id:"hash-reference-file-hash-values-per-entry-1"},"hash reference file hash values, per entry:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"hash file hash value")))),(0,l.kt)("h3",{id:"hitman-2"},"HITMAN 2"),(0,l.kt)("h3",{id:"hitman-1"},"HITMAN 1"))}u.isMDXComponent=!0}}]);