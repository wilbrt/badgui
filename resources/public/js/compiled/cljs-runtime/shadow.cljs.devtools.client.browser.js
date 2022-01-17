goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37508 = arguments.length;
var i__4865__auto___37509 = (0);
while(true){
if((i__4865__auto___37509 < len__4864__auto___37508)){
args__4870__auto__.push((arguments[i__4865__auto___37509]));

var G__37510 = (i__4865__auto___37509 + (1));
i__4865__auto___37509 = G__37510;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37339){
var G__37340 = cljs.core.first(seq37339);
var seq37339__$1 = cljs.core.next(seq37339);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37340,seq37339__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37343 = cljs.core.seq(sources);
var chunk__37344 = null;
var count__37345 = (0);
var i__37346 = (0);
while(true){
if((i__37346 < count__37345)){
var map__37352 = chunk__37344.cljs$core$IIndexed$_nth$arity$2(null,i__37346);
var map__37352__$1 = cljs.core.__destructure_map(map__37352);
var src = map__37352__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37354){var e_37511 = e37354;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37511);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37511.message)].join('')));
}

var G__37512 = seq__37343;
var G__37513 = chunk__37344;
var G__37514 = count__37345;
var G__37515 = (i__37346 + (1));
seq__37343 = G__37512;
chunk__37344 = G__37513;
count__37345 = G__37514;
i__37346 = G__37515;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37343);
if(temp__5753__auto__){
var seq__37343__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37343__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37343__$1);
var G__37516 = cljs.core.chunk_rest(seq__37343__$1);
var G__37517 = c__4679__auto__;
var G__37518 = cljs.core.count(c__4679__auto__);
var G__37519 = (0);
seq__37343 = G__37516;
chunk__37344 = G__37517;
count__37345 = G__37518;
i__37346 = G__37519;
continue;
} else {
var map__37357 = cljs.core.first(seq__37343__$1);
var map__37357__$1 = cljs.core.__destructure_map(map__37357);
var src = map__37357__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37358){var e_37520 = e37358;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37520);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37520.message)].join('')));
}

var G__37521 = cljs.core.next(seq__37343__$1);
var G__37522 = null;
var G__37523 = (0);
var G__37524 = (0);
seq__37343 = G__37521;
chunk__37344 = G__37522;
count__37345 = G__37523;
i__37346 = G__37524;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37359 = cljs.core.seq(js_requires);
var chunk__37360 = null;
var count__37361 = (0);
var i__37362 = (0);
while(true){
if((i__37362 < count__37361)){
var js_ns = chunk__37360.cljs$core$IIndexed$_nth$arity$2(null,i__37362);
var require_str_37525 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37525);


var G__37526 = seq__37359;
var G__37527 = chunk__37360;
var G__37528 = count__37361;
var G__37529 = (i__37362 + (1));
seq__37359 = G__37526;
chunk__37360 = G__37527;
count__37361 = G__37528;
i__37362 = G__37529;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37359);
if(temp__5753__auto__){
var seq__37359__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37359__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37359__$1);
var G__37530 = cljs.core.chunk_rest(seq__37359__$1);
var G__37531 = c__4679__auto__;
var G__37532 = cljs.core.count(c__4679__auto__);
var G__37533 = (0);
seq__37359 = G__37530;
chunk__37360 = G__37531;
count__37361 = G__37532;
i__37362 = G__37533;
continue;
} else {
var js_ns = cljs.core.first(seq__37359__$1);
var require_str_37534 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37534);


