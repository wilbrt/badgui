goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29582){
var map__29583 = p__29582;
var map__29583__$1 = cljs.core.__destructure_map(map__29583);
var m = map__29583__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29583__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29583__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29607_29999 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29608_30000 = null;
var count__29609_30001 = (0);
var i__29610_30002 = (0);
while(true){
if((i__29610_30002 < count__29609_30001)){
var f_30003 = chunk__29608_30000.cljs$core$IIndexed$_nth$arity$2(null,i__29610_30002);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_30003], 0));


var G__30004 = seq__29607_29999;
var G__30005 = chunk__29608_30000;
var G__30006 = count__29609_30001;
var G__30007 = (i__29610_30002 + (1));
seq__29607_29999 = G__30004;
chunk__29608_30000 = G__30005;
count__29609_30001 = G__30006;
i__29610_30002 = G__30007;
continue;
} else {
var temp__5753__auto___30008 = cljs.core.seq(seq__29607_29999);
if(temp__5753__auto___30008){
var seq__29607_30009__$1 = temp__5753__auto___30008;
if(cljs.core.chunked_seq_QMARK_(seq__29607_30009__$1)){
var c__4679__auto___30010 = cljs.core.chunk_first(seq__29607_30009__$1);
var G__30011 = cljs.core.chunk_rest(seq__29607_30009__$1);
var G__30012 = c__4679__auto___30010;
var G__30013 = cljs.core.count(c__4679__auto___30010);
var G__30014 = (0);
seq__29607_29999 = G__30011;
chunk__29608_30000 = G__30012;
count__29609_30001 = G__30013;
i__29610_30002 = G__30014;
continue;
} else {
var f_30015 = cljs.core.first(seq__29607_30009__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_30015], 0));


var G__30016 = cljs.core.next(seq__29607_30009__$1);
var G__30017 = null;
var G__30018 = (0);
var G__30019 = (0);
seq__29607_29999 = G__30016;
chunk__29608_30000 = G__30017;
count__29609_30001 = G__30018;
i__29610_30002 = G__30019;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30020 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_30020], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_30020)))?cljs.core.second(arglists_30020):arglists_30020)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29622_30026 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29623_30027 = null;
var count__29624_30028 = (0);
var i__29625_30029 = (0);
while(true){
if((i__29625_30029 < count__29624_30028)){
var vec__29647_30030 = chunk__29623_30027.cljs$core$IIndexed$_nth$arity$2(null,i__29625_30029);
var name_30031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29647_30030,(0),null);
var map__29650_30032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29647_30030,(1),null);
var map__29650_30033__$1 = cljs.core.__destructure_map(map__29650_30032);
var doc_30034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29650_30033__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29650_30033__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_30031], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_30035], 0));

if(cljs.core.truth_(doc_30034)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_30034], 0));
} else {
}


var G__30036 = seq__29622_30026;
var G__30037 = chunk__29623_30027;
var G__30038 = count__29624_30028;
var G__30039 = (i__29625_30029 + (1));
seq__29622_30026 = G__30036;
chunk__29623_30027 = G__30037;
count__29624_30028 = G__30038;
i__29625_30029 = G__30039;
continue;
} else {
var temp__5753__auto___30040 = cljs.core.seq(seq__29622_30026);
if(temp__5753__auto___30040){
var seq__29622_30041__$1 = temp__5753__auto___30040;
if(cljs.core.chunked_seq_QMARK_(seq__29622_30041__$1)){
var c__4679__auto___30042 = cljs.core.chunk_first(seq__29622_30041__$1);
var G__30043 = cljs.core.chunk_rest(seq__29622_30041__$1);
var G__30044 = c__4679__auto___30042;
var G__30045 = cljs.core.count(c__4679__auto___30042);
var G__30046 = (0);
seq__29622_30026 = G__30043;
chunk__29623_30027 = G__30044;
count__29624_30028 = G__30045;
i__29625_30029 = G__30046;
continue;
} else {
var vec__29741_30048 = cljs.core.first(seq__29622_30041__$1);
var name_30049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29741_30048,(0),null);
var map__29744_30050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29741_30048,(1),null);
var map__29744_30051__$1 = cljs.core.__destructure_map(map__29744_30050);
var doc_30052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29744_30051__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29744_30051__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_30049], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_30053], 0));

if(cljs.core.truth_(doc_30052)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_30052], 0));
} else {
}


var G__30054 = cljs.core.next(seq__29622_30041__$1);
var G__30055 = null;
var G__30056 = (0);
var G__30057 = (0);
seq__29622_30026 = G__30054;
chunk__29623_30027 = G__30055;
count__29624_30028 = G__30056;
i__29625_30029 = G__30057;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__29766 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29767 = null;
var count__29768 = (0);
var i__29769 = (0);
while(true){
if((i__29769 < count__29768)){
var role = chunk__29767.cljs$core$IIndexed$_nth$arity$2(null,i__29769);
var temp__5753__auto___30058__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___30058__$1)){
var spec_30059 = temp__5753__auto___30058__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_30059)], 0));
} else {
}


