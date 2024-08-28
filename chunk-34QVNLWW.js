import{b as w,c as G,l as be,m as J,n as ve,o as ge,p as A,q as Be,r as _e,s as xe,t as Ce,u as Ie,v as he}from"./chunk-XWR63BBJ.js";import{$a as Q,Aa as k,Ba as b,Ea as fe,F as ee,Fa as f,G as te,Ga as d,Ha as de,L as oe,M as h,Na as _,O as q,Oa as x,Pa as T,Qa as ue,R as g,Ra as ke,S as D,T as L,U as ie,Wa as Se,Y as ne,Ya as ye,Z as re,Za as O,a as S,aa as se,ab as R,b as y,d as W,ea as E,fa as n,ga as l,ha as ae,ja as me,k as X,m as Y,ma as m,oa as a,qa as r,r as Z,ra as i,sa as B,ta as pe,ua as ce,va as le,wa as F,xa as c,za as s}from"./chunk-F7XNPLVO.js";var $=class e{confirmText;confirm=new se;onClick(){window.confirm(this.confirmText)&&this.confirm.emit()}static \u0275fac=function(t){return new(t||e)};static \u0275dir=L({type:e,selectors:[["","bmConfirm",""]],hostBindings:function(t,p){t&1&&F("click",function(){return p.onClick()})},inputs:{confirmText:[0,"bmConfirm","confirmText"]},outputs:{confirm:"confirm"}})};var N=class e{constructor(o,t,p){this.template=o;this.viewContainer=t;this.authService=p;this.authService.isAuthenticated$.pipe(te(this.destroy$)).subscribe(v=>{v?this.viewContainer.createEmbeddedView(this.template):this.viewContainer.clear()})}destroy$=new W;ngOnDestroy(){this.destroy$.next()}static \u0275fac=function(t){return new(t||e)(l(ae),l(me),l(he))};static \u0275dir=L({type:e,selectors:[["","bmLoggedinOnly",""]]})};var C=class e{transform(o){return o?`${o.substring(0,3)}-${o.substring(3)}`:""}static \u0275fac=function(t){return new(t||e)};static \u0275pipe=ie({name:"isbn",type:e,pure:!0})};var Ve=e=>["/admin/edit",e];function He(e,o){if(e&1&&(r(0,"p",9),s(1),i()),e&2){let t=c().ngIf;n(),k(t.subtitle)}}function Ke(e,o){if(e&1&&(r(0,"li"),s(1),i()),e&2){let t=o.$implicit;n(),k(t)}}function ze(e,o){if(e&1&&(r(0,"div")(1,"h2"),s(2,"Published"),i(),s(3),f(4,"date"),i()),e&2){let t=c().ngIf;n(3),b(" ",de(4,1,t.published,"longDate")," ")}}function qe(e,o){if(e&1&&B(0,"img",10),e&2){let t=c().ngIf;a("src",t.thumbnailUrl,E)}}function Ge(e,o){if(e&1){let t=le();pe(0),r(1,"button",11),F("confirm",function(){ne(t);let v=c().ngIf,Ne=c();return re(Ne.removeBook(v.isbn))}),s(2," Remove book "),i(),r(3,"a",12),s(4," Edit book "),i(),ce()}if(e&2){let t=c().ngIf;n(3),a("routerLink",fe(1,Ve,t.isbn))}}function Je(e,o){if(e&1&&(r(0,"div",1)(1,"h1"),s(2),i(),m(3,He,2,1,"p",2),r(4,"div",3)(5,"div")(6,"h2"),s(7,"Authors"),i(),r(8,"ul"),m(9,Ke,2,1,"li",4),i()(),r(10,"div")(11,"h2"),s(12,"ISBN"),i(),s(13),f(14,"isbn"),i(),m(15,ze,5,4,"div",5),i(),r(16,"h2"),s(17,"Description"),i(),r(18,"p"),s(19),i(),m(20,qe,1,1,"img",6),r(21,"a",7),s(22,"Back to list"),i(),m(23,Ge,5,3,"ng-container",8),i()),e&2){let t=o.ngIf;n(2),k(t.title),n(),a("ngIf",t.subtitle),n(6),a("ngForOf",t.authors),n(4),b(" ",d(14,7,t.isbn)," "),n(2),a("ngIf",t.published),n(4),k(t.description),n(),a("ngIf",t.thumbnailUrl)}}var M=class e{constructor(o,t,p){this.service=o;this.route=t;this.router=p;let v=this.route.snapshot.paramMap.get("isbn");this.book$=this.service.getSingle(v)}book$;removeBook(o){this.service.remove(o).subscribe(()=>{this.router.navigateByUrl("/books")})}static \u0275fac=function(t){return new(t||e)(l(R),l(Se),l(ye))};static \u0275cmp=g({type:e,selectors:[["bm-book-details"]],decls:2,vars:3,consts:[["class","details",4,"ngIf"],[1,"details"],["role","doc-subtitle",4,"ngIf"],[1,"header"],[4,"ngFor","ngForOf"],[4,"ngIf"],["alt","Cover",3,"src",4,"ngIf"],["routerLink","..",1,"button","arrow-left"],[4,"bmLoggedinOnly"],["role","doc-subtitle"],["alt","Cover",3,"src"],["bmConfirm","Remove book?",1,"red",3,"confirm"],[1,"button",3,"routerLink"]],template:function(t,p){t&1&&(m(0,Je,24,9,"div",0),f(1,"async")),t&2&&a("ngIf",d(1,1,p.book$))},dependencies:[_,x,O,$,N,T,ue,C]})};var I=w("[Book] Load Books"),j=w("[Book] Load Books Success",G()),P=w("[Book] Load Books Failure",G());var U="book",Qe={books:[],loading:!1},Te=Be(Qe,A(I,e=>y(S({},e),{loading:!0})),A(j,(e,o)=>y(S({},e),{books:o.data,loading:!1})),A(P,(e,o)=>y(S({},e),{loading:!1})));var Ae=ve(U),Oe=J(Ae,e=>e.loading),Re=J(Ae,e=>e.books);function We(e,o){if(e&1&&B(0,"img",6),e&2){let t=c(2);a("src",t.book.thumbnailUrl,E)}}function Xe(e,o){if(e&1&&(r(0,"p",7),s(1),i()),e&2){let t=c(2);n(),b(" ",t.book.subtitle," ")}}function Ye(e,o){if(e&1&&(r(0,"li"),s(1),i()),e&2){let t=o.$implicit;n(),b(" ",t," ")}}function Ze(e,o){if(e&1&&(r(0,"a",1),m(1,We,1,1,"img",2),r(2,"h2"),s(3),i(),m(4,Xe,2,1,"p",3),r(5,"ul",4),m(6,Ye,2,1,"li",5),i(),r(7,"div"),s(8),f(9,"isbn"),i()()),e&2){let t=c();a("routerLink",t.book.isbn),n(),a("ngIf",t.book.thumbnailUrl),n(2),k(t.book.title),n(),a("ngIf",t.book.subtitle),n(2),a("ngForOf",t.book.authors),n(2),b("ISBN ",d(9,6,t.book.isbn),"")}}var V=class e{book;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:1,vars:1,consts:[["class","list-item",3,"routerLink",4,"ngIf"],[1,"list-item",3,"routerLink"],["alt","Cover",3,"src",4,"ngIf"],["role","doc-subtitle",4,"ngIf"],[1,"comma-list"],[4,"ngFor","ngForOf"],["alt","Cover",3,"src"],["role","doc-subtitle"]],template:function(t,p){t&1&&m(0,Ze,10,8,"a",0),t&2&&a("ngIf",p.book)},dependencies:[_,x,O,C]})};function tt(e,o){if(e&1&&(r(0,"li"),B(1,"bm-book-list-item",5),i()),e&2){let t=o.$implicit;n(),a("book",t)}}function ot(e,o){e&1&&(r(0,"li"),s(1," No books available. "),i())}function it(e,o){if(e&1&&(r(0,"ul",2),m(1,tt,2,1,"li",3)(2,ot,2,0,"li",4),i()),e&2){let t=o.ngIf;n(),a("ngForOf",t),n(),a("ngIf",!t.length)}}function nt(e,o){e&1&&(r(0,"div",6),s(1,"Loading ..."),i())}var H=class e{constructor(o){this.store=o;this.books$=this.store.select(Re),this.loading$=this.store.select(Oe),this.store.dispatch(I())}books$;loading$;static \u0275fac=function(t){return new(t||e)(l(be))};static \u0275cmp=g({type:e,selectors:[["bm-book-list"]],decls:6,vars:6,consts:[["class","book-list",4,"ngIf"],["class","loader",4,"ngIf"],[1,"book-list"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"book"],[1,"loader"]],template:function(t,p){t&1&&(r(0,"h1"),s(1,"Books"),i(),m(2,it,3,2,"ul",0),f(3,"async"),m(4,nt,2,0,"div",1),f(5,"async")),t&2&&(n(2),a("ngIf",d(3,2,p.books$)),n(2),a("ngIf",d(5,4,p.loading$)))},dependencies:[_,x,V,T]})};var rt=[{path:"",component:H},{path:":isbn",component:M}],K=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=D({type:e});static \u0275inj=h({imports:[Q.forChild(rt),Q]})};var z=class e{constructor(o,t){this.actions$=o;this.service=t}loadBooks$=_e(()=>this.actions$.pipe(Ce(I),ee(()=>this.service.getAll().pipe(Y(o=>j({data:o})),Z(o=>X(P({error:o.message})))))));static \u0275fac=function(t){return new(t||e)(q(xe),q(R))};static \u0275prov=oe({token:e,factory:e.\u0275fac})};var $e=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=D({type:e});static \u0275inj=h({imports:[ke,K,ge.forFeature(U,Te),Ie.forFeature([z])]})};export{$e as BooksModule};
