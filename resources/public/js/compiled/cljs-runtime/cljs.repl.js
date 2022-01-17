goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36169){
var map__36170 = p__36169;
var map__36170__$1 = cljs.core.__destructure_map(map__36170);
var m = map__36170__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36170__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36170__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36171_36707 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36172_36708 = null;
var count__36173_36709 = (0);
var i__36174_36710 = (0);
while(true){
if((i__36174_36710 < count__36173_36709)){
var f_36711 = chunk__36172_36708.cljs$core$IIndexed$_nth$arity$2(null,i__36174_36710);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36711], 0));


var G__36712 = seq__36171_36707;
var G__36713 = chunk__36172_36708;
var G__36714 = count__36173_36709;
var G__36715 = (i__36174_36710 + (1));
seq__36171_36707 = G__36712;
chunk__36172_36708 = G__36713;
count__36173_36709 = G__36714;
i__36174_36710 = G__36715;
continue;
} else {
var temp__5753__auto___36716 = cljs.core.seq(seq__36171_36707);
if(temp__5753__auto___36716){
var seq__36171_36717__$1 = temp__5753__auto___36716;
if(cljs.core.chunked_seq_QMARK_(seq__36171_36717__$1)){
var c__4679__auto___36718 = cljs.core.chunk_first(seq__36171_36717__$1);
var G__36719 = cljs.core.chunk_rest(seq__36171_36717__$1);
var G__36720 = c__4679__auto___36718;
var G__36721 = cljs.core.count(c__4679__auto___36718);
var G__36722 = (0);
seq__36171_36707 = G__36719;
chunk__36172_36708 = G__36720;
count__36173_36709 = G__36721;
i__36174_36710 = G__36722;
continue;
} else {
var f_36723 = cljs.core.first(seq__36171_36717__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36723], 0));


var G__36724 = cljs.core.next(seq__36171_36717__$1);
var G__36725 = null;
var G__36726 = (0);
var G__36727 = (0);
seq__36171_36707 = G__36724;
chunk__36172_36708 = G__36725;
count__36173_36709 = G__36726;
i__36174_36710 = G__36727;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36728 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36728], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36728)))?cljs.core.second(arglists_36728):arglists_36728)], 0));
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
var seq__36181_36777 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36182_36778 = null;
var count__36183_36779 = (0);
var i__36184_36780 = (0);
while(true){
if((i__36184_36780 < count__36183_36779)){
var vec__36196_36781 = chunk__36182_36778.cljs$core$IIndexed$_nth$arity$2(null,i__36184_36780);
var name_36782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36196_36781,(0),null);
var map__36199_36783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36196_36781,(1),null);
var map__36199_36784__$1 = cljs.core.__destructure_map(map__36199_36783);
var doc_36785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36199_36784__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36199_36784__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36782], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36786], 0));

if(cljs.core.truth_(doc_36785)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36785], 0));
} else {
}


var G__36787 = seq__36181_36777;
var G__36788 = chunk__36182_36778;
var G__36789 = count__36183_36779;
var G__36790 = (i__36184_36780 + (1));
seq__36181_36777 = G__36787;
chunk__36182_36778 = G__36788;
count__36183_36779 = G__36789;
i__36184_36780 = G__36790;
continue;
} else {
var temp__5753__auto___36791 = cljs.core.seq(seq__36181_36777);
if(temp__5753__auto___36791){
var seq__36181_36792__$1 = temp__5753__auto___36791;
if(cljs.core.chunked_seq_QMARK_(seq__36181_36792__$1)){
var c__4679__auto___36793 = cljs.core.chunk_first(seq__36181_36792__$1);
var G__36794 = cljs.core.chunk_rest(seq__36181_36792__$1);
var G__36795 = c__4679__auto___36793;
var G__36796 = cljs.core.count(c__4679__auto___36793);
var G__36797 = (0);
seq__36181_36777 = G__36794;
chunk__36182_36778 = G__36795;
count__36183_36779 = G__36796;
i__36184_36780 = G__36797;
continue;
} else {
var vec__36208_36798 = cljs.core.first(seq__36181_36792__$1);
var name_36799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36208_36798,(0),null);
var map__36211_36800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36208_36798,(1),null);
var map__36211_36801__$1 = cljs.core.__destructure_map(map__36211_36800);
var doc_36802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36211_36801__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36211_36801__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36799], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36803], 0));

if(cljs.core.truth_(doc_36802)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36802], 0));
} else {
}


var G__36805 = cljs.core.next(seq__36181_36792__$1);
var G__36806 = null;
var G__36807 = (0);
var G__36808 = (0);
seq__36181_36777 = G__36805;
chunk__36182_36778 = G__36806;
count__36183_36779 = G__36807;
i__36184_36780 = G__36808;
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

var seq__36217 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36218 = null;
var count__36219 = (0);
var i__36220 = (0);
while(true){
if((i__36220 < count__36219)){
var role = chunk__36218.cljs$core$IIndexed$_nth$arity$2(null,i__36220);
var temp__5753__auto___36811__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36811__$1)){
var spec_36812 = temp__5753__auto___36811__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36812)], 0));
} else {
}


