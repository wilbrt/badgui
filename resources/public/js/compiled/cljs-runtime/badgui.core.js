goog.provide('badgui.core');
badgui.core.dev_setup = (function badgui$core$dev_setup(){
if(badgui.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
badgui.core.mount_root = (function badgui$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [badgui.views.main_panel], null),root_el);
});
badgui.core.init = (function badgui$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","initialize-db","badgui.events/initialize-db",-870770097)], null));

badgui.core.dev_setup();

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","connect-websocket","badgui.events/connect-websocket",-354299278)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","fetch-results","badgui.events/fetch-results",-97171637)], null));

return badgui.core.mount_root();
});

//# sourceMappingURL=badgui.core.js.map