var G__37535 = cljs.core.next(seq__37359__$1);
var G__37536 = null;
var G__37537 = (0);
var G__37538 = (0);
seq__37359 = G__37535;
chunk__37360 = G__37536;
count__37361 = G__37537;
i__37362 = G__37538;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37364){
var map__37365 = p__37364;
var map__37365__$1 = cljs.core.__destructure_map(map__37365);
var msg = map__37365__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37365__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37365__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37366(s__37367){
return (new cljs.core.LazySeq(null,(function (){
var s__37367__$1 = s__37367;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37367__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37372 = cljs.core.first(xs__6308__auto__);
var map__37372__$1 = cljs.core.__destructure_map(map__37372);
var src = map__37372__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37372__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37372__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__37367__$1,map__37372,map__37372__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37365,map__37365__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37366_$_iter__37368(s__37369){
return (new cljs.core.LazySeq(null,((function (s__37367__$1,map__37372,map__37372__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37365,map__37365__$1,msg,info,reload_info){
return (function (){
var s__37369__$1 = s__37369;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37369__$1);
if(temp__5753__auto____$1){
var s__37369__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37369__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__37369__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__37371 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__37370 = (0);
while(true){
if((i__37370 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__37370);
cljs.core.chunk_append(b__37371,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37539 = (i__37370 + (1));
i__37370 = G__37539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37371),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37366_$_iter__37368(cljs.core.chunk_rest(s__37369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37371),null);
}
} else {
var warning = cljs.core.first(s__37369__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37366_$_iter__37368(cljs.core.rest(s__37369__$2)));
}
} else {
return null;
}
break;
}
});})(s__37367__$1,map__37372,map__37372__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37365,map__37365__$1,msg,info,reload_info))
,null,null));
});})(s__37367__$1,map__37372,map__37372__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37365,map__37365__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37366(cljs.core.rest(s__37367__$1)));
} else {
var G__37540 = cljs.core.rest(s__37367__$1);
s__37367__$1 = G__37540;
continue;
}
} else {
var G__37541 = cljs.core.rest(s__37367__$1);
s__37367__$1 = G__37541;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37373_37542 = cljs.core.seq(warnings);
var chunk__37374_37543 = null;
var count__37375_37544 = (0);
var i__37376_37545 = (0);
while(true){
if((i__37376_37545 < count__37375_37544)){
var map__37379_37546 = chunk__37374_37543.cljs$core$IIndexed$_nth$arity$2(null,i__37376_37545);
var map__37379_37547__$1 = cljs.core.__destructure_map(map__37379_37546);
var w_37548 = map__37379_37547__$1;
var msg_37549__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379_37547__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379_37547__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379_37547__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37379_37547__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37552)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37550),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37551),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37549__$1)].join(''));


var G__37553 = seq__37373_37542;
var G__37554 = chunk__37374_37543;
var G__37555 = count__37375_37544;
var G__37556 = (i__37376_37545 + (1));
seq__37373_37542 = G__37553;
chunk__37374_37543 = G__37554;
count__37375_37544 = G__37555;
i__37376_37545 = G__37556;
continue;
} else {
var temp__5753__auto___37557 = cljs.core.seq(seq__37373_37542);
if(temp__5753__auto___37557){
var seq__37373_37558__$1 = temp__5753__auto___37557;
if(cljs.core.chunked_seq_QMARK_(seq__37373_37558__$1)){
var c__4679__auto___37559 = cljs.core.chunk_first(seq__37373_37558__$1);
var G__37560 = cljs.core.chunk_rest(seq__37373_37558__$1);
var G__37561 = c__4679__auto___37559;
var G__37562 = cljs.core.count(c__4679__auto___37559);
var G__37563 = (0);
seq__37373_37542 = G__37560;
chunk__37374_37543 = G__37561;
count__37375_37544 = G__37562;
i__37376_37545 = G__37563;
continue;
} else {
var map__37380_37564 = cljs.core.first(seq__37373_37558__$1);
var map__37380_37565__$1 = cljs.core.__destructure_map(map__37380_37564);
var w_37566 = map__37380_37565__$1;
var msg_37567__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37380_37565__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37380_37565__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37380_37565__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37380_37565__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37570)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37568),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37569),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37567__$1)].join(''));


