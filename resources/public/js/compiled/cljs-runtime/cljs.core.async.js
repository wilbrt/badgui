goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32466 = arguments.length;
switch (G__32466) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32467 = (function (f,blockable,meta32468){
this.f = f;
this.blockable = blockable;
this.meta32468 = meta32468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32469,meta32468__$1){
var self__ = this;
var _32469__$1 = this;
return (new cljs.core.async.t_cljs$core$async32467(self__.f,self__.blockable,meta32468__$1));
}));

(cljs.core.async.t_cljs$core$async32467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32469){
var self__ = this;
var _32469__$1 = this;
return self__.meta32468;
}));

(cljs.core.async.t_cljs$core$async32467.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32467.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32467.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32467.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32468","meta32468",-345538196,null)], null);
}));

(cljs.core.async.t_cljs$core$async32467.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32467");

(cljs.core.async.t_cljs$core$async32467.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32467");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32467.
 */
cljs.core.async.__GT_t_cljs$core$async32467 = (function cljs$core$async$__GT_t_cljs$core$async32467(f__$1,blockable__$1,meta32468){
return (new cljs.core.async.t_cljs$core$async32467(f__$1,blockable__$1,meta32468));
});

}

return (new cljs.core.async.t_cljs$core$async32467(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32488 = arguments.length;
switch (G__32488) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32496 = arguments.length;
switch (G__32496) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32498 = arguments.length;
switch (G__32498) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34535 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34535) : fn1.call(null,val_34535));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34535) : fn1.call(null,val_34535));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32500 = arguments.length;
switch (G__32500) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___34537 = n;
var x_34538 = (0);
while(true){
if((x_34538 < n__4741__auto___34537)){
(a[x_34538] = x_34538);

var G__34539 = (x_34538 + (1));
x_34538 = G__34539;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32501 = (function (flag,meta32502){
this.flag = flag;
this.meta32502 = meta32502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32503,meta32502__$1){
var self__ = this;
var _32503__$1 = this;
return (new cljs.core.async.t_cljs$core$async32501(self__.flag,meta32502__$1));
}));

(cljs.core.async.t_cljs$core$async32501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32503){
var self__ = this;
var _32503__$1 = this;
return self__.meta32502;
}));

(cljs.core.async.t_cljs$core$async32501.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32501.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32501.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32501.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32502","meta32502",2048328755,null)], null);
}));

(cljs.core.async.t_cljs$core$async32501.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32501");

(cljs.core.async.t_cljs$core$async32501.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32501");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32501.
 */
cljs.core.async.__GT_t_cljs$core$async32501 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32501(flag__$1,meta32502){
return (new cljs.core.async.t_cljs$core$async32501(flag__$1,meta32502));
});

}

