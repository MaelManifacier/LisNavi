(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{yQFn:function(e,t,n){"use strict";n.r(t),n.d(t,"CollectionModule",function(){return v});var o=n("ofXK"),s=n("tyNb");const i=[{noPage:1,titre:"le d\xe9part",image:"assets/story/1.svg"},{noPage:2,titre:"souvenir",image:"assets/story/2.svg"},{noPage:3,titre:"dans la montagne",image:"assets/story/3.svg"},{noPage:4,titre:"blizzard",image:"assets/story/4.svg"},{noPage:5,titre:"un paysage magnifique",image:"assets/story/5.svg"},{noPage:6,titre:"une berceuse",image:"assets/story/6.svg"},{noPage:7,titre:"perdus",image:"assets/story/7.svg"},{noPage:8,titre:"silence",image:"assets/story/8.svg"},{noPage:9,titre:"galanthus nivalis",image:"assets/story/9.svg"},{noPage:10,titre:"un message",image:"assets/story/10-flower.svg"},{noPage:11,titre:"Yong",image:"assets/story/11.svg"},{noPage:12,titre:"assets/story/feet.svg",image:"assets/story/12.svg",isTitleImg:!0},{noPage:13,titre:"le village",image:"assets/story/13.svg"},{noPage:14,titre:"attente",image:"assets/story/14.svg"},{noPage:15,titre:"Fin",image:"assets/story/15-flocon.svg"}];var a=n("fXoL");function l(e,t){1&e&&a.Db(0,"div")}function g(e,t){if(1&e&&(a.Fb(0,"div",5),a.Db(1,"img",6),a.Eb()),2&e){const e=a.Mb();a.tb(1),a.Nb("src",null==e.pageCollection?null:e.pageCollection.titre,a.Tb)}}function r(e,t){if(1&e&&(a.Fb(0,"p"),a.Yb(1),a.Eb()),2&e){const e=a.Mb();a.tb(1),a.Zb(null==e.pageCollection?null:e.pageCollection.titre)}}const c=function(e){return["../story",e]};let b=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.wb({type:e,selectors:[["app-collection-card-detail"]],inputs:{pageCollection:"pageCollection"},decls:7,vars:7,consts:[[1,"container-card",3,"routerLink"],[1,"imagePage",3,"src"],[4,"ngIf","ngIfThen","ngIfElse"],["image",""],["texte",""],[1,"imageTitle"],[3,"src"]],template:function(e,t){if(1&e&&(a.Fb(0,"div",0),a.Db(1,"img",1),a.Wb(2,l,1,0,"div",2),a.Wb(3,g,2,1,"ng-template",null,3,a.Xb),a.Wb(5,r,2,1,"ng-template",null,4,a.Xb),a.Eb()),2&e){const e=a.Rb(4),n=a.Rb(6);a.Nb("routerLink",a.Pb(5,c,null==t.pageCollection?null:t.pageCollection.noPage)),a.tb(1),a.Nb("src",null==t.pageCollection?null:t.pageCollection.image,a.Tb),a.tb(1),a.Nb("ngIf",null==t.pageCollection?null:t.pageCollection.isTitleImg)("ngIfThen",e)("ngIfElse",n)}},directives:[s.c,o.i],styles:[".imagePage[_ngcontent-%COMP%]{width:calc(100vw / 3 - 4vw);height:auto}.imageTitle[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{width:100%;text-align:center}"],changeDetection:0}),e})();function p(e,t){1&e&&a.Db(0,"app-collection-card-detail",6),2&e&&a.Nb("pageCollection",t.$implicit)}const u=function(){return["../story",1]},m=[{path:"",component:(()=>{class e{constructor(){this.pagesCollection=i}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.wb({type:e,selectors:[["ng-component"]],decls:9,vars:3,consts:[[1,"title-collection"],["src","assets/story/collection-title-1.svg"],[3,"routerLink"],["src","assets/story/moon-light.svg"],[1,"container-cards"],[3,"pageCollection",4,"ngFor","ngForOf"],[3,"pageCollection"]],template:function(e,t){1&e&&(a.Fb(0,"header"),a.Fb(1,"div",0),a.Db(2,"img",1),a.Fb(3,"h1"),a.Yb(4,"Collection"),a.Eb(),a.Eb(),a.Fb(5,"button",2),a.Db(6,"img",3),a.Eb(),a.Eb(),a.Fb(7,"div",4),a.Wb(8,p,1,1,"app-collection-card-detail",5),a.Eb()),2&e&&(a.tb(5),a.Nb("routerLink",a.Ob(2,u)),a.tb(3),a.Nb("ngForOf",t.pagesCollection))},directives:[s.c,o.h,b],styles:["header[_ngcontent-%COMP%]{max-height:10vh;margin:4vh 5px 0;display:flex;justify-content:space-between}header[_ngcontent-%COMP%]   .title-collection[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1vh 5vw}header[_ngcontent-%COMP%]   .title-collection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;margin-left:10px;font-weight:400;letter-spacing:.1rem}header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:10vh}.container-cards[_ngcontent-%COMP%]{margin:6vh 1vw 2vh;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:2vw}"]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=a.Ab({type:e}),e.\u0275inj=a.zb({factory:function(t){return new(t||e)},imports:[[s.d.forChild(m)],s.d]}),e})(),v=(()=>{class e{}return e.\u0275mod=a.Ab({type:e}),e.\u0275inj=a.zb({factory:function(t){return new(t||e)},imports:[[o.b,d]]}),e})()}}]);