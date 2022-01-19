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
var _STAR_current_trace_STAR__orig_val__32297 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32298 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32298);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32437 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32437)){
var new_db_32438 = temp__5753__auto___32437;
var fexpr__32316_32439 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32316_32439.cljs$core$IFn$_invoke$arity$1 ? fexpr__32316_32439.cljs$core$IFn$_invoke$arity$1(new_db_32438) : fexpr__32316_32439.call(null,new_db_32438));
} else {
}

var seq__32317 = cljs.core.seq(effects_without_db);
var chunk__32318 = null;
var count__32319 = (0);
var i__32320 = (0);
while(true){
if((i__32320 < count__32319)){
var vec__32327 = chunk__32318.cljs$core$IIndexed$_nth$arity$2(null,i__32320);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32327,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32327,(1),null);
var temp__5751__auto___32441 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32441)){
var effect_fn_32442 = temp__5751__auto___32441;
(effect_fn_32442.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32442.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32442.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32443 = seq__32317;
var G__32444 = chunk__32318;
var G__32445 = count__32319;
var G__32446 = (i__32320 + (1));
seq__32317 = G__32443;
chunk__32318 = G__32444;
count__32319 = G__32445;
i__32320 = G__32446;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32317);
if(temp__5753__auto__){
var seq__32317__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32317__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32317__$1);
var G__32447 = cljs.core.chunk_rest(seq__32317__$1);
var G__32448 = c__4679__auto__;
var G__32449 = cljs.core.count(c__4679__auto__);
var G__32450 = (0);
seq__32317 = G__32447;
chunk__32318 = G__32448;
count__32319 = G__32449;
i__32320 = G__32450;
continue;
} else {
var vec__32334 = cljs.core.first(seq__32317__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32334,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32334,(1),null);
var temp__5751__auto___32452 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32452)){
var effect_fn_32453 = temp__5751__auto___32452;
(effect_fn_32453.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32453.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32453.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32454 = cljs.core.next(seq__32317__$1);
var G__32455 = null;
var G__32456 = (0);
var G__32457 = (0);
seq__32317 = G__32454;
chunk__32318 = G__32455;
count__32319 = G__32456;
i__32320 = G__32457;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__31979__auto___32458 = re_frame.interop.now();
var duration__31980__auto___32459 = (end__31979__auto___32458 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__31980__auto___32459,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__31979__auto___32458);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32297);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32460 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32460)){
var new_db_32461 = temp__5753__auto___32460;
var fexpr__32337_32462 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32337_32462.cljs$core$IFn$_invoke$arity$1 ? fexpr__32337_32462.cljs$core$IFn$_invoke$arity$1(new_db_32461) : fexpr__32337_32462.call(null,new_db_32461));
} else {
}

