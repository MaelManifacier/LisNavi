(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6OiD":function(t,e,n){"use strict";n.r(e),n.d(e,"AccueilModule",function(){return _});var r=n("ofXK"),i=n("tyNb");const o=[{title:"Lis Navi",url:"lis-navi",img:"assets/imgCardStories/lis-navi.jpg"},{title:"Graph",url:"graph",img:"assets/imgCardStories/graph.jpg"},{title:"Nuit d'\xe9toiles",url:"nuit-d-etoiles",img:"assets/imgCardStories/nuit-d-etoiles.png"},{title:"Iro",url:"iro",img:"assets/imgCardStories/iro.jpg"},{title:"Le rassemblement",url:"le-rassemblement",img:"assets/imgCardStories/le-rassemblement.jpg"}];var a=n("fXoL");const c=function(t){return{storyName:t,id:1}},s=function(t){return["/story/",t]};let l=(()=>{class t{constructor(){}ngOnInit(){}setCardStyle(){var t;return{"background-image":`url(${null===(t=this.storyCard)||void 0===t?void 0:t.img})`}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.xb({type:t,selectors:[["app-accueil-card-story"]],inputs:{storyCard:"storyCard"},decls:3,vars:7,consts:[[1,"container-card",3,"ngStyle","routerLink"]],template:function(t,e){1&t&&(a.Gb(0,"div",0),a.Gb(1,"p"),a.gc(2),a.Fb(),a.Fb()),2&t&&(a.Qb("ngStyle",e.setCardStyle())("routerLink",a.Sb(5,s,a.Sb(3,c,null==e.storyCard?null:e.storyCard.url))),a.tb(2),a.hc(null==e.storyCard?null:e.storyCard.title))},directives:[r.k,i.c],styles:[".container-card[_ngcontent-%COMP%]{width:calc(100vw / 2.6 - 2vw);height:calc(100vw / 2.6 - 2vw);margin:2vw;background-color:#1b1b1b;border-radius:10px;background-size:cover;display:flex;align-items:flex-end;cursor:pointer;box-shadow:0 0 6px 0 #301d0a;transition:all .4s}.container-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:rgba(36,38,43,.85);font-family:Kells,Tahoma,Geneva,Verdana,sans-serif;font-size:1.2rem;font-weight:500;text-align:center;color:#fff;width:100%;padding:.4rem;margin:2vh auto}.container-card[_ngcontent-%COMP%]:active, .container-card[_ngcontent-%COMP%]:hover{width:calc(100vw / 2.4 - 2vw);height:calc(100vw / 2.4 - 2vw)}.container-card[_ngcontent-%COMP%]::selection{width:calc(100vw / 2.4 - 2vw);height:calc(100vw / 2.4 - 2vw)}@media (min-width:8in){.container-card[_ngcontent-%COMP%]{width:calc(100vw / 5 - 2vw);height:calc(100vw / 5 - 2vw)}.container-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.4rem}.container-card[_ngcontent-%COMP%]:active, .container-card[_ngcontent-%COMP%]:hover{width:calc(100vw / 4 - 2vw);height:calc(100vw / 4 - 2vw)}.container-card[_ngcontent-%COMP%]::selection{width:calc(100vw / 4 - 2vw);height:calc(100vw / 4 - 2vw)}}"],changeDetection:0}),t})();function d(t,e){if(1&t&&(a.Gb(0,"div"),a.Eb(1,"span",16),a.Fb()),2&t){const t=e.$implicit;a.tb(1),a.cc("left :"+t.left+"; top: "+t.top+"; animation-duration:"+t.transition),a.vb(t.size)}}function h(t,e){1&t&&a.Eb(0,"app-accueil-card-story",17),2&t&&a.Qb("storyCard",e.$implicit)}function g(t,e){1&t&&a.Eb(0,"img",18)}function b(t,e){1&t&&a.Eb(0,"img",19)}function p(t,e){1&t&&a.Eb(0,"img",20)}function f(t,e){1&t&&a.Eb(0,"img",21)}let m=(()=>{class t{constructor(t){this.router=t,this.listStories=o,this.storyCardEdwige={title:"Edwige",url:"edwige",img:"assets/imgCardStories/edwige.jpg"},this.stars=[],this.moonPhase=1,this.foxClicked=1}ngOnInit(){var t,e,n;const r=new Date;this.moonPhase=this.getMoonPhase(r.getFullYear(),r.getMonth(),r.getDate()),null===(t=this.stars)||void 0===t||t.push(new u("etoile-filante","1vh","10vw","0","0"));let i=Math.random()*Math.PI*2;const o=15e3;let a=Math.random()*o;for(let c=0;c<200;c++)null===(e=this.stars)||void 0===e||e.push(new u("starx1",Math.cos(i)*Math.sqrt(a)+"vh",Math.sin(i)*Math.sqrt(a)+"vw","0","0")),i=Math.random()*Math.PI*2,a=Math.random()*o;for(let c=0;c<50;c++)null===(n=this.stars)||void 0===n||n.push(new u("starx2",Math.cos(i)*Math.sqrt(a)+"vh",Math.sin(i)*Math.sqrt(a)+"vw","0","0")),i=Math.random()*Math.PI*2,a=Math.random()*o}getMoonPhase(t,e,n){let r=0,i=0,o=0,a=0;return e<3&&(t--,e+=12),r=365.25*t,i=30.6*++e,o=r+i+n-694039.09,o/=29.5305882,a=Math.floor(o),o-=a,a=Math.round(8*o),a>=8&&(a=0),a}clickFox(){3===this.foxClicked?(this.foxClicked=0,this.router.navigate(["/image"])):this.foxClicked+=1}}return t.\u0275fac=function(e){return new(e||t)(a.Db(i.b))},t.\u0275cmp=a.xb({type:t,selectors:[["ng-component"]],decls:20,vars:7,consts:[[1,"page"],[1,"container-svg-accueil"],[1,"container-stars"],[4,"ngFor","ngForOf"],[1,"container-title"],["title","Go to the lab",3,"routerLink"],["src","assets/onePage/lab.svg"],[1,"container-list-stories"],[3,"storyCard",4,"ngFor","ngForOf"],[1,"container-moon"],["title","Moon","width","160","height","160","src","assets/moon.svg",4,"ngIf"],[1,"container-fox",3,"ngSwitch"],[3,"click"],["src","assets/black-fox.svg","title","Fox","width","150","height","150",4,"ngSwitchCase"],["src","assets/fox-shadow.svg","title","Fox","width","150","height","150",4,"ngSwitchCase"],["src","assets/fox-color.svg","title","Fox","width","150","height","150",4,"ngSwitchDefault"],[1,"star"],[3,"storyCard"],["title","Moon","width","160","height","160","src","assets/moon.svg"],["src","assets/black-fox.svg","title","Fox","width","150","height","150"],["src","assets/fox-shadow.svg","title","Fox","width","150","height","150"],["src","assets/fox-color.svg","title","Fox","width","150","height","150"]],template:function(t,e){1&t&&(a.Gb(0,"div",0),a.Eb(1,"div",1),a.Gb(2,"div",2),a.ec(3,d,2,4,"div",3),a.Fb(),a.Gb(4,"div",4),a.Gb(5,"div"),a.Gb(6,"button",5),a.Eb(7,"img",6),a.Fb(),a.Fb(),a.Gb(8,"h1"),a.gc(9,"I believe in adventure"),a.Fb(),a.Fb(),a.Eb(10,"hr"),a.Gb(11,"div",7),a.ec(12,h,1,1,"app-accueil-card-story",8),a.Fb(),a.Gb(13,"div",9),a.ec(14,g,1,0,"img",10),a.Fb(),a.Gb(15,"div",11),a.Gb(16,"a",12),a.Mb("click",function(){return e.clickFox()}),a.ec(17,b,1,0,"img",13),a.ec(18,p,1,0,"img",14),a.ec(19,f,1,0,"img",15),a.Fb(),a.Fb(),a.Fb()),2&t&&(a.tb(3),a.Qb("ngForOf",e.stars),a.tb(3),a.Qb("routerLink","/image"),a.tb(6),a.Qb("ngForOf",e.listStories),a.tb(2),a.Qb("ngIf",0!==e.moonPhase),a.tb(1),a.Qb("ngSwitch",e.moonPhase),a.tb(2),a.Qb("ngSwitchCase",0),a.tb(1),a.Qb("ngSwitchCase",4))},directives:[r.i,i.c,r.j,r.l,r.m,r.n,l],styles:[".page[_ngcontent-%COMP%]{overflow:hidden;min-height:100vh}.container-svg-accueil[_ngcontent-%COMP%]{z-index:-2;position:fixed;top:-30px;right:-30px;height:100%;width:100%;opacity:.75}.container-svg-accueil[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{animation:tinkle 1s cubic-bezier(.14,.27,.82,.88) infinite;-webkit-animation:tinkle 1s cubic-bezier(.14,.27,.82,.88) infinite}.container-title[_ngcontent-%COMP%]{margin-top:9vh;margin-left:10vw;display:flex;flex-direction:column}.container-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{flex:2;color:#fefbf2;font-size:1.4rem;word-spacing:.2rem;font-family:Kells;font-size:1.6rem;font-weight:600}.container-title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;right:10vw}.container-btn-begin[_ngcontent-%COMP%]{display:flex;justify-content:center}.container-btn-begin[_ngcontent-%COMP%]   .btn-begin[_ngcontent-%COMP%]{border:1px solid #fcf3db;background-color:initial;padding:2vh 12vw;position:absolute;bottom:21vh}hr[_ngcontent-%COMP%]{margin:.6rem 10vw 1rem;border:0;border-top:1px solid #fefbf2}.container-list-stories[_ngcontent-%COMP%]{z-index:10;display:flex;flex-wrap:wrap;justify-content:center;margin:6vh auto}.container-moon[_ngcontent-%COMP%]{z-index:-1;position:fixed;bottom:25vh;left:-60px}.container-moon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{animation:glitter 6s cubic-bezier(.14,.27,.82,.88) infinite;-webkit-animation:glitter 6s cubic-bezier(.14,.27,.82,.88) infinite;filter:drop-shadow(0 0 42px rgba(255,255,255,.8))}.container-fox[_ngcontent-%COMP%]{position:fixed;bottom:-2vh;right:0}.container-stars[_ngcontent-%COMP%]{z-index:-1;position:fixed;bottom:0;right:20vw;animation:starsRotate 600s linear infinite;transform-origin:bottom right 0;-webkit-animation:starsRotate 600s linear infinite}.star[_ngcontent-%COMP%]{z-index:-4;position:fixed;width:10vh;height:10vh}.star[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{animation:tinkle 1s cubic-bezier(.14,.27,.82,.88) infinite;-webkit-animation:tinkle 1s cubic-bezier(.14,.27,.82,.88) infinite}.starx1[_ngcontent-%COMP%]{background:url(svg-small-etoile.cbdeff4edb4b5ffddf61.svg) no-repeat}.starx2[_ngcontent-%COMP%]{background:url(svg-big-etoile.ee5f19cc86f7ec9b6487.svg) no-repeat}.etoile-filante[_ngcontent-%COMP%]{background:url(svg-etoile-filante.7435d5397fcba8e72dc0.svg) no-repeat}@keyframes glitter{0%,to{filter:drop-shadow(0 0 24px rgba(255,255,255,.4))}45%,55%{filter:drop-shadow(0 0 24px rgba(255,255,255,.8))}}@keyframes tinkle{0%,to{opacity:1}50%{opacity:.5;filter:drop-shadow(0 0 24px rgba(255,255,255,.8))}}@keyframes starsRotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),t})();class u{constructor(t,e,n,r,i){this.size=t,this.top=e,this.left=n,this.transition=r,this.rotation=i}}const v=[{title:"Le concert",url:"concert",noChapitre:1},{title:"Bol & Bagel",url:"bol-and-bagel",noChapitre:2}];let w=(()=>{class t{constructor(){this.isPair=!0}ngOnInit(){var t;((null===(t=this.cardChapter)||void 0===t?void 0:t.noChapitre)||1)%2==1&&(this.isPair=!1)}setCardStyle(){return{transform:`translateX(${this.isPair?"20px":"-20px"})`}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.xb({type:t,selectors:[["app-card-chapter"]],inputs:{cardChapter:"cardChapter",storyName:"storyName"},decls:2,vars:1,consts:[[1,"card-chapter"]],template:function(t,e){1&t&&(a.Gb(0,"div",0),a.gc(1),a.Fb()),2&t&&(a.tb(1),a.ic(" ",null==e.cardChapter?null:e.cardChapter.title,"\n"))},styles:[".card-chapter[_ngcontent-%COMP%]{max-width:60vw;background-color:#40454e;border-radius:5px;margin:5vh auto;padding:1rem 2.2rem;box-shadow:0 1px 3px 0 #301d0a;cursor:pointer;transition:all .15s ease}.card-chapter[_ngcontent-%COMP%]:active, .card-chapter[_ngcontent-%COMP%]:focus, .card-chapter[_ngcontent-%COMP%]:hover, .card-chapter[_ngcontent-%COMP%]:link, .card-chapter[_ngcontent-%COMP%]:visited{background-color:#575e6a}@media (min-width:8in){.card-chapter[_ngcontent-%COMP%]{width:30vw}}"],changeDetection:0}),t})();function C(t,e){if(1&t){const t=a.Hb();a.Gb(0,"app-card-chapter",5),a.Mb("click",function(){a.Xb(t);const n=e.$implicit;return a.Pb().selectCardChapter(n)}),a.Fb()}if(2&t){const t=e.$implicit,n=a.Pb();a.Qb("cardChapter",t)("storyName",n.storyName)}}const x=function(t,e){return{storyName:t,chapterUrl:e}},M=function(t){return["/long-story/chapter",t]};function P(t,e){if(1&t&&(a.Gb(0,"div",6),a.Gb(1,"button",7),a.gc(2," Lire "),a.Fb(),a.Fb()),2&t){const t=a.Pb();a.tb(1),a.Qb("routerLink",a.Sb(4,M,a.Tb(1,x,t.storyName,null==t.cardChapterSelected?null:t.cardChapterSelected.url)))}}const y=[{path:"chapters",component:(()=>{class t{constructor(t){this.route=t,this.storyName="",this.isCardChapterSelected=!1}ngOnInit(){this.route.paramMap.subscribe(t=>{var e;this.storyName=null!==(e=t.get("storyName"))&&void 0!==e?e:"",this.getStoryFromName(),window.scrollTo(0,0)})}getStoryFromName(){switch(this.storyName){case"edwige":this.chapters=v}}selectCardChapter(t){this.cardChapterSelected=t,this.isCardChapterSelected=!0}}return t.\u0275fac=function(e){return new(e||t)(a.Db(i.a))},t.\u0275cmp=a.xb({type:t,selectors:[["ng-component"]],decls:8,vars:4,consts:[["routerLink",""],[3,"src"],[1,"container-chapters"],[3,"cardChapter","storyName","click",4,"ngFor","ngForOf"],["class","container-lire",4,"ngIf"],[3,"cardChapter","storyName","click"],[1,"container-lire"],[1,"btn-lire",3,"routerLink"]],template:function(t,e){1&t&&(a.Gb(0,"header"),a.Gb(1,"button",0),a.Eb(2,"img",1),a.Fb(),a.Gb(3,"h1"),a.gc(4),a.Fb(),a.Fb(),a.Gb(5,"div",2),a.ec(6,C,1,2,"app-card-chapter",3),a.Fb(),a.ec(7,P,3,6,"div",4)),2&t&&(a.tb(2),a.Qb("src","assets/back.svg",a.Zb),a.tb(2),a.hc(e.storyName),a.tb(2),a.Qb("ngForOf",e.chapters),a.tb(1),a.Qb("ngIf",e.isCardChapterSelected))},directives:[i.c,r.i,r.j,w],styles:["header[_ngcontent-%COMP%]{max-height:15vh;margin:0 5px;padding:2vh 1vw;display:flex}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-left:1rem}.container-chapter[_ngcontent-%COMP%]{z-index:10;display:flex;flex-wrap:wrap;justify-content:center;margin-top:8vh}[_nghost-%COMP%]     app-card-chapter:nth-child(2n) .card-chapter{transform:translateX(20px)}[_nghost-%COMP%]     app-card-chapter:nth-child(2n) .card-chapter:focus, [_nghost-%COMP%]     app-card-chapter:nth-child(2n) .card-chapter:hover{animation:flotterRight 2.5s cubic-bezier(.14,.27,.82,.88) infinite}[_nghost-%COMP%]     app-card-chapter:nth-child(odd) .card-chapter{transform:translateX(-20px)}[_nghost-%COMP%]     app-card-chapter:nth-child(odd) .card-chapter:focus, [_nghost-%COMP%]     app-card-chapter:nth-child(odd) .card-chapter:hover{animation:flotterLeft 2.5s cubic-bezier(.14,.27,.82,.88) infinite}@keyframes flotterRight{0%{box-shadow:0 5px 15px 0 rgba(0,0,0,.6);transform:translate(20px)}40%{box-shadow:0 25px 15px 0 rgba(0,0,0,.2);transform:translate(20px,-10px)}to{box-shadow:0 5px 15px 0 rgba(0,0,0,.6);transform:translate(20px)}}@keyframes flotterLeft{0%{box-shadow:0 5px 15px 0 rgba(0,0,0,.6);transform:translate(-20px)}40%{box-shadow:0 25px 15px 0 rgba(0,0,0,.2);transform:translate(-20px,-10px)}to{box-shadow:0 5px 15px 0 rgba(0,0,0,.6);transform:translate(-20px)}}.container-lire[_ngcontent-%COMP%]{display:flex;justify-content:center;position:absolute;width:100%;bottom:5vh}.container-lire[_ngcontent-%COMP%]   .btn-lire[_ngcontent-%COMP%]{background-color:#bd4b47;color:#fefbf2;padding:.6rem 4rem;border-radius:5px;font-size:.9rem}"]}),t})()},{path:"",component:m,pathMatch:"full"}];let O=(()=>{class t{}return t.\u0275mod=a.Bb({type:t}),t.\u0275inj=a.Ab({factory:function(e){return new(e||t)},imports:[[i.d.forChild(y)],i.d]}),t})(),_=(()=>{class t{}return t.\u0275mod=a.Bb({type:t}),t.\u0275inj=a.Ab({factory:function(e){return new(e||t)},imports:[[r.b,O]]}),t})()}}]);