
shadow.cljs.devtools.client.env.module_loaded('app');

try { badgui.core.init(); } catch (e) { console.error("An error occurred when calling (badgui.core/init)"); throw(e); }