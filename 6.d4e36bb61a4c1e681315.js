(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{yQFn:function(t,e,n){"use strict";n.r(e),n.d(e,"CollectionModule",function(){return y});var i=n("ofXK"),s=n("tyNb");const o=[{noPage:1,titre:"le d\xe9part",image:"assets/story/lis-navi/1.svg"},{noPage:2,titre:"souvenir",image:"assets/story/lis-navi/2.svg"},{noPage:3,titre:"dans la montagne",image:"assets/story/lis-navi/3.svg"},{noPage:4,titre:"blizzard",image:"assets/story/lis-navi/4.svg"},{noPage:5,titre:"un paysage magnifique",image:"assets/story/lis-navi/5.svg"},{noPage:6,titre:"une berceuse",image:"assets/story/lis-navi/6.svg"},{noPage:7,titre:"perdus",image:"assets/story/lis-navi/7.svg"},{noPage:8,titre:"silence",image:"assets/story/lis-navi/8.svg"},{noPage:9,titre:"galanthus nivalis",image:"assets/story/lis-navi/9.svg"},{noPage:10,titre:"un message",image:"assets/story/lis-navi/10-flower.svg"},{noPage:11,titre:"Yong",image:"assets/story/lis-navi/11.svg"},{noPage:12,titre:"assets/story/lis-navi/feet.svg",image:"assets/story/lis-navi/12.svg",isTitleImg:!0},{noPage:13,titre:"le village",image:"assets/story/lis-navi/13.svg"},{noPage:14,titre:"attente",image:"assets/story/lis-navi/14.svg"},{noPage:15,titre:"Fin",image:"assets/story/lis-navi/15-flocon.svg"}];var a=n("fXoL");function l(t,e){1&t&&a.Eb(0,"div")}function c(t,e){if(1&t&&(a.Gb(0,"div",5),a.Eb(1,"img",6),a.Fb()),2&t){const t=a.Ob();a.tb(1),a.Pb("src",null==t.pageCollection?null:t.pageCollection.titre,a.Wb)}}function r(t,e){if(1&t&&(a.Gb(0,"p"),a.cc(1),a.Fb()),2&t){const t=a.Ob();a.tb(1),a.dc(null==t.pageCollection?null:t.pageCollection.titre)}}const g=function(t){return{storyName:"lis-navi",id:t}},v=function(t){return["../story",t]};let u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.xb({type:t,selectors:[["app-collection-card-detail"]],inputs:{pageCollection:"pageCollection"},decls:7,vars:9,consts:[[1,"container-card",3,"routerLink"],[1,"imagePage",3,"src"],[4,"ngIf","ngIfThen","ngIfElse"],["image",""],["texte",""],[1,"imageTitle"],[3,"src"]],template:function(t,e){if(1&t&&(a.Gb(0,"div",0),a.Eb(1,"img",1),a.ac(2,l,1,0,"div",2),a.ac(3,c,2,1,"ng-template",null,3,a.bc),a.ac(5,r,2,1,"ng-template",null,4,a.bc),a.Fb()),2&t){const t=a.Tb(4),n=a.Tb(6);a.Pb("routerLink",a.Rb(7,v,a.Rb(5,g,null==e.pageCollection?null:e.pageCollection.noPage))),a.tb(1),a.Pb("src",null==e.pageCollection?null:e.pageCollection.image,a.Wb),a.tb(1),a.Pb("ngIf",null==e.pageCollection?null:e.pageCollection.isTitleImg)("ngIfThen",t)("ngIfElse",n)}},directives:[s.c,i.j],styles:[".imagePage[_ngcontent-%COMP%]{width:calc(100vw / 3 - 4vw);height:auto}.imageTitle[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{width:100%;text-align:center}"],changeDetection:0}),t})();function b(t,e){1&t&&a.Eb(0,"app-collection-card-detail",6),2&t&&a.Pb("pageCollection",e.$implicit)}const p=function(){return{storyName:"lis-navi",id:1}},m=function(t){return["../story",t]},d=[{path:"",component:(()=>{class t{constructor(){this.pagesCollection=o}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.xb({type:t,selectors:[["ng-component"]],decls:9,vars:5,consts:[[1,"title-collection"],["src","assets/story/lis-navi/collection-title-1.svg"],[3,"routerLink"],["src","assets/story/lis-navi/moon-light.svg"],[1,"container-cards"],[3,"pageCollection",4,"ngFor","ngForOf"],[3,"pageCollection"]],template:function(t,e){1&t&&(a.Gb(0,"header"),a.Gb(1,"div",0),a.Eb(2,"img",1),a.Gb(3,"h1"),a.cc(4,"Collection"),a.Fb(),a.Fb(),a.Gb(5,"button",2),a.Eb(6,"img",3),a.Fb(),a.Fb(),a.Gb(7,"div",4),a.ac(8,b,1,1,"app-collection-card-detail",5),a.Fb()),2&t&&(a.tb(5),a.Pb("routerLink",a.Rb(3,m,a.Qb(2,p))),a.tb(3),a.Pb("ngForOf",e.pagesCollection))},directives:[s.c,i.i,u],styles:["header[_ngcontent-%COMP%]{max-height:10vh;margin:4vh 5px 0;display:flex;justify-content:space-between}header[_ngcontent-%COMP%]   .title-collection[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1vh 5vw}header[_ngcontent-%COMP%]   .title-collection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;margin-left:10px;font-weight:400;letter-spacing:.1rem}header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:10vh}.container-cards[_ngcontent-%COMP%]{margin:6vh 1vw 2vh;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:2vw}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=a.Bb({type:t}),t.\u0275inj=a.Ab({factory:function(e){return new(e||t)},imports:[[s.d.forChild(d)],s.d]}),t})(),y=(()=>{class t{}return t.\u0275mod=a.Bb({type:t}),t.\u0275inj=a.Ab({factory:function(e){return new(e||t)},imports:[[i.b,f]]}),t})()}}]);