var G__37571 = cljs.core.next(seq__37373_37558__$1);
var G__37572 = null;
var G__37573 = (0);
var G__37574 = (0);
seq__37373_37542 = G__37571;
chunk__37374_37543 = G__37572;
count__37375_37544 = G__37573;
i__37376_37545 = G__37574;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37363_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37363_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37381){
var map__37382 = p__37381;
var map__37382__$1 = cljs.core.__destructure_map(map__37382);
var msg = map__37382__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37382__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37384 = cljs.core.seq(updates);
var chunk__37388 = null;
var count__37390 = (0);
var i__37391 = (0);
while(true){
if((i__37391 < count__37390)){
var path = chunk__37388.cljs$core$IIndexed$_nth$arity$2(null,i__37391);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37437_37575 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37441_37576 = null;
var count__37442_37577 = (0);
var i__37443_37578 = (0);
while(true){
if((i__37443_37578 < count__37442_37577)){
var node_37579 = chunk__37441_37576.cljs$core$IIndexed$_nth$arity$2(null,i__37443_37578);
if(cljs.core.not(node_37579.shadow$old)){
var path_match_37580 = shadow.cljs.devtools.client.browser.match_paths(node_37579.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37580)){
var new_link_37581 = (function (){var G__37449 = node_37579.cloneNode(true);
G__37449.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37580),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37449;
})();
(node_37579.shadow$old = true);

(new_link_37581.onload = ((function (seq__37437_37575,chunk__37441_37576,count__37442_37577,i__37443_37578,seq__37384,chunk__37388,count__37390,i__37391,new_link_37581,path_match_37580,node_37579,path,map__37382,map__37382__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37579);
});})(seq__37437_37575,chunk__37441_37576,count__37442_37577,i__37443_37578,seq__37384,chunk__37388,count__37390,i__37391,new_link_37581,path_match_37580,node_37579,path,map__37382,map__37382__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37580], 0));

goog.dom.insertSiblingAfter(new_link_37581,node_37579);


var G__37582 = seq__37437_37575;
var G__37583 = chunk__37441_37576;
var G__37584 = count__37442_37577;
var G__37585 = (i__37443_37578 + (1));
seq__37437_37575 = G__37582;
chunk__37441_37576 = G__37583;
count__37442_37577 = G__37584;
i__37443_37578 = G__37585;
continue;
} else {
var G__37586 = seq__37437_37575;
var G__37587 = chunk__37441_37576;
var G__37588 = count__37442_37577;
var G__37589 = (i__37443_37578 + (1));
seq__37437_37575 = G__37586;
chunk__37441_37576 = G__37587;
count__37442_37577 = G__37588;
i__37443_37578 = G__37589;
continue;
}
} else {
var G__37590 = seq__37437_37575;
var G__37591 = chunk__37441_37576;
var G__37592 = count__37442_37577;
var G__37593 = (i__37443_37578 + (1));
seq__37437_37575 = G__37590;
chunk__37441_37576 = G__37591;
count__37442_37577 = G__37592;
i__37443_37578 = G__37593;
continue;
}
} else {
var temp__5753__auto___37594 = cljs.core.seq(seq__37437_37575);
if(temp__5753__auto___37594){
var seq__37437_37595__$1 = temp__5753__auto___37594;
if(cljs.core.chunked_seq_QMARK_(seq__37437_37595__$1)){
var c__4679__auto___37596 = cljs.core.chunk_first(seq__37437_37595__$1);
var G__37597 = cljs.core.chunk_rest(seq__37437_37595__$1);
var G__37598 = c__4679__auto___37596;
var G__37599 = cljs.core.count(c__4679__auto___37596);
var G__37600 = (0);
seq__37437_37575 = G__37597;
chunk__37441_37576 = G__37598;
count__37442_37577 = G__37599;
i__37443_37578 = G__37600;
continue;
} else {
var node_37601 = cljs.core.first(seq__37437_37595__$1);
if(cljs.core.not(node_37601.shadow$old)){
var path_match_37602 = shadow.cljs.devtools.client.browser.match_paths(node_37601.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37602)){
var new_link_37603 = (function (){var G__37451 = node_37601.cloneNode(true);
G__37451.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37602),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37451;
})();
(node_37601.shadow$old = true);

(new_link_37603.onload = ((function (seq__37437_37575,chunk__37441_37576,count__37442_37577,i__37443_37578,seq__37384,chunk__37388,count__37390,i__37391,new_link_37603,path_match_37602,node_37601,seq__37437_37595__$1,temp__5753__auto___37594,path,map__37382,map__37382__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37601);
});})(seq__37437_37575,chunk__37441_37576,count__37442_37577,i__37443_37578,seq__37384,chunk__37388,count__37390,i__37391,new_link_37603,path_match_37602,node_37601,seq__37437_37595__$1,temp__5753__auto___37594,path,map__37382,map__37382__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37602], 0));

goog.dom.insertSiblingAfter(new_link_37603,node_37601);


var G__37604 = cljs.core.next(seq__37437_37595__$1);
var G__37605 = null;
var G__37606 = (0);
var G__37607 = (0);
seq__37437_37575 = G__37604;
chunk__37441_37576 = G__37605;
count__37442_37577 = G__37606;
i__37443_37578 = G__37607;
continue;
} else {
var G__37608 = cljs.core.next(seq__37437_37595__$1);
var G__37609 = null;
var G__37610 = (0);
var G__37611 = (0);
seq__37437_37575 = G__37608;
chunk__37441_37576 = G__37609;
count__37442_37577 = G__37610;
i__37443_37578 = G__37611;
continue;
}
} else {
var G__37612 = cljs.core.next(seq__37437_37595__$1);
var G__37613 = null;
var G__37614 = (0);
var G__37615 = (0);
seq__37437_37575 = G__37612;
chunk__37441_37576 = G__37613;
count__37442_37577 = G__37614;
i__37443_37578 = G__37615;
continue;
}
}
} else {
}
}
break;
}