var seq__32338 = cljs.core.seq(effects_without_db);
var chunk__32339 = null;
var count__32340 = (0);
var i__32341 = (0);
while(true){
if((i__32341 < count__32340)){
var vec__32351 = chunk__32339.cljs$core$IIndexed$_nth$arity$2(null,i__32341);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32351,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32351,(1),null);
var temp__5751__auto___32463 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32463)){
var effect_fn_32464 = temp__5751__auto___32463;
(effect_fn_32464.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32464.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32464.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32465 = seq__32338;
var G__32466 = chunk__32339;
var G__32467 = count__32340;
var G__32468 = (i__32341 + (1));
seq__32338 = G__32465;
chunk__32339 = G__32466;
count__32340 = G__32467;
i__32341 = G__32468;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32338);
if(temp__5753__auto__){
var seq__32338__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32338__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32338__$1);
var G__32469 = cljs.core.chunk_rest(seq__32338__$1);
var G__32470 = c__4679__auto__;
var G__32471 = cljs.core.count(c__4679__auto__);
var G__32472 = (0);
seq__32338 = G__32469;
chunk__32339 = G__32470;
count__32340 = G__32471;
i__32341 = G__32472;
continue;
} else {
var vec__32362 = cljs.core.first(seq__32338__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32362,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32362,(1),null);
var temp__5751__auto___32473 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32473)){
var effect_fn_32474 = temp__5751__auto___32473;
(effect_fn_32474.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32474.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32474.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32475 = cljs.core.next(seq__32338__$1);
var G__32476 = null;
var G__32477 = (0);
var G__32478 = (0);
seq__32338 = G__32475;
chunk__32339 = G__32476;
count__32340 = G__32477;
i__32341 = G__32478;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__32368){
var map__32369 = p__32368;
var map__32369__$1 = cljs.core.__destructure_map(map__32369);
var effect = map__32369__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32369__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32369__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__32374 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32375 = null;
var count__32376 = (0);
var i__32377 = (0);
while(true){
if((i__32377 < count__32376)){
var effect = chunk__32375.cljs$core$IIndexed$_nth$arity$2(null,i__32377);
re_frame.fx.dispatch_later(effect);


var G__32479 = seq__32374;
var G__32480 = chunk__32375;
var G__32481 = count__32376;
var G__32482 = (i__32377 + (1));
seq__32374 = G__32479;
chunk__32375 = G__32480;
count__32376 = G__32481;
i__32377 = G__32482;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32374);
if(temp__5753__auto__){
var seq__32374__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32374__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32374__$1);
var G__32483 = cljs.core.chunk_rest(seq__32374__$1);
var G__32484 = c__4679__auto__;
var G__32485 = cljs.core.count(c__4679__auto__);
var G__32486 = (0);
seq__32374 = G__32483;
chunk__32375 = G__32484;
count__32376 = G__32485;
i__32377 = G__32486;
continue;
} else {
var effect = cljs.core.first(seq__32374__$1);
re_frame.fx.dispatch_later(effect);


var G__32488 = cljs.core.next(seq__32374__$1);
var G__32489 = null;
var G__32490 = (0);
var G__32491 = (0);
seq__32374 = G__32488;
chunk__32375 = G__32489;
count__32376 = G__32490;
i__32377 = G__32491;
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
var seq__32384 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__32385 = null;
var count__32386 = (0);
var i__32387 = (0);
while(true){
if((i__32387 < count__32386)){
var vec__32410 = chunk__32385.cljs$core$IIndexed$_nth$arity$2(null,i__32387);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32410,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32410,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32492 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32492)){
var effect_fn_32493 = temp__5751__auto___32492;
(effect_fn_32493.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32493.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32493.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32494 = seq__32384;
var G__32495 = chunk__32385;
var G__32496 = count__32386;
var G__32497 = (i__32387 + (1));
seq__32384 = G__32494;
chunk__32385 = G__32495;
count__32386 = G__32496;
i__32387 = G__32497;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32384);
if(temp__5753__auto__){
var seq__32384__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32384__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32384__$1);
var G__32498 = cljs.core.chunk_rest(seq__32384__$1);
var G__32499 = c__4679__auto__;
var G__32500 = cljs.core.count(c__4679__auto__);
var G__32501 = (0);
seq__32384 = G__32498;
chunk__32385 = G__32499;
count__32386 = G__32500;
i__32387 = G__32501;
continue;
} else {
var vec__32413 = cljs.core.first(seq__32384__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32413,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32413,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32502 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32502)){
var effect_fn_32503 = temp__5751__auto___32502;
(effect_fn_32503.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32503.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32503.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32504 = cljs.core.next(seq__32384__$1);
var G__32505 = null;
var G__32506 = (0);
var G__32507 = (0);
seq__32384 = G__32504;
chunk__32385 = G__32505;
count__32386 = G__32506;
i__32387 = G__32507;
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
var seq__32419 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32420 = null;
var count__32421 = (0);
var i__32422 = (0);
while(true){
if((i__32422 < count__32421)){
var event = chunk__32420.cljs$core$IIndexed$_nth$arity$2(null,i__32422);
re_frame.router.dispatch(event);


var G__32508 = seq__32419;
var G__32509 = chunk__32420;
var G__32510 = count__32421;
var G__32511 = (i__32422 + (1));
seq__32419 = G__32508;
chunk__32420 = G__32509;
count__32421 = G__32510;
i__32422 = G__32511;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32419);
if(temp__5753__auto__){
var seq__32419__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32419__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32419__$1);
var G__32512 = cljs.core.chunk_rest(seq__32419__$1);
var G__32513 = c__4679__auto__;
var G__32514 = cljs.core.count(c__4679__auto__);
var G__32515 = (0);
seq__32419 = G__32512;
chunk__32420 = G__32513;
count__32421 = G__32514;
i__32422 = G__32515;
continue;
} else {
var event = cljs.core.first(seq__32419__$1);
re_frame.router.dispatch(event);


var G__32516 = cljs.core.next(seq__32419__$1);
var G__32517 = null;
var G__32518 = (0);
var G__32519 = (0);
seq__32419 = G__32516;
chunk__32420 = G__32517;
count__32421 = G__32518;
i__32422 = G__32519;
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
var seq__32427 = cljs.core.seq(value);
var chunk__32428 = null;
var count__32429 = (0);
var i__32430 = (0);
while(true){
if((i__32430 < count__32429)){
var event = chunk__32428.cljs$core$IIndexed$_nth$arity$2(null,i__32430);
clear_event(event);


var G__32520 = seq__32427;
var G__32521 = chunk__32428;
var G__32522 = count__32429;
var G__32523 = (i__32430 + (1));
seq__32427 = G__32520;
chunk__32428 = G__32521;
count__32429 = G__32522;
i__32430 = G__32523;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32427);
if(temp__5753__auto__){
var seq__32427__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32427__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32427__$1);
var G__32524 = cljs.core.chunk_rest(seq__32427__$1);
var G__32525 = c__4679__auto__;
var G__32526 = cljs.core.count(c__4679__auto__);
var G__32527 = (0);
seq__32427 = G__32524;
chunk__32428 = G__32525;
count__32429 = G__32526;
i__32430 = G__32527;
continue;
} else {
var event = cljs.core.first(seq__32427__$1);
clear_event(event);


var G__32528 = cljs.core.next(seq__32427__$1);
var G__32529 = null;
var G__32530 = (0);
var G__32531 = (0);
seq__32427 = G__32528;
chunk__32428 = G__32529;
count__32429 = G__32530;
i__32430 = G__32531;
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
