goog.provide('reagent.dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return shadow.js.shim.module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__31320 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31321 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31321);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__31328 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31329 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31329);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31328);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31320);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__31336 = arguments.length;
switch (G__31336) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__31338 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31338,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31338,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return shadow.js.shim.module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__31351_31388 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__31352_31389 = null;
var count__31353_31390 = (0);
var i__31354_31391 = (0);
while(true){
if((i__31354_31391 < count__31353_31390)){
var vec__31370_31392 = chunk__31352_31389.cljs$core$IIndexed$_nth$arity$2(null,i__31354_31391);
var container_31393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31370_31392,(0),null);
var comp_31394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31370_31392,(1),null);
reagent.dom.re_render_component(comp_31394,container_31393);


var G__31397 = seq__31351_31388;
var G__31398 = chunk__31352_31389;
var G__31399 = count__31353_31390;
var G__31400 = (i__31354_31391 + (1));
seq__31351_31388 = G__31397;
chunk__31352_31389 = G__31398;
count__31353_31390 = G__31399;
i__31354_31391 = G__31400;
continue;
} else {
var temp__5753__auto___31401 = cljs.core.seq(seq__31351_31388);
if(temp__5753__auto___31401){
var seq__31351_31402__$1 = temp__5753__auto___31401;
if(cljs.core.chunked_seq_QMARK_(seq__31351_31402__$1)){
var c__4679__auto___31403 = cljs.core.chunk_first(seq__31351_31402__$1);
var G__31404 = cljs.core.chunk_rest(seq__31351_31402__$1);
var G__31405 = c__4679__auto___31403;
var G__31406 = cljs.core.count(c__4679__auto___31403);
var G__31407 = (0);
seq__31351_31388 = G__31404;
chunk__31352_31389 = G__31405;
count__31353_31390 = G__31406;
i__31354_31391 = G__31407;
continue;
} else {
var vec__31379_31408 = cljs.core.first(seq__31351_31402__$1);
var container_31409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31379_31408,(0),null);
var comp_31410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31379_31408,(1),null);
reagent.dom.re_render_component(comp_31410,container_31409);


var G__31411 = cljs.core.next(seq__31351_31402__$1);
var G__31412 = null;
var G__31413 = (0);
var G__31414 = (0);
seq__31351_31388 = G__31411;
chunk__31352_31389 = G__31412;
count__31353_31390 = G__31413;
i__31354_31391 = G__31414;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
