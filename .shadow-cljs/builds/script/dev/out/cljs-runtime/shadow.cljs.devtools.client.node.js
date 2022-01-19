goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__30877){
var map__30878 = p__30877;
var map__30878__$1 = cljs.core.__destructure_map(map__30878);
var msg = map__30878__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30878__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30878__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return shadow.cljs.devtools.client.node.goog$module$goog$object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__30884){
var map__30885 = p__30884;
var map__30885__$1 = cljs.core.__destructure_map(map__30885);
var msg = map__30885__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30885__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30885__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__30886 = info;
var map__30886__$1 = cljs.core.__destructure_map(map__30886);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30886__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30886__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30886__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30887){
var map__30888 = p__30887;
var map__30888__$1 = cljs.core.__destructure_map(map__30888);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30888__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30888__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__30890){
var map__30891 = p__30890;
var map__30891__$1 = cljs.core.__destructure_map(map__30891);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30891__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__30892 = cljs.core.seq(files_to_require);
var chunk__30893 = null;
var count__30894 = (0);
var i__30895 = (0);
while(true){
if((i__30895 < count__30894)){
var src = chunk__30893.cljs$core$IIndexed$_nth$arity$2(null,i__30895);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__30960 = seq__30892;
var G__30961 = chunk__30893;
var G__30962 = count__30894;
var G__30963 = (i__30895 + (1));
seq__30892 = G__30960;
chunk__30893 = G__30961;
count__30894 = G__30962;
i__30895 = G__30963;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30892);
if(temp__5753__auto__){
var seq__30892__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30892__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__30892__$1);
var G__30964 = cljs.core.chunk_rest(seq__30892__$1);
var G__30965 = c__4679__auto__;
var G__30966 = cljs.core.count(c__4679__auto__);
var G__30967 = (0);
seq__30892 = G__30964;
chunk__30893 = G__30965;
count__30894 = G__30966;
i__30895 = G__30967;
continue;
} else {
var src = cljs.core.first(seq__30892__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__30968 = cljs.core.next(seq__30892__$1);
var G__30969 = null;
var G__30970 = (0);
var G__30971 = (0);
seq__30892 = G__30968;
chunk__30893 = G__30969;
count__30894 = G__30970;
i__30895 = G__30971;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__30900,msg){
var map__30902 = p__30900;
var map__30902__$1 = cljs.core.__destructure_map(map__30902);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30902__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__30909){
var map__30910 = p__30909;
var map__30910__$1 = cljs.core.__destructure_map(map__30910);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30910__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30910__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__30912,done,error){
var map__30913 = p__30912;
var map__30913__$1 = cljs.core.__destructure_map(map__30913);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30913__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__30915_30972 = cljs.core.seq(repl_sources);
var chunk__30917_30973 = null;
var count__30918_30974 = (0);
var i__30919_30975 = (0);
while(true){
if((i__30919_30975 < count__30918_30974)){
var map__30923_30976 = chunk__30917_30973.cljs$core$IIndexed$_nth$arity$2(null,i__30919_30975);
var map__30923_30977__$1 = cljs.core.__destructure_map(map__30923_30976);
var src_30978 = map__30923_30977__$1;
var output_name_30979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30923_30977__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_30979)))){
shadow.cljs.devtools.client.node.closure_import(output_name_30979);


var G__30980 = seq__30915_30972;
var G__30981 = chunk__30917_30973;
var G__30982 = count__30918_30974;
var G__30983 = (i__30919_30975 + (1));
seq__30915_30972 = G__30980;
chunk__30917_30973 = G__30981;
count__30918_30974 = G__30982;
i__30919_30975 = G__30983;
continue;
} else {
var G__30984 = seq__30915_30972;
var G__30985 = chunk__30917_30973;
var G__30986 = count__30918_30974;
var G__30987 = (i__30919_30975 + (1));
seq__30915_30972 = G__30984;
chunk__30917_30973 = G__30985;
count__30918_30974 = G__30986;
i__30919_30975 = G__30987;
continue;
}
} else {
var temp__5753__auto___30988 = cljs.core.seq(seq__30915_30972);
if(temp__5753__auto___30988){
var seq__30915_30989__$1 = temp__5753__auto___30988;
if(cljs.core.chunked_seq_QMARK_(seq__30915_30989__$1)){
var c__4679__auto___30990 = cljs.core.chunk_first(seq__30915_30989__$1);
var G__30991 = cljs.core.chunk_rest(seq__30915_30989__$1);
var G__30992 = c__4679__auto___30990;
var G__30993 = cljs.core.count(c__4679__auto___30990);
var G__30994 = (0);
seq__30915_30972 = G__30991;
chunk__30917_30973 = G__30992;
count__30918_30974 = G__30993;
i__30919_30975 = G__30994;
continue;
} else {
var map__30925_30995 = cljs.core.first(seq__30915_30989__$1);
var map__30925_30996__$1 = cljs.core.__destructure_map(map__30925_30995);
var src_30997 = map__30925_30996__$1;
var output_name_30998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30925_30996__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_30998)))){
shadow.cljs.devtools.client.node.closure_import(output_name_30998);


var G__30999 = cljs.core.next(seq__30915_30989__$1);
var G__31000 = null;
var G__31001 = (0);
var G__31002 = (0);
seq__30915_30972 = G__30999;
chunk__30917_30973 = G__31000;
count__30918_30974 = G__31001;
i__30919_30975 = G__31002;
continue;
} else {
var G__31003 = cljs.core.next(seq__30915_30989__$1);
var G__31004 = null;
var G__31005 = (0);
var G__31006 = (0);
seq__30915_30972 = G__31003;
chunk__30917_30973 = G__31004;
count__30918_30974 = G__31005;
i__30919_30975 = G__31006;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e30914){var e = e30914;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__30926,done,error){
var map__30927 = p__30926;
var map__30927__$1 = cljs.core.__destructure_map(map__30927);
var msg = map__30927__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30927__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30927__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__30932_31007 = cljs.core.seq(sources);
var chunk__30933_31008 = null;
var count__30934_31009 = (0);
var i__30935_31010 = (0);
while(true){
if((i__30935_31010 < count__30934_31009)){
var map__30944_31011 = chunk__30933_31008.cljs$core$IIndexed$_nth$arity$2(null,i__30935_31010);
var map__30944_31012__$1 = cljs.core.__destructure_map(map__30944_31011);
var src_31013 = map__30944_31012__$1;
var provides_31014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30944_31012__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_31015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30944_31012__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4253__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_31015)));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_31014);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_31015);
} else {
}


