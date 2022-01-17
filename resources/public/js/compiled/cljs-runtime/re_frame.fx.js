goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__39026 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39027 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39027);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39202 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39202)){
var new_db_39203 = temp__5753__auto___39202;
var fexpr__39031_39204 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__39031_39204.cljs$core$IFn$_invoke$arity$1 ? fexpr__39031_39204.cljs$core$IFn$_invoke$arity$1(new_db_39203) : fexpr__39031_39204.call(null,new_db_39203));
} else {
}

var seq__39032 = cljs.core.seq(effects_without_db);
var chunk__39033 = null;
var count__39034 = (0);
var i__39035 = (0);
while(true){
if((i__39035 < count__39034)){
var vec__39043 = chunk__39033.cljs$core$IIndexed$_nth$arity$2(null,i__39035);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39043,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39043,(1),null);
var temp__5751__auto___39206 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39206)){
var effect_fn_39207 = temp__5751__auto___39206;
(effect_fn_39207.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39207.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39207.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39208 = seq__39032;
var G__39209 = chunk__39033;
var G__39210 = count__39034;
var G__39211 = (i__39035 + (1));
seq__39032 = G__39208;
chunk__39033 = G__39209;
count__39034 = G__39210;
i__39035 = G__39211;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39032);
if(temp__5753__auto__){
var seq__39032__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39032__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39032__$1);
var G__39212 = cljs.core.chunk_rest(seq__39032__$1);
var G__39213 = c__4679__auto__;
var G__39214 = cljs.core.count(c__4679__auto__);
var G__39215 = (0);
seq__39032 = G__39212;
chunk__39033 = G__39213;
count__39034 = G__39214;
i__39035 = G__39215;
continue;
} else {
var vec__39046 = cljs.core.first(seq__39032__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39046,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39046,(1),null);
var temp__5751__auto___39216 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39216)){
var effect_fn_39217 = temp__5751__auto___39216;
(effect_fn_39217.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39217.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39217.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39218 = cljs.core.next(seq__39032__$1);
var G__39219 = null;
var G__39220 = (0);
var G__39221 = (0);
seq__39032 = G__39218;
chunk__39033 = G__39219;
count__39034 = G__39220;
i__39035 = G__39221;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38614__auto___39222 = re_frame.interop.now();
var duration__38615__auto___39223 = (end__38614__auto___39222 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38615__auto___39223,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38614__auto___39222);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39026);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39237 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39237)){
var new_db_39238 = temp__5753__auto___39237;
var fexpr__39084_39239 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__39084_39239.cljs$core$IFn$_invoke$arity$1 ? fexpr__39084_39239.cljs$core$IFn$_invoke$arity$1(new_db_39238) : fexpr__39084_39239.call(null,new_db_39238));
} else {
}