var G__30060 = seq__29766;
var G__30061 = chunk__29767;
var G__30062 = count__29768;
var G__30063 = (i__29769 + (1));
seq__29766 = G__30060;
chunk__29767 = G__30061;
count__29768 = G__30062;
i__29769 = G__30063;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__29766);
if(temp__5753__auto____$1){
var seq__29766__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__29766__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__29766__$1);
var G__30064 = cljs.core.chunk_rest(seq__29766__$1);
var G__30065 = c__4679__auto__;
var G__30066 = cljs.core.count(c__4679__auto__);
var G__30067 = (0);
seq__29766 = G__30064;
chunk__29767 = G__30065;
count__29768 = G__30066;
i__29769 = G__30067;
continue;
} else {
var role = cljs.core.first(seq__29766__$1);
var temp__5753__auto___30068__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___30068__$2)){
var spec_30071 = temp__5753__auto___30068__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_30071)], 0));
} else {
}


var G__30072 = cljs.core.next(seq__29766__$1);
var G__30073 = null;
var G__30074 = (0);
var G__30075 = (0);
seq__29766 = G__30072;
chunk__29767 = G__30073;
count__29768 = G__30074;
i__29769 = G__30075;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__30111 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__30112 = cljs.core.ex_cause(t);
via = G__30111;
t = G__30112;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__29841 = datafied_throwable;
var map__29841__$1 = cljs.core.__destructure_map(map__29841);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29841__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29841__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29841__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29842 = cljs.core.last(via);
var map__29842__$1 = cljs.core.__destructure_map(map__29842);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29842__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29842__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29842__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29843 = data;
var map__29843__$1 = cljs.core.__destructure_map(map__29843);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29843__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29843__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29843__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29844 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__29844__$1 = cljs.core.__destructure_map(map__29844);
var top_data = map__29844__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29844__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__29846 = phase;
var G__29846__$1 = (((G__29846 instanceof cljs.core.Keyword))?G__29846.fqn:null);
switch (G__29846__$1) {
case "read-source":
var map__29847 = data;
var map__29847__$1 = cljs.core.__destructure_map(map__29847);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29847__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29847__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29849 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__29849__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29849,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29849);
var G__29849__$2 = (cljs.core.truth_((function (){var fexpr__29852 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29852.cljs$core$IFn$_invoke$arity$1 ? fexpr__29852.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29852.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29849__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29849__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29849__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29849__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29854 = top_data;
var G__29854__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29854,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29854);
var G__29854__$2 = (cljs.core.truth_((function (){var fexpr__29863 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29863.cljs$core$IFn$_invoke$arity$1 ? fexpr__29863.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29863.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29854__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29854__$1);
var G__29854__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29854__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29854__$2);
var G__29854__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29854__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29854__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29854__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29854__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29876 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29876,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29876,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29876,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29876,(3),null);
var G__29879 = top_data;
var G__29879__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29879,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29879);
var G__29879__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29879__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29879__$1);
var G__29879__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29879__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29879__$2);
var G__29879__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29879__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29879__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29879__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29879__$4;
}

break;
case "execution":
var vec__29881 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29881,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29881,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29881,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29881,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29840_SHARP_){
var or__4253__auto__ = (p1__29840_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__29884 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29884.cljs$core$IFn$_invoke$arity$1 ? fexpr__29884.cljs$core$IFn$_invoke$arity$1(p1__29840_SHARP_) : fexpr__29884.call(null,p1__29840_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__29885 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29885__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29885,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29885);
var G__29885__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29885__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29885__$1);
var G__29885__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29885__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29885__$2);
var G__29885__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29885__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29885__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29885__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29885__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29846__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29897){
var map__29899 = p__29897;
var map__29899__$1 = cljs.core.__destructure_map(map__29899);
var triage_data = map__29899__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29899__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29899__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29899__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29899__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29899__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29899__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29899__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29899__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__29904 = phase;
var G__29904__$1 = (((G__29904 instanceof cljs.core.Keyword))?G__29904.fqn:null);
switch (G__29904__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__29905 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__29906 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29907 = loc;
var G__29908 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29909_30139 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29910_30140 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29911_30141 = true;
var _STAR_print_fn_STAR__temp_val__29912_30142 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29911_30141);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29912_30142);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29887_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29887_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29910_30140);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29909_30139);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29905,G__29906,G__29907,G__29908) : format.call(null,G__29905,G__29906,G__29907,G__29908));

break;
case "macroexpansion":
var G__29913 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__29914 = cause_type;
var G__29915 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29916 = loc;
var G__29917 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29913,G__29914,G__29915,G__29916,G__29917) : format.call(null,G__29913,G__29914,G__29915,G__29916,G__29917));

break;
case "compile-syntax-check":
var G__29918 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__29919 = cause_type;
var G__29920 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29921 = loc;
var G__29922 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29918,G__29919,G__29920,G__29921,G__29922) : format.call(null,G__29918,G__29919,G__29920,G__29921,G__29922));

break;
case "compilation":
var G__29926 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__29927 = cause_type;
var G__29928 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29929 = loc;
var G__29930 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29926,G__29927,G__29928,G__29929,G__29930) : format.call(null,G__29926,G__29927,G__29928,G__29929,G__29930));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__29934 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__29935 = symbol;
var G__29936 = loc;
var G__29937 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29940_30195 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29941_30196 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29942_30197 = true;
var _STAR_print_fn_STAR__temp_val__29943_30198 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29942_30197);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29943_30198);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29896_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29896_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29941_30196);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29940_30195);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29934,G__29935,G__29936,G__29937) : format.call(null,G__29934,G__29935,G__29936,G__29937));
} else {
var G__29957 = "Execution error%s at %s(%s).\n%s\n";
var G__29958 = cause_type;
var G__29959 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29960 = loc;
var G__29961 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29957,G__29958,G__29959,G__29960,G__29961) : format.call(null,G__29957,G__29958,G__29959,G__29960,G__29961));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29904__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