var G__31017 = seq__30932_31007;
var G__31018 = chunk__30933_31008;
var G__31019 = count__30934_31009;
var G__31020 = (i__30935_31010 + (1));
seq__30932_31007 = G__31017;
chunk__30933_31008 = G__31018;
count__30934_31009 = G__31019;
i__30935_31010 = G__31020;
continue;
} else {
var temp__5753__auto___31022 = cljs.core.seq(seq__30932_31007);
if(temp__5753__auto___31022){
var seq__30932_31023__$1 = temp__5753__auto___31022;
if(cljs.core.chunked_seq_QMARK_(seq__30932_31023__$1)){
var c__4679__auto___31025 = cljs.core.chunk_first(seq__30932_31023__$1);
var G__31026 = cljs.core.chunk_rest(seq__30932_31023__$1);
var G__31027 = c__4679__auto___31025;
var G__31028 = cljs.core.count(c__4679__auto___31025);
var G__31029 = (0);
seq__30932_31007 = G__31026;
chunk__30933_31008 = G__31027;
count__30934_31009 = G__31028;
i__30935_31010 = G__31029;
continue;
} else {
var map__30945_31031 = cljs.core.first(seq__30932_31023__$1);
var map__30945_31032__$1 = cljs.core.__destructure_map(map__30945_31031);
var src_31033 = map__30945_31032__$1;
var provides_31034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30945_31032__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_31035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30945_31032__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4253__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_31035)));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_31034);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_31035);
} else {
}


var G__31036 = cljs.core.next(seq__30932_31023__$1);
var G__31037 = null;
var G__31038 = (0);
var G__31039 = (0);
seq__30932_31007 = G__31036;
chunk__30933_31008 = G__31037;
count__30934_31009 = G__31038;
i__30935_31010 = G__31039;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e30929){var e = e30929;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__30948){
var map__30949 = p__30948;
var map__30949__$1 = cljs.core.__destructure_map(map__30949);
var env = map__30949__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30949__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__30955){
var map__30956 = p__30955;
var map__30956__$1 = cljs.core.__destructure_map(map__30956);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30956__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30956__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__30957){
var map__30958 = p__30957;
var map__30958__$1 = cljs.core.__destructure_map(map__30958);
var svc = map__30958__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30958__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