var seq__39086 = cljs.core.seq(effects_without_db);
var chunk__39087 = null;
var count__39088 = (0);
var i__39089 = (0);
while(true){
if((i__39089 < count__39088)){
var vec__39096 = chunk__39087.cljs$core$IIndexed$_nth$arity$2(null,i__39089);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39096,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39096,(1),null);
var temp__5751__auto___39248 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39248)){
var effect_fn_39249 = temp__5751__auto___39248;
(effect_fn_39249.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39249.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39249.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39250 = seq__39086;
var G__39251 = chunk__39087;
var G__39252 = count__39088;
var G__39253 = (i__39089 + (1));
seq__39086 = G__39250;
chunk__39087 = G__39251;
count__39088 = G__39252;
i__39089 = G__39253;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39086);
if(temp__5753__auto__){
var seq__39086__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39086__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39086__$1);
var G__39264 = cljs.core.chunk_rest(seq__39086__$1);
var G__39265 = c__4679__auto__;
var G__39266 = cljs.core.count(c__4679__auto__);
var G__39267 = (0);
seq__39086 = G__39264;
chunk__39087 = G__39265;
count__39088 = G__39266;
i__39089 = G__39267;
continue;
} else {
var vec__39103 = cljs.core.first(seq__39086__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39103,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39103,(1),null);
var temp__5751__auto___39268 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39268)){
var effect_fn_39269 = temp__5751__auto___39268;
(effect_fn_39269.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39269.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39269.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39270 = cljs.core.next(seq__39086__$1);
var G__39271 = null;
var G__39272 = (0);
var G__39273 = (0);
seq__39086 = G__39270;
chunk__39087 = G__39271;
count__39088 = G__39272;
i__39089 = G__39273;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__39106){
var map__39108 = p__39106;
var map__39108__$1 = cljs.core.__destructure_map(map__39108);
var effect = map__39108__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39108__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39108__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__39112 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39113 = null;
var count__39114 = (0);
var i__39115 = (0);
while(true){
if((i__39115 < count__39114)){
var effect = chunk__39113.cljs$core$IIndexed$_nth$arity$2(null,i__39115);
re_frame.fx.dispatch_later(effect);


var G__39274 = seq__39112;
var G__39275 = chunk__39113;
var G__39276 = count__39114;
var G__39277 = (i__39115 + (1));
seq__39112 = G__39274;
chunk__39113 = G__39275;
count__39114 = G__39276;
i__39115 = G__39277;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39112);
if(temp__5753__auto__){
var seq__39112__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39112__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39112__$1);
var G__39279 = cljs.core.chunk_rest(seq__39112__$1);
var G__39280 = c__4679__auto__;
var G__39281 = cljs.core.count(c__4679__auto__);
var G__39282 = (0);
seq__39112 = G__39279;
chunk__39113 = G__39280;
count__39114 = G__39281;
i__39115 = G__39282;
continue;
} else {
var effect = cljs.core.first(seq__39112__$1);
re_frame.fx.dispatch_later(effect);


var G__39284 = cljs.core.next(seq__39112__$1);
var G__39285 = null;
var G__39286 = (0);
var G__39287 = (0);
seq__39112 = G__39284;
chunk__39113 = G__39285;
count__39114 = G__39286;
i__39115 = G__39287;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__39143 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__39144 = null;
var count__39145 = (0);
var i__39146 = (0);
while(true){
if((i__39146 < count__39145)){
var vec__39153 = chunk__39144.cljs$core$IIndexed$_nth$arity$2(null,i__39146);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39153,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39153,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39292 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39292)){
var effect_fn_39294 = temp__5751__auto___39292;
(effect_fn_39294.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39294.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39294.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39295 = seq__39143;
var G__39296 = chunk__39144;
var G__39297 = count__39145;
var G__39298 = (i__39146 + (1));
seq__39143 = G__39295;
chunk__39144 = G__39296;
count__39145 = G__39297;
i__39146 = G__39298;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39143);
if(temp__5753__auto__){
var seq__39143__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39143__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39143__$1);
var G__39299 = cljs.core.chunk_rest(seq__39143__$1);
var G__39300 = c__4679__auto__;
var G__39301 = cljs.core.count(c__4679__auto__);
var G__39302 = (0);
seq__39143 = G__39299;
chunk__39144 = G__39300;
count__39145 = G__39301;
i__39146 = G__39302;
continue;
} else {
var vec__39156 = cljs.core.first(seq__39143__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39156,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39156,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39311 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39311)){
var effect_fn_39312 = temp__5751__auto___39311;
(effect_fn_39312.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39312.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39312.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39314 = cljs.core.next(seq__39143__$1);
var G__39315 = null;
var G__39316 = (0);
var G__39317 = (0);
seq__39143 = G__39314;
chunk__39144 = G__39315;
count__39145 = G__39316;
i__39146 = G__39317;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__39163 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39164 = null;
var count__39165 = (0);
var i__39166 = (0);
while(true){
if((i__39166 < count__39165)){
var event = chunk__39164.cljs$core$IIndexed$_nth$arity$2(null,i__39166);
re_frame.router.dispatch(event);


var G__39322 = seq__39163;
var G__39323 = chunk__39164;
var G__39324 = count__39165;
var G__39325 = (i__39166 + (1));
seq__39163 = G__39322;
chunk__39164 = G__39323;
count__39165 = G__39324;
i__39166 = G__39325;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39163);
if(temp__5753__auto__){
var seq__39163__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39163__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39163__$1);
var G__39326 = cljs.core.chunk_rest(seq__39163__$1);
var G__39327 = c__4679__auto__;
var G__39328 = cljs.core.count(c__4679__auto__);
var G__39329 = (0);
seq__39163 = G__39326;
chunk__39164 = G__39327;
count__39165 = G__39328;
i__39166 = G__39329;
continue;
} else {
var event = cljs.core.first(seq__39163__$1);
re_frame.router.dispatch(event);


var G__39330 = cljs.core.next(seq__39163__$1);
var G__39331 = null;
var G__39332 = (0);
var G__39333 = (0);
seq__39163 = G__39330;
chunk__39164 = G__39331;
count__39165 = G__39332;
i__39166 = G__39333;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__39174 = cljs.core.seq(value);
var chunk__39175 = null;
var count__39176 = (0);
var i__39177 = (0);
while(true){
if((i__39177 < count__39176)){
var event = chunk__39175.cljs$core$IIndexed$_nth$arity$2(null,i__39177);
clear_event(event);


var G__39335 = seq__39174;
var G__39336 = chunk__39175;
var G__39337 = count__39176;
var G__39338 = (i__39177 + (1));
seq__39174 = G__39335;
chunk__39175 = G__39336;
count__39176 = G__39337;
i__39177 = G__39338;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39174);
if(temp__5753__auto__){
var seq__39174__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39174__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39174__$1);
var G__39340 = cljs.core.chunk_rest(seq__39174__$1);
var G__39341 = c__4679__auto__;
var G__39342 = cljs.core.count(c__4679__auto__);
var G__39343 = (0);
seq__39174 = G__39340;
chunk__39175 = G__39341;
count__39176 = G__39342;
i__39177 = G__39343;
continue;
} else {
var event = cljs.core.first(seq__39174__$1);
clear_event(event);


var G__39344 = cljs.core.next(seq__39174__$1);
var G__39345 = null;
var G__39346 = (0);
var G__39347 = (0);
seq__39174 = G__39344;
chunk__39175 = G__39345;
count__39176 = G__39346;
i__39177 = G__39347;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