var G__37616 = seq__37384;
var G__37617 = chunk__37388;
var G__37618 = count__37390;
var G__37619 = (i__37391 + (1));
seq__37384 = G__37616;
chunk__37388 = G__37617;
count__37390 = G__37618;
i__37391 = G__37619;
continue;
} else {
var G__37620 = seq__37384;
var G__37621 = chunk__37388;
var G__37622 = count__37390;
var G__37623 = (i__37391 + (1));
seq__37384 = G__37620;
chunk__37388 = G__37621;
count__37390 = G__37622;
i__37391 = G__37623;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37384);
if(temp__5753__auto__){
var seq__37384__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37384__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37384__$1);
var G__37624 = cljs.core.chunk_rest(seq__37384__$1);
var G__37625 = c__4679__auto__;
var G__37626 = cljs.core.count(c__4679__auto__);
var G__37627 = (0);
seq__37384 = G__37624;
chunk__37388 = G__37625;
count__37390 = G__37626;
i__37391 = G__37627;
continue;
} else {
var path = cljs.core.first(seq__37384__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37452_37628 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37456_37629 = null;
var count__37457_37630 = (0);
var i__37458_37631 = (0);
while(true){
if((i__37458_37631 < count__37457_37630)){
var node_37632 = chunk__37456_37629.cljs$core$IIndexed$_nth$arity$2(null,i__37458_37631);
if(cljs.core.not(node_37632.shadow$old)){
var path_match_37633 = shadow.cljs.devtools.client.browser.match_paths(node_37632.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37633)){
var new_link_37634 = (function (){var G__37464 = node_37632.cloneNode(true);
G__37464.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37633),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37464;
})();
(node_37632.shadow$old = true);

(new_link_37634.onload = ((function (seq__37452_37628,chunk__37456_37629,count__37457_37630,i__37458_37631,seq__37384,chunk__37388,count__37390,i__37391,new_link_37634,path_match_37633,node_37632,path,seq__37384__$1,temp__5753__auto__,map__37382,map__37382__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37632);
});})(seq__37452_37628,chunk__37456_37629,count__37457_37630,i__37458_37631,seq__37384,chunk__37388,count__37390,i__37391,new_link_37634,path_match_37633,node_37632,path,seq__37384__$1,temp__5753__auto__,map__37382,map__37382__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37633], 0));

goog.dom.insertSiblingAfter(new_link_37634,node_37632);


var G__37635 = seq__37452_37628;
var G__37636 = chunk__37456_37629;
var G__37637 = count__37457_37630;
var G__37638 = (i__37458_37631 + (1));
seq__37452_37628 = G__37635;
chunk__37456_37629 = G__37636;
count__37457_37630 = G__37637;
i__37458_37631 = G__37638;
continue;
} else {
var G__37639 = seq__37452_37628;
var G__37640 = chunk__37456_37629;
var G__37641 = count__37457_37630;
var G__37642 = (i__37458_37631 + (1));
seq__37452_37628 = G__37639;
chunk__37456_37629 = G__37640;
count__37457_37630 = G__37641;
i__37458_37631 = G__37642;
continue;
}
} else {
var G__37643 = seq__37452_37628;
var G__37644 = chunk__37456_37629;
var G__37645 = count__37457_37630;
var G__37646 = (i__37458_37631 + (1));
seq__37452_37628 = G__37643;
chunk__37456_37629 = G__37644;
count__37457_37630 = G__37645;
i__37458_37631 = G__37646;
continue;
}
} else {
var temp__5753__auto___37647__$1 = cljs.core.seq(seq__37452_37628);
if(temp__5753__auto___37647__$1){
var seq__37452_37648__$1 = temp__5753__auto___37647__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37452_37648__$1)){
var c__4679__auto___37649 = cljs.core.chunk_first(seq__37452_37648__$1);
var G__37650 = cljs.core.chunk_rest(seq__37452_37648__$1);
var G__37651 = c__4679__auto___37649;
var G__37652 = cljs.core.count(c__4679__auto___37649);
var G__37653 = (0);
seq__37452_37628 = G__37650;
chunk__37456_37629 = G__37651;
count__37457_37630 = G__37652;
i__37458_37631 = G__37653;
continue;
} else {
var node_37654 = cljs.core.first(seq__37452_37648__$1);
if(cljs.core.not(node_37654.shadow$old)){
var path_match_37655 = shadow.cljs.devtools.client.browser.match_paths(node_37654.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37655)){
var new_link_37656 = (function (){var G__37465 = node_37654.cloneNode(true);
G__37465.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37655),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37465;
})();
(node_37654.shadow$old = true);

(new_link_37656.onload = ((function (seq__37452_37628,chunk__37456_37629,count__37457_37630,i__37458_37631,seq__37384,chunk__37388,count__37390,i__37391,new_link_37656,path_match_37655,node_37654,seq__37452_37648__$1,temp__5753__auto___37647__$1,path,seq__37384__$1,temp__5753__auto__,map__37382,map__37382__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37654);
});})(seq__37452_37628,chunk__37456_37629,count__37457_37630,i__37458_37631,seq__37384,chunk__37388,count__37390,i__37391,new_link_37656,path_match_37655,node_37654,seq__37452_37648__$1,temp__5753__auto___37647__$1,path,seq__37384__$1,temp__5753__auto__,map__37382,map__37382__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37655], 0));

