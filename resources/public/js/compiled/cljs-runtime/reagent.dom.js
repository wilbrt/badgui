goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__37958 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37959 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37959);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__37961 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37962 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37962);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37961);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37958);
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
var G__37975 = arguments.length;
switch (G__37975) {
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

var vec__37982 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37982,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37982,(1),null);
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
return module$node_modules$react_dom$index.findDOMNode(this$);
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

var seq__38003_38028 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__38004_38029 = null;
var count__38005_38030 = (0);
var i__38006_38031 = (0);
while(true){
if((i__38006_38031 < count__38005_38030)){
var vec__38015_38032 = chunk__38004_38029.cljs$core$IIndexed$_nth$arity$2(null,i__38006_38031);
var container_38033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38015_38032,(0),null);
var comp_38034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38015_38032,(1),null);
reagent.dom.re_render_component(comp_38034,container_38033);


var G__38035 = seq__38003_38028;
var G__38036 = chunk__38004_38029;
var G__38037 = count__38005_38030;
var G__38038 = (i__38006_38031 + (1));
seq__38003_38028 = G__38035;
chunk__38004_38029 = G__38036;
count__38005_38030 = G__38037;
i__38006_38031 = G__38038;
continue;
} else {
var temp__5753__auto___38039 = cljs.core.seq(seq__38003_38028);
if(temp__5753__auto___38039){
var seq__38003_38040__$1 = temp__5753__auto___38039;
if(cljs.core.chunked_seq_QMARK_(seq__38003_38040__$1)){
var c__4679__auto___38041 = cljs.core.chunk_first(seq__38003_38040__$1);
var G__38042 = cljs.core.chunk_rest(seq__38003_38040__$1);
var G__38043 = c__4679__auto___38041;
var G__38044 = cljs.core.count(c__4679__auto___38041);
var G__38045 = (0);
seq__38003_38028 = G__38042;
chunk__38004_38029 = G__38043;
count__38005_38030 = G__38044;
i__38006_38031 = G__38045;
continue;
} else {
var vec__38022_38046 = cljs.core.first(seq__38003_38040__$1);
var container_38047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38022_38046,(0),null);
var comp_38048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38022_38046,(1),null);
reagent.dom.re_render_component(comp_38048,container_38047);


var G__38049 = cljs.core.next(seq__38003_38040__$1);
var G__38050 = null;
var G__38051 = (0);
var G__38052 = (0);
seq__38003_38028 = G__38049;
chunk__38004_38029 = G__38050;
count__38005_38030 = G__38051;
i__38006_38031 = G__38052;
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
