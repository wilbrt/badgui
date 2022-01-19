goog.provide('badgui.events');
badgui.events.websocket_effect = (function badgui$events$websocket_effect(p__28038){
var map__28039 = p__28038;
var map__28039__$1 = cljs.core.__destructure_map(map__28039);
var request = map__28039__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28039__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var on_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28039__$1,new cljs.core.Keyword(null,"on-message","on-message",1662987808));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28039__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28039__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28039__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var existing_websocket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28039__$1,new cljs.core.Keyword(null,"existing-websocket","existing-websocket",-1682552812));
if(cljs.core.truth_(existing_websocket)){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,existing_websocket));
} else {
var websocket = (new WebSocket(uri));
(websocket.onmessage = (function (p1__28035_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_message,p1__28035_SHARP_));
}));

(websocket.onerror = (function (p1__28036_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__28036_SHARP_));
}));

return (websocket.onopen = (function badgui$events$websocket_effect_$_on_open(){
(websocket.onerror = (function (p1__28037_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,p1__28037_SHARP_));
}));

return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,websocket));
}));
}
});
badgui.events.temp = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"gameId","gameId",-850842662),null,new cljs.core.Keyword(null,"t","t",-1397832519),null,new cljs.core.Keyword(null,"playerA","playerA",-270093465),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"played","played",-1713723590),null], null),new cljs.core.Keyword(null,"playerB","playerB",-1206753306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"played","played",-1713723590),null], null)], null);
badgui.events.parselive = (function badgui$events$parselive(input){
var s = input;
var s__$1 = cljs.core.rest(s.split("\""));
return cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),s__$1);
});
badgui.events.filltemp = (function badgui$events$filltemp(data){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(badgui.events.temp,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.second(data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gameId","gameId",-850842662),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(3))], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerA","playerA",-270093465),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(6))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerB","playerB",-1206753306),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(9)));
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"websocket","websocket",-1714963101),badgui.events.websocket_effect);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("badgui.events","connect-websocket","badgui.events/connect-websocket",-354299278),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"wss://bad-api-assignment.reaktor.com/rps/live",new cljs.core.Keyword(null,"on-message","on-message",1662987808),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","msg-handler","badgui.events/msg-handler",2031488510)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-success","websocket-success",34184364)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-failure","websocket-failure",-1220064393)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("badgui.events","initialize-db","badgui.events/initialize-db",-870770097),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"connecting","connecting",-1347943866),true))));

var result__27870__auto__ = (function (){var result__27877__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__27870__auto__ = badgui.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__27870__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__27870__auto__;
})(),new cljs.core.Keyword(null,"connecting","connecting",-1347943866),true);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__27877__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"connecting","connecting",-1347943866),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__27877__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__27870__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"connecting","connecting",-1347943866),true)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__27870__auto__;
}catch (e28040){var e = e28040;
throw e;
}}):(function (_,___$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(badgui.db.default_db,new cljs.core.Keyword(null,"connecting","connecting",-1347943866),true);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("badgui.events","fetch-results-succes","badgui.events/fetch-results-succes",-2023610374),(function (db,p__28041){
var vec__28042 = p__28041;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28042,(0),null);
var vec__28045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28042,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28045,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"name","name",1843675177),val);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("badgui.events","fetch-results","badgui.events/fetch-results",-97171637),(function (p__28048,_){
var map__28049 = p__28048;
var map__28049__$1 = cljs.core.__destructure_map(map__28049);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28049__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8080/history",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","fetch-results-success","badgui.events/fetch-results-success",-1077480533)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","fetch-results-failure","badgui.events/fetch-results-failure",-596311799)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("badgui.events","boxit","badgui.events/boxit",-1656565434),(function (p__28050,p__28051){
var map__28052 = p__28050;
var map__28052__$1 = cljs.core.__destructure_map(map__28052);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28052__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28053 = p__28051;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28053,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28053,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["./box/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"BOXBOXBOX"], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","box-handler","badgui.events/box-handler",-258012506)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","box-handler","badgui.events/box-handler",-258012506)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("badgui.events","box-handler","badgui.events/box-handler",-258012506),(function (db,p__28056){
var vec__28057 = p__28056;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28057,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28057,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword(null,"box","box",1530920394),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("badgui.events","msg-handler","badgui.events/msg-handler",2031488510),(function (_,p__28060){
var vec__28061 = p__28060;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28061,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28061,(1),null);
var msg = badgui.events.parselive(JSON.parse(message.data));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(msg),"GAME_BEGIN")){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","add-ongoing","badgui.events/add-ongoing",885410952),msg], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","update-handler","badgui.events/update-handler",-1991805487),msg], null));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("badgui.events","update-handler","badgui.events/update-handler",-1991805487),(function (_,p__28064){
var vec__28065 = p__28064;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28065,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28065,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","change-ongoing","badgui.events/change-ongoing",-1544430184),msg], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","update-backend","badgui.events/update-backend",-1266821368),msg], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(3000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","del-ongoing","badgui.events/del-ongoing",273228564),msg], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("badgui.events","add-ongoing","badgui.events/add-ongoing",885410952),(function (db,p__28068){
var vec__28069 = p__28068;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28069,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28069,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ongoing","ongoing",-30673877),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(3)))], null),badgui.events.filltemp(data));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("badgui.events","update-backend","badgui.events/update-backend",-1266821368),(function (db,p__28072){
var vec__28073 = p__28072;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28073,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28073,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"./wsdata",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gameId","gameId",-850842662),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(3)),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(5)),new cljs.core.Keyword(null,"playerA","playerA",-270093465),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(7)),new cljs.core.Keyword(null,"played","played",-1713723590),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(9))], null),new cljs.core.Keyword(null,"playerB","playerB",-1206753306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(12)),new cljs.core.Keyword(null,"played","played",-1713723590),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(14))], null)], null),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","success-post-result","badgui.events/success-post-result",-545161585)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("badgui.events","failure-post-result","badgui.events/failure-post-result",-1717777957)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("badgui.events","failure-post-result","badgui.events/failure-post-result",-1717777957),(function (db,p__28076){
var vec__28077 = p__28076;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28077,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28077,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256),result);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("badgui.events","change-ongoing","badgui.events/change-ongoing",-1544430184),(function (db,p__28080){
var vec__28081 = p__28080;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28081,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28081,(1),null);
if((!(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ongoing","ongoing",-30673877),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(3)))], null)))))){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ongoing","ongoing",-30673877),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(3))),new cljs.core.Keyword(null,"type","type",1174270348)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(1))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ongoing","ongoing",-30673877),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(3))),new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(5))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ongoing","ongoing",-30673877),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(3))),new cljs.core.Keyword(null,"playerA","playerA",-270093465),new cljs.core.Keyword(null,"played","played",-1713723590)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(9))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ongoing","ongoing",-30673877),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(3))),new cljs.core.Keyword(null,"playerB","playerB",-1206753306),new cljs.core.Keyword(null,"played","played",-1713723590)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(14)));
} else {
return null;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("badgui.events","del-ongoing","badgui.events/del-ongoing",273228564),(function (db,p__28084){
var vec__28085 = p__28084;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28085,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28085,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ongoing","ongoing",-30673877)], null),cljs.core.dissoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(3))));
}));

//# sourceMappingURL=badgui.events.js.map