goog.dom.insertSiblingAfter(new_link_37656,node_37654);


var G__37657 = cljs.core.next(seq__37452_37648__$1);
var G__37658 = null;
var G__37659 = (0);
var G__37660 = (0);
seq__37452_37628 = G__37657;
chunk__37456_37629 = G__37658;
count__37457_37630 = G__37659;
i__37458_37631 = G__37660;
continue;
} else {
var G__37661 = cljs.core.next(seq__37452_37648__$1);
var G__37662 = null;
var G__37663 = (0);
var G__37664 = (0);
seq__37452_37628 = G__37661;
chunk__37456_37629 = G__37662;
count__37457_37630 = G__37663;
i__37458_37631 = G__37664;
continue;
}
} else {
var G__37665 = cljs.core.next(seq__37452_37648__$1);
var G__37666 = null;
var G__37667 = (0);
var G__37668 = (0);
seq__37452_37628 = G__37665;
chunk__37456_37629 = G__37666;
count__37457_37630 = G__37667;
i__37458_37631 = G__37668;
continue;
}
}
} else {
}
}
break;
}


var G__37669 = cljs.core.next(seq__37384__$1);
var G__37670 = null;
var G__37671 = (0);
var G__37672 = (0);
seq__37384 = G__37669;
chunk__37388 = G__37670;
count__37390 = G__37671;
i__37391 = G__37672;
continue;
} else {
var G__37673 = cljs.core.next(seq__37384__$1);
var G__37674 = null;
var G__37675 = (0);
var G__37676 = (0);
seq__37384 = G__37673;
chunk__37388 = G__37674;
count__37390 = G__37675;
i__37391 = G__37676;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37476){
var map__37477 = p__37476;
var map__37477__$1 = cljs.core.__destructure_map(map__37477);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37477__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37484){
var map__37485 = p__37484;
var map__37485__$1 = cljs.core.__destructure_map(map__37485);
var _ = map__37485__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37486,done,error){
var map__37487 = p__37486;
var map__37487__$1 = cljs.core.__destructure_map(map__37487);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37487__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37488,done,error){
var map__37489 = p__37488;
var map__37489__$1 = cljs.core.__destructure_map(map__37489);
var msg = map__37489__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37489__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37489__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37489__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37490){
var map__37491 = p__37490;
var map__37491__$1 = cljs.core.__destructure_map(map__37491);
var src = map__37491__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37491__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37492 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37492) : done.call(null,G__37492));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37493){
var map__37494 = p__37493;
var map__37494__$1 = cljs.core.__destructure_map(map__37494);
var msg__$1 = map__37494__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37494__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37495){var ex = e37495;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37496){
var map__37497 = p__37496;
var map__37497__$1 = cljs.core.__destructure_map(map__37497);
var env = map__37497__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37497__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37502){
var map__37503 = p__37502;
var map__37503__$1 = cljs.core.__destructure_map(map__37503);
var msg = map__37503__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37503__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37504){
var map__37505 = p__37504;
var map__37505__$1 = cljs.core.__destructure_map(map__37505);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37505__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37505__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37506){
var map__37507 = p__37506;
var map__37507__$1 = cljs.core.__destructure_map(map__37507);
var svc = map__37507__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37507__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