var G__36813 = seq__36217;
var G__36814 = chunk__36218;
var G__36815 = count__36219;
var G__36816 = (i__36220 + (1));
seq__36217 = G__36813;
chunk__36218 = G__36814;
count__36219 = G__36815;
i__36220 = G__36816;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__36217);
if(temp__5753__auto____$1){
var seq__36217__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36217__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36217__$1);
var G__36817 = cljs.core.chunk_rest(seq__36217__$1);
var G__36818 = c__4679__auto__;
var G__36819 = cljs.core.count(c__4679__auto__);
var G__36820 = (0);
seq__36217 = G__36817;
chunk__36218 = G__36818;
count__36219 = G__36819;
i__36220 = G__36820;
continue;
} else {
var role = cljs.core.first(seq__36217__$1);
var temp__5753__auto___36821__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36821__$2)){
var spec_36822 = temp__5753__auto___36821__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36822)], 0));
} else {
}


var G__36825 = cljs.core.next(seq__36217__$1);
var G__36826 = null;
var G__36827 = (0);
var G__36828 = (0);
seq__36217 = G__36825;
chunk__36218 = G__36826;
count__36219 = G__36827;
i__36220 = G__36828;
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
var G__36835 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36836 = cljs.core.ex_cause(t);
via = G__36835;
t = G__36836;
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
var map__36312 = datafied_throwable;
var map__36312__$1 = cljs.core.__destructure_map(map__36312);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36312__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36312__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36312__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36313 = cljs.core.last(via);
var map__36313__$1 = cljs.core.__destructure_map(map__36313);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36313__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36313__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36313__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36314 = data;
var map__36314__$1 = cljs.core.__destructure_map(map__36314);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36314__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36314__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36314__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36316 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36316__$1 = cljs.core.__destructure_map(map__36316);
var top_data = map__36316__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36316__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36319 = phase;
var G__36319__$1 = (((G__36319 instanceof cljs.core.Keyword))?G__36319.fqn:null);
switch (G__36319__$1) {
case "read-source":
var map__36320 = data;
var map__36320__$1 = cljs.core.__destructure_map(map__36320);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36320__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36320__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36322 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36322__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36322,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36322);
var G__36322__$2 = (cljs.core.truth_((function (){var fexpr__36323 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36323.cljs$core$IFn$_invoke$arity$1 ? fexpr__36323.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36323.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36322__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36322__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36322__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36322__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36325 = top_data;
var G__36325__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36325,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36325);
var G__36325__$2 = (cljs.core.truth_((function (){var fexpr__36326 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36326.cljs$core$IFn$_invoke$arity$1 ? fexpr__36326.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36326.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36325__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36325__$1);
var G__36325__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36325__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36325__$2);
var G__36325__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36325__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36325__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36325__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36325__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36390 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36390,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36390,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36390,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36390,(3),null);
var G__36393 = top_data;
var G__36393__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36393,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36393);
var G__36393__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36393__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36393__$1);
var G__36393__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36393__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36393__$2);
var G__36393__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36393__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36393__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36393__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36393__$4;
}

break;
case "execution":
var vec__36401 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36401,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36401,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36401,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36401,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36296_SHARP_){
var or__4253__auto__ = (p1__36296_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__36409 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36409.cljs$core$IFn$_invoke$arity$1 ? fexpr__36409.cljs$core$IFn$_invoke$arity$1(p1__36296_SHARP_) : fexpr__36409.call(null,p1__36296_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__36411 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36411__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36411,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36411);
var G__36411__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36411__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36411__$1);
var G__36411__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36411__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36411__$2);
var G__36411__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36411__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36411__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36411__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36411__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36319__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36425){
var map__36426 = p__36425;
var map__36426__$1 = cljs.core.__destructure_map(map__36426);
var triage_data = map__36426__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36426__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36426__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36426__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36426__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36426__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36426__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36426__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36426__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36428 = phase;
var G__36428__$1 = (((G__36428 instanceof cljs.core.Keyword))?G__36428.fqn:null);
switch (G__36428__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36429 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36430 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36431 = loc;
var G__36432 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36472_36976 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36473_36977 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36474_36978 = true;
var _STAR_print_fn_STAR__temp_val__36475_36979 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36474_36978);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36475_36979);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36422_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36422_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36473_36977);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36472_36976);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36429,G__36430,G__36431,G__36432) : format.call(null,G__36429,G__36430,G__36431,G__36432));

break;
case "macroexpansion":
var G__36479 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36480 = cause_type;
var G__36481 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36482 = loc;
var G__36483 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36479,G__36480,G__36481,G__36482,G__36483) : format.call(null,G__36479,G__36480,G__36481,G__36482,G__36483));

break;
case "compile-syntax-check":
var G__36484 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36485 = cause_type;
var G__36486 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36487 = loc;
var G__36488 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36484,G__36485,G__36486,G__36487,G__36488) : format.call(null,G__36484,G__36485,G__36486,G__36487,G__36488));

break;
case "compilation":
var G__36489 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36490 = cause_type;
var G__36491 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36492 = loc;
var G__36493 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36489,G__36490,G__36491,G__36492,G__36493) : format.call(null,G__36489,G__36490,G__36491,G__36492,G__36493));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36494 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36495 = symbol;
var G__36496 = loc;
var G__36497 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36502_36984 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36503_36985 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36504_36986 = true;
var _STAR_print_fn_STAR__temp_val__36505_36987 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36504_36986);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36505_36987);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36423_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36423_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36503_36985);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36502_36984);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36494,G__36495,G__36496,G__36497) : format.call(null,G__36494,G__36495,G__36496,G__36497));
} else {
var G__36507 = "Execution error%s at %s(%s).\n%s\n";
var G__36508 = cause_type;
var G__36509 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36510 = loc;
var G__36511 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36507,G__36508,G__36509,G__36510,G__36511) : format.call(null,G__36507,G__36508,G__36509,G__36510,G__36511));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36428__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
