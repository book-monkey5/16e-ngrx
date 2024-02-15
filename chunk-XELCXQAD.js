import{b as A,c as V,l as ft,m as H,n as dt,o as ut,p as $,q as kt,r as bt,s as vt,t as gt,u as ht,v as _t}from"./chunk-3H46IYOI.js";import{$a as K,Ba as m,Ca as v,Da as g,F as Q,G as W,Ga as mt,Ha as u,Ia as k,Ja as ct,K as X,L as Y,M as h,N as E,Na as B,O as F,Oa as _,P as Z,Pa as T,Q as tt,Qa as pt,R as et,Ra as lt,T as it,U as L,Wa as xt,X as U,Ya as Bt,Za as j,a as y,ab as N,b as S,d as z,da as D,ea as s,fa as d,ga as ot,k as q,m as G,ma as nt,oa as l,qa as c,r as J,sa as a,ta as n,ua as x,va as rt,wa as st,xa as at,ya as w,za as f}from"./chunk-JJV6D7WR.js";var It=(()=>{let e=class e{constructor(){this.confirm=new X}onClick(){window.confirm(this.confirmText)&&this.confirm.emit()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=F({type:e,selectors:[["","bmConfirm",""]],hostBindings:function(o,p){o&1&&w("click",function(){return p.onClick()})},inputs:{confirmText:[Y.None,"bmConfirm","confirmText"]},outputs:{confirm:"confirm"}});let t=e;return t})();var Ct=(()=>{let e=class e{constructor(r,o,p){this.template=r,this.viewContainer=o,this.authService=p,this.destroy$=new z,this.authService.isAuthenticated$.pipe(W(this.destroy$)).subscribe(C=>{C?this.viewContainer.createEmbeddedView(this.template):this.viewContainer.clear()})}ngOnDestroy(){this.destroy$.next()}};e.\u0275fac=function(o){return new(o||e)(d(ot),d(nt),d(_t))},e.\u0275dir=F({type:e,selectors:[["","bmLoggedinOnly",""]]});let t=e;return t})();var O=(()=>{let e=class e{transform(r){return r?`${r.substring(0,3)}-${r.substring(3)}`:""}};e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=Z({name:"isbn",type:e,pure:!0});let t=e;return t})();function Vt(t,e){if(t&1&&(a(0,"p",9),m(1),n()),t&2){let i=f().ngIf;s(),v(i.subtitle)}}function Ht(t,e){if(t&1&&(a(0,"li"),m(1),n()),t&2){let i=e.$implicit;s(),v(i)}}function Kt(t,e){if(t&1&&(a(0,"div")(1,"h2"),m(2,"Published"),n(),m(3),u(4,"date"),n()),t&2){let i=f().ngIf;s(3),g(" ",ct(4,1,i.published,"longDate")," ")}}function zt(t,e){if(t&1&&x(0,"img",10),t&2){let i=f().ngIf;c("src",i.thumbnailUrl,D)}}var qt=t=>["/admin/edit",t];function Gt(t,e){if(t&1){let i=at();rt(0),a(1,"button",11),w("confirm",function(){tt(i);let o=f().ngIf,p=f();return et(p.removeBook(o.isbn))}),m(2," Remove book "),n(),a(3,"a",12),m(4," Edit book "),n(),st()}if(t&2){let i=f().ngIf;s(3),c("routerLink",mt(1,qt,i.isbn))}}function Jt(t,e){if(t&1&&(a(0,"div",1)(1,"h1"),m(2),n(),l(3,Vt,2,1,"p",2),a(4,"div",3)(5,"div")(6,"h2"),m(7,"Authors"),n(),a(8,"ul"),l(9,Ht,2,1,"li",4),n()(),a(10,"div")(11,"h2"),m(12,"ISBN"),n(),m(13),u(14,"isbn"),n(),l(15,Kt,5,4,"div",5),n(),a(16,"h2"),m(17,"Description"),n(),a(18,"p"),m(19),n(),l(20,zt,1,1,"img",6),a(21,"a",7),m(22,"Back to list"),n(),l(23,Gt,5,3,"ng-container",8),n()),t&2){let i=e.ngIf;s(2),v(i.title),s(),c("ngIf",i.subtitle),s(6),c("ngForOf",i.authors),s(4),g(" ",k(14,7,i.isbn)," "),s(2),c("ngIf",i.published),s(4),v(i.description),s(),c("ngIf",i.thumbnailUrl)}}var Et=(()=>{let e=class e{constructor(r,o,p){this.service=r,this.route=o,this.router=p;let C=this.route.snapshot.paramMap.get("isbn");this.book$=this.service.getSingle(C)}removeBook(r){this.service.remove(r).subscribe(()=>{this.router.navigateByUrl("/books")})}};e.\u0275fac=function(o){return new(o||e)(d(N),d(xt),d(Bt))},e.\u0275cmp=h({type:e,selectors:[["bm-book-details"]],decls:2,vars:3,consts:[["class","details",4,"ngIf"],[1,"details"],["role","doc-subtitle",4,"ngIf"],[1,"header"],[4,"ngFor","ngForOf"],[4,"ngIf"],["alt","Cover",3,"src",4,"ngIf"],["routerLink","..",1,"button","arrow-left"],[4,"bmLoggedinOnly"],["role","doc-subtitle"],["alt","Cover",3,"src"],["bmConfirm","Remove book?",1,"red",3,"confirm"],[1,"button",3,"routerLink"]],template:function(o,p){o&1&&(l(0,Jt,24,9,"div",0),u(1,"async")),o&2&&c("ngIf",k(1,1,p.book$))},dependencies:[B,_,j,It,Ct,T,pt,O]});let t=e;return t})();var I=A("[Book] Load Books"),M=A("[Book] Load Books Success",V()),R=A("[Book] Load Books Failure",V());var P="book",Qt={books:[],loading:!1},Lt=kt(Qt,$(I,t=>S(y({},t),{loading:!0})),$(M,(t,e)=>S(y({},t),{books:e.data,loading:!1})),$(R,(t,e)=>S(y({},t),{loading:!1})));var wt=dt(P),Tt=H(wt,t=>t.loading),At=H(wt,t=>t.books);function Wt(t,e){if(t&1&&x(0,"img",6),t&2){let i=f(2);c("src",i.book.thumbnailUrl,D)}}function Xt(t,e){if(t&1&&(a(0,"p",7),m(1),n()),t&2){let i=f(2);s(),g(" ",i.book.subtitle," ")}}function Yt(t,e){if(t&1&&(a(0,"li"),m(1),n()),t&2){let i=e.$implicit;s(),g(" ",i," ")}}function Zt(t,e){if(t&1&&(a(0,"a",1),l(1,Wt,1,1,"img",2),a(2,"h2"),m(3),n(),l(4,Xt,2,1,"p",3),a(5,"ul",4),l(6,Yt,2,1,"li",5),n(),a(7,"div"),m(8),u(9,"isbn"),n()()),t&2){let i=f();c("routerLink",i.book.isbn),s(),c("ngIf",i.book.thumbnailUrl),s(2),v(i.book.title),s(),c("ngIf",i.book.subtitle),s(2),c("ngForOf",i.book.authors),s(2),g("ISBN ",k(9,6,i.book.isbn),"")}}var $t=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:1,vars:1,consts:[["class","list-item",3,"routerLink",4,"ngIf"],[1,"list-item",3,"routerLink"],["alt","Cover",3,"src",4,"ngIf"],["role","doc-subtitle",4,"ngIf"],[1,"comma-list"],[4,"ngFor","ngForOf"],["alt","Cover",3,"src"],["role","doc-subtitle"]],template:function(o,p){o&1&&l(0,Zt,10,8,"a",0),o&2&&c("ngIf",p.book)},dependencies:[B,_,j,O]});let t=e;return t})();function ee(t,e){if(t&1&&(a(0,"li"),x(1,"bm-book-list-item",5),n()),t&2){let i=e.$implicit;s(),c("book",i)}}function ie(t,e){t&1&&(a(0,"li"),m(1," No books available. "),n())}function oe(t,e){if(t&1&&(a(0,"ul",2),l(1,ee,2,1,"li",3)(2,ie,2,0,"li",4),n()),t&2){let i=e.ngIf;s(),c("ngForOf",i),s(),c("ngIf",!i.length)}}function ne(t,e){t&1&&(a(0,"div",6),m(1,"Loading ..."),n())}var jt=(()=>{let e=class e{constructor(r){this.store=r,this.books$=this.store.select(At),this.loading$=this.store.select(Tt),this.store.dispatch(I())}};e.\u0275fac=function(o){return new(o||e)(d(ft))},e.\u0275cmp=h({type:e,selectors:[["bm-book-list"]],decls:6,vars:6,consts:[["class","book-list",4,"ngIf"],["class","loader",4,"ngIf"],[1,"book-list"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"book"],[1,"loader"]],template:function(o,p){o&1&&(a(0,"h1"),m(1,"Books"),n(),l(2,oe,3,2,"ul",0),u(3,"async"),l(4,ne,2,0,"div",1),u(5,"async")),o&2&&(s(2),c("ngIf",k(3,2,p.books$)),s(2),c("ngIf",k(5,4,p.loading$)))},dependencies:[B,_,$t,T]});let t=e;return t})();var re=[{path:"",component:jt},{path:":isbn",component:Et}],Nt=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=E({type:e}),e.\u0275inj=L({imports:[K.forChild(re),K]});let t=e;return t})();var Ot=(()=>{let e=class e{constructor(r,o){this.actions$=r,this.service=o,this.loadBooks$=bt(()=>this.actions$.pipe(gt(I),Q(()=>this.service.getAll().pipe(G(p=>M({data:p})),J(p=>q(R({error:p.message})))))))}};e.\u0275fac=function(o){return new(o||e)(U(vt),U(N))},e.\u0275prov=it({token:e,factory:e.\u0275fac});let t=e;return t})();var Qe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=E({type:e}),e.\u0275inj=L({imports:[lt,Nt,ut.forFeature(P,Lt),ht.forFeature([Ot])]});let t=e;return t})();export{Qe as BooksModule};
