goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__32002){
var map__32003 = p__32002;
var map__32003__$1 = cljs.core.__destructure_map(map__32003);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32003__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32003__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32003__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32003__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__32006_32036 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__32007_32037 = null;
var count__32008_32038 = (0);
var i__32009_32039 = (0);
while(true){
if((i__32009_32039 < count__32008_32038)){
var vec__32021_32040 = chunk__32007_32037.cljs$core$IIndexed$_nth$arity$2(null,i__32009_32039);
var k_32041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32021_32040,(0),null);
var cb_32042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32021_32040,(1),null);
try{var G__32025_32043 = cljs.core.deref(re_frame.trace.traces);
(cb_32042.cljs$core$IFn$_invoke$arity$1 ? cb_32042.cljs$core$IFn$_invoke$arity$1(G__32025_32043) : cb_32042.call(null,G__32025_32043));
}catch (e32024){var e_32044 = e32024;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_32041,"while storing",cljs.core.deref(re_frame.trace.traces),e_32044], 0));
}

var G__32045 = seq__32006_32036;
var G__32046 = chunk__32007_32037;
var G__32047 = count__32008_32038;
var G__32048 = (i__32009_32039 + (1));
seq__32006_32036 = G__32045;
chunk__32007_32037 = G__32046;
count__32008_32038 = G__32047;
i__32009_32039 = G__32048;
continue;
} else {
var temp__5753__auto___32049 = cljs.core.seq(seq__32006_32036);
if(temp__5753__auto___32049){
var seq__32006_32050__$1 = temp__5753__auto___32049;
if(cljs.core.chunked_seq_QMARK_(seq__32006_32050__$1)){
var c__4679__auto___32051 = cljs.core.chunk_first(seq__32006_32050__$1);
var G__32052 = cljs.core.chunk_rest(seq__32006_32050__$1);
var G__32053 = c__4679__auto___32051;
var G__32054 = cljs.core.count(c__4679__auto___32051);
var G__32055 = (0);
seq__32006_32036 = G__32052;
chunk__32007_32037 = G__32053;
count__32008_32038 = G__32054;
i__32009_32039 = G__32055;
continue;
} else {
var vec__32026_32056 = cljs.core.first(seq__32006_32050__$1);
var k_32057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32026_32056,(0),null);
var cb_32058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32026_32056,(1),null);
try{var G__32030_32059 = cljs.core.deref(re_frame.trace.traces);
(cb_32058.cljs$core$IFn$_invoke$arity$1 ? cb_32058.cljs$core$IFn$_invoke$arity$1(G__32030_32059) : cb_32058.call(null,G__32030_32059));
}catch (e32029){var e_32060 = e32029;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_32057,"while storing",cljs.core.deref(re_frame.trace.traces),e_32060], 0));
}

var G__32061 = cljs.core.next(seq__32006_32050__$1);
var G__32062 = null;
var G__32063 = (0);
var G__32064 = (0);
seq__32006_32036 = G__32061;
chunk__32007_32037 = G__32062;
count__32008_32038 = G__32063;
i__32009_32039 = G__32064;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
