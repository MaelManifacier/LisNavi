(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6OiD":function(t,n,i){"use strict";i.r(n),i.d(n,"AccueilModule",function(){return p});var e=i("ofXK"),o=i("tyNb");const r=[{title:"Lis Navi",url:"lis-navi",img:"assets/imgCardStories/lis-navi.jpg"},{title:"Graph",url:"graph",img:"assets/imgCardStories/graph.jpg"},{title:"Nuit d'\xe9toiles",url:"nuit-d-etoiles",img:"assets/imgCardStories/nuit-d-etoiles.png"},{title:"Iro",url:"iro",img:"assets/imgCardStories/iro.jpg"}];var a=i("fXoL");const c=function(t){return{storyName:t,id:1}},s=function(t){return["/story/",t]};let l=(()=>{class t{constructor(){}ngOnInit(){}setCardStyle(){var t;return{"background-image":`url(${null===(t=this.storyCard)||void 0===t?void 0:t.img})`}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.xb({type:t,selectors:[["app-accueil-card-story"]],inputs:{storyCard:"storyCard"},decls:3,vars:7,consts:[[1,"container-card",3,"ngStyle","routerLink"]],template:function(t,n){1&t&&(a.Gb(0,"div",0),a.Gb(1,"p"),a.cc(2),a.Fb(),a.Fb()),2&t&&(a.Pb("ngStyle",n.setCardStyle())("routerLink",a.Rb(5,s,a.Rb(3,c,null==n.storyCard?null:n.storyCard.url))),a.tb(2),a.dc(null==n.storyCard?null:n.storyCard.title))},directives:[e.k,o.c],styles:[".container-card[_ngcontent-%COMP%]{width:calc(100vw / 3 - 2vw);height:calc(100vw / 3 - 2vw);margin:2vw;background-color:#1b1b1b;border-radius:10px;background-size:cover;display:flex;align-items:flex-end;transition:all .4s}.container-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:hsla(0,0%,100%,.78);font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:1rem;font-weight:700;color:#000;width:100%;padding:.4rem;margin:2vh auto}.container-card[_ngcontent-%COMP%]:active, .container-card[_ngcontent-%COMP%]:hover{width:calc(100vw / 2.6 - 2vw);height:calc(100vw / 2.6 - 2vw)}.container-card[_ngcontent-%COMP%]::selection{width:calc(100vw / 2.6 - 2vw);height:calc(100vw / 2.6 - 2vw)}@media (min-width:8in){.container-card[_ngcontent-%COMP%]{width:calc(100vw / 5 - 1.5vw);height:calc(100vw / 5 - 1.5vw)}.container-card[_ngcontent-%COMP%]:active, .container-card[_ngcontent-%COMP%]:hover{width:calc(100vw / 4 - 1.5vw);height:calc(100vw / 4 - 1.5vw)}.container-card[_ngcontent-%COMP%]::selection{width:calc(100vw / 4 - 1.5vw);height:calc(100vw / 4 - 1.5vw)}}"],changeDetection:0}),t})();function d(t,n){if(1&t&&(a.Gb(0,"div"),a.Eb(1,"span",13),a.Fb()),2&t){const t=n.$implicit;a.tb(1),a.Yb("left :"+t.left+"; top: "+t.top+"; animation-duration:"+t.transition),a.vb(t.size)}}function g(t,n){1&t&&a.Eb(0,"app-accueil-card-story",14),2&t&&a.Pb("storyCard",n.$implicit)}let h=(()=>{class t{constructor(){this.listStories=r,this.stars=[]}ngOnInit(){var t,n,i;null===(t=this.stars)||void 0===t||t.push(new b("etoile-filante","1vh","10vw","0","0"));let e=Math.random()*Math.PI*2;const o=15e3;let r=Math.random()*o;for(let a=0;a<200;a++)null===(n=this.stars)||void 0===n||n.push(new b("starx1",Math.cos(e)*Math.sqrt(r)+"vh",Math.sin(e)*Math.sqrt(r)+"vw","0","0")),e=Math.random()*Math.PI*2,r=Math.random()*o;for(let a=0;a<50;a++)null===(i=this.stars)||void 0===i||i.push(new b("starx2",Math.cos(e)*Math.sqrt(r)+"vh",Math.sin(e)*Math.sqrt(r)+"vw","0","0")),e=Math.random()*Math.PI*2,r=Math.random()*o;console.log(this.stars)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.xb({type:t,selectors:[["ng-component"]],decls:19,vars:2,consts:[[1,"page"],[1,"container-svg-accueil"],[1,"container-stars"],[4,"ngFor","ngForOf"],[1,"container-title"],[2,"color","#77EEF6"],[2,"color","#70FF74"],[1,"container-list-stories"],[3,"storyCard",4,"ngFor","ngForOf"],[1,"container-moon"],["title","Moon","width","260","height","260","src","assets/moon.svg"],[1,"container-fox"],["src","assets/fox-color.svg","title","Fox","width","150","height","150"],[1,"star"],[3,"storyCard"]],template:function(t,n){1&t&&(a.Gb(0,"div",0),a.Eb(1,"div",1),a.Gb(2,"div",2),a.ac(3,d,2,4,"div",3),a.Fb(),a.Gb(4,"div",4),a.Gb(5,"h1"),a.cc(6,"I "),a.Gb(7,"span",5),a.cc(8,"BELIEVE "),a.Fb(),a.cc(9,"IN "),a.Gb(10,"span",6),a.cc(11,"ADVENTURE"),a.Fb(),a.Fb(),a.Fb(),a.Eb(12,"hr"),a.Gb(13,"div",7),a.ac(14,g,1,1,"app-accueil-card-story",8),a.Fb(),a.Gb(15,"div",9),a.Eb(16,"img",10),a.Fb(),a.Gb(17,"div",11),a.Eb(18,"img",12),a.Fb(),a.Fb()),2&t&&(a.tb(3),a.Pb("ngForOf",n.stars),a.tb(11),a.Pb("ngForOf",n.listStories))},directives:[e.i,l],styles:[".page[_ngcontent-%COMP%]{overflow:hidden;min-height:100vh}.container-svg-accueil[_ngcontent-%COMP%]{z-index:-2;position:fixed;top:-30px;right:-30px;height:100%;width:100%;opacity:.75}.container-svg-accueil[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{animation:tinkle 1s cubic-bezier(.14,.27,.82,.88) infinite;-webkit-animation:tinkle 1s cubic-bezier(.14,.27,.82,.88) infinite}.container-title[_ngcontent-%COMP%]{margin-top:9vh}.container-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fefbf2;font-size:1.4rem;word-spacing:.2rem;text-align:center;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-weight:600}.container-btn-begin[_ngcontent-%COMP%]{display:flex;justify-content:center}.container-btn-begin[_ngcontent-%COMP%]   .btn-begin[_ngcontent-%COMP%]{border:1px solid #fcf3db;background-color:initial;padding:2vh 12vw;position:absolute;bottom:21vh}hr[_ngcontent-%COMP%]{margin:.6rem 10vw 1rem;border:0;border-top:1px solid #fefbf2}.container-list-stories[_ngcontent-%COMP%]{z-index:4;display:flex;flex-wrap:wrap;justify-content:center;margin-top:10vh}.container-moon[_ngcontent-%COMP%]{z-index:-2;position:fixed;bottom:18vh;left:-60px}.container-moon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{animation:glitter 6s cubic-bezier(.14,.27,.82,.88) infinite;-webkit-animation:glitter 6s cubic-bezier(.14,.27,.82,.88) infinite;filter:drop-shadow(0 0 42px rgba(255,255,255,.8))}.container-fox[_ngcontent-%COMP%]{position:fixed;bottom:-2vh;right:0}.container-stars[_ngcontent-%COMP%]{position:fixed;bottom:0;right:0;animation:starsRotate 240s linear infinite;transform-origin:bottom right 0}.star[_ngcontent-%COMP%]{z-index:-4;position:fixed;width:10vh;height:10vh}.star[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{animation:tinkle 1s cubic-bezier(.14,.27,.82,.88) infinite;-webkit-animation:tinkle 1s cubic-bezier(.14,.27,.82,.88) infinite}.starx1[_ngcontent-%COMP%]{background:url(svg-small-etoile.f82d15d4326e441817b8.svg) no-repeat}.starx2[_ngcontent-%COMP%]{background:url(svg-big-etoile.e649e57f861f1ad39480.svg) no-repeat}.etoile-filante[_ngcontent-%COMP%]{background:url(svg-etoile-filante.e901dfb47fc02b7caf9e.svg) no-repeat}@keyframes glitter{0%,to{filter:drop-shadow(0 0 24px rgba(255,255,255,.4))}45%,55%{filter:drop-shadow(0 0 24px rgba(255,255,255,.8))}}@keyframes tinkle{0%,to{opacity:1}50%{opacity:.5;filter:drop-shadow(0 0 24px rgba(255,255,255,.8))}}@keyframes starsRotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),t})();class b{constructor(t,n,i,e,o){this.size=t,this.top=n,this.left=i,this.transition=e,this.rotation=o}}const f=[{path:"",component:h,pathMatch:"full"}];let v=(()=>{class t{}return t.\u0275mod=a.Bb({type:t}),t.\u0275inj=a.Ab({factory:function(n){return new(n||t)},imports:[[o.d.forChild(f)],o.d]}),t})(),p=(()=>{class t{}return t.\u0275mod=a.Bb({type:t}),t.\u0275inj=a.Ab({factory:function(n){return new(n||t)},imports:[[e.b,v]]}),t})()}}]);