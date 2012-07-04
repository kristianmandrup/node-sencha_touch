
var utils = require("./lib/utils");

var fileList = [
	"/sencha-touch/src/core/class/Base.js",
	"/sencha-touch/src/core/class/Class.js",
	"/sencha-touch/src/core/class/ClassManager.js",
	"/sencha-touch/src/core/class/Loader.js",

	"/sencha-touch/src/core/lang/Array.js",
	"/sencha-touch/src/core/lang/Date.js",
	"/sencha-touch/src/core/lang/Error.js",
	"/sencha-touch/src/core/lang/Function.js",
	"/sencha-touch/src/core/lang/JSON.js",
	"/sencha-touch/src/core/lang/Number.js",
	"/sencha-touch/src/core/lang/Object.js",
	"/sencha-touch/src/core/lang/String.js",

	"/sencha-touch/src/core/version/Version.js",
	"/sencha-touch/src/core/EventManager.js",
	"/sencha-touch/src/core/Ext-more.js",
	"/sencha-touch/src/core/Ext.js",

	"/sencha-touch/src/env/Browser.js",
	"/sencha-touch/src/env/Feature.js",
	"/sencha-touch/src/env/OS.js",

	"/sencha-touch/src/util/Format.js",
	
	"/extjs/src/core/src/eevent/Dispatcher.js",	
	"/extjs/src/core/src/event/Event.js",
	
	"/sencha-touch-overrides.js",

	"/sencha-touch/src/util/Collection.js",	
	"/sencha-touch/src/util/HashMap.js"
	"/sencha-touch/src/util/Filter.js",
	"/sencha-touch/src/util/Sorter.js",
	"/sencha-touch/src/util/Sortable.js",
	"/sencha-touch/src/util/AbstractMixedCollection.js"  ,
	"/sencha-touch/src/util/MixedCollection.js",
	"/sencha-touch/src/util/HashMap.js",
	"/sencha-touch/src/util/Inflector.js",
	"/sencha-touch/src/util/Grouper.js",
			
	"/extensions/Math.js",
	"/extensions/String.js",
	"/extensions/Guid.js",
	"/extensions/Hex.js"
];

utils.injectSencha(fileList);

var window = {
    status: __defineSetter__("status", function(debugStatusMsg){
        console.log(debugStatusMsg);
    })
}

console.log(String.format("ExtJS {0} - core loaded", Ext.getVersion()));