return (new cljs.core.async.t_cljs$core$async32501(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32508 = (function (flag,cb,meta32509){
this.flag = flag;
this.cb = cb;
this.meta32509 = meta32509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32510,meta32509__$1){
var self__ = this;
var _32510__$1 = this;
return (new cljs.core.async.t_cljs$core$async32508(self__.flag,self__.cb,meta32509__$1));
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32510){
var self__ = this;
var _32510__$1 = this;
return self__.meta32509;
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32509","meta32509",-973935690,null)], null);
}));

(cljs.core.async.t_cljs$core$async32508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32508");

(cljs.core.async.t_cljs$core$async32508.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32508.
 */
cljs.core.async.__GT_t_cljs$core$async32508 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32508(flag__$1,cb__$1,meta32509){
return (new cljs.core.async.t_cljs$core$async32508(flag__$1,cb__$1,meta32509));
});

}

return (new cljs.core.async.t_cljs$core$async32508(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32511_SHARP_){
var G__32513 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32511_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32513) : fret.call(null,G__32513));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32512_SHARP_){
var G__32514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32512_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32514) : fret.call(null,G__32514));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34540 = (i + (1));
i = G__34540;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34541 = arguments.length;
var i__4865__auto___34542 = (0);
while(true){
if((i__4865__auto___34542 < len__4864__auto___34541)){
args__4870__auto__.push((arguments[i__4865__auto___34542]));

var G__34543 = (i__4865__auto___34542 + (1));
i__4865__auto___34542 = G__34543;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32517){
var map__32518 = p__32517;
var map__32518__$1 = cljs.core.__destructure_map(map__32518);
var opts = map__32518__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32515){
var G__32516 = cljs.core.first(seq32515);
var seq32515__$1 = cljs.core.next(seq32515);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32516,seq32515__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32520 = arguments.length;
switch (G__32520) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32391__auto___34549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_32546){
var state_val_32547 = (state_32546[(1)]);
if((state_val_32547 === (7))){
var inst_32542 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32548_34550 = state_32546__$1;
(statearr_32548_34550[(2)] = inst_32542);

(statearr_32548_34550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (1))){
var state_32546__$1 = state_32546;
var statearr_32549_34551 = state_32546__$1;
(statearr_32549_34551[(2)] = null);

(statearr_32549_34551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (4))){
var inst_32523 = (state_32546[(7)]);
var inst_32523__$1 = (state_32546[(2)]);
var inst_32524 = (inst_32523__$1 == null);
var state_32546__$1 = (function (){var statearr_32550 = state_32546;
(statearr_32550[(7)] = inst_32523__$1);

return statearr_32550;
})();
if(cljs.core.truth_(inst_32524)){
var statearr_32551_34552 = state_32546__$1;
(statearr_32551_34552[(1)] = (5));

} else {
var statearr_32552_34554 = state_32546__$1;
(statearr_32552_34554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (13))){
var state_32546__$1 = state_32546;
var statearr_32553_34555 = state_32546__$1;
(statearr_32553_34555[(2)] = null);

(statearr_32553_34555[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (6))){
var inst_32523 = (state_32546[(7)]);
var state_32546__$1 = state_32546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32546__$1,(11),to,inst_32523);
} else {
if((state_val_32547 === (3))){
var inst_32544 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32546__$1,inst_32544);
} else {
if((state_val_32547 === (12))){
var state_32546__$1 = state_32546;
var statearr_32554_34557 = state_32546__$1;
(statearr_32554_34557[(2)] = null);

(statearr_32554_34557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (2))){
var state_32546__$1 = state_32546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32546__$1,(4),from);
} else {
if((state_val_32547 === (11))){
var inst_32535 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
if(cljs.core.truth_(inst_32535)){
var statearr_32555_34558 = state_32546__$1;
(statearr_32555_34558[(1)] = (12));

} else {
var statearr_32556_34559 = state_32546__$1;
(statearr_32556_34559[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (9))){
var state_32546__$1 = state_32546;
var statearr_32557_34560 = state_32546__$1;
(statearr_32557_34560[(2)] = null);

(statearr_32557_34560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (5))){
var state_32546__$1 = state_32546;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32558_34561 = state_32546__$1;
(statearr_32558_34561[(1)] = (8));

} else {
var statearr_32559_34562 = state_32546__$1;
(statearr_32559_34562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (14))){
var inst_32540 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32560_34563 = state_32546__$1;
(statearr_32560_34563[(2)] = inst_32540);

(statearr_32560_34563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (10))){
var inst_32532 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32561_34564 = state_32546__$1;
(statearr_32561_34564[(2)] = inst_32532);

(statearr_32561_34564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (8))){
var inst_32528 = cljs.core.async.close_BANG_(to);
var state_32546__$1 = state_32546;
var statearr_32566_34565 = state_32546__$1;
(statearr_32566_34565[(2)] = inst_32528);

(statearr_32566_34565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_32567 = [null,null,null,null,null,null,null,null];
(statearr_32567[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_32567[(1)] = (1));

return statearr_32567;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_32546){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32546);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32568){var ex__32213__auto__ = e32568;
var statearr_32569_34566 = state_32546;
(statearr_32569_34566[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32546[(4)]))){
var statearr_32570_34567 = state_32546;
(statearr_32570_34567[(1)] = cljs.core.first((state_32546[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34570 = state_32546;
state_32546 = G__34570;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_32546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_32546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_32572 = f__32392__auto__();
(statearr_32572[(6)] = c__32391__auto___34549);

return statearr_32572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32575){
var vec__32576 = p__32575;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32576,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32576,(1),null);
var job = vec__32576;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32391__auto___34572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_32584){
var state_val_32585 = (state_32584[(1)]);
if((state_val_32585 === (1))){
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32584__$1,(2),res,v);
} else {
if((state_val_32585 === (2))){
var inst_32581 = (state_32584[(2)]);
var inst_32582 = cljs.core.async.close_BANG_(res);
var state_32584__$1 = (function (){var statearr_32588 = state_32584;
(statearr_32588[(7)] = inst_32581);

return statearr_32588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32584__$1,inst_32582);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0 = (function (){
var statearr_32593 = [null,null,null,null,null,null,null,null];
(statearr_32593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__);

(statearr_32593[(1)] = (1));

return statearr_32593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1 = (function (state_32584){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32584);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32595){var ex__32213__auto__ = e32595;
var statearr_32596_34573 = state_32584;
(statearr_32596_34573[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32584[(4)]))){
var statearr_32597_34574 = state_32584;
(statearr_32597_34574[(1)] = cljs.core.first((state_32584[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34576 = state_32584;
state_32584 = G__34576;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = function(state_32584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1.call(this,state_32584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_32599 = f__32392__auto__();
(statearr_32599[(6)] = c__32391__auto___34572);

return statearr_32599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32600){
var vec__32601 = p__32600;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32601,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32601,(1),null);
var job = vec__32601;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___34578 = n;
var __34579 = (0);
while(true){
if((__34579 < n__4741__auto___34578)){
var G__32604_34580 = type;
var G__32604_34581__$1 = (((G__32604_34580 instanceof cljs.core.Keyword))?G__32604_34580.fqn:null);
switch (G__32604_34581__$1) {
case "compute":
var c__32391__auto___34583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34579,c__32391__auto___34583,G__32604_34580,G__32604_34581__$1,n__4741__auto___34578,jobs,results,process,async){
return (function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = ((function (__34579,c__32391__auto___34583,G__32604_34580,G__32604_34581__$1,n__4741__auto___34578,jobs,results,process,async){
return (function (state_32617){
var state_val_32618 = (state_32617[(1)]);
if((state_val_32618 === (1))){
var state_32617__$1 = state_32617;
var statearr_32619_34585 = state_32617__$1;
(statearr_32619_34585[(2)] = null);

(statearr_32619_34585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (2))){
var state_32617__$1 = state_32617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32617__$1,(4),jobs);
} else {
if((state_val_32618 === (3))){
var inst_32615 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32617__$1,inst_32615);
} else {
if((state_val_32618 === (4))){
var inst_32607 = (state_32617[(2)]);
var inst_32608 = process(inst_32607);
var state_32617__$1 = state_32617;
if(cljs.core.truth_(inst_32608)){
var statearr_32620_34587 = state_32617__$1;
(statearr_32620_34587[(1)] = (5));

} else {
var statearr_32625_34588 = state_32617__$1;
(statearr_32625_34588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (5))){
var state_32617__$1 = state_32617;
var statearr_32626_34589 = state_32617__$1;
(statearr_32626_34589[(2)] = null);

(statearr_32626_34589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (6))){
var state_32617__$1 = state_32617;
var statearr_32627_34590 = state_32617__$1;
(statearr_32627_34590[(2)] = null);

(statearr_32627_34590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (7))){
var inst_32613 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
var statearr_32628_34591 = state_32617__$1;
(statearr_32628_34591[(2)] = inst_32613);

(statearr_32628_34591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34579,c__32391__auto___34583,G__32604_34580,G__32604_34581__$1,n__4741__auto___34578,jobs,results,process,async))
;
return ((function (__34579,switch__32209__auto__,c__32391__auto___34583,G__32604_34580,G__32604_34581__$1,n__4741__auto___34578,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0 = (function (){
var statearr_32629 = [null,null,null,null,null,null,null];
(statearr_32629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__);

(statearr_32629[(1)] = (1));

return statearr_32629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1 = (function (state_32617){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32617);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32630){var ex__32213__auto__ = e32630;
var statearr_32631_34593 = state_32617;
(statearr_32631_34593[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32617[(4)]))){
var statearr_32632_34594 = state_32617;
(statearr_32632_34594[(1)] = cljs.core.first((state_32617[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34596 = state_32617;
state_32617 = G__34596;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = function(state_32617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1.call(this,state_32617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__;
})()
;})(__34579,switch__32209__auto__,c__32391__auto___34583,G__32604_34580,G__32604_34581__$1,n__4741__auto___34578,jobs,results,process,async))
})();
var state__32393__auto__ = (function (){var statearr_32633 = f__32392__auto__();
(statearr_32633[(6)] = c__32391__auto___34583);

return statearr_32633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
});})(__34579,c__32391__auto___34583,G__32604_34580,G__32604_34581__$1,n__4741__auto___34578,jobs,results,process,async))
);


break;
case "async":
var c__32391__auto___34598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34579,c__32391__auto___34598,G__32604_34580,G__32604_34581__$1,n__4741__auto___34578,jobs,results,process,async){
return (function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = ((function (__34579,c__32391__auto___34598,G__32604_34580,G__32604_34581__$1,n__4741__auto___34578,jobs,results,process,async){
return (function (state_32646){
var state_val_32647 = (state_32646[(1)]);
if((state_val_32647 === (1))){
var state_32646__$1 = state_32646;
var statearr_32648_34600 = state_32646__$1;
(statearr_32648_34600[(2)] = null);

(statearr_32648_34600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32647 === (2))){
var state_32646__$1 = state_32646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32646__$1,(4),jobs);
} else {
if((state_val_32647 === (3))){
var inst_32644 = (state_32646[(2)]);
var state_32646__$1 = state_32646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32646__$1,inst_32644);
} else {
if((state_val_32647 === (4))){
var inst_32636 = (state_32646[(2)]);
var inst_32637 = async(inst_32636);
var state_32646__$1 = state_32646;
if(cljs.core.truth_(inst_32637)){
var statearr_32649_34601 = state_32646__$1;
(statearr_32649_34601[(1)] = (5));

} else {
var statearr_32650_34602 = state_32646__$1;
(statearr_32650_34602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32647 === (5))){
var state_32646__$1 = state_32646;
var statearr_32651_34603 = state_32646__$1;
(statearr_32651_34603[(2)] = null);

(statearr_32651_34603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32647 === (6))){
var state_32646__$1 = state_32646;
var statearr_32652_34604 = state_32646__$1;
(statearr_32652_34604[(2)] = null);

(statearr_32652_34604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32647 === (7))){
var inst_32642 = (state_32646[(2)]);
var state_32646__$1 = state_32646;
var statearr_32653_34605 = state_32646__$1;
(statearr_32653_34605[(2)] = inst_32642);

(statearr_32653_34605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34579,c__32391__auto___34598,G__32604_34580,G__32604_34581__$1,n__4741__auto___34578,jobs,results,process,async))
;
return ((function (__34579,switch__32209__auto__,c__32391__auto___34598,G__32604_34580,G__32604_34581__$1,n__4741__auto___34578,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0 = (function (){
var statearr_32654 = [null,null,null,null,null,null,null];
(statearr_32654[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__);

(statearr_32654[(1)] = (1));

return statearr_32654;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1 = (function (state_32646){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32646);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32655){var ex__32213__auto__ = e32655;
var statearr_32656_34606 = state_32646;
(statearr_32656_34606[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32646[(4)]))){
var statearr_32657_34607 = state_32646;
(statearr_32657_34607[(1)] = cljs.core.first((state_32646[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34609 = state_32646;
state_32646 = G__34609;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = function(state_32646){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1.call(this,state_32646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__;
})()
;})(__34579,switch__32209__auto__,c__32391__auto___34598,G__32604_34580,G__32604_34581__$1,n__4741__auto___34578,jobs,results,process,async))
})();
var state__32393__auto__ = (function (){var statearr_32658 = f__32392__auto__();
(statearr_32658[(6)] = c__32391__auto___34598);

return statearr_32658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
});})(__34579,c__32391__auto___34598,G__32604_34580,G__32604_34581__$1,n__4741__auto___34578,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32604_34581__$1)].join('')));

}

var G__34611 = (__34579 + (1));
__34579 = G__34611;
continue;
} else {
}
break;
}

var c__32391__auto___34612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_32680){
var state_val_32681 = (state_32680[(1)]);
if((state_val_32681 === (7))){
var inst_32676 = (state_32680[(2)]);
var state_32680__$1 = state_32680;
var statearr_32682_34613 = state_32680__$1;
(statearr_32682_34613[(2)] = inst_32676);

(statearr_32682_34613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32681 === (1))){
var state_32680__$1 = state_32680;
var statearr_32683_34615 = state_32680__$1;
(statearr_32683_34615[(2)] = null);

(statearr_32683_34615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32681 === (4))){
var inst_32661 = (state_32680[(7)]);
var inst_32661__$1 = (state_32680[(2)]);
var inst_32662 = (inst_32661__$1 == null);
var state_32680__$1 = (function (){var statearr_32684 = state_32680;
(statearr_32684[(7)] = inst_32661__$1);

return statearr_32684;
})();
if(cljs.core.truth_(inst_32662)){
var statearr_32685_34619 = state_32680__$1;
(statearr_32685_34619[(1)] = (5));

} else {
var statearr_32686_34620 = state_32680__$1;
(statearr_32686_34620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32681 === (6))){
var inst_32666 = (state_32680[(8)]);
var inst_32661 = (state_32680[(7)]);
var inst_32666__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32667 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32668 = [inst_32661,inst_32666__$1];
var inst_32669 = (new cljs.core.PersistentVector(null,2,(5),inst_32667,inst_32668,null));
var state_32680__$1 = (function (){var statearr_32687 = state_32680;
(statearr_32687[(8)] = inst_32666__$1);

return statearr_32687;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32680__$1,(8),jobs,inst_32669);
} else {
if((state_val_32681 === (3))){
var inst_32678 = (state_32680[(2)]);
var state_32680__$1 = state_32680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32680__$1,inst_32678);
} else {
if((state_val_32681 === (2))){
var state_32680__$1 = state_32680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32680__$1,(4),from);
} else {
if((state_val_32681 === (9))){
var inst_32673 = (state_32680[(2)]);
var state_32680__$1 = (function (){var statearr_32688 = state_32680;
(statearr_32688[(9)] = inst_32673);

return statearr_32688;
})();
var statearr_32689_34622 = state_32680__$1;
(statearr_32689_34622[(2)] = null);

(statearr_32689_34622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32681 === (5))){
var inst_32664 = cljs.core.async.close_BANG_(jobs);
var state_32680__$1 = state_32680;
var statearr_32690_34623 = state_32680__$1;
(statearr_32690_34623[(2)] = inst_32664);

(statearr_32690_34623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32681 === (8))){
var inst_32666 = (state_32680[(8)]);
var inst_32671 = (state_32680[(2)]);
var state_32680__$1 = (function (){var statearr_32691 = state_32680;
(statearr_32691[(10)] = inst_32671);

return statearr_32691;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32680__$1,(9),results,inst_32666);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0 = (function (){
var statearr_32692 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32692[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__);

(statearr_32692[(1)] = (1));

return statearr_32692;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1 = (function (state_32680){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32680);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32693){var ex__32213__auto__ = e32693;
var statearr_32694_34628 = state_32680;
(statearr_32694_34628[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32680[(4)]))){
var statearr_32695_34629 = state_32680;
(statearr_32695_34629[(1)] = cljs.core.first((state_32680[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34630 = state_32680;
state_32680 = G__34630;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = function(state_32680){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1.call(this,state_32680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_32696 = f__32392__auto__();
(statearr_32696[(6)] = c__32391__auto___34612);

return statearr_32696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));


var c__32391__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_32734){
var state_val_32735 = (state_32734[(1)]);
if((state_val_32735 === (7))){
var inst_32730 = (state_32734[(2)]);
var state_32734__$1 = state_32734;
var statearr_32736_34633 = state_32734__$1;
(statearr_32736_34633[(2)] = inst_32730);

(statearr_32736_34633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (20))){
var state_32734__$1 = state_32734;
var statearr_32737_34634 = state_32734__$1;
(statearr_32737_34634[(2)] = null);

(statearr_32737_34634[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (1))){
var state_32734__$1 = state_32734;
var statearr_32738_34635 = state_32734__$1;
(statearr_32738_34635[(2)] = null);

(statearr_32738_34635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (4))){
var inst_32699 = (state_32734[(7)]);
var inst_32699__$1 = (state_32734[(2)]);
var inst_32700 = (inst_32699__$1 == null);
var state_32734__$1 = (function (){var statearr_32739 = state_32734;
(statearr_32739[(7)] = inst_32699__$1);

return statearr_32739;
})();
if(cljs.core.truth_(inst_32700)){
var statearr_32740_34636 = state_32734__$1;
(statearr_32740_34636[(1)] = (5));

} else {
var statearr_32741_34637 = state_32734__$1;
(statearr_32741_34637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (15))){
var inst_32712 = (state_32734[(8)]);
var state_32734__$1 = state_32734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32734__$1,(18),to,inst_32712);
} else {
if((state_val_32735 === (21))){
var inst_32725 = (state_32734[(2)]);
var state_32734__$1 = state_32734;
var statearr_32742_34638 = state_32734__$1;
(statearr_32742_34638[(2)] = inst_32725);

(statearr_32742_34638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (13))){
var inst_32727 = (state_32734[(2)]);
var state_32734__$1 = (function (){var statearr_32743 = state_32734;
(statearr_32743[(9)] = inst_32727);

return statearr_32743;
})();
var statearr_32744_34639 = state_32734__$1;
(statearr_32744_34639[(2)] = null);

(statearr_32744_34639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (6))){
var inst_32699 = (state_32734[(7)]);
var state_32734__$1 = state_32734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32734__$1,(11),inst_32699);
} else {
if((state_val_32735 === (17))){
var inst_32720 = (state_32734[(2)]);
var state_32734__$1 = state_32734;
if(cljs.core.truth_(inst_32720)){
var statearr_32745_34640 = state_32734__$1;
(statearr_32745_34640[(1)] = (19));

} else {
var statearr_32746_34641 = state_32734__$1;
(statearr_32746_34641[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (3))){
var inst_32732 = (state_32734[(2)]);
var state_32734__$1 = state_32734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32734__$1,inst_32732);
} else {
if((state_val_32735 === (12))){
var inst_32709 = (state_32734[(10)]);
var state_32734__$1 = state_32734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32734__$1,(14),inst_32709);
} else {
if((state_val_32735 === (2))){
var state_32734__$1 = state_32734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32734__$1,(4),results);
} else {
if((state_val_32735 === (19))){
var state_32734__$1 = state_32734;
var statearr_32748_34647 = state_32734__$1;
(statearr_32748_34647[(2)] = null);

(statearr_32748_34647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (11))){
var inst_32709 = (state_32734[(2)]);
var state_32734__$1 = (function (){var statearr_32750 = state_32734;
(statearr_32750[(10)] = inst_32709);

return statearr_32750;
})();
var statearr_32751_34648 = state_32734__$1;
(statearr_32751_34648[(2)] = null);

(statearr_32751_34648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (9))){
var state_32734__$1 = state_32734;
var statearr_32752_34649 = state_32734__$1;
(statearr_32752_34649[(2)] = null);

(statearr_32752_34649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (5))){
var state_32734__$1 = state_32734;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32753_34650 = state_32734__$1;
(statearr_32753_34650[(1)] = (8));

} else {
var statearr_32754_34651 = state_32734__$1;
(statearr_32754_34651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (14))){
var inst_32714 = (state_32734[(11)]);
var inst_32712 = (state_32734[(8)]);
var inst_32712__$1 = (state_32734[(2)]);
var inst_32713 = (inst_32712__$1 == null);
var inst_32714__$1 = cljs.core.not(inst_32713);
var state_32734__$1 = (function (){var statearr_32755 = state_32734;
(statearr_32755[(11)] = inst_32714__$1);

(statearr_32755[(8)] = inst_32712__$1);

return statearr_32755;
})();
if(inst_32714__$1){
var statearr_32756_34652 = state_32734__$1;
(statearr_32756_34652[(1)] = (15));

} else {
var statearr_32757_34653 = state_32734__$1;
(statearr_32757_34653[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (16))){
var inst_32714 = (state_32734[(11)]);
var state_32734__$1 = state_32734;
var statearr_32758_34654 = state_32734__$1;
(statearr_32758_34654[(2)] = inst_32714);

(statearr_32758_34654[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (10))){
var inst_32706 = (state_32734[(2)]);
var state_32734__$1 = state_32734;
var statearr_32759_34655 = state_32734__$1;
(statearr_32759_34655[(2)] = inst_32706);

(statearr_32759_34655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (18))){
var inst_32717 = (state_32734[(2)]);
var state_32734__$1 = state_32734;
var statearr_32760_34656 = state_32734__$1;
(statearr_32760_34656[(2)] = inst_32717);

(statearr_32760_34656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32735 === (8))){
var inst_32703 = cljs.core.async.close_BANG_(to);
var state_32734__$1 = state_32734;
var statearr_32761_34657 = state_32734__$1;
(statearr_32761_34657[(2)] = inst_32703);

(statearr_32761_34657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0 = (function (){
var statearr_32762 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__);

(statearr_32762[(1)] = (1));

return statearr_32762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1 = (function (state_32734){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32734);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32763){var ex__32213__auto__ = e32763;
var statearr_32764_34658 = state_32734;
(statearr_32764_34658[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32734[(4)]))){
var statearr_32765_34665 = state_32734;
(statearr_32765_34665[(1)] = cljs.core.first((state_32734[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34667 = state_32734;
state_32734 = G__34667;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = function(state_32734){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1.call(this,state_32734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_32766 = f__32392__auto__();
(statearr_32766[(6)] = c__32391__auto__);

return statearr_32766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));

return c__32391__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32768 = arguments.length;
switch (G__32768) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32770 = arguments.length;
switch (G__32770) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32772 = arguments.length;
switch (G__32772) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32391__auto___34688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_32800){
var state_val_32801 = (state_32800[(1)]);
if((state_val_32801 === (7))){
var inst_32796 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32802_34692 = state_32800__$1;
(statearr_32802_34692[(2)] = inst_32796);

(statearr_32802_34692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (1))){
var state_32800__$1 = state_32800;
var statearr_32803_34693 = state_32800__$1;
(statearr_32803_34693[(2)] = null);

(statearr_32803_34693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (4))){
var inst_32775 = (state_32800[(7)]);
var inst_32775__$1 = (state_32800[(2)]);
var inst_32777 = (inst_32775__$1 == null);
var state_32800__$1 = (function (){var statearr_32804 = state_32800;
(statearr_32804[(7)] = inst_32775__$1);

return statearr_32804;
})();
if(cljs.core.truth_(inst_32777)){
var statearr_32805_34697 = state_32800__$1;
(statearr_32805_34697[(1)] = (5));

} else {
var statearr_32806_34698 = state_32800__$1;
(statearr_32806_34698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (13))){
var state_32800__$1 = state_32800;
var statearr_32807_34699 = state_32800__$1;
(statearr_32807_34699[(2)] = null);

(statearr_32807_34699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (6))){
var inst_32775 = (state_32800[(7)]);
var inst_32782 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32775) : p.call(null,inst_32775));
var state_32800__$1 = state_32800;
if(cljs.core.truth_(inst_32782)){
var statearr_32808_34701 = state_32800__$1;
(statearr_32808_34701[(1)] = (9));

} else {
var statearr_32809_34705 = state_32800__$1;
(statearr_32809_34705[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (3))){
var inst_32798 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32800__$1,inst_32798);
} else {
if((state_val_32801 === (12))){
var state_32800__$1 = state_32800;
var statearr_32811_34709 = state_32800__$1;
(statearr_32811_34709[(2)] = null);

(statearr_32811_34709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (2))){
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32800__$1,(4),ch);
} else {
if((state_val_32801 === (11))){
var inst_32775 = (state_32800[(7)]);
var inst_32786 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32800__$1,(8),inst_32786,inst_32775);
} else {
if((state_val_32801 === (9))){
var state_32800__$1 = state_32800;
var statearr_32813_34710 = state_32800__$1;
(statearr_32813_34710[(2)] = tc);

(statearr_32813_34710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (5))){
var inst_32779 = cljs.core.async.close_BANG_(tc);
var inst_32780 = cljs.core.async.close_BANG_(fc);
var state_32800__$1 = (function (){var statearr_32821 = state_32800;
(statearr_32821[(8)] = inst_32779);

return statearr_32821;
})();
var statearr_32822_34711 = state_32800__$1;
(statearr_32822_34711[(2)] = inst_32780);

(statearr_32822_34711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (14))){
var inst_32794 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32823_34712 = state_32800__$1;
(statearr_32823_34712[(2)] = inst_32794);

(statearr_32823_34712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (10))){
var state_32800__$1 = state_32800;
var statearr_32824_34713 = state_32800__$1;
(statearr_32824_34713[(2)] = fc);

(statearr_32824_34713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (8))){
var inst_32789 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
if(cljs.core.truth_(inst_32789)){
var statearr_32828_34714 = state_32800__$1;
(statearr_32828_34714[(1)] = (12));

} else {
var statearr_32829_34715 = state_32800__$1;
(statearr_32829_34715[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_32833 = [null,null,null,null,null,null,null,null,null];
(statearr_32833[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_32833[(1)] = (1));

return statearr_32833;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_32800){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32800);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32834){var ex__32213__auto__ = e32834;
var statearr_32835_34716 = state_32800;
(statearr_32835_34716[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32800[(4)]))){
var statearr_32836_34717 = state_32800;
(statearr_32836_34717[(1)] = cljs.core.first((state_32800[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34718 = state_32800;
state_32800 = G__34718;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_32800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_32800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_32840 = f__32392__auto__();
(statearr_32840[(6)] = c__32391__auto___34688);

return statearr_32840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32391__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_32862){
var state_val_32863 = (state_32862[(1)]);
if((state_val_32863 === (7))){
var inst_32858 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
var statearr_32864_34719 = state_32862__$1;
(statearr_32864_34719[(2)] = inst_32858);

(statearr_32864_34719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (1))){
var inst_32841 = init;
var inst_32842 = inst_32841;
var state_32862__$1 = (function (){var statearr_32866 = state_32862;
(statearr_32866[(7)] = inst_32842);

return statearr_32866;
})();
var statearr_32868_34720 = state_32862__$1;
(statearr_32868_34720[(2)] = null);

(statearr_32868_34720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (4))){
var inst_32845 = (state_32862[(8)]);
var inst_32845__$1 = (state_32862[(2)]);
var inst_32846 = (inst_32845__$1 == null);
var state_32862__$1 = (function (){var statearr_32869 = state_32862;
(statearr_32869[(8)] = inst_32845__$1);

return statearr_32869;
})();
if(cljs.core.truth_(inst_32846)){
var statearr_32870_34721 = state_32862__$1;
(statearr_32870_34721[(1)] = (5));

} else {
var statearr_32871_34722 = state_32862__$1;
(statearr_32871_34722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (6))){
var inst_32849 = (state_32862[(9)]);
var inst_32842 = (state_32862[(7)]);
var inst_32845 = (state_32862[(8)]);
var inst_32849__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32842,inst_32845) : f.call(null,inst_32842,inst_32845));
var inst_32850 = cljs.core.reduced_QMARK_(inst_32849__$1);
var state_32862__$1 = (function (){var statearr_32875 = state_32862;
(statearr_32875[(9)] = inst_32849__$1);

return statearr_32875;
})();
if(inst_32850){
var statearr_32876_34723 = state_32862__$1;
(statearr_32876_34723[(1)] = (8));

} else {
var statearr_32877_34724 = state_32862__$1;
(statearr_32877_34724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (3))){
var inst_32860 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32862__$1,inst_32860);
} else {
if((state_val_32863 === (2))){
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32862__$1,(4),ch);
} else {
if((state_val_32863 === (9))){
var inst_32849 = (state_32862[(9)]);
var inst_32842 = inst_32849;
var state_32862__$1 = (function (){var statearr_32878 = state_32862;
(statearr_32878[(7)] = inst_32842);

return statearr_32878;
})();
var statearr_32879_34725 = state_32862__$1;
(statearr_32879_34725[(2)] = null);

(statearr_32879_34725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (5))){
var inst_32842 = (state_32862[(7)]);
var state_32862__$1 = state_32862;
var statearr_32880_34728 = state_32862__$1;
(statearr_32880_34728[(2)] = inst_32842);

(statearr_32880_34728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (10))){
var inst_32856 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
var statearr_32881_34729 = state_32862__$1;
(statearr_32881_34729[(2)] = inst_32856);

(statearr_32881_34729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (8))){
var inst_32849 = (state_32862[(9)]);
var inst_32852 = cljs.core.deref(inst_32849);
var state_32862__$1 = state_32862;
var statearr_32882_34730 = state_32862__$1;
(statearr_32882_34730[(2)] = inst_32852);

(statearr_32882_34730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32210__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32210__auto____0 = (function (){
var statearr_32883 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32883[(0)] = cljs$core$async$reduce_$_state_machine__32210__auto__);

(statearr_32883[(1)] = (1));

return statearr_32883;
});
var cljs$core$async$reduce_$_state_machine__32210__auto____1 = (function (state_32862){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32862);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32884){var ex__32213__auto__ = e32884;
var statearr_32885_34735 = state_32862;
(statearr_32885_34735[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32862[(4)]))){
var statearr_32886_34736 = state_32862;
(statearr_32886_34736[(1)] = cljs.core.first((state_32862[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34737 = state_32862;
state_32862 = G__34737;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32210__auto__ = function(state_32862){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32210__auto____1.call(this,state_32862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32210__auto____0;
cljs$core$async$reduce_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32210__auto____1;
return cljs$core$async$reduce_$_state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_32887 = f__32392__auto__();
(statearr_32887[(6)] = c__32391__auto__);

return statearr_32887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));

return c__32391__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32391__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_32893){
var state_val_32894 = (state_32893[(1)]);
if((state_val_32894 === (1))){
var inst_32888 = cljs.core.async.reduce(f__$1,init,ch);
var state_32893__$1 = state_32893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32893__$1,(2),inst_32888);
} else {
if((state_val_32894 === (2))){
var inst_32890 = (state_32893[(2)]);
var inst_32891 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32890) : f__$1.call(null,inst_32890));
var state_32893__$1 = state_32893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32893__$1,inst_32891);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32210__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32210__auto____0 = (function (){
var statearr_32895 = [null,null,null,null,null,null,null];
(statearr_32895[(0)] = cljs$core$async$transduce_$_state_machine__32210__auto__);

(statearr_32895[(1)] = (1));

return statearr_32895;
});
var cljs$core$async$transduce_$_state_machine__32210__auto____1 = (function (state_32893){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32893);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32896){var ex__32213__auto__ = e32896;
var statearr_32897_34738 = state_32893;
(statearr_32897_34738[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32893[(4)]))){
var statearr_32898_34739 = state_32893;
(statearr_32898_34739[(1)] = cljs.core.first((state_32893[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34740 = state_32893;
state_32893 = G__34740;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32210__auto__ = function(state_32893){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32210__auto____1.call(this,state_32893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32210__auto____0;
cljs$core$async$transduce_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32210__auto____1;
return cljs$core$async$transduce_$_state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_32899 = f__32392__auto__();
(statearr_32899[(6)] = c__32391__auto__);

return statearr_32899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));

return c__32391__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32901 = arguments.length;
switch (G__32901) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32391__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_32927){
var state_val_32928 = (state_32927[(1)]);
if((state_val_32928 === (7))){
var inst_32908 = (state_32927[(2)]);
var state_32927__$1 = state_32927;
var statearr_32929_34742 = state_32927__$1;
(statearr_32929_34742[(2)] = inst_32908);

(statearr_32929_34742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (1))){
var inst_32902 = cljs.core.seq(coll);
var inst_32903 = inst_32902;
var state_32927__$1 = (function (){var statearr_32930 = state_32927;
(statearr_32930[(7)] = inst_32903);

return statearr_32930;
})();
var statearr_32931_34743 = state_32927__$1;
(statearr_32931_34743[(2)] = null);

(statearr_32931_34743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (4))){
var inst_32903 = (state_32927[(7)]);
var inst_32906 = cljs.core.first(inst_32903);
var state_32927__$1 = state_32927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32927__$1,(7),ch,inst_32906);
} else {
if((state_val_32928 === (13))){
var inst_32921 = (state_32927[(2)]);
var state_32927__$1 = state_32927;
var statearr_32933_34744 = state_32927__$1;
(statearr_32933_34744[(2)] = inst_32921);

(statearr_32933_34744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (6))){
var inst_32911 = (state_32927[(2)]);
var state_32927__$1 = state_32927;
if(cljs.core.truth_(inst_32911)){
var statearr_32934_34745 = state_32927__$1;
(statearr_32934_34745[(1)] = (8));

} else {
var statearr_32935_34746 = state_32927__$1;
(statearr_32935_34746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (3))){
var inst_32925 = (state_32927[(2)]);
var state_32927__$1 = state_32927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32927__$1,inst_32925);
} else {
if((state_val_32928 === (12))){
var state_32927__$1 = state_32927;
var statearr_32936_34752 = state_32927__$1;
(statearr_32936_34752[(2)] = null);

(statearr_32936_34752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (2))){
var inst_32903 = (state_32927[(7)]);
var state_32927__$1 = state_32927;
if(cljs.core.truth_(inst_32903)){
var statearr_32937_34759 = state_32927__$1;
(statearr_32937_34759[(1)] = (4));

} else {
var statearr_32938_34760 = state_32927__$1;
(statearr_32938_34760[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (11))){
var inst_32918 = cljs.core.async.close_BANG_(ch);
var state_32927__$1 = state_32927;
var statearr_32939_34761 = state_32927__$1;
(statearr_32939_34761[(2)] = inst_32918);

(statearr_32939_34761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (9))){
var state_32927__$1 = state_32927;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32940_34762 = state_32927__$1;
(statearr_32940_34762[(1)] = (11));

} else {
var statearr_32941_34763 = state_32927__$1;
(statearr_32941_34763[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (5))){
var inst_32903 = (state_32927[(7)]);
var state_32927__$1 = state_32927;
var statearr_32942_34764 = state_32927__$1;
(statearr_32942_34764[(2)] = inst_32903);

(statearr_32942_34764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (10))){
var inst_32923 = (state_32927[(2)]);
var state_32927__$1 = state_32927;
var statearr_32943_34767 = state_32927__$1;
(statearr_32943_34767[(2)] = inst_32923);

(statearr_32943_34767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32928 === (8))){
var inst_32903 = (state_32927[(7)]);
var inst_32913 = cljs.core.next(inst_32903);
var inst_32903__$1 = inst_32913;
var state_32927__$1 = (function (){var statearr_32944 = state_32927;
(statearr_32944[(7)] = inst_32903__$1);

return statearr_32944;
})();
var statearr_32945_34771 = state_32927__$1;
(statearr_32945_34771[(2)] = null);

(statearr_32945_34771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_32946 = [null,null,null,null,null,null,null,null];
(statearr_32946[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_32946[(1)] = (1));

return statearr_32946;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_32927){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32927);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32947){var ex__32213__auto__ = e32947;
var statearr_32948_34776 = state_32927;
(statearr_32948_34776[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32927[(4)]))){
var statearr_32949_34777 = state_32927;
(statearr_32949_34777[(1)] = cljs.core.first((state_32927[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34779 = state_32927;
state_32927 = G__34779;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_32927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_32927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_32950 = f__32392__auto__();
(statearr_32950[(6)] = c__32391__auto__);

return statearr_32950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));

return c__32391__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32953 = arguments.length;
switch (G__32953) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34784 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34784(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34792 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34792(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34793 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34793(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34797 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34797(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33043 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33043 = (function (ch,cs,meta33044){
this.ch = ch;
this.cs = cs;
this.meta33044 = meta33044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33045,meta33044__$1){
var self__ = this;
var _33045__$1 = this;
return (new cljs.core.async.t_cljs$core$async33043(self__.ch,self__.cs,meta33044__$1));
}));

(cljs.core.async.t_cljs$core$async33043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33045){
var self__ = this;
var _33045__$1 = this;
return self__.meta33044;
}));

(cljs.core.async.t_cljs$core$async33043.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33043.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33043.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33043.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33043.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33043.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33044","meta33044",-578118070,null)], null);
}));

(cljs.core.async.t_cljs$core$async33043.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33043");

(cljs.core.async.t_cljs$core$async33043.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33043");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33043.
 */
cljs.core.async.__GT_t_cljs$core$async33043 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33043(ch__$1,cs__$1,meta33044){
return (new cljs.core.async.t_cljs$core$async33043(ch__$1,cs__$1,meta33044));
});

}

return (new cljs.core.async.t_cljs$core$async33043(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32391__auto___34806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_33192){
var state_val_33193 = (state_33192[(1)]);
if((state_val_33193 === (7))){
var inst_33188 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33194_34808 = state_33192__$1;
(statearr_33194_34808[(2)] = inst_33188);

(statearr_33194_34808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (20))){
var inst_33093 = (state_33192[(7)]);
var inst_33105 = cljs.core.first(inst_33093);
var inst_33106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33105,(0),null);
var inst_33107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33105,(1),null);
var state_33192__$1 = (function (){var statearr_33195 = state_33192;
(statearr_33195[(8)] = inst_33106);

return statearr_33195;
})();
if(cljs.core.truth_(inst_33107)){
var statearr_33196_34810 = state_33192__$1;
(statearr_33196_34810[(1)] = (22));

} else {
var statearr_33197_34811 = state_33192__$1;
(statearr_33197_34811[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (27))){
var inst_33137 = (state_33192[(9)]);
var inst_33142 = (state_33192[(10)]);
var inst_33062 = (state_33192[(11)]);
var inst_33135 = (state_33192[(12)]);
var inst_33142__$1 = cljs.core._nth(inst_33135,inst_33137);
var inst_33143 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33142__$1,inst_33062,done);
var state_33192__$1 = (function (){var statearr_33198 = state_33192;
(statearr_33198[(10)] = inst_33142__$1);

return statearr_33198;
})();
if(cljs.core.truth_(inst_33143)){
var statearr_33199_34815 = state_33192__$1;
(statearr_33199_34815[(1)] = (30));

} else {
var statearr_33200_34816 = state_33192__$1;
(statearr_33200_34816[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (1))){
var state_33192__$1 = state_33192;
var statearr_33201_34817 = state_33192__$1;
(statearr_33201_34817[(2)] = null);

(statearr_33201_34817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (24))){
var inst_33093 = (state_33192[(7)]);
var inst_33112 = (state_33192[(2)]);
var inst_33113 = cljs.core.next(inst_33093);
var inst_33071 = inst_33113;
var inst_33072 = null;
var inst_33073 = (0);
var inst_33074 = (0);
var state_33192__$1 = (function (){var statearr_33202 = state_33192;
(statearr_33202[(13)] = inst_33071);

(statearr_33202[(14)] = inst_33074);

(statearr_33202[(15)] = inst_33073);

(statearr_33202[(16)] = inst_33112);

(statearr_33202[(17)] = inst_33072);

return statearr_33202;
})();
var statearr_33203_34819 = state_33192__$1;
(statearr_33203_34819[(2)] = null);

(statearr_33203_34819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (39))){
var state_33192__$1 = state_33192;
var statearr_33207_34820 = state_33192__$1;
(statearr_33207_34820[(2)] = null);

(statearr_33207_34820[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (4))){
var inst_33062 = (state_33192[(11)]);
var inst_33062__$1 = (state_33192[(2)]);
var inst_33063 = (inst_33062__$1 == null);
var state_33192__$1 = (function (){var statearr_33208 = state_33192;
(statearr_33208[(11)] = inst_33062__$1);

return statearr_33208;
})();
if(cljs.core.truth_(inst_33063)){
var statearr_33209_34821 = state_33192__$1;
(statearr_33209_34821[(1)] = (5));

} else {
var statearr_33210_34822 = state_33192__$1;
(statearr_33210_34822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (15))){
var inst_33071 = (state_33192[(13)]);
var inst_33074 = (state_33192[(14)]);
var inst_33073 = (state_33192[(15)]);
var inst_33072 = (state_33192[(17)]);
var inst_33089 = (state_33192[(2)]);
var inst_33090 = (inst_33074 + (1));
var tmp33204 = inst_33071;
var tmp33205 = inst_33073;
var tmp33206 = inst_33072;
var inst_33071__$1 = tmp33204;
var inst_33072__$1 = tmp33206;
var inst_33073__$1 = tmp33205;
var inst_33074__$1 = inst_33090;
var state_33192__$1 = (function (){var statearr_33211 = state_33192;
(statearr_33211[(13)] = inst_33071__$1);

(statearr_33211[(14)] = inst_33074__$1);

(statearr_33211[(18)] = inst_33089);

(statearr_33211[(15)] = inst_33073__$1);

(statearr_33211[(17)] = inst_33072__$1);

return statearr_33211;
})();
var statearr_33212_34823 = state_33192__$1;
(statearr_33212_34823[(2)] = null);

(statearr_33212_34823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (21))){
var inst_33116 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33216_34824 = state_33192__$1;
(statearr_33216_34824[(2)] = inst_33116);

(statearr_33216_34824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (31))){
var inst_33142 = (state_33192[(10)]);
var inst_33146 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33142);
var state_33192__$1 = state_33192;
var statearr_33217_34825 = state_33192__$1;
(statearr_33217_34825[(2)] = inst_33146);

(statearr_33217_34825[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (32))){
var inst_33136 = (state_33192[(19)]);
var inst_33137 = (state_33192[(9)]);
var inst_33134 = (state_33192[(20)]);
var inst_33135 = (state_33192[(12)]);
var inst_33148 = (state_33192[(2)]);
var inst_33149 = (inst_33137 + (1));
var tmp33213 = inst_33136;
var tmp33214 = inst_33134;
var tmp33215 = inst_33135;
var inst_33134__$1 = tmp33214;
var inst_33135__$1 = tmp33215;
var inst_33136__$1 = tmp33213;
var inst_33137__$1 = inst_33149;
var state_33192__$1 = (function (){var statearr_33218 = state_33192;
(statearr_33218[(21)] = inst_33148);

(statearr_33218[(19)] = inst_33136__$1);

(statearr_33218[(9)] = inst_33137__$1);

(statearr_33218[(20)] = inst_33134__$1);

(statearr_33218[(12)] = inst_33135__$1);

return statearr_33218;
})();
var statearr_33219_34826 = state_33192__$1;
(statearr_33219_34826[(2)] = null);

(statearr_33219_34826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (40))){
var inst_33161 = (state_33192[(22)]);
var inst_33165 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33161);
var state_33192__$1 = state_33192;
var statearr_33220_34827 = state_33192__$1;
(statearr_33220_34827[(2)] = inst_33165);

(statearr_33220_34827[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (33))){
var inst_33152 = (state_33192[(23)]);
var inst_33154 = cljs.core.chunked_seq_QMARK_(inst_33152);
var state_33192__$1 = state_33192;
if(inst_33154){
var statearr_33221_34828 = state_33192__$1;
(statearr_33221_34828[(1)] = (36));

} else {
var statearr_33222_34829 = state_33192__$1;
(statearr_33222_34829[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (13))){
var inst_33083 = (state_33192[(24)]);
var inst_33086 = cljs.core.async.close_BANG_(inst_33083);
var state_33192__$1 = state_33192;
var statearr_33223_34830 = state_33192__$1;
(statearr_33223_34830[(2)] = inst_33086);

(statearr_33223_34830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (22))){
var inst_33106 = (state_33192[(8)]);
var inst_33109 = cljs.core.async.close_BANG_(inst_33106);
var state_33192__$1 = state_33192;
var statearr_33224_34831 = state_33192__$1;
(statearr_33224_34831[(2)] = inst_33109);

(statearr_33224_34831[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (36))){
var inst_33152 = (state_33192[(23)]);
var inst_33156 = cljs.core.chunk_first(inst_33152);
var inst_33157 = cljs.core.chunk_rest(inst_33152);
var inst_33158 = cljs.core.count(inst_33156);
var inst_33134 = inst_33157;
var inst_33135 = inst_33156;
var inst_33136 = inst_33158;
var inst_33137 = (0);
var state_33192__$1 = (function (){var statearr_33225 = state_33192;
(statearr_33225[(19)] = inst_33136);

(statearr_33225[(9)] = inst_33137);

(statearr_33225[(20)] = inst_33134);

(statearr_33225[(12)] = inst_33135);

return statearr_33225;
})();
var statearr_33226_34832 = state_33192__$1;
(statearr_33226_34832[(2)] = null);

(statearr_33226_34832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (41))){
var inst_33152 = (state_33192[(23)]);
var inst_33167 = (state_33192[(2)]);
var inst_33168 = cljs.core.next(inst_33152);
var inst_33134 = inst_33168;
var inst_33135 = null;
var inst_33136 = (0);
var inst_33137 = (0);
var state_33192__$1 = (function (){var statearr_33227 = state_33192;
(statearr_33227[(19)] = inst_33136);

(statearr_33227[(9)] = inst_33137);

(statearr_33227[(20)] = inst_33134);

(statearr_33227[(25)] = inst_33167);

(statearr_33227[(12)] = inst_33135);

return statearr_33227;
})();
var statearr_33228_34833 = state_33192__$1;
(statearr_33228_34833[(2)] = null);

(statearr_33228_34833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (43))){
var state_33192__$1 = state_33192;
var statearr_33229_34834 = state_33192__$1;
(statearr_33229_34834[(2)] = null);

(statearr_33229_34834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (29))){
var inst_33176 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33230_34835 = state_33192__$1;
(statearr_33230_34835[(2)] = inst_33176);

(statearr_33230_34835[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (44))){
var inst_33185 = (state_33192[(2)]);
var state_33192__$1 = (function (){var statearr_33231 = state_33192;
(statearr_33231[(26)] = inst_33185);

return statearr_33231;
})();
var statearr_33232_34836 = state_33192__$1;
(statearr_33232_34836[(2)] = null);

(statearr_33232_34836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (6))){
var inst_33126 = (state_33192[(27)]);
var inst_33125 = cljs.core.deref(cs);
var inst_33126__$1 = cljs.core.keys(inst_33125);
var inst_33127 = cljs.core.count(inst_33126__$1);
var inst_33128 = cljs.core.reset_BANG_(dctr,inst_33127);
var inst_33133 = cljs.core.seq(inst_33126__$1);
var inst_33134 = inst_33133;
var inst_33135 = null;
var inst_33136 = (0);
var inst_33137 = (0);
var state_33192__$1 = (function (){var statearr_33234 = state_33192;
(statearr_33234[(19)] = inst_33136);

(statearr_33234[(9)] = inst_33137);

(statearr_33234[(28)] = inst_33128);

(statearr_33234[(20)] = inst_33134);

(statearr_33234[(27)] = inst_33126__$1);

(statearr_33234[(12)] = inst_33135);

return statearr_33234;
})();
var statearr_33235_34844 = state_33192__$1;
(statearr_33235_34844[(2)] = null);

(statearr_33235_34844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (28))){
var inst_33134 = (state_33192[(20)]);
var inst_33152 = (state_33192[(23)]);
var inst_33152__$1 = cljs.core.seq(inst_33134);
var state_33192__$1 = (function (){var statearr_33236 = state_33192;
(statearr_33236[(23)] = inst_33152__$1);

return statearr_33236;
})();
if(inst_33152__$1){
var statearr_33237_34845 = state_33192__$1;
(statearr_33237_34845[(1)] = (33));

} else {
var statearr_33238_34846 = state_33192__$1;
(statearr_33238_34846[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (25))){
var inst_33136 = (state_33192[(19)]);
var inst_33137 = (state_33192[(9)]);
var inst_33139 = (inst_33137 < inst_33136);
var inst_33140 = inst_33139;
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33140)){
var statearr_33239_34847 = state_33192__$1;
(statearr_33239_34847[(1)] = (27));

} else {
var statearr_33240_34848 = state_33192__$1;
(statearr_33240_34848[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (34))){
var state_33192__$1 = state_33192;
var statearr_33241_34849 = state_33192__$1;
(statearr_33241_34849[(2)] = null);

(statearr_33241_34849[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (17))){
var state_33192__$1 = state_33192;
var statearr_33242_34850 = state_33192__$1;
(statearr_33242_34850[(2)] = null);

(statearr_33242_34850[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (3))){
var inst_33190 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33192__$1,inst_33190);
} else {
if((state_val_33193 === (12))){
var inst_33121 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33243_34851 = state_33192__$1;
(statearr_33243_34851[(2)] = inst_33121);

(statearr_33243_34851[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (2))){
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33192__$1,(4),ch);
} else {
if((state_val_33193 === (23))){
var state_33192__$1 = state_33192;
var statearr_33244_34853 = state_33192__$1;
(statearr_33244_34853[(2)] = null);

(statearr_33244_34853[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (35))){
var inst_33174 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33245_34854 = state_33192__$1;
(statearr_33245_34854[(2)] = inst_33174);

(statearr_33245_34854[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (19))){
var inst_33093 = (state_33192[(7)]);
var inst_33097 = cljs.core.chunk_first(inst_33093);
var inst_33098 = cljs.core.chunk_rest(inst_33093);
var inst_33099 = cljs.core.count(inst_33097);
var inst_33071 = inst_33098;
var inst_33072 = inst_33097;
var inst_33073 = inst_33099;
var inst_33074 = (0);
var state_33192__$1 = (function (){var statearr_33246 = state_33192;
(statearr_33246[(13)] = inst_33071);

(statearr_33246[(14)] = inst_33074);

(statearr_33246[(15)] = inst_33073);

(statearr_33246[(17)] = inst_33072);

return statearr_33246;
})();
var statearr_33247_34858 = state_33192__$1;
(statearr_33247_34858[(2)] = null);

(statearr_33247_34858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (11))){
var inst_33071 = (state_33192[(13)]);
var inst_33093 = (state_33192[(7)]);
var inst_33093__$1 = cljs.core.seq(inst_33071);
var state_33192__$1 = (function (){var statearr_33248 = state_33192;
(statearr_33248[(7)] = inst_33093__$1);

return statearr_33248;
})();
if(inst_33093__$1){
var statearr_33249_34865 = state_33192__$1;
(statearr_33249_34865[(1)] = (16));

} else {
var statearr_33250_34866 = state_33192__$1;
(statearr_33250_34866[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (9))){
var inst_33123 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33251_34867 = state_33192__$1;
(statearr_33251_34867[(2)] = inst_33123);

(statearr_33251_34867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (5))){
var inst_33069 = cljs.core.deref(cs);
var inst_33070 = cljs.core.seq(inst_33069);
var inst_33071 = inst_33070;
var inst_33072 = null;
var inst_33073 = (0);
var inst_33074 = (0);
var state_33192__$1 = (function (){var statearr_33252 = state_33192;
(statearr_33252[(13)] = inst_33071);

(statearr_33252[(14)] = inst_33074);

(statearr_33252[(15)] = inst_33073);

(statearr_33252[(17)] = inst_33072);

return statearr_33252;
})();
var statearr_33254_34869 = state_33192__$1;
(statearr_33254_34869[(2)] = null);

(statearr_33254_34869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (14))){
var state_33192__$1 = state_33192;
var statearr_33255_34870 = state_33192__$1;
(statearr_33255_34870[(2)] = null);

(statearr_33255_34870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (45))){
var inst_33182 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33256_34872 = state_33192__$1;
(statearr_33256_34872[(2)] = inst_33182);

(statearr_33256_34872[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (26))){
var inst_33126 = (state_33192[(27)]);
var inst_33178 = (state_33192[(2)]);
var inst_33179 = cljs.core.seq(inst_33126);
var state_33192__$1 = (function (){var statearr_33257 = state_33192;
(statearr_33257[(29)] = inst_33178);

return statearr_33257;
})();
if(inst_33179){
var statearr_33258_34874 = state_33192__$1;
(statearr_33258_34874[(1)] = (42));

} else {
var statearr_33259_34875 = state_33192__$1;
(statearr_33259_34875[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (16))){
var inst_33093 = (state_33192[(7)]);
var inst_33095 = cljs.core.chunked_seq_QMARK_(inst_33093);
var state_33192__$1 = state_33192;
if(inst_33095){
var statearr_33260_34876 = state_33192__$1;
(statearr_33260_34876[(1)] = (19));

} else {
var statearr_33261_34877 = state_33192__$1;
(statearr_33261_34877[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (38))){
var inst_33171 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33262_34878 = state_33192__$1;
(statearr_33262_34878[(2)] = inst_33171);

(statearr_33262_34878[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (30))){
var state_33192__$1 = state_33192;
var statearr_33263_34879 = state_33192__$1;
(statearr_33263_34879[(2)] = null);

(statearr_33263_34879[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (10))){
var inst_33074 = (state_33192[(14)]);
var inst_33072 = (state_33192[(17)]);
var inst_33082 = cljs.core._nth(inst_33072,inst_33074);
var inst_33083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33082,(0),null);
var inst_33084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33082,(1),null);
var state_33192__$1 = (function (){var statearr_33264 = state_33192;
(statearr_33264[(24)] = inst_33083);

return statearr_33264;
})();
if(cljs.core.truth_(inst_33084)){
var statearr_33266_34880 = state_33192__$1;
(statearr_33266_34880[(1)] = (13));

} else {
var statearr_33267_34881 = state_33192__$1;
(statearr_33267_34881[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (18))){
var inst_33119 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33268_34882 = state_33192__$1;
(statearr_33268_34882[(2)] = inst_33119);

(statearr_33268_34882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (42))){
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33192__$1,(45),dchan);
} else {
if((state_val_33193 === (37))){
var inst_33062 = (state_33192[(11)]);
var inst_33161 = (state_33192[(22)]);
var inst_33152 = (state_33192[(23)]);
var inst_33161__$1 = cljs.core.first(inst_33152);
var inst_33162 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33161__$1,inst_33062,done);
var state_33192__$1 = (function (){var statearr_33269 = state_33192;
(statearr_33269[(22)] = inst_33161__$1);

return statearr_33269;
})();
if(cljs.core.truth_(inst_33162)){
var statearr_33270_34883 = state_33192__$1;
(statearr_33270_34883[(1)] = (39));

} else {
var statearr_33271_34884 = state_33192__$1;
(statearr_33271_34884[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (8))){
var inst_33074 = (state_33192[(14)]);
var inst_33073 = (state_33192[(15)]);
var inst_33076 = (inst_33074 < inst_33073);
var inst_33077 = inst_33076;
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33077)){
var statearr_33272_34885 = state_33192__$1;
(statearr_33272_34885[(1)] = (10));

} else {
var statearr_33274_34886 = state_33192__$1;
(statearr_33274_34886[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32210__auto__ = null;
var cljs$core$async$mult_$_state_machine__32210__auto____0 = (function (){
var statearr_33277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33277[(0)] = cljs$core$async$mult_$_state_machine__32210__auto__);

(statearr_33277[(1)] = (1));

return statearr_33277;
});
var cljs$core$async$mult_$_state_machine__32210__auto____1 = (function (state_33192){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_33192);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33278){var ex__32213__auto__ = e33278;
var statearr_33279_34891 = state_33192;
(statearr_33279_34891[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_33192[(4)]))){
var statearr_33280_34892 = state_33192;
(statearr_33280_34892[(1)] = cljs.core.first((state_33192[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34893 = state_33192;
state_33192 = G__34893;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32210__auto__ = function(state_33192){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32210__auto____1.call(this,state_33192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32210__auto____0;
cljs$core$async$mult_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32210__auto____1;
return cljs$core$async$mult_$_state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_33282 = f__32392__auto__();
(statearr_33282[(6)] = c__32391__auto___34806);

return statearr_33282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33284 = arguments.length;
switch (G__33284) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34903 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34903(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34911 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34911(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34922 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34922(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34923 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34923(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34924 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34924(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34925 = arguments.length;
var i__4865__auto___34926 = (0);
while(true){
if((i__4865__auto___34926 < len__4864__auto___34925)){
args__4870__auto__.push((arguments[i__4865__auto___34926]));

var G__34927 = (i__4865__auto___34926 + (1));
i__4865__auto___34926 = G__34927;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33299){
var map__33301 = p__33299;
var map__33301__$1 = cljs.core.__destructure_map(map__33301);
var opts = map__33301__$1;
var statearr_33303_34928 = state;
(statearr_33303_34928[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33312_34929 = state;
(statearr_33312_34929[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33313_34930 = state;
(statearr_33313_34930[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33295){
var G__33296 = cljs.core.first(seq33295);
var seq33295__$1 = cljs.core.next(seq33295);
var G__33297 = cljs.core.first(seq33295__$1);
var seq33295__$2 = cljs.core.next(seq33295__$1);
var G__33298 = cljs.core.first(seq33295__$2);
var seq33295__$3 = cljs.core.next(seq33295__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33296,G__33297,G__33298,seq33295__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33317 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33317 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33318){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33318 = meta33318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33319,meta33318__$1){
var self__ = this;
var _33319__$1 = this;
return (new cljs.core.async.t_cljs$core$async33317(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33318__$1));
}));

(cljs.core.async.t_cljs$core$async33317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33319){
var self__ = this;
var _33319__$1 = this;
return self__.meta33318;
}));

(cljs.core.async.t_cljs$core$async33317.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33317.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33317.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33317.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33317.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33317.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33317.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33317.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33318","meta33318",-1265970506,null)], null);
}));

(cljs.core.async.t_cljs$core$async33317.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33317");

(cljs.core.async.t_cljs$core$async33317.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33317");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33317.
 */
cljs.core.async.__GT_t_cljs$core$async33317 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33317(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33318){
return (new cljs.core.async.t_cljs$core$async33317(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33318));
});

}

return (new cljs.core.async.t_cljs$core$async33317(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32391__auto___34948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_33398){
var state_val_33399 = (state_33398[(1)]);
if((state_val_33399 === (7))){
var inst_33355 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
if(cljs.core.truth_(inst_33355)){
var statearr_33400_34949 = state_33398__$1;
(statearr_33400_34949[(1)] = (8));

} else {
var statearr_33403_34950 = state_33398__$1;
(statearr_33403_34950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (20))){
var inst_33348 = (state_33398[(7)]);
var state_33398__$1 = state_33398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33398__$1,(23),out,inst_33348);
} else {
if((state_val_33399 === (1))){
var inst_33331 = calc_state();
var inst_33332 = cljs.core.__destructure_map(inst_33331);
var inst_33333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33332,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33332,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33332,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33336 = inst_33331;
var state_33398__$1 = (function (){var statearr_33407 = state_33398;
(statearr_33407[(8)] = inst_33334);

(statearr_33407[(9)] = inst_33335);

(statearr_33407[(10)] = inst_33336);

(statearr_33407[(11)] = inst_33333);

return statearr_33407;
})();
var statearr_33408_34951 = state_33398__$1;
(statearr_33408_34951[(2)] = null);

(statearr_33408_34951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (24))){
var inst_33339 = (state_33398[(12)]);
var inst_33336 = inst_33339;
var state_33398__$1 = (function (){var statearr_33409 = state_33398;
(statearr_33409[(10)] = inst_33336);

return statearr_33409;
})();
var statearr_33410_34952 = state_33398__$1;
(statearr_33410_34952[(2)] = null);

(statearr_33410_34952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (4))){
var inst_33350 = (state_33398[(13)]);
var inst_33348 = (state_33398[(7)]);
var inst_33347 = (state_33398[(2)]);
var inst_33348__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33347,(0),null);
var inst_33349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33347,(1),null);
var inst_33350__$1 = (inst_33348__$1 == null);
var state_33398__$1 = (function (){var statearr_33411 = state_33398;
(statearr_33411[(13)] = inst_33350__$1);

(statearr_33411[(14)] = inst_33349);

(statearr_33411[(7)] = inst_33348__$1);

return statearr_33411;
})();
if(cljs.core.truth_(inst_33350__$1)){
var statearr_33412_34953 = state_33398__$1;
(statearr_33412_34953[(1)] = (5));

} else {
var statearr_33413_34954 = state_33398__$1;
(statearr_33413_34954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (15))){
var inst_33370 = (state_33398[(15)]);
var inst_33340 = (state_33398[(16)]);
var inst_33370__$1 = cljs.core.empty_QMARK_(inst_33340);
var state_33398__$1 = (function (){var statearr_33414 = state_33398;
(statearr_33414[(15)] = inst_33370__$1);

return statearr_33414;
})();
if(inst_33370__$1){
var statearr_33416_34955 = state_33398__$1;
(statearr_33416_34955[(1)] = (17));

} else {
var statearr_33417_34956 = state_33398__$1;
(statearr_33417_34956[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (21))){
var inst_33339 = (state_33398[(12)]);
var inst_33336 = inst_33339;
var state_33398__$1 = (function (){var statearr_33418 = state_33398;
(statearr_33418[(10)] = inst_33336);

return statearr_33418;
})();
var statearr_33419_34957 = state_33398__$1;
(statearr_33419_34957[(2)] = null);

(statearr_33419_34957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (13))){
var inst_33362 = (state_33398[(2)]);
var inst_33363 = calc_state();
var inst_33336 = inst_33363;
var state_33398__$1 = (function (){var statearr_33422 = state_33398;
(statearr_33422[(10)] = inst_33336);

(statearr_33422[(17)] = inst_33362);

return statearr_33422;
})();
var statearr_33423_34958 = state_33398__$1;
(statearr_33423_34958[(2)] = null);

(statearr_33423_34958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (22))){
var inst_33392 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33429_34959 = state_33398__$1;
(statearr_33429_34959[(2)] = inst_33392);

(statearr_33429_34959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (6))){
var inst_33349 = (state_33398[(14)]);
var inst_33353 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33349,change);
var state_33398__$1 = state_33398;
var statearr_33431_34960 = state_33398__$1;
(statearr_33431_34960[(2)] = inst_33353);

(statearr_33431_34960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (25))){
var state_33398__$1 = state_33398;
var statearr_33432_34961 = state_33398__$1;
(statearr_33432_34961[(2)] = null);

(statearr_33432_34961[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (17))){
var inst_33341 = (state_33398[(18)]);
var inst_33349 = (state_33398[(14)]);
var inst_33372 = (inst_33341.cljs$core$IFn$_invoke$arity$1 ? inst_33341.cljs$core$IFn$_invoke$arity$1(inst_33349) : inst_33341.call(null,inst_33349));
var inst_33373 = cljs.core.not(inst_33372);
var state_33398__$1 = state_33398;
var statearr_33435_34962 = state_33398__$1;
(statearr_33435_34962[(2)] = inst_33373);

(statearr_33435_34962[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (3))){
var inst_33396 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33398__$1,inst_33396);
} else {
if((state_val_33399 === (12))){
var state_33398__$1 = state_33398;
var statearr_33436_34963 = state_33398__$1;
(statearr_33436_34963[(2)] = null);

(statearr_33436_34963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (2))){
var inst_33336 = (state_33398[(10)]);
var inst_33339 = (state_33398[(12)]);
var inst_33339__$1 = cljs.core.__destructure_map(inst_33336);
var inst_33340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33339__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33339__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33339__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33398__$1 = (function (){var statearr_33437 = state_33398;
(statearr_33437[(18)] = inst_33341);

(statearr_33437[(16)] = inst_33340);

(statearr_33437[(12)] = inst_33339__$1);

return statearr_33437;
})();
return cljs.core.async.ioc_alts_BANG_(state_33398__$1,(4),inst_33342);
} else {
if((state_val_33399 === (23))){
var inst_33383 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
if(cljs.core.truth_(inst_33383)){
var statearr_33438_34964 = state_33398__$1;
(statearr_33438_34964[(1)] = (24));

} else {
var statearr_33440_34965 = state_33398__$1;
(statearr_33440_34965[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (19))){
var inst_33376 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33443_34966 = state_33398__$1;
(statearr_33443_34966[(2)] = inst_33376);

(statearr_33443_34966[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (11))){
var inst_33349 = (state_33398[(14)]);
var inst_33359 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33349);
var state_33398__$1 = state_33398;
var statearr_33444_34967 = state_33398__$1;
(statearr_33444_34967[(2)] = inst_33359);

(statearr_33444_34967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (9))){
var inst_33367 = (state_33398[(19)]);
var inst_33340 = (state_33398[(16)]);
var inst_33349 = (state_33398[(14)]);
var inst_33367__$1 = (inst_33340.cljs$core$IFn$_invoke$arity$1 ? inst_33340.cljs$core$IFn$_invoke$arity$1(inst_33349) : inst_33340.call(null,inst_33349));
var state_33398__$1 = (function (){var statearr_33445 = state_33398;
(statearr_33445[(19)] = inst_33367__$1);

return statearr_33445;
})();
if(cljs.core.truth_(inst_33367__$1)){
var statearr_33446_34968 = state_33398__$1;
(statearr_33446_34968[(1)] = (14));

} else {
var statearr_33447_34969 = state_33398__$1;
(statearr_33447_34969[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (5))){
var inst_33350 = (state_33398[(13)]);
var state_33398__$1 = state_33398;
var statearr_33448_34970 = state_33398__$1;
(statearr_33448_34970[(2)] = inst_33350);

(statearr_33448_34970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (14))){
var inst_33367 = (state_33398[(19)]);
var state_33398__$1 = state_33398;
var statearr_33449_34971 = state_33398__$1;
(statearr_33449_34971[(2)] = inst_33367);

(statearr_33449_34971[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (26))){
var inst_33388 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33451_34972 = state_33398__$1;
(statearr_33451_34972[(2)] = inst_33388);

(statearr_33451_34972[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (16))){
var inst_33378 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
if(cljs.core.truth_(inst_33378)){
var statearr_33452_34973 = state_33398__$1;
(statearr_33452_34973[(1)] = (20));

} else {
var statearr_33453_34974 = state_33398__$1;
(statearr_33453_34974[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (10))){
var inst_33394 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33458_34975 = state_33398__$1;
(statearr_33458_34975[(2)] = inst_33394);

(statearr_33458_34975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (18))){
var inst_33370 = (state_33398[(15)]);
var state_33398__$1 = state_33398;
var statearr_33459_34982 = state_33398__$1;
(statearr_33459_34982[(2)] = inst_33370);

(statearr_33459_34982[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (8))){
var inst_33348 = (state_33398[(7)]);
var inst_33357 = (inst_33348 == null);
var state_33398__$1 = state_33398;
if(cljs.core.truth_(inst_33357)){
var statearr_33460_34983 = state_33398__$1;
(statearr_33460_34983[(1)] = (11));

} else {
var statearr_33461_34984 = state_33398__$1;
(statearr_33461_34984[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32210__auto__ = null;
var cljs$core$async$mix_$_state_machine__32210__auto____0 = (function (){
var statearr_33462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33462[(0)] = cljs$core$async$mix_$_state_machine__32210__auto__);

(statearr_33462[(1)] = (1));

return statearr_33462;
});
var cljs$core$async$mix_$_state_machine__32210__auto____1 = (function (state_33398){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_33398);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33464){var ex__32213__auto__ = e33464;
var statearr_33465_34985 = state_33398;
(statearr_33465_34985[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_33398[(4)]))){
var statearr_33466_34986 = state_33398;
(statearr_33466_34986[(1)] = cljs.core.first((state_33398[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34987 = state_33398;
state_33398 = G__34987;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32210__auto__ = function(state_33398){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32210__auto____1.call(this,state_33398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32210__auto____0;
cljs$core$async$mix_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32210__auto____1;
return cljs$core$async$mix_$_state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_33474 = f__32392__auto__();
(statearr_33474[(6)] = c__32391__auto___34948);

return statearr_33474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34988 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34988(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34989 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34989(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34990 = (function() {
var G__34991 = null;
var G__34991__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34991__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34991 = function(p,v){
switch(arguments.length){
case 1:
return G__34991__1.call(this,p);
case 2:
return G__34991__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34991.cljs$core$IFn$_invoke$arity$1 = G__34991__1;
G__34991.cljs$core$IFn$_invoke$arity$2 = G__34991__2;
return G__34991;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33507 = arguments.length;
switch (G__33507) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34990(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34990(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33511 = arguments.length;
switch (G__33511) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33508_SHARP_){
if(cljs.core.truth_((p1__33508_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33508_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33508_SHARP_.call(null,topic)))){
return p1__33508_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33508_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33512 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33512 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33513){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33513 = meta33513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33514,meta33513__$1){
var self__ = this;
var _33514__$1 = this;
return (new cljs.core.async.t_cljs$core$async33512(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33513__$1));
}));

(cljs.core.async.t_cljs$core$async33512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33514){
var self__ = this;
var _33514__$1 = this;
return self__.meta33513;
}));

(cljs.core.async.t_cljs$core$async33512.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33512.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33512.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33512.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33512.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33512.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33512.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33513","meta33513",258597542,null)], null);
}));

(cljs.core.async.t_cljs$core$async33512.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33512");

(cljs.core.async.t_cljs$core$async33512.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33512");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33512.
 */
cljs.core.async.__GT_t_cljs$core$async33512 = (function cljs$core$async$__GT_t_cljs$core$async33512(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33513){
return (new cljs.core.async.t_cljs$core$async33512(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33513));
});

}

return (new cljs.core.async.t_cljs$core$async33512(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32391__auto___35000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_33609){
var state_val_33610 = (state_33609[(1)]);
if((state_val_33610 === (7))){
var inst_33604 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33611_35001 = state_33609__$1;
(statearr_33611_35001[(2)] = inst_33604);

(statearr_33611_35001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (20))){
var state_33609__$1 = state_33609;
var statearr_33612_35002 = state_33609__$1;
(statearr_33612_35002[(2)] = null);

(statearr_33612_35002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (1))){
var state_33609__$1 = state_33609;
var statearr_33613_35003 = state_33609__$1;
(statearr_33613_35003[(2)] = null);

(statearr_33613_35003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (24))){
var inst_33587 = (state_33609[(7)]);
var inst_33596 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33587);
var state_33609__$1 = state_33609;
var statearr_33615_35004 = state_33609__$1;
(statearr_33615_35004[(2)] = inst_33596);

(statearr_33615_35004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (4))){
var inst_33539 = (state_33609[(8)]);
var inst_33539__$1 = (state_33609[(2)]);
var inst_33540 = (inst_33539__$1 == null);
var state_33609__$1 = (function (){var statearr_33616 = state_33609;
(statearr_33616[(8)] = inst_33539__$1);

return statearr_33616;
})();
if(cljs.core.truth_(inst_33540)){
var statearr_33617_35005 = state_33609__$1;
(statearr_33617_35005[(1)] = (5));

} else {
var statearr_33618_35006 = state_33609__$1;
(statearr_33618_35006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (15))){
var inst_33581 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33619_35007 = state_33609__$1;
(statearr_33619_35007[(2)] = inst_33581);

(statearr_33619_35007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (21))){
var inst_33601 = (state_33609[(2)]);
var state_33609__$1 = (function (){var statearr_33620 = state_33609;
(statearr_33620[(9)] = inst_33601);

return statearr_33620;
})();
var statearr_33621_35011 = state_33609__$1;
(statearr_33621_35011[(2)] = null);

(statearr_33621_35011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (13))){
var inst_33563 = (state_33609[(10)]);
var inst_33565 = cljs.core.chunked_seq_QMARK_(inst_33563);
var state_33609__$1 = state_33609;
if(inst_33565){
var statearr_33622_35012 = state_33609__$1;
(statearr_33622_35012[(1)] = (16));

} else {
var statearr_33623_35013 = state_33609__$1;
(statearr_33623_35013[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (22))){
var inst_33593 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
if(cljs.core.truth_(inst_33593)){
var statearr_33625_35014 = state_33609__$1;
(statearr_33625_35014[(1)] = (23));

} else {
var statearr_33626_35015 = state_33609__$1;
(statearr_33626_35015[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (6))){
var inst_33539 = (state_33609[(8)]);
var inst_33589 = (state_33609[(11)]);
var inst_33587 = (state_33609[(7)]);
var inst_33587__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33539) : topic_fn.call(null,inst_33539));
var inst_33588 = cljs.core.deref(mults);
var inst_33589__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33588,inst_33587__$1);
var state_33609__$1 = (function (){var statearr_33627 = state_33609;
(statearr_33627[(11)] = inst_33589__$1);

(statearr_33627[(7)] = inst_33587__$1);

return statearr_33627;
})();
if(cljs.core.truth_(inst_33589__$1)){
var statearr_33628_35016 = state_33609__$1;
(statearr_33628_35016[(1)] = (19));

} else {
var statearr_33629_35017 = state_33609__$1;
(statearr_33629_35017[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (25))){
var inst_33598 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33630_35018 = state_33609__$1;
(statearr_33630_35018[(2)] = inst_33598);

(statearr_33630_35018[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (17))){
var inst_33563 = (state_33609[(10)]);
var inst_33572 = cljs.core.first(inst_33563);
var inst_33573 = cljs.core.async.muxch_STAR_(inst_33572);
var inst_33574 = cljs.core.async.close_BANG_(inst_33573);
var inst_33575 = cljs.core.next(inst_33563);
var inst_33549 = inst_33575;
var inst_33550 = null;
var inst_33551 = (0);
var inst_33552 = (0);
var state_33609__$1 = (function (){var statearr_33632 = state_33609;
(statearr_33632[(12)] = inst_33552);

(statearr_33632[(13)] = inst_33549);

(statearr_33632[(14)] = inst_33551);

(statearr_33632[(15)] = inst_33550);

(statearr_33632[(16)] = inst_33574);

return statearr_33632;
})();
var statearr_33633_35019 = state_33609__$1;
(statearr_33633_35019[(2)] = null);

(statearr_33633_35019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (3))){
var inst_33606 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33609__$1,inst_33606);
} else {
if((state_val_33610 === (12))){
var inst_33583 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33634_35020 = state_33609__$1;
(statearr_33634_35020[(2)] = inst_33583);

(statearr_33634_35020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (2))){
var state_33609__$1 = state_33609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33609__$1,(4),ch);
} else {
if((state_val_33610 === (23))){
var state_33609__$1 = state_33609;
var statearr_33635_35022 = state_33609__$1;
(statearr_33635_35022[(2)] = null);

(statearr_33635_35022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (19))){
var inst_33539 = (state_33609[(8)]);
var inst_33589 = (state_33609[(11)]);
var inst_33591 = cljs.core.async.muxch_STAR_(inst_33589);
var state_33609__$1 = state_33609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33609__$1,(22),inst_33591,inst_33539);
} else {
if((state_val_33610 === (11))){
var inst_33563 = (state_33609[(10)]);
var inst_33549 = (state_33609[(13)]);
var inst_33563__$1 = cljs.core.seq(inst_33549);
var state_33609__$1 = (function (){var statearr_33637 = state_33609;
(statearr_33637[(10)] = inst_33563__$1);

return statearr_33637;
})();
if(inst_33563__$1){
var statearr_33638_35024 = state_33609__$1;
(statearr_33638_35024[(1)] = (13));

} else {
var statearr_33639_35025 = state_33609__$1;
(statearr_33639_35025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (9))){
var inst_33585 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33640_35026 = state_33609__$1;
(statearr_33640_35026[(2)] = inst_33585);

(statearr_33640_35026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (5))){
var inst_33546 = cljs.core.deref(mults);
var inst_33547 = cljs.core.vals(inst_33546);
var inst_33548 = cljs.core.seq(inst_33547);
var inst_33549 = inst_33548;
var inst_33550 = null;
var inst_33551 = (0);
var inst_33552 = (0);
var state_33609__$1 = (function (){var statearr_33641 = state_33609;
(statearr_33641[(12)] = inst_33552);

(statearr_33641[(13)] = inst_33549);

(statearr_33641[(14)] = inst_33551);

(statearr_33641[(15)] = inst_33550);

return statearr_33641;
})();
var statearr_33642_35027 = state_33609__$1;
(statearr_33642_35027[(2)] = null);

(statearr_33642_35027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (14))){
var state_33609__$1 = state_33609;
var statearr_33646_35028 = state_33609__$1;
(statearr_33646_35028[(2)] = null);

(statearr_33646_35028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (16))){
var inst_33563 = (state_33609[(10)]);
var inst_33567 = cljs.core.chunk_first(inst_33563);
var inst_33568 = cljs.core.chunk_rest(inst_33563);
var inst_33569 = cljs.core.count(inst_33567);
var inst_33549 = inst_33568;
var inst_33550 = inst_33567;
var inst_33551 = inst_33569;
var inst_33552 = (0);
var state_33609__$1 = (function (){var statearr_33647 = state_33609;
(statearr_33647[(12)] = inst_33552);

(statearr_33647[(13)] = inst_33549);

(statearr_33647[(14)] = inst_33551);

(statearr_33647[(15)] = inst_33550);

return statearr_33647;
})();
var statearr_33648_35031 = state_33609__$1;
(statearr_33648_35031[(2)] = null);

(statearr_33648_35031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (10))){
var inst_33552 = (state_33609[(12)]);
var inst_33549 = (state_33609[(13)]);
var inst_33551 = (state_33609[(14)]);
var inst_33550 = (state_33609[(15)]);
var inst_33557 = cljs.core._nth(inst_33550,inst_33552);
var inst_33558 = cljs.core.async.muxch_STAR_(inst_33557);
var inst_33559 = cljs.core.async.close_BANG_(inst_33558);
var inst_33560 = (inst_33552 + (1));
var tmp33643 = inst_33549;
var tmp33644 = inst_33551;
var tmp33645 = inst_33550;
var inst_33549__$1 = tmp33643;
var inst_33550__$1 = tmp33645;
var inst_33551__$1 = tmp33644;
var inst_33552__$1 = inst_33560;
var state_33609__$1 = (function (){var statearr_33650 = state_33609;
(statearr_33650[(12)] = inst_33552__$1);

(statearr_33650[(13)] = inst_33549__$1);

(statearr_33650[(14)] = inst_33551__$1);

(statearr_33650[(15)] = inst_33550__$1);

(statearr_33650[(17)] = inst_33559);

return statearr_33650;
})();
var statearr_33651_35032 = state_33609__$1;
(statearr_33651_35032[(2)] = null);

(statearr_33651_35032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (18))){
var inst_33578 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33652_35033 = state_33609__$1;
(statearr_33652_35033[(2)] = inst_33578);

(statearr_33652_35033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (8))){
var inst_33552 = (state_33609[(12)]);
var inst_33551 = (state_33609[(14)]);
var inst_33554 = (inst_33552 < inst_33551);
var inst_33555 = inst_33554;
var state_33609__$1 = state_33609;
if(cljs.core.truth_(inst_33555)){
var statearr_33653_35034 = state_33609__$1;
(statearr_33653_35034[(1)] = (10));

} else {
var statearr_33654_35035 = state_33609__$1;
(statearr_33654_35035[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_33655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33655[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_33655[(1)] = (1));

return statearr_33655;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_33609){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_33609);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33656){var ex__32213__auto__ = e33656;
var statearr_33657_35040 = state_33609;
(statearr_33657_35040[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_33609[(4)]))){
var statearr_33658_35041 = state_33609;
(statearr_33658_35041[(1)] = cljs.core.first((state_33609[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35042 = state_33609;
state_33609 = G__35042;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_33609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_33609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_33660 = f__32392__auto__();
(statearr_33660[(6)] = c__32391__auto___35000);

return statearr_33660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33662 = arguments.length;
switch (G__33662) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33665 = arguments.length;
switch (G__33665) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33668 = arguments.length;
switch (G__33668) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32391__auto___35048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_33713){
var state_val_33714 = (state_33713[(1)]);
if((state_val_33714 === (7))){
var state_33713__$1 = state_33713;
var statearr_33715_35049 = state_33713__$1;
(statearr_33715_35049[(2)] = null);

(statearr_33715_35049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33714 === (1))){
var state_33713__$1 = state_33713;
var statearr_33716_35050 = state_33713__$1;
(statearr_33716_35050[(2)] = null);

(statearr_33716_35050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33714 === (4))){
var inst_33673 = (state_33713[(7)]);
var inst_33672 = (state_33713[(8)]);
var inst_33675 = (inst_33673 < inst_33672);
var state_33713__$1 = state_33713;
if(cljs.core.truth_(inst_33675)){
var statearr_33718_35051 = state_33713__$1;
(statearr_33718_35051[(1)] = (6));

} else {
var statearr_33719_35052 = state_33713__$1;
(statearr_33719_35052[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33714 === (15))){
var inst_33699 = (state_33713[(9)]);
var inst_33704 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33699);
var state_33713__$1 = state_33713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33713__$1,(17),out,inst_33704);
} else {
if((state_val_33714 === (13))){
var inst_33699 = (state_33713[(9)]);
var inst_33699__$1 = (state_33713[(2)]);
var inst_33700 = cljs.core.some(cljs.core.nil_QMARK_,inst_33699__$1);
var state_33713__$1 = (function (){var statearr_33720 = state_33713;
(statearr_33720[(9)] = inst_33699__$1);

return statearr_33720;
})();
if(cljs.core.truth_(inst_33700)){
var statearr_33721_35053 = state_33713__$1;
(statearr_33721_35053[(1)] = (14));

} else {
var statearr_33722_35054 = state_33713__$1;
(statearr_33722_35054[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33714 === (6))){
var state_33713__$1 = state_33713;
var statearr_33723_35055 = state_33713__$1;
(statearr_33723_35055[(2)] = null);

(statearr_33723_35055[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33714 === (17))){
var inst_33706 = (state_33713[(2)]);
var state_33713__$1 = (function (){var statearr_33726 = state_33713;
(statearr_33726[(10)] = inst_33706);

return statearr_33726;
})();
var statearr_33727_35056 = state_33713__$1;
(statearr_33727_35056[(2)] = null);

(statearr_33727_35056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33714 === (3))){
var inst_33711 = (state_33713[(2)]);
var state_33713__$1 = state_33713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33713__$1,inst_33711);
} else {
if((state_val_33714 === (12))){
var _ = (function (){var statearr_33728 = state_33713;
(statearr_33728[(4)] = cljs.core.rest((state_33713[(4)])));

return statearr_33728;
})();
var state_33713__$1 = state_33713;
var ex33725 = (state_33713__$1[(2)]);
var statearr_33730_35057 = state_33713__$1;
(statearr_33730_35057[(5)] = ex33725);


if((ex33725 instanceof Object)){
var statearr_33731_35058 = state_33713__$1;
(statearr_33731_35058[(1)] = (11));

(statearr_33731_35058[(5)] = null);

} else {
throw ex33725;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33714 === (2))){
var inst_33671 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33672 = cnt;
var inst_33673 = (0);
var state_33713__$1 = (function (){var statearr_33732 = state_33713;
(statearr_33732[(11)] = inst_33671);

(statearr_33732[(7)] = inst_33673);

(statearr_33732[(8)] = inst_33672);

return statearr_33732;
})();
var statearr_33733_35059 = state_33713__$1;
(statearr_33733_35059[(2)] = null);

(statearr_33733_35059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33714 === (11))){
var inst_33678 = (state_33713[(2)]);
var inst_33679 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33713__$1 = (function (){var statearr_33734 = state_33713;
(statearr_33734[(12)] = inst_33678);

return statearr_33734;
})();
var statearr_33736_35060 = state_33713__$1;
(statearr_33736_35060[(2)] = inst_33679);

(statearr_33736_35060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33714 === (9))){
var inst_33673 = (state_33713[(7)]);
var _ = (function (){var statearr_33737 = state_33713;
(statearr_33737[(4)] = cljs.core.cons((12),(state_33713[(4)])));

return statearr_33737;
})();
var inst_33685 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33673) : chs__$1.call(null,inst_33673));
var inst_33686 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33673) : done.call(null,inst_33673));
var inst_33687 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33685,inst_33686);
var ___$1 = (function (){var statearr_33738 = state_33713;
(statearr_33738[(4)] = cljs.core.rest((state_33713[(4)])));

return statearr_33738;
})();
var state_33713__$1 = state_33713;
var statearr_33739_35076 = state_33713__$1;
(statearr_33739_35076[(2)] = inst_33687);

(statearr_33739_35076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33714 === (5))){
var inst_33697 = (state_33713[(2)]);
var state_33713__$1 = (function (){var statearr_33740 = state_33713;
(statearr_33740[(13)] = inst_33697);

return statearr_33740;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33713__$1,(13),dchan);
} else {
if((state_val_33714 === (14))){
var inst_33702 = cljs.core.async.close_BANG_(out);
var state_33713__$1 = state_33713;
var statearr_33742_35083 = state_33713__$1;
(statearr_33742_35083[(2)] = inst_33702);

(statearr_33742_35083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33714 === (16))){
var inst_33709 = (state_33713[(2)]);
var state_33713__$1 = state_33713;
var statearr_33743_35084 = state_33713__$1;
(statearr_33743_35084[(2)] = inst_33709);

(statearr_33743_35084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33714 === (10))){
var inst_33673 = (state_33713[(7)]);
var inst_33690 = (state_33713[(2)]);
var inst_33691 = (inst_33673 + (1));
var inst_33673__$1 = inst_33691;
var state_33713__$1 = (function (){var statearr_33744 = state_33713;
(statearr_33744[(7)] = inst_33673__$1);

(statearr_33744[(14)] = inst_33690);

return statearr_33744;
})();
var statearr_33745_35085 = state_33713__$1;
(statearr_33745_35085[(2)] = null);

(statearr_33745_35085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33714 === (8))){
var inst_33695 = (state_33713[(2)]);
var state_33713__$1 = state_33713;
var statearr_33746_35090 = state_33713__$1;
(statearr_33746_35090[(2)] = inst_33695);

(statearr_33746_35090[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_33747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33747[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_33747[(1)] = (1));

return statearr_33747;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_33713){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_33713);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33749){var ex__32213__auto__ = e33749;
var statearr_33750_35091 = state_33713;
(statearr_33750_35091[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_33713[(4)]))){
var statearr_33751_35092 = state_33713;
(statearr_33751_35092[(1)] = cljs.core.first((state_33713[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35101 = state_33713;
state_33713 = G__35101;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_33713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_33713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_33752 = f__32392__auto__();
(statearr_33752[(6)] = c__32391__auto___35048);

return statearr_33752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33756 = arguments.length;
switch (G__33756) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32391__auto___35115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_33788){
var state_val_33789 = (state_33788[(1)]);
if((state_val_33789 === (7))){
var inst_33767 = (state_33788[(7)]);
var inst_33768 = (state_33788[(8)]);
var inst_33767__$1 = (state_33788[(2)]);
var inst_33768__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33767__$1,(0),null);
var inst_33769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33767__$1,(1),null);
var inst_33770 = (inst_33768__$1 == null);
var state_33788__$1 = (function (){var statearr_33790 = state_33788;
(statearr_33790[(9)] = inst_33769);

(statearr_33790[(7)] = inst_33767__$1);

(statearr_33790[(8)] = inst_33768__$1);

return statearr_33790;
})();
if(cljs.core.truth_(inst_33770)){
var statearr_33791_35116 = state_33788__$1;
(statearr_33791_35116[(1)] = (8));

} else {
var statearr_33792_35117 = state_33788__$1;
(statearr_33792_35117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (1))){
var inst_33757 = cljs.core.vec(chs);
var inst_33758 = inst_33757;
var state_33788__$1 = (function (){var statearr_33793 = state_33788;
(statearr_33793[(10)] = inst_33758);

return statearr_33793;
})();
var statearr_33794_35118 = state_33788__$1;
(statearr_33794_35118[(2)] = null);

(statearr_33794_35118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (4))){
var inst_33758 = (state_33788[(10)]);
var state_33788__$1 = state_33788;
return cljs.core.async.ioc_alts_BANG_(state_33788__$1,(7),inst_33758);
} else {
if((state_val_33789 === (6))){
var inst_33784 = (state_33788[(2)]);
var state_33788__$1 = state_33788;
var statearr_33796_35121 = state_33788__$1;
(statearr_33796_35121[(2)] = inst_33784);

(statearr_33796_35121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (3))){
var inst_33786 = (state_33788[(2)]);
var state_33788__$1 = state_33788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33788__$1,inst_33786);
} else {
if((state_val_33789 === (2))){
var inst_33758 = (state_33788[(10)]);
var inst_33760 = cljs.core.count(inst_33758);
var inst_33761 = (inst_33760 > (0));
var state_33788__$1 = state_33788;
if(cljs.core.truth_(inst_33761)){
var statearr_33798_35122 = state_33788__$1;
(statearr_33798_35122[(1)] = (4));

} else {
var statearr_33799_35123 = state_33788__$1;
(statearr_33799_35123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (11))){
var inst_33758 = (state_33788[(10)]);
var inst_33777 = (state_33788[(2)]);
var tmp33797 = inst_33758;
var inst_33758__$1 = tmp33797;
var state_33788__$1 = (function (){var statearr_33800 = state_33788;
(statearr_33800[(10)] = inst_33758__$1);

(statearr_33800[(11)] = inst_33777);

return statearr_33800;
})();
var statearr_33801_35124 = state_33788__$1;
(statearr_33801_35124[(2)] = null);

(statearr_33801_35124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (9))){
var inst_33768 = (state_33788[(8)]);
var state_33788__$1 = state_33788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33788__$1,(11),out,inst_33768);
} else {
if((state_val_33789 === (5))){
var inst_33782 = cljs.core.async.close_BANG_(out);
var state_33788__$1 = state_33788;
var statearr_33803_35126 = state_33788__$1;
(statearr_33803_35126[(2)] = inst_33782);

(statearr_33803_35126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (10))){
var inst_33780 = (state_33788[(2)]);
var state_33788__$1 = state_33788;
var statearr_33804_35127 = state_33788__$1;
(statearr_33804_35127[(2)] = inst_33780);

(statearr_33804_35127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (8))){
var inst_33769 = (state_33788[(9)]);
var inst_33758 = (state_33788[(10)]);
var inst_33767 = (state_33788[(7)]);
var inst_33768 = (state_33788[(8)]);
var inst_33772 = (function (){var cs = inst_33758;
var vec__33763 = inst_33767;
var v = inst_33768;
var c = inst_33769;
return (function (p1__33753_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33753_SHARP_);
});
})();
var inst_33773 = cljs.core.filterv(inst_33772,inst_33758);
var inst_33758__$1 = inst_33773;
var state_33788__$1 = (function (){var statearr_33805 = state_33788;
(statearr_33805[(10)] = inst_33758__$1);

return statearr_33805;
})();
var statearr_33807_35135 = state_33788__$1;
(statearr_33807_35135[(2)] = null);

(statearr_33807_35135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_33808 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33808[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_33808[(1)] = (1));

return statearr_33808;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_33788){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_33788);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33809){var ex__32213__auto__ = e33809;
var statearr_33810_35136 = state_33788;
(statearr_33810_35136[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_33788[(4)]))){
var statearr_33811_35137 = state_33788;
(statearr_33811_35137[(1)] = cljs.core.first((state_33788[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35141 = state_33788;
state_33788 = G__35141;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_33788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_33788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_33812 = f__32392__auto__();
(statearr_33812[(6)] = c__32391__auto___35115);

return statearr_33812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33815 = arguments.length;
switch (G__33815) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32391__auto___35149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_33840){
var state_val_33841 = (state_33840[(1)]);
if((state_val_33841 === (7))){
var inst_33822 = (state_33840[(7)]);
var inst_33822__$1 = (state_33840[(2)]);
var inst_33823 = (inst_33822__$1 == null);
var inst_33824 = cljs.core.not(inst_33823);
var state_33840__$1 = (function (){var statearr_33842 = state_33840;
(statearr_33842[(7)] = inst_33822__$1);

return statearr_33842;
})();
if(inst_33824){
var statearr_33844_35150 = state_33840__$1;
(statearr_33844_35150[(1)] = (8));

} else {
var statearr_33845_35151 = state_33840__$1;
(statearr_33845_35151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (1))){
var inst_33817 = (0);
var state_33840__$1 = (function (){var statearr_33847 = state_33840;
(statearr_33847[(8)] = inst_33817);

return statearr_33847;
})();
var statearr_33848_35152 = state_33840__$1;
(statearr_33848_35152[(2)] = null);

(statearr_33848_35152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (4))){
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33840__$1,(7),ch);
} else {
if((state_val_33841 === (6))){
var inst_33835 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33849_35153 = state_33840__$1;
(statearr_33849_35153[(2)] = inst_33835);

(statearr_33849_35153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (3))){
var inst_33837 = (state_33840[(2)]);
var inst_33838 = cljs.core.async.close_BANG_(out);
var state_33840__$1 = (function (){var statearr_33850 = state_33840;
(statearr_33850[(9)] = inst_33837);

return statearr_33850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33840__$1,inst_33838);
} else {
if((state_val_33841 === (2))){
var inst_33817 = (state_33840[(8)]);
var inst_33819 = (inst_33817 < n);
var state_33840__$1 = state_33840;
if(cljs.core.truth_(inst_33819)){
var statearr_33851_35154 = state_33840__$1;
(statearr_33851_35154[(1)] = (4));

} else {
var statearr_33852_35155 = state_33840__$1;
(statearr_33852_35155[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (11))){
var inst_33817 = (state_33840[(8)]);
var inst_33827 = (state_33840[(2)]);
var inst_33828 = (inst_33817 + (1));
var inst_33817__$1 = inst_33828;
var state_33840__$1 = (function (){var statearr_33853 = state_33840;
(statearr_33853[(10)] = inst_33827);

(statearr_33853[(8)] = inst_33817__$1);

return statearr_33853;
})();
var statearr_33854_35156 = state_33840__$1;
(statearr_33854_35156[(2)] = null);

(statearr_33854_35156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (9))){
var state_33840__$1 = state_33840;
var statearr_33857_35157 = state_33840__$1;
(statearr_33857_35157[(2)] = null);

(statearr_33857_35157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (5))){
var state_33840__$1 = state_33840;
var statearr_33858_35158 = state_33840__$1;
(statearr_33858_35158[(2)] = null);

(statearr_33858_35158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (10))){
var inst_33832 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33859_35159 = state_33840__$1;
(statearr_33859_35159[(2)] = inst_33832);

(statearr_33859_35159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (8))){
var inst_33822 = (state_33840[(7)]);
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33840__$1,(11),out,inst_33822);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_33860 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33860[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_33860[(1)] = (1));

return statearr_33860;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_33840){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_33840);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33861){var ex__32213__auto__ = e33861;
var statearr_33862_35160 = state_33840;
(statearr_33862_35160[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_33840[(4)]))){
var statearr_33863_35161 = state_33840;
(statearr_33863_35161[(1)] = cljs.core.first((state_33840[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35162 = state_33840;
state_33840 = G__35162;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_33840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_33840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_33864 = f__32392__auto__();
(statearr_33864[(6)] = c__32391__auto___35149);

return statearr_33864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33866 = (function (f,ch,meta33867){
this.f = f;
this.ch = ch;
this.meta33867 = meta33867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33868,meta33867__$1){
var self__ = this;
var _33868__$1 = this;
return (new cljs.core.async.t_cljs$core$async33866(self__.f,self__.ch,meta33867__$1));
}));

(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33868){
var self__ = this;
var _33868__$1 = this;
return self__.meta33867;
}));

(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33869 = (function (f,ch,meta33867,_,fn1,meta33870){
this.f = f;
this.ch = ch;
this.meta33867 = meta33867;
this._ = _;
this.fn1 = fn1;
this.meta33870 = meta33870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33871,meta33870__$1){
var self__ = this;
var _33871__$1 = this;
return (new cljs.core.async.t_cljs$core$async33869(self__.f,self__.ch,self__.meta33867,self__._,self__.fn1,meta33870__$1));
}));

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33871){
var self__ = this;
var _33871__$1 = this;
return self__.meta33870;
}));

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33865_SHARP_){
var G__33874 = (((p1__33865_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33865_SHARP_) : self__.f.call(null,p1__33865_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33874) : f1.call(null,G__33874));
});
}));

(cljs.core.async.t_cljs$core$async33869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33867","meta33867",1558612483,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33866","cljs.core.async/t_cljs$core$async33866",324716316,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33870","meta33870",2023852550,null)], null);
}));

(cljs.core.async.t_cljs$core$async33869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33869");

(cljs.core.async.t_cljs$core$async33869.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33869.
 */
cljs.core.async.__GT_t_cljs$core$async33869 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33869(f__$1,ch__$1,meta33867__$1,___$2,fn1__$1,meta33870){
return (new cljs.core.async.t_cljs$core$async33869(f__$1,ch__$1,meta33867__$1,___$2,fn1__$1,meta33870));
});

}

return (new cljs.core.async.t_cljs$core$async33869(self__.f,self__.ch,self__.meta33867,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33881 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33881) : self__.f.call(null,G__33881));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33866.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33867","meta33867",1558612483,null)], null);
}));

(cljs.core.async.t_cljs$core$async33866.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33866");

(cljs.core.async.t_cljs$core$async33866.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33866");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33866.
 */
cljs.core.async.__GT_t_cljs$core$async33866 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33866(f__$1,ch__$1,meta33867){
return (new cljs.core.async.t_cljs$core$async33866(f__$1,ch__$1,meta33867));
});

}

return (new cljs.core.async.t_cljs$core$async33866(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33890 = (function (f,ch,meta33891){
this.f = f;
this.ch = ch;
this.meta33891 = meta33891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33892,meta33891__$1){
var self__ = this;
var _33892__$1 = this;
return (new cljs.core.async.t_cljs$core$async33890(self__.f,self__.ch,meta33891__$1));
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33892){
var self__ = this;
var _33892__$1 = this;
return self__.meta33891;
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33891","meta33891",554769935,null)], null);
}));

(cljs.core.async.t_cljs$core$async33890.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33890");

(cljs.core.async.t_cljs$core$async33890.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33890");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33890.
 */
cljs.core.async.__GT_t_cljs$core$async33890 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33890(f__$1,ch__$1,meta33891){
return (new cljs.core.async.t_cljs$core$async33890(f__$1,ch__$1,meta33891));
});

}

return (new cljs.core.async.t_cljs$core$async33890(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33913 = (function (p,ch,meta33914){
this.p = p;
this.ch = ch;
this.meta33914 = meta33914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33915,meta33914__$1){
var self__ = this;
var _33915__$1 = this;
return (new cljs.core.async.t_cljs$core$async33913(self__.p,self__.ch,meta33914__$1));
}));

(cljs.core.async.t_cljs$core$async33913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33915){
var self__ = this;
var _33915__$1 = this;
return self__.meta33914;
}));

(cljs.core.async.t_cljs$core$async33913.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33913.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33913.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33913.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33914","meta33914",801611482,null)], null);
}));

(cljs.core.async.t_cljs$core$async33913.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33913");

(cljs.core.async.t_cljs$core$async33913.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33913");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33913.
 */
cljs.core.async.__GT_t_cljs$core$async33913 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33913(p__$1,ch__$1,meta33914){
return (new cljs.core.async.t_cljs$core$async33913(p__$1,ch__$1,meta33914));
});

}

return (new cljs.core.async.t_cljs$core$async33913(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33948 = arguments.length;
switch (G__33948) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32391__auto___35173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_33974){
var state_val_33975 = (state_33974[(1)]);
if((state_val_33975 === (7))){
var inst_33970 = (state_33974[(2)]);
var state_33974__$1 = state_33974;
var statearr_33976_35174 = state_33974__$1;
(statearr_33976_35174[(2)] = inst_33970);

(statearr_33976_35174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33975 === (1))){
var state_33974__$1 = state_33974;
var statearr_33977_35175 = state_33974__$1;
(statearr_33977_35175[(2)] = null);

(statearr_33977_35175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33975 === (4))){
var inst_33956 = (state_33974[(7)]);
var inst_33956__$1 = (state_33974[(2)]);
var inst_33957 = (inst_33956__$1 == null);
var state_33974__$1 = (function (){var statearr_33978 = state_33974;
(statearr_33978[(7)] = inst_33956__$1);

return statearr_33978;
})();
if(cljs.core.truth_(inst_33957)){
var statearr_33979_35176 = state_33974__$1;
(statearr_33979_35176[(1)] = (5));

} else {
var statearr_33980_35178 = state_33974__$1;
(statearr_33980_35178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33975 === (6))){
var inst_33956 = (state_33974[(7)]);
var inst_33961 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33956) : p.call(null,inst_33956));
var state_33974__$1 = state_33974;
if(cljs.core.truth_(inst_33961)){
var statearr_33981_35182 = state_33974__$1;
(statearr_33981_35182[(1)] = (8));

} else {
var statearr_33982_35183 = state_33974__$1;
(statearr_33982_35183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33975 === (3))){
var inst_33972 = (state_33974[(2)]);
var state_33974__$1 = state_33974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33974__$1,inst_33972);
} else {
if((state_val_33975 === (2))){
var state_33974__$1 = state_33974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33974__$1,(4),ch);
} else {
if((state_val_33975 === (11))){
var inst_33964 = (state_33974[(2)]);
var state_33974__$1 = state_33974;
var statearr_33983_35184 = state_33974__$1;
(statearr_33983_35184[(2)] = inst_33964);

(statearr_33983_35184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33975 === (9))){
var state_33974__$1 = state_33974;
var statearr_33984_35185 = state_33974__$1;
(statearr_33984_35185[(2)] = null);

(statearr_33984_35185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33975 === (5))){
var inst_33959 = cljs.core.async.close_BANG_(out);
var state_33974__$1 = state_33974;
var statearr_33985_35186 = state_33974__$1;
(statearr_33985_35186[(2)] = inst_33959);

(statearr_33985_35186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33975 === (10))){
var inst_33967 = (state_33974[(2)]);
var state_33974__$1 = (function (){var statearr_33986 = state_33974;
(statearr_33986[(8)] = inst_33967);

return statearr_33986;
})();
var statearr_33987_35187 = state_33974__$1;
(statearr_33987_35187[(2)] = null);

(statearr_33987_35187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33975 === (8))){
var inst_33956 = (state_33974[(7)]);
var state_33974__$1 = state_33974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33974__$1,(11),out,inst_33956);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_33988 = [null,null,null,null,null,null,null,null,null];
(statearr_33988[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_33988[(1)] = (1));

return statearr_33988;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_33974){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_33974);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33989){var ex__32213__auto__ = e33989;
var statearr_33990_35196 = state_33974;
(statearr_33990_35196[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_33974[(4)]))){
var statearr_33991_35197 = state_33974;
(statearr_33991_35197[(1)] = cljs.core.first((state_33974[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35198 = state_33974;
state_33974 = G__35198;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_33974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_33974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_33992 = f__32392__auto__();
(statearr_33992[(6)] = c__32391__auto___35173);

return statearr_33992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33994 = arguments.length;
switch (G__33994) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32391__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_34072){
var state_val_34073 = (state_34072[(1)]);
if((state_val_34073 === (7))){
var inst_34067 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
var statearr_34077_35208 = state_34072__$1;
(statearr_34077_35208[(2)] = inst_34067);

(statearr_34077_35208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (20))){
var inst_34035 = (state_34072[(7)]);
var inst_34048 = (state_34072[(2)]);
var inst_34049 = cljs.core.next(inst_34035);
var inst_34019 = inst_34049;
var inst_34020 = null;
var inst_34021 = (0);
var inst_34022 = (0);
var state_34072__$1 = (function (){var statearr_34080 = state_34072;
(statearr_34080[(8)] = inst_34020);

(statearr_34080[(9)] = inst_34019);

(statearr_34080[(10)] = inst_34022);

(statearr_34080[(11)] = inst_34048);

(statearr_34080[(12)] = inst_34021);

return statearr_34080;
})();
var statearr_34084_35209 = state_34072__$1;
(statearr_34084_35209[(2)] = null);

(statearr_34084_35209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (1))){
var state_34072__$1 = state_34072;
var statearr_34086_35210 = state_34072__$1;
(statearr_34086_35210[(2)] = null);

(statearr_34086_35210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (4))){
var inst_34006 = (state_34072[(13)]);
var inst_34006__$1 = (state_34072[(2)]);
var inst_34008 = (inst_34006__$1 == null);
var state_34072__$1 = (function (){var statearr_34088 = state_34072;
(statearr_34088[(13)] = inst_34006__$1);

return statearr_34088;
})();
if(cljs.core.truth_(inst_34008)){
var statearr_34090_35212 = state_34072__$1;
(statearr_34090_35212[(1)] = (5));

} else {
var statearr_34092_35213 = state_34072__$1;
(statearr_34092_35213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (15))){
var state_34072__$1 = state_34072;
var statearr_34097_35214 = state_34072__$1;
(statearr_34097_35214[(2)] = null);

(statearr_34097_35214[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (21))){
var state_34072__$1 = state_34072;
var statearr_34100_35215 = state_34072__$1;
(statearr_34100_35215[(2)] = null);

(statearr_34100_35215[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (13))){
var inst_34020 = (state_34072[(8)]);
var inst_34019 = (state_34072[(9)]);
var inst_34022 = (state_34072[(10)]);
var inst_34021 = (state_34072[(12)]);
var inst_34030 = (state_34072[(2)]);
var inst_34031 = (inst_34022 + (1));
var tmp34094 = inst_34020;
var tmp34095 = inst_34019;
var tmp34096 = inst_34021;
var inst_34019__$1 = tmp34095;
var inst_34020__$1 = tmp34094;
var inst_34021__$1 = tmp34096;
var inst_34022__$1 = inst_34031;
var state_34072__$1 = (function (){var statearr_34105 = state_34072;
(statearr_34105[(8)] = inst_34020__$1);

(statearr_34105[(9)] = inst_34019__$1);

(statearr_34105[(10)] = inst_34022__$1);

(statearr_34105[(14)] = inst_34030);

(statearr_34105[(12)] = inst_34021__$1);

return statearr_34105;
})();
var statearr_34108_35217 = state_34072__$1;
(statearr_34108_35217[(2)] = null);

(statearr_34108_35217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (22))){
var state_34072__$1 = state_34072;
var statearr_34110_35221 = state_34072__$1;
(statearr_34110_35221[(2)] = null);

(statearr_34110_35221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (6))){
var inst_34006 = (state_34072[(13)]);
var inst_34017 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34006) : f.call(null,inst_34006));
var inst_34018 = cljs.core.seq(inst_34017);
var inst_34019 = inst_34018;
var inst_34020 = null;
var inst_34021 = (0);
var inst_34022 = (0);
var state_34072__$1 = (function (){var statearr_34112 = state_34072;
(statearr_34112[(8)] = inst_34020);

(statearr_34112[(9)] = inst_34019);

(statearr_34112[(10)] = inst_34022);

(statearr_34112[(12)] = inst_34021);

return statearr_34112;
})();
var statearr_34113_35222 = state_34072__$1;
(statearr_34113_35222[(2)] = null);

(statearr_34113_35222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (17))){
var inst_34035 = (state_34072[(7)]);
var inst_34041 = cljs.core.chunk_first(inst_34035);
var inst_34042 = cljs.core.chunk_rest(inst_34035);
var inst_34043 = cljs.core.count(inst_34041);
var inst_34019 = inst_34042;
var inst_34020 = inst_34041;
var inst_34021 = inst_34043;
var inst_34022 = (0);
var state_34072__$1 = (function (){var statearr_34114 = state_34072;
(statearr_34114[(8)] = inst_34020);

(statearr_34114[(9)] = inst_34019);

(statearr_34114[(10)] = inst_34022);

(statearr_34114[(12)] = inst_34021);

return statearr_34114;
})();
var statearr_34115_35223 = state_34072__$1;
(statearr_34115_35223[(2)] = null);

(statearr_34115_35223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (3))){
var inst_34069 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34072__$1,inst_34069);
} else {
if((state_val_34073 === (12))){
var inst_34057 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
var statearr_34117_35224 = state_34072__$1;
(statearr_34117_35224[(2)] = inst_34057);

(statearr_34117_35224[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (2))){
var state_34072__$1 = state_34072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34072__$1,(4),in$);
} else {
if((state_val_34073 === (23))){
var inst_34065 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
var statearr_34121_35225 = state_34072__$1;
(statearr_34121_35225[(2)] = inst_34065);

(statearr_34121_35225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (19))){
var inst_34052 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
var statearr_34122_35226 = state_34072__$1;
(statearr_34122_35226[(2)] = inst_34052);

(statearr_34122_35226[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (11))){
var inst_34035 = (state_34072[(7)]);
var inst_34019 = (state_34072[(9)]);
var inst_34035__$1 = cljs.core.seq(inst_34019);
var state_34072__$1 = (function (){var statearr_34123 = state_34072;
(statearr_34123[(7)] = inst_34035__$1);

return statearr_34123;
})();
if(inst_34035__$1){
var statearr_34124_35227 = state_34072__$1;
(statearr_34124_35227[(1)] = (14));

} else {
var statearr_34125_35228 = state_34072__$1;
(statearr_34125_35228[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (9))){
var inst_34059 = (state_34072[(2)]);
var inst_34060 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34072__$1 = (function (){var statearr_34126 = state_34072;
(statearr_34126[(15)] = inst_34059);

return statearr_34126;
})();
if(cljs.core.truth_(inst_34060)){
var statearr_34127_35229 = state_34072__$1;
(statearr_34127_35229[(1)] = (21));

} else {
var statearr_34128_35230 = state_34072__$1;
(statearr_34128_35230[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (5))){
var inst_34011 = cljs.core.async.close_BANG_(out);
var state_34072__$1 = state_34072;
var statearr_34129_35231 = state_34072__$1;
(statearr_34129_35231[(2)] = inst_34011);

(statearr_34129_35231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (14))){
var inst_34035 = (state_34072[(7)]);
var inst_34038 = cljs.core.chunked_seq_QMARK_(inst_34035);
var state_34072__$1 = state_34072;
if(inst_34038){
var statearr_34133_35232 = state_34072__$1;
(statearr_34133_35232[(1)] = (17));

} else {
var statearr_34134_35233 = state_34072__$1;
(statearr_34134_35233[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (16))){
var inst_34055 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
var statearr_34137_35234 = state_34072__$1;
(statearr_34137_35234[(2)] = inst_34055);

(statearr_34137_35234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (10))){
var inst_34020 = (state_34072[(8)]);
var inst_34022 = (state_34072[(10)]);
var inst_34028 = cljs.core._nth(inst_34020,inst_34022);
var state_34072__$1 = state_34072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34072__$1,(13),out,inst_34028);
} else {
if((state_val_34073 === (18))){
var inst_34035 = (state_34072[(7)]);
var inst_34046 = cljs.core.first(inst_34035);
var state_34072__$1 = state_34072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34072__$1,(20),out,inst_34046);
} else {
if((state_val_34073 === (8))){
var inst_34022 = (state_34072[(10)]);
var inst_34021 = (state_34072[(12)]);
var inst_34024 = (inst_34022 < inst_34021);
var inst_34025 = inst_34024;
var state_34072__$1 = state_34072;
if(cljs.core.truth_(inst_34025)){
var statearr_34143_35235 = state_34072__$1;
(statearr_34143_35235[(1)] = (10));

} else {
var statearr_34144_35236 = state_34072__$1;
(statearr_34144_35236[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32210__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32210__auto____0 = (function (){
var statearr_34148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34148[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32210__auto__);

(statearr_34148[(1)] = (1));

return statearr_34148;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32210__auto____1 = (function (state_34072){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_34072);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e34150){var ex__32213__auto__ = e34150;
var statearr_34151_35237 = state_34072;
(statearr_34151_35237[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_34072[(4)]))){
var statearr_34152_35238 = state_34072;
(statearr_34152_35238[(1)] = cljs.core.first((state_34072[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35239 = state_34072;
state_34072 = G__35239;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32210__auto__ = function(state_34072){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32210__auto____1.call(this,state_34072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32210__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32210__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_34157 = f__32392__auto__();
(statearr_34157[(6)] = c__32391__auto__);

return statearr_34157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));

return c__32391__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34165 = arguments.length;
switch (G__34165) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34177 = arguments.length;
switch (G__34177) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34190 = arguments.length;
switch (G__34190) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32391__auto___35243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_34224){
var state_val_34225 = (state_34224[(1)]);
if((state_val_34225 === (7))){
var inst_34219 = (state_34224[(2)]);
var state_34224__$1 = state_34224;
var statearr_34234_35244 = state_34224__$1;
(statearr_34234_35244[(2)] = inst_34219);

(statearr_34234_35244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (1))){
var inst_34198 = null;
var state_34224__$1 = (function (){var statearr_34236 = state_34224;
(statearr_34236[(7)] = inst_34198);

return statearr_34236;
})();
var statearr_34237_35245 = state_34224__$1;
(statearr_34237_35245[(2)] = null);

(statearr_34237_35245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (4))){
var inst_34204 = (state_34224[(8)]);
var inst_34204__$1 = (state_34224[(2)]);
var inst_34205 = (inst_34204__$1 == null);
var inst_34206 = cljs.core.not(inst_34205);
var state_34224__$1 = (function (){var statearr_34241 = state_34224;
(statearr_34241[(8)] = inst_34204__$1);

return statearr_34241;
})();
if(inst_34206){
var statearr_34242_35246 = state_34224__$1;
(statearr_34242_35246[(1)] = (5));

} else {
var statearr_34244_35247 = state_34224__$1;
(statearr_34244_35247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (6))){
var state_34224__$1 = state_34224;
var statearr_34245_35248 = state_34224__$1;
(statearr_34245_35248[(2)] = null);

(statearr_34245_35248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (3))){
var inst_34221 = (state_34224[(2)]);
var inst_34222 = cljs.core.async.close_BANG_(out);
var state_34224__$1 = (function (){var statearr_34249 = state_34224;
(statearr_34249[(9)] = inst_34221);

return statearr_34249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34224__$1,inst_34222);
} else {
if((state_val_34225 === (2))){
var state_34224__$1 = state_34224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34224__$1,(4),ch);
} else {
if((state_val_34225 === (11))){
var inst_34204 = (state_34224[(8)]);
var inst_34213 = (state_34224[(2)]);
var inst_34198 = inst_34204;
var state_34224__$1 = (function (){var statearr_34253 = state_34224;
(statearr_34253[(7)] = inst_34198);

(statearr_34253[(10)] = inst_34213);

return statearr_34253;
})();
var statearr_34254_35249 = state_34224__$1;
(statearr_34254_35249[(2)] = null);

(statearr_34254_35249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (9))){
var inst_34204 = (state_34224[(8)]);
var state_34224__$1 = state_34224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34224__$1,(11),out,inst_34204);
} else {
if((state_val_34225 === (5))){
var inst_34198 = (state_34224[(7)]);
var inst_34204 = (state_34224[(8)]);
var inst_34208 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34204,inst_34198);
var state_34224__$1 = state_34224;
if(inst_34208){
var statearr_34256_35250 = state_34224__$1;
(statearr_34256_35250[(1)] = (8));

} else {
var statearr_34257_35251 = state_34224__$1;
(statearr_34257_35251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (10))){
var inst_34216 = (state_34224[(2)]);
var state_34224__$1 = state_34224;
var statearr_34258_35252 = state_34224__$1;
(statearr_34258_35252[(2)] = inst_34216);

(statearr_34258_35252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (8))){
var inst_34198 = (state_34224[(7)]);
var tmp34255 = inst_34198;
var inst_34198__$1 = tmp34255;
var state_34224__$1 = (function (){var statearr_34259 = state_34224;
(statearr_34259[(7)] = inst_34198__$1);

return statearr_34259;
})();
var statearr_34260_35253 = state_34224__$1;
(statearr_34260_35253[(2)] = null);

(statearr_34260_35253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_34263 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34263[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_34263[(1)] = (1));

return statearr_34263;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_34224){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_34224);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e34264){var ex__32213__auto__ = e34264;
var statearr_34265_35254 = state_34224;
(statearr_34265_35254[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_34224[(4)]))){
var statearr_34266_35255 = state_34224;
(statearr_34266_35255[(1)] = cljs.core.first((state_34224[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35256 = state_34224;
state_34224 = G__35256;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_34224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_34224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_34271 = f__32392__auto__();
(statearr_34271[(6)] = c__32391__auto___35243);

return statearr_34271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34278 = arguments.length;
switch (G__34278) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32391__auto___35258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_34324){
var state_val_34325 = (state_34324[(1)]);
if((state_val_34325 === (7))){
var inst_34320 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34326_35259 = state_34324__$1;
(statearr_34326_35259[(2)] = inst_34320);

(statearr_34326_35259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (1))){
var inst_34283 = (new Array(n));
var inst_34284 = inst_34283;
var inst_34285 = (0);
var state_34324__$1 = (function (){var statearr_34331 = state_34324;
(statearr_34331[(7)] = inst_34284);

(statearr_34331[(8)] = inst_34285);

return statearr_34331;
})();
var statearr_34332_35261 = state_34324__$1;
(statearr_34332_35261[(2)] = null);

(statearr_34332_35261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (4))){
var inst_34288 = (state_34324[(9)]);
var inst_34288__$1 = (state_34324[(2)]);
var inst_34292 = (inst_34288__$1 == null);
var inst_34293 = cljs.core.not(inst_34292);
var state_34324__$1 = (function (){var statearr_34333 = state_34324;
(statearr_34333[(9)] = inst_34288__$1);

return statearr_34333;
})();
if(inst_34293){
var statearr_34337_35265 = state_34324__$1;
(statearr_34337_35265[(1)] = (5));

} else {
var statearr_34338_35266 = state_34324__$1;
(statearr_34338_35266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (15))){
var inst_34314 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34340_35267 = state_34324__$1;
(statearr_34340_35267[(2)] = inst_34314);

(statearr_34340_35267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (13))){
var state_34324__$1 = state_34324;
var statearr_34341_35268 = state_34324__$1;
(statearr_34341_35268[(2)] = null);

(statearr_34341_35268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (6))){
var inst_34285 = (state_34324[(8)]);
var inst_34310 = (inst_34285 > (0));
var state_34324__$1 = state_34324;
if(cljs.core.truth_(inst_34310)){
var statearr_34345_35269 = state_34324__$1;
(statearr_34345_35269[(1)] = (12));

} else {
var statearr_34347_35270 = state_34324__$1;
(statearr_34347_35270[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (3))){
var inst_34322 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34324__$1,inst_34322);
} else {
if((state_val_34325 === (12))){
var inst_34284 = (state_34324[(7)]);
var inst_34312 = cljs.core.vec(inst_34284);
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34324__$1,(15),out,inst_34312);
} else {
if((state_val_34325 === (2))){
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34324__$1,(4),ch);
} else {
if((state_val_34325 === (11))){
var inst_34304 = (state_34324[(2)]);
var inst_34305 = (new Array(n));
var inst_34284 = inst_34305;
var inst_34285 = (0);
var state_34324__$1 = (function (){var statearr_34349 = state_34324;
(statearr_34349[(7)] = inst_34284);

(statearr_34349[(8)] = inst_34285);

(statearr_34349[(10)] = inst_34304);

return statearr_34349;
})();
var statearr_34350_35271 = state_34324__$1;
(statearr_34350_35271[(2)] = null);

(statearr_34350_35271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (9))){
var inst_34284 = (state_34324[(7)]);
var inst_34302 = cljs.core.vec(inst_34284);
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34324__$1,(11),out,inst_34302);
} else {
if((state_val_34325 === (5))){
var inst_34284 = (state_34324[(7)]);
var inst_34296 = (state_34324[(11)]);
var inst_34288 = (state_34324[(9)]);
var inst_34285 = (state_34324[(8)]);
var inst_34295 = (inst_34284[inst_34285] = inst_34288);
var inst_34296__$1 = (inst_34285 + (1));
var inst_34297 = (inst_34296__$1 < n);
var state_34324__$1 = (function (){var statearr_34352 = state_34324;
(statearr_34352[(11)] = inst_34296__$1);

(statearr_34352[(12)] = inst_34295);

return statearr_34352;
})();
if(cljs.core.truth_(inst_34297)){
var statearr_34356_35272 = state_34324__$1;
(statearr_34356_35272[(1)] = (8));

} else {
var statearr_34360_35273 = state_34324__$1;
(statearr_34360_35273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (14))){
var inst_34317 = (state_34324[(2)]);
var inst_34318 = cljs.core.async.close_BANG_(out);
var state_34324__$1 = (function (){var statearr_34363 = state_34324;
(statearr_34363[(13)] = inst_34317);

return statearr_34363;
})();
var statearr_34364_35274 = state_34324__$1;
(statearr_34364_35274[(2)] = inst_34318);

(statearr_34364_35274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (10))){
var inst_34308 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34365_35275 = state_34324__$1;
(statearr_34365_35275[(2)] = inst_34308);

(statearr_34365_35275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (8))){
var inst_34284 = (state_34324[(7)]);
var inst_34296 = (state_34324[(11)]);
var tmp34361 = inst_34284;
var inst_34284__$1 = tmp34361;
var inst_34285 = inst_34296;
var state_34324__$1 = (function (){var statearr_34370 = state_34324;
(statearr_34370[(7)] = inst_34284__$1);

(statearr_34370[(8)] = inst_34285);

return statearr_34370;
})();
var statearr_34371_35276 = state_34324__$1;
(statearr_34371_35276[(2)] = null);

(statearr_34371_35276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_34375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34375[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_34375[(1)] = (1));

return statearr_34375;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_34324){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_34324);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e34377){var ex__32213__auto__ = e34377;
var statearr_34378_35278 = state_34324;
(statearr_34378_35278[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_34324[(4)]))){
var statearr_34379_35279 = state_34324;
(statearr_34379_35279[(1)] = cljs.core.first((state_34324[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35280 = state_34324;
state_34324 = G__35280;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_34324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_34324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_34383 = f__32392__auto__();
(statearr_34383[(6)] = c__32391__auto___35258);

return statearr_34383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34386 = arguments.length;
switch (G__34386) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32391__auto___35282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32392__auto__ = (function (){var switch__32209__auto__ = (function (state_34440){
var state_val_34441 = (state_34440[(1)]);
if((state_val_34441 === (7))){
var inst_34436 = (state_34440[(2)]);
var state_34440__$1 = state_34440;
var statearr_34445_35283 = state_34440__$1;
(statearr_34445_35283[(2)] = inst_34436);

(statearr_34445_35283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (1))){
var inst_34388 = [];
var inst_34389 = inst_34388;
var inst_34390 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34440__$1 = (function (){var statearr_34447 = state_34440;
(statearr_34447[(7)] = inst_34389);

(statearr_34447[(8)] = inst_34390);

return statearr_34447;
})();
var statearr_34448_35284 = state_34440__$1;
(statearr_34448_35284[(2)] = null);

(statearr_34448_35284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (4))){
var inst_34393 = (state_34440[(9)]);
var inst_34393__$1 = (state_34440[(2)]);
var inst_34394 = (inst_34393__$1 == null);
var inst_34395 = cljs.core.not(inst_34394);
var state_34440__$1 = (function (){var statearr_34449 = state_34440;
(statearr_34449[(9)] = inst_34393__$1);

return statearr_34449;
})();
if(inst_34395){
var statearr_34450_35285 = state_34440__$1;
(statearr_34450_35285[(1)] = (5));

} else {
var statearr_34451_35286 = state_34440__$1;
(statearr_34451_35286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (15))){
var inst_34389 = (state_34440[(7)]);
var inst_34428 = cljs.core.vec(inst_34389);
var state_34440__$1 = state_34440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34440__$1,(18),out,inst_34428);
} else {
if((state_val_34441 === (13))){
var inst_34422 = (state_34440[(2)]);
var state_34440__$1 = state_34440;
var statearr_34452_35287 = state_34440__$1;
(statearr_34452_35287[(2)] = inst_34422);

(statearr_34452_35287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (6))){
var inst_34389 = (state_34440[(7)]);
var inst_34425 = inst_34389.length;
var inst_34426 = (inst_34425 > (0));
var state_34440__$1 = state_34440;
if(cljs.core.truth_(inst_34426)){
var statearr_34453_35288 = state_34440__$1;
(statearr_34453_35288[(1)] = (15));

} else {
var statearr_34454_35289 = state_34440__$1;
(statearr_34454_35289[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (17))){
var inst_34433 = (state_34440[(2)]);
var inst_34434 = cljs.core.async.close_BANG_(out);
var state_34440__$1 = (function (){var statearr_34455 = state_34440;
(statearr_34455[(10)] = inst_34433);

return statearr_34455;
})();
var statearr_34456_35290 = state_34440__$1;
(statearr_34456_35290[(2)] = inst_34434);

(statearr_34456_35290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (3))){
var inst_34438 = (state_34440[(2)]);
var state_34440__$1 = state_34440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34440__$1,inst_34438);
} else {
if((state_val_34441 === (12))){
var inst_34389 = (state_34440[(7)]);
var inst_34415 = cljs.core.vec(inst_34389);
var state_34440__$1 = state_34440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34440__$1,(14),out,inst_34415);
} else {
if((state_val_34441 === (2))){
var state_34440__$1 = state_34440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34440__$1,(4),ch);
} else {
if((state_val_34441 === (11))){
var inst_34393 = (state_34440[(9)]);
var inst_34389 = (state_34440[(7)]);
var inst_34397 = (state_34440[(11)]);
var inst_34409 = inst_34389.push(inst_34393);
var tmp34457 = inst_34389;
var inst_34389__$1 = tmp34457;
var inst_34390 = inst_34397;
var state_34440__$1 = (function (){var statearr_34466 = state_34440;
(statearr_34466[(7)] = inst_34389__$1);

(statearr_34466[(12)] = inst_34409);

(statearr_34466[(8)] = inst_34390);

return statearr_34466;
})();
var statearr_34467_35296 = state_34440__$1;
(statearr_34467_35296[(2)] = null);

(statearr_34467_35296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (9))){
var inst_34390 = (state_34440[(8)]);
var inst_34405 = cljs.core.keyword_identical_QMARK_(inst_34390,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34440__$1 = state_34440;
var statearr_34469_35298 = state_34440__$1;
(statearr_34469_35298[(2)] = inst_34405);

(statearr_34469_35298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (5))){
var inst_34402 = (state_34440[(13)]);
var inst_34393 = (state_34440[(9)]);
var inst_34390 = (state_34440[(8)]);
var inst_34397 = (state_34440[(11)]);
var inst_34397__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34393) : f.call(null,inst_34393));
var inst_34402__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34397__$1,inst_34390);
var state_34440__$1 = (function (){var statearr_34470 = state_34440;
(statearr_34470[(13)] = inst_34402__$1);

(statearr_34470[(11)] = inst_34397__$1);

return statearr_34470;
})();
if(inst_34402__$1){
var statearr_34471_35300 = state_34440__$1;
(statearr_34471_35300[(1)] = (8));

} else {
var statearr_34472_35301 = state_34440__$1;
(statearr_34472_35301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (14))){
var inst_34393 = (state_34440[(9)]);
var inst_34397 = (state_34440[(11)]);
var inst_34417 = (state_34440[(2)]);
var inst_34418 = [];
var inst_34419 = inst_34418.push(inst_34393);
var inst_34389 = inst_34418;
var inst_34390 = inst_34397;
var state_34440__$1 = (function (){var statearr_34481 = state_34440;
(statearr_34481[(7)] = inst_34389);

(statearr_34481[(8)] = inst_34390);

(statearr_34481[(14)] = inst_34417);

(statearr_34481[(15)] = inst_34419);

return statearr_34481;
})();
var statearr_34482_35304 = state_34440__$1;
(statearr_34482_35304[(2)] = null);

(statearr_34482_35304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (16))){
var state_34440__$1 = state_34440;
var statearr_34483_35305 = state_34440__$1;
(statearr_34483_35305[(2)] = null);

(statearr_34483_35305[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (10))){
var inst_34407 = (state_34440[(2)]);
var state_34440__$1 = state_34440;
if(cljs.core.truth_(inst_34407)){
var statearr_34487_35307 = state_34440__$1;
(statearr_34487_35307[(1)] = (11));

} else {
var statearr_34489_35308 = state_34440__$1;
(statearr_34489_35308[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (18))){
var inst_34430 = (state_34440[(2)]);
var state_34440__$1 = state_34440;
var statearr_34490_35311 = state_34440__$1;
(statearr_34490_35311[(2)] = inst_34430);

(statearr_34490_35311[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (8))){
var inst_34402 = (state_34440[(13)]);
var state_34440__$1 = state_34440;
var statearr_34494_35312 = state_34440__$1;
(statearr_34494_35312[(2)] = inst_34402);

(statearr_34494_35312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_34496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34496[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_34496[(1)] = (1));

return statearr_34496;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_34440){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_34440);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e34497){var ex__32213__auto__ = e34497;
var statearr_34498_35314 = state_34440;
(statearr_34498_35314[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_34440[(4)]))){
var statearr_34499_35315 = state_34440;
(statearr_34499_35315[(1)] = cljs.core.first((state_34440[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35319 = state_34440;
state_34440 = G__35319;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_34440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_34440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32393__auto__ = (function (){var statearr_34503 = f__32392__auto__();
(statearr_34503[(6)] = c__32391__auto___35282);

return statearr_34503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32393__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
