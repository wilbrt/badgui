goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35479 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35479(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35480 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35480(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34546 = coll;
var G__34547 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34546,G__34547) : shadow.dom.lazy_native_coll_seq.call(null,G__34546,G__34547));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34577 = arguments.length;
switch (G__34577) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34586 = arguments.length;
switch (G__34586) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34595 = arguments.length;
switch (G__34595) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34610 = arguments.length;
switch (G__34610) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34626 = arguments.length;
switch (G__34626) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34646 = arguments.length;
switch (G__34646) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34682){if((e34682 instanceof Object)){
var e = e34682;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34682;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34700 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34702 = null;
var count__34703 = (0);
var i__34704 = (0);
while(true){
if((i__34704 < count__34703)){
var el = chunk__34702.cljs$core$IIndexed$_nth$arity$2(null,i__34704);
var handler_35491__$1 = ((function (seq__34700,chunk__34702,count__34703,i__34704,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34700,chunk__34702,count__34703,i__34704,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35491__$1);


var G__35492 = seq__34700;
var G__35493 = chunk__34702;
var G__35494 = count__34703;
var G__35495 = (i__34704 + (1));
seq__34700 = G__35492;
chunk__34702 = G__35493;
count__34703 = G__35494;
i__34704 = G__35495;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34700);
if(temp__5753__auto__){
var seq__34700__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34700__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34700__$1);
var G__35496 = cljs.core.chunk_rest(seq__34700__$1);
var G__35497 = c__4679__auto__;
var G__35498 = cljs.core.count(c__4679__auto__);
var G__35499 = (0);
seq__34700 = G__35496;
chunk__34702 = G__35497;
count__34703 = G__35498;
i__34704 = G__35499;
continue;
} else {
var el = cljs.core.first(seq__34700__$1);
var handler_35500__$1 = ((function (seq__34700,chunk__34702,count__34703,i__34704,el,seq__34700__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34700,chunk__34702,count__34703,i__34704,el,seq__34700__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35500__$1);


var G__35501 = cljs.core.next(seq__34700__$1);
var G__35502 = null;
var G__35503 = (0);
var G__35504 = (0);
seq__34700 = G__35501;
chunk__34702 = G__35502;
count__34703 = G__35503;
i__34704 = G__35504;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34727 = arguments.length;
switch (G__34727) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34747 = cljs.core.seq(events);
var chunk__34748 = null;
var count__34749 = (0);
var i__34750 = (0);
while(true){
if((i__34750 < count__34749)){
var vec__34772 = chunk__34748.cljs$core$IIndexed$_nth$arity$2(null,i__34750);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35506 = seq__34747;
var G__35507 = chunk__34748;
var G__35508 = count__34749;
var G__35509 = (i__34750 + (1));
seq__34747 = G__35506;
chunk__34748 = G__35507;
count__34749 = G__35508;
i__34750 = G__35509;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34747);
if(temp__5753__auto__){
var seq__34747__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34747__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34747__$1);
var G__35510 = cljs.core.chunk_rest(seq__34747__$1);
var G__35511 = c__4679__auto__;
var G__35512 = cljs.core.count(c__4679__auto__);
var G__35513 = (0);
seq__34747 = G__35510;
chunk__34748 = G__35511;
count__34749 = G__35512;
i__34750 = G__35513;
continue;
} else {
var vec__34780 = cljs.core.first(seq__34747__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35514 = cljs.core.next(seq__34747__$1);
var G__35515 = null;
var G__35516 = (0);
var G__35517 = (0);
seq__34747 = G__35514;
chunk__34748 = G__35515;
count__34749 = G__35516;
i__34750 = G__35517;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34785 = cljs.core.seq(styles);
var chunk__34786 = null;
var count__34787 = (0);
var i__34788 = (0);
while(true){
if((i__34788 < count__34787)){
var vec__34800 = chunk__34786.cljs$core$IIndexed$_nth$arity$2(null,i__34788);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34800,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34800,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35518 = seq__34785;
var G__35519 = chunk__34786;
var G__35520 = count__34787;
var G__35521 = (i__34788 + (1));
seq__34785 = G__35518;
chunk__34786 = G__35519;
count__34787 = G__35520;
i__34788 = G__35521;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34785);
if(temp__5753__auto__){
var seq__34785__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34785__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34785__$1);
var G__35522 = cljs.core.chunk_rest(seq__34785__$1);
var G__35523 = c__4679__auto__;
var G__35524 = cljs.core.count(c__4679__auto__);
var G__35525 = (0);
seq__34785 = G__35522;
chunk__34786 = G__35523;
count__34787 = G__35524;
i__34788 = G__35525;
continue;
} else {
var vec__34803 = cljs.core.first(seq__34785__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34803,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34803,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35526 = cljs.core.next(seq__34785__$1);
var G__35527 = null;
var G__35528 = (0);
var G__35529 = (0);
seq__34785 = G__35526;
chunk__34786 = G__35527;
count__34787 = G__35528;
i__34788 = G__35529;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34818_35530 = key;
var G__34818_35531__$1 = (((G__34818_35530 instanceof cljs.core.Keyword))?G__34818_35530.fqn:null);
switch (G__34818_35531__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35535 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_35535,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_35535,"aria-");
}
})())){
el.setAttribute(ks_35535,value);
} else {
(el[ks_35535] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34856){
var map__34857 = p__34856;
var map__34857__$1 = cljs.core.__destructure_map(map__34857);
var props = map__34857__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34857__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34862 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34868 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34868,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34868;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34873 = arguments.length;
switch (G__34873) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34887){
var vec__34888 = p__34887;
var seq__34889 = cljs.core.seq(vec__34888);
var first__34890 = cljs.core.first(seq__34889);
var seq__34889__$1 = cljs.core.next(seq__34889);
var nn = first__34890;
var first__34890__$1 = cljs.core.first(seq__34889__$1);
var seq__34889__$2 = cljs.core.next(seq__34889__$1);
var np = first__34890__$1;
var nc = seq__34889__$2;
var node = vec__34888;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34895 = nn;
var G__34896 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34895,G__34896) : create_fn.call(null,G__34895,G__34896));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34897 = nn;
var G__34898 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34897,G__34898) : create_fn.call(null,G__34897,G__34898));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34904 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34904,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34904,(1),null);
var seq__34907_35538 = cljs.core.seq(node_children);
var chunk__34908_35539 = null;
var count__34909_35540 = (0);
var i__34910_35541 = (0);
while(true){
if((i__34910_35541 < count__34909_35540)){
var child_struct_35542 = chunk__34908_35539.cljs$core$IIndexed$_nth$arity$2(null,i__34910_35541);
var children_35543 = shadow.dom.dom_node(child_struct_35542);
if(cljs.core.seq_QMARK_(children_35543)){
var seq__34939_35544 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35543));
var chunk__34941_35545 = null;
var count__34942_35546 = (0);
var i__34943_35547 = (0);
while(true){
if((i__34943_35547 < count__34942_35546)){
var child_35548 = chunk__34941_35545.cljs$core$IIndexed$_nth$arity$2(null,i__34943_35547);
if(cljs.core.truth_(child_35548)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35548);


var G__35549 = seq__34939_35544;
var G__35550 = chunk__34941_35545;
var G__35551 = count__34942_35546;
var G__35552 = (i__34943_35547 + (1));
seq__34939_35544 = G__35549;
chunk__34941_35545 = G__35550;
count__34942_35546 = G__35551;
i__34943_35547 = G__35552;
continue;
} else {
var G__35553 = seq__34939_35544;
var G__35554 = chunk__34941_35545;
var G__35555 = count__34942_35546;
var G__35556 = (i__34943_35547 + (1));
seq__34939_35544 = G__35553;
chunk__34941_35545 = G__35554;
count__34942_35546 = G__35555;
i__34943_35547 = G__35556;
continue;
}
} else {
var temp__5753__auto___35557 = cljs.core.seq(seq__34939_35544);
if(temp__5753__auto___35557){
var seq__34939_35558__$1 = temp__5753__auto___35557;
if(cljs.core.chunked_seq_QMARK_(seq__34939_35558__$1)){
var c__4679__auto___35559 = cljs.core.chunk_first(seq__34939_35558__$1);
var G__35560 = cljs.core.chunk_rest(seq__34939_35558__$1);
var G__35561 = c__4679__auto___35559;
var G__35562 = cljs.core.count(c__4679__auto___35559);
var G__35563 = (0);
seq__34939_35544 = G__35560;
chunk__34941_35545 = G__35561;
count__34942_35546 = G__35562;
i__34943_35547 = G__35563;
continue;
} else {
var child_35565 = cljs.core.first(seq__34939_35558__$1);
if(cljs.core.truth_(child_35565)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35565);


var G__35566 = cljs.core.next(seq__34939_35558__$1);
var G__35567 = null;
var G__35568 = (0);
var G__35569 = (0);
seq__34939_35544 = G__35566;
chunk__34941_35545 = G__35567;
count__34942_35546 = G__35568;
i__34943_35547 = G__35569;
continue;
} else {
var G__35570 = cljs.core.next(seq__34939_35558__$1);
var G__35571 = null;
var G__35572 = (0);
var G__35573 = (0);
seq__34939_35544 = G__35570;
chunk__34941_35545 = G__35571;
count__34942_35546 = G__35572;
i__34943_35547 = G__35573;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35543);
}


var G__35574 = seq__34907_35538;
var G__35575 = chunk__34908_35539;
var G__35576 = count__34909_35540;
var G__35577 = (i__34910_35541 + (1));
seq__34907_35538 = G__35574;
chunk__34908_35539 = G__35575;
count__34909_35540 = G__35576;
i__34910_35541 = G__35577;
continue;
} else {
var temp__5753__auto___35578 = cljs.core.seq(seq__34907_35538);
if(temp__5753__auto___35578){
var seq__34907_35580__$1 = temp__5753__auto___35578;
if(cljs.core.chunked_seq_QMARK_(seq__34907_35580__$1)){
var c__4679__auto___35581 = cljs.core.chunk_first(seq__34907_35580__$1);
var G__35582 = cljs.core.chunk_rest(seq__34907_35580__$1);
var G__35583 = c__4679__auto___35581;
var G__35584 = cljs.core.count(c__4679__auto___35581);
var G__35585 = (0);
seq__34907_35538 = G__35582;
chunk__34908_35539 = G__35583;
count__34909_35540 = G__35584;
i__34910_35541 = G__35585;
continue;
} else {
var child_struct_35586 = cljs.core.first(seq__34907_35580__$1);
var children_35587 = shadow.dom.dom_node(child_struct_35586);
if(cljs.core.seq_QMARK_(children_35587)){
var seq__34976_35588 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35587));
var chunk__34978_35589 = null;
var count__34979_35590 = (0);
var i__34980_35591 = (0);
while(true){
if((i__34980_35591 < count__34979_35590)){
var child_35592 = chunk__34978_35589.cljs$core$IIndexed$_nth$arity$2(null,i__34980_35591);
if(cljs.core.truth_(child_35592)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35592);


var G__35593 = seq__34976_35588;
var G__35594 = chunk__34978_35589;
var G__35595 = count__34979_35590;
var G__35596 = (i__34980_35591 + (1));
seq__34976_35588 = G__35593;
chunk__34978_35589 = G__35594;
count__34979_35590 = G__35595;
i__34980_35591 = G__35596;
continue;
} else {
var G__35597 = seq__34976_35588;
var G__35598 = chunk__34978_35589;
var G__35599 = count__34979_35590;
var G__35600 = (i__34980_35591 + (1));
seq__34976_35588 = G__35597;
chunk__34978_35589 = G__35598;
count__34979_35590 = G__35599;
i__34980_35591 = G__35600;
continue;
}
} else {
var temp__5753__auto___35601__$1 = cljs.core.seq(seq__34976_35588);
if(temp__5753__auto___35601__$1){
var seq__34976_35602__$1 = temp__5753__auto___35601__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34976_35602__$1)){
var c__4679__auto___35603 = cljs.core.chunk_first(seq__34976_35602__$1);
var G__35604 = cljs.core.chunk_rest(seq__34976_35602__$1);
var G__35605 = c__4679__auto___35603;
var G__35606 = cljs.core.count(c__4679__auto___35603);
var G__35607 = (0);
seq__34976_35588 = G__35604;
chunk__34978_35589 = G__35605;
count__34979_35590 = G__35606;
i__34980_35591 = G__35607;
continue;
} else {
var child_35608 = cljs.core.first(seq__34976_35602__$1);
if(cljs.core.truth_(child_35608)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35608);


var G__35609 = cljs.core.next(seq__34976_35602__$1);
var G__35610 = null;
var G__35611 = (0);
var G__35612 = (0);
seq__34976_35588 = G__35609;
chunk__34978_35589 = G__35610;
count__34979_35590 = G__35611;
i__34980_35591 = G__35612;
continue;
} else {
var G__35613 = cljs.core.next(seq__34976_35602__$1);
var G__35614 = null;
var G__35615 = (0);
var G__35616 = (0);
seq__34976_35588 = G__35613;
chunk__34978_35589 = G__35614;
count__34979_35590 = G__35615;
i__34980_35591 = G__35616;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35587);
}


var G__35617 = cljs.core.next(seq__34907_35580__$1);
var G__35618 = null;
var G__35619 = (0);
var G__35620 = (0);
seq__34907_35538 = G__35617;
chunk__34908_35539 = G__35618;
count__34909_35540 = G__35619;
i__34910_35541 = G__35620;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34996 = cljs.core.seq(node);
var chunk__34997 = null;
var count__34998 = (0);
var i__34999 = (0);
while(true){
if((i__34999 < count__34998)){
var n = chunk__34997.cljs$core$IIndexed$_nth$arity$2(null,i__34999);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35622 = seq__34996;
var G__35623 = chunk__34997;
var G__35624 = count__34998;
var G__35625 = (i__34999 + (1));
seq__34996 = G__35622;
chunk__34997 = G__35623;
count__34998 = G__35624;
i__34999 = G__35625;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34996);
if(temp__5753__auto__){
var seq__34996__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34996__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34996__$1);
var G__35626 = cljs.core.chunk_rest(seq__34996__$1);
var G__35627 = c__4679__auto__;
var G__35628 = cljs.core.count(c__4679__auto__);
var G__35629 = (0);
seq__34996 = G__35626;
chunk__34997 = G__35627;
count__34998 = G__35628;
i__34999 = G__35629;
continue;
} else {
var n = cljs.core.first(seq__34996__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35630 = cljs.core.next(seq__34996__$1);
var G__35631 = null;
var G__35632 = (0);
var G__35633 = (0);
seq__34996 = G__35630;
chunk__34997 = G__35631;
count__34998 = G__35632;
i__34999 = G__35633;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35023 = arguments.length;
switch (G__35023) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35030 = arguments.length;
switch (G__35030) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35046 = arguments.length;
switch (G__35046) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35642 = arguments.length;
var i__4865__auto___35643 = (0);
while(true){
if((i__4865__auto___35643 < len__4864__auto___35642)){
args__4870__auto__.push((arguments[i__4865__auto___35643]));

var G__35644 = (i__4865__auto___35643 + (1));
i__4865__auto___35643 = G__35644;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35086_35646 = cljs.core.seq(nodes);
var chunk__35087_35647 = null;
var count__35088_35648 = (0);
var i__35089_35649 = (0);
while(true){
if((i__35089_35649 < count__35088_35648)){
var node_35650 = chunk__35087_35647.cljs$core$IIndexed$_nth$arity$2(null,i__35089_35649);
fragment.appendChild(shadow.dom._to_dom(node_35650));


var G__35652 = seq__35086_35646;
var G__35653 = chunk__35087_35647;
var G__35654 = count__35088_35648;
var G__35655 = (i__35089_35649 + (1));
seq__35086_35646 = G__35652;
chunk__35087_35647 = G__35653;
count__35088_35648 = G__35654;
i__35089_35649 = G__35655;
continue;
} else {
var temp__5753__auto___35656 = cljs.core.seq(seq__35086_35646);
if(temp__5753__auto___35656){
var seq__35086_35657__$1 = temp__5753__auto___35656;
if(cljs.core.chunked_seq_QMARK_(seq__35086_35657__$1)){
var c__4679__auto___35658 = cljs.core.chunk_first(seq__35086_35657__$1);
var G__35660 = cljs.core.chunk_rest(seq__35086_35657__$1);
var G__35661 = c__4679__auto___35658;
var G__35662 = cljs.core.count(c__4679__auto___35658);
var G__35663 = (0);
seq__35086_35646 = G__35660;
chunk__35087_35647 = G__35661;
count__35088_35648 = G__35662;
i__35089_35649 = G__35663;
continue;
} else {
var node_35664 = cljs.core.first(seq__35086_35657__$1);
fragment.appendChild(shadow.dom._to_dom(node_35664));


var G__35665 = cljs.core.next(seq__35086_35657__$1);
var G__35666 = null;
var G__35667 = (0);
var G__35668 = (0);
seq__35086_35646 = G__35665;
chunk__35087_35647 = G__35666;
count__35088_35648 = G__35667;
i__35089_35649 = G__35668;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35075){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35075));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35128_35669 = cljs.core.seq(scripts);
var chunk__35129_35670 = null;
var count__35130_35671 = (0);
var i__35131_35672 = (0);
while(true){
if((i__35131_35672 < count__35130_35671)){
var vec__35142_35673 = chunk__35129_35670.cljs$core$IIndexed$_nth$arity$2(null,i__35131_35672);
var script_tag_35674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35673,(0),null);
var script_body_35675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35673,(1),null);
eval(script_body_35675);


var G__35676 = seq__35128_35669;
var G__35677 = chunk__35129_35670;
var G__35678 = count__35130_35671;
var G__35679 = (i__35131_35672 + (1));
seq__35128_35669 = G__35676;
chunk__35129_35670 = G__35677;
count__35130_35671 = G__35678;
i__35131_35672 = G__35679;
continue;
} else {
var temp__5753__auto___35680 = cljs.core.seq(seq__35128_35669);
if(temp__5753__auto___35680){
var seq__35128_35681__$1 = temp__5753__auto___35680;
if(cljs.core.chunked_seq_QMARK_(seq__35128_35681__$1)){
var c__4679__auto___35682 = cljs.core.chunk_first(seq__35128_35681__$1);
var G__35683 = cljs.core.chunk_rest(seq__35128_35681__$1);
var G__35684 = c__4679__auto___35682;
var G__35685 = cljs.core.count(c__4679__auto___35682);
var G__35686 = (0);
seq__35128_35669 = G__35683;
chunk__35129_35670 = G__35684;
count__35130_35671 = G__35685;
i__35131_35672 = G__35686;
continue;
} else {
var vec__35163_35695 = cljs.core.first(seq__35128_35681__$1);
var script_tag_35696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35163_35695,(0),null);
var script_body_35697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35163_35695,(1),null);
eval(script_body_35697);


var G__35698 = cljs.core.next(seq__35128_35681__$1);
var G__35699 = null;
var G__35700 = (0);
var G__35701 = (0);
seq__35128_35669 = G__35698;
chunk__35129_35670 = G__35699;
count__35130_35671 = G__35700;
i__35131_35672 = G__35701;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35166){
var vec__35167 = p__35166;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35167,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35167,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35171 = arguments.length;
switch (G__35171) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35177 = cljs.core.seq(style_keys);
var chunk__35179 = null;
var count__35180 = (0);
var i__35181 = (0);
while(true){
if((i__35181 < count__35180)){
var it = chunk__35179.cljs$core$IIndexed$_nth$arity$2(null,i__35181);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35719 = seq__35177;
var G__35720 = chunk__35179;
var G__35721 = count__35180;
var G__35722 = (i__35181 + (1));
seq__35177 = G__35719;
chunk__35179 = G__35720;
count__35180 = G__35721;
i__35181 = G__35722;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35177);
if(temp__5753__auto__){
var seq__35177__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35177__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35177__$1);
var G__35723 = cljs.core.chunk_rest(seq__35177__$1);
var G__35724 = c__4679__auto__;
var G__35725 = cljs.core.count(c__4679__auto__);
var G__35726 = (0);
seq__35177 = G__35723;
chunk__35179 = G__35724;
count__35180 = G__35725;
i__35181 = G__35726;
continue;
} else {
var it = cljs.core.first(seq__35177__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35727 = cljs.core.next(seq__35177__$1);
var G__35728 = null;
var G__35729 = (0);
var G__35730 = (0);
seq__35177 = G__35727;
chunk__35179 = G__35728;
count__35180 = G__35729;
i__35181 = G__35730;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35203,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35211 = k35203;
var G__35211__$1 = (((G__35211 instanceof cljs.core.Keyword))?G__35211.fqn:null);
switch (G__35211__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35203,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35216){
var vec__35218 = p__35216;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35218,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35218,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35202){
var self__ = this;
var G__35202__$1 = this;
return (new cljs.core.RecordIter((0),G__35202__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35204,other35205){
var self__ = this;
var this35204__$1 = this;
return (((!((other35205 == null)))) && ((((this35204__$1.constructor === other35205.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35204__$1.x,other35205.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35204__$1.y,other35205.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35204__$1.__extmap,other35205.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35203){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35260 = k35203;
var G__35260__$1 = (((G__35260 instanceof cljs.core.Keyword))?G__35260.fqn:null);
switch (G__35260__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35203);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35202){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35262 = cljs.core.keyword_identical_QMARK_;
var expr__35263 = k__4511__auto__;
if(cljs.core.truth_((pred__35262.cljs$core$IFn$_invoke$arity$2 ? pred__35262.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35263) : pred__35262.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35263)))){
return (new shadow.dom.Coordinate(G__35202,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35262.cljs$core$IFn$_invoke$arity$2 ? pred__35262.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35263) : pred__35262.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35263)))){
return (new shadow.dom.Coordinate(self__.x,G__35202,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35202),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35202){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35202,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35207){
var extmap__4542__auto__ = (function (){var G__35277 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35207,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35207)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35277);
} else {
return G__35277;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35207),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35207),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35292,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35309 = k35292;
var G__35309__$1 = (((G__35309 instanceof cljs.core.Keyword))?G__35309.fqn:null);
switch (G__35309__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35292,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35313){
var vec__35316 = p__35313;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35316,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35316,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35291){
var self__ = this;
var G__35291__$1 = this;
return (new cljs.core.RecordIter((0),G__35291__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35293,other35294){
var self__ = this;
var this35293__$1 = this;
return (((!((other35294 == null)))) && ((((this35293__$1.constructor === other35294.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35293__$1.w,other35294.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35293__$1.h,other35294.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35293__$1.__extmap,other35294.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35292){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35322 = k35292;
var G__35322__$1 = (((G__35322 instanceof cljs.core.Keyword))?G__35322.fqn:null);
switch (G__35322__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35292);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35291){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35323 = cljs.core.keyword_identical_QMARK_;
var expr__35324 = k__4511__auto__;
if(cljs.core.truth_((pred__35323.cljs$core$IFn$_invoke$arity$2 ? pred__35323.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35324) : pred__35323.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35324)))){
return (new shadow.dom.Size(G__35291,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35323.cljs$core$IFn$_invoke$arity$2 ? pred__35323.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35324) : pred__35323.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35324)))){
return (new shadow.dom.Size(self__.w,G__35291,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35291),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35291){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35291,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35299){
var extmap__4542__auto__ = (function (){var G__35326 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35299,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35299)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35326);
} else {
return G__35326;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35299),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35299),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__35769 = (i + (1));
var G__35770 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35769;
ret = G__35770;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35364){
var vec__35365 = p__35364;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35365,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35365,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35369 = arguments.length;
switch (G__35369) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35776 = ps;
var G__35777 = (i + (1));
el__$1 = G__35776;
i = G__35777;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35382 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35382,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35382,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35382,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35385_35786 = cljs.core.seq(props);
var chunk__35386_35787 = null;
var count__35387_35788 = (0);
var i__35388_35789 = (0);
while(true){
if((i__35388_35789 < count__35387_35788)){
var vec__35397_35790 = chunk__35386_35787.cljs$core$IIndexed$_nth$arity$2(null,i__35388_35789);
var k_35791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35397_35790,(0),null);
var v_35792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35397_35790,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_35791);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35791),v_35792);


var G__35793 = seq__35385_35786;
var G__35794 = chunk__35386_35787;
var G__35795 = count__35387_35788;
var G__35796 = (i__35388_35789 + (1));
seq__35385_35786 = G__35793;
chunk__35386_35787 = G__35794;
count__35387_35788 = G__35795;
i__35388_35789 = G__35796;
continue;
} else {
var temp__5753__auto___35797 = cljs.core.seq(seq__35385_35786);
if(temp__5753__auto___35797){
var seq__35385_35798__$1 = temp__5753__auto___35797;
if(cljs.core.chunked_seq_QMARK_(seq__35385_35798__$1)){
var c__4679__auto___35799 = cljs.core.chunk_first(seq__35385_35798__$1);
var G__35800 = cljs.core.chunk_rest(seq__35385_35798__$1);
var G__35801 = c__4679__auto___35799;
var G__35802 = cljs.core.count(c__4679__auto___35799);
var G__35803 = (0);
seq__35385_35786 = G__35800;
chunk__35386_35787 = G__35801;
count__35387_35788 = G__35802;
i__35388_35789 = G__35803;
continue;
} else {
var vec__35401_35804 = cljs.core.first(seq__35385_35798__$1);
var k_35805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401_35804,(0),null);
var v_35806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401_35804,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_35805);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35805),v_35806);


var G__35807 = cljs.core.next(seq__35385_35798__$1);
var G__35808 = null;
var G__35809 = (0);
var G__35810 = (0);
seq__35385_35786 = G__35807;
chunk__35386_35787 = G__35808;
count__35387_35788 = G__35809;
i__35388_35789 = G__35810;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35417 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35417,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35417,(1),null);
var seq__35420_35811 = cljs.core.seq(node_children);
var chunk__35422_35812 = null;
var count__35423_35813 = (0);
var i__35424_35814 = (0);
while(true){
if((i__35424_35814 < count__35423_35813)){
var child_struct_35815 = chunk__35422_35812.cljs$core$IIndexed$_nth$arity$2(null,i__35424_35814);
if((!((child_struct_35815 == null)))){
if(typeof child_struct_35815 === 'string'){
var text_35816 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35816),child_struct_35815].join(''));
} else {
var children_35817 = shadow.dom.svg_node(child_struct_35815);
if(cljs.core.seq_QMARK_(children_35817)){
var seq__35438_35818 = cljs.core.seq(children_35817);
var chunk__35440_35819 = null;
var count__35441_35820 = (0);
var i__35442_35821 = (0);
while(true){
if((i__35442_35821 < count__35441_35820)){
var child_35822 = chunk__35440_35819.cljs$core$IIndexed$_nth$arity$2(null,i__35442_35821);
if(cljs.core.truth_(child_35822)){
node.appendChild(child_35822);


var G__35823 = seq__35438_35818;
var G__35824 = chunk__35440_35819;
var G__35825 = count__35441_35820;
var G__35826 = (i__35442_35821 + (1));
seq__35438_35818 = G__35823;
chunk__35440_35819 = G__35824;
count__35441_35820 = G__35825;
i__35442_35821 = G__35826;
continue;
} else {
var G__35827 = seq__35438_35818;
var G__35828 = chunk__35440_35819;
var G__35829 = count__35441_35820;
var G__35830 = (i__35442_35821 + (1));
seq__35438_35818 = G__35827;
chunk__35440_35819 = G__35828;
count__35441_35820 = G__35829;
i__35442_35821 = G__35830;
continue;
}
} else {
var temp__5753__auto___35831 = cljs.core.seq(seq__35438_35818);
if(temp__5753__auto___35831){
var seq__35438_35832__$1 = temp__5753__auto___35831;
if(cljs.core.chunked_seq_QMARK_(seq__35438_35832__$1)){
var c__4679__auto___35833 = cljs.core.chunk_first(seq__35438_35832__$1);
var G__35834 = cljs.core.chunk_rest(seq__35438_35832__$1);
var G__35835 = c__4679__auto___35833;
var G__35836 = cljs.core.count(c__4679__auto___35833);
var G__35837 = (0);
seq__35438_35818 = G__35834;
chunk__35440_35819 = G__35835;
count__35441_35820 = G__35836;
i__35442_35821 = G__35837;
continue;
} else {
var child_35838 = cljs.core.first(seq__35438_35832__$1);
if(cljs.core.truth_(child_35838)){
node.appendChild(child_35838);


var G__35839 = cljs.core.next(seq__35438_35832__$1);
var G__35840 = null;
var G__35841 = (0);
var G__35842 = (0);
seq__35438_35818 = G__35839;
chunk__35440_35819 = G__35840;
count__35441_35820 = G__35841;
i__35442_35821 = G__35842;
continue;
} else {
var G__35843 = cljs.core.next(seq__35438_35832__$1);
var G__35844 = null;
var G__35845 = (0);
var G__35846 = (0);
seq__35438_35818 = G__35843;
chunk__35440_35819 = G__35844;
count__35441_35820 = G__35845;
i__35442_35821 = G__35846;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35817);
}
}


var G__35847 = seq__35420_35811;
var G__35848 = chunk__35422_35812;
var G__35849 = count__35423_35813;
var G__35850 = (i__35424_35814 + (1));
seq__35420_35811 = G__35847;
chunk__35422_35812 = G__35848;
count__35423_35813 = G__35849;
i__35424_35814 = G__35850;
continue;
} else {
var G__35851 = seq__35420_35811;
var G__35852 = chunk__35422_35812;
var G__35853 = count__35423_35813;
var G__35854 = (i__35424_35814 + (1));
seq__35420_35811 = G__35851;
chunk__35422_35812 = G__35852;
count__35423_35813 = G__35853;
i__35424_35814 = G__35854;
continue;
}
} else {
var temp__5753__auto___35855 = cljs.core.seq(seq__35420_35811);
if(temp__5753__auto___35855){
var seq__35420_35856__$1 = temp__5753__auto___35855;
if(cljs.core.chunked_seq_QMARK_(seq__35420_35856__$1)){
var c__4679__auto___35857 = cljs.core.chunk_first(seq__35420_35856__$1);
var G__35858 = cljs.core.chunk_rest(seq__35420_35856__$1);
var G__35859 = c__4679__auto___35857;
var G__35860 = cljs.core.count(c__4679__auto___35857);
var G__35861 = (0);
seq__35420_35811 = G__35858;
chunk__35422_35812 = G__35859;
count__35423_35813 = G__35860;
i__35424_35814 = G__35861;
continue;
} else {
var child_struct_35862 = cljs.core.first(seq__35420_35856__$1);
if((!((child_struct_35862 == null)))){
if(typeof child_struct_35862 === 'string'){
var text_35863 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35863),child_struct_35862].join(''));
} else {
var children_35864 = shadow.dom.svg_node(child_struct_35862);
if(cljs.core.seq_QMARK_(children_35864)){
var seq__35445_35865 = cljs.core.seq(children_35864);
var chunk__35447_35866 = null;
var count__35448_35867 = (0);
var i__35449_35868 = (0);
while(true){
if((i__35449_35868 < count__35448_35867)){
var child_35871 = chunk__35447_35866.cljs$core$IIndexed$_nth$arity$2(null,i__35449_35868);
if(cljs.core.truth_(child_35871)){
node.appendChild(child_35871);


var G__35872 = seq__35445_35865;
var G__35873 = chunk__35447_35866;
var G__35874 = count__35448_35867;
var G__35875 = (i__35449_35868 + (1));
seq__35445_35865 = G__35872;
chunk__35447_35866 = G__35873;
count__35448_35867 = G__35874;
i__35449_35868 = G__35875;
continue;
} else {
var G__35876 = seq__35445_35865;
var G__35877 = chunk__35447_35866;
var G__35878 = count__35448_35867;
var G__35879 = (i__35449_35868 + (1));
seq__35445_35865 = G__35876;
chunk__35447_35866 = G__35877;
count__35448_35867 = G__35878;
i__35449_35868 = G__35879;
continue;
}
} else {
var temp__5753__auto___35880__$1 = cljs.core.seq(seq__35445_35865);
if(temp__5753__auto___35880__$1){
var seq__35445_35881__$1 = temp__5753__auto___35880__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35445_35881__$1)){
var c__4679__auto___35882 = cljs.core.chunk_first(seq__35445_35881__$1);
var G__35883 = cljs.core.chunk_rest(seq__35445_35881__$1);
var G__35884 = c__4679__auto___35882;
var G__35885 = cljs.core.count(c__4679__auto___35882);
var G__35886 = (0);
seq__35445_35865 = G__35883;
chunk__35447_35866 = G__35884;
count__35448_35867 = G__35885;
i__35449_35868 = G__35886;
continue;
} else {
var child_35887 = cljs.core.first(seq__35445_35881__$1);
if(cljs.core.truth_(child_35887)){
node.appendChild(child_35887);


var G__35888 = cljs.core.next(seq__35445_35881__$1);
var G__35889 = null;
var G__35890 = (0);
var G__35891 = (0);
seq__35445_35865 = G__35888;
chunk__35447_35866 = G__35889;
count__35448_35867 = G__35890;
i__35449_35868 = G__35891;
continue;
} else {
var G__35893 = cljs.core.next(seq__35445_35881__$1);
var G__35894 = null;
var G__35895 = (0);
var G__35896 = (0);
seq__35445_35865 = G__35893;
chunk__35447_35866 = G__35894;
count__35448_35867 = G__35895;
i__35449_35868 = G__35896;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35864);
}
}


var G__35897 = cljs.core.next(seq__35420_35856__$1);
var G__35898 = null;
var G__35899 = (0);
var G__35900 = (0);
seq__35420_35811 = G__35897;
chunk__35422_35812 = G__35898;
count__35423_35813 = G__35899;
i__35424_35814 = G__35900;
continue;
} else {
var G__35901 = cljs.core.next(seq__35420_35856__$1);
var G__35902 = null;
var G__35903 = (0);
var G__35904 = (0);
seq__35420_35811 = G__35901;
chunk__35422_35812 = G__35902;
count__35423_35813 = G__35903;
i__35424_35814 = G__35904;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35906 = arguments.length;
var i__4865__auto___35907 = (0);
while(true){
if((i__4865__auto___35907 < len__4864__auto___35906)){
args__4870__auto__.push((arguments[i__4865__auto___35907]));

var G__35908 = (i__4865__auto___35907 + (1));
i__4865__auto___35907 = G__35908;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35453){
var G__35454 = cljs.core.first(seq35453);
var seq35453__$1 = cljs.core.next(seq35453);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35454,seq35453__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35456 = arguments.length;
switch (G__35456) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__32391__auto___35914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_35461){
var state_val_35462 = (state_35461[(1)]);
if((state_val_35462 === (1))){
var state_35461__$1 = state_35461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35461__$1,(2),once_or_cleanup);
} else {
if((state_val_35462 === (2))){
var inst_35458 = (state_35461[(2)]);
var inst_35459 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35461__$1 = (function (){var statearr_35463 = state_35461;
(statearr_35463[(7)] = inst_35458);

return statearr_35463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35461__$1,inst_35459);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32210__auto__ = null;
var shadow$dom$state_machine__32210__auto____0 = (function (){
var statearr_35464 = [null,null,null,null,null,null,null,null];
(statearr_35464[(0)] = shadow$dom$state_machine__32210__auto__);

(statearr_35464[(1)] = (1));

return statearr_35464;
});
var shadow$dom$state_machine__32210__auto____1 = (function (state_35461){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_35461);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e35465){var ex__32213__auto__ = e35465;
var statearr_35466_35918 = state_35461;
(statearr_35466_35918[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_35461[(4)]))){
var statearr_35467_35919 = state_35461;
(statearr_35467_35919[(1)] = cljs.core.first((state_35461[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35920 = state_35461;
state_35461 = G__35920;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
shadow$dom$state_machine__32210__auto__ = function(state_35461){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32210__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32210__auto____1.call(this,state_35461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32210__auto____0;
shadow$dom$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32210__auto____1;
return shadow$dom$state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_35477 = f__32392__auto__();
(statearr_35477[(6)] = c__32391__auto___35914);

return statearr_35477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
