
require("./node-sencha_touch-core");

var utils = require("./lib/utils");

var fileList = [
	"/sencha-touch/src/app/Action.js",
	"/sencha-touch/src/app/Application.js",	
	"/sencha-touch/src/app/Controller.js",
	"/sencha-touch/src/app/History.js",
	"/sencha-touch/src/app/Profile.js",	
	"/sencha-touch/src/app/Route.js",
	"/sencha-touch/src/app/Router.js",
	
	"/sencha-touch/src/data/association/Association.js",
	"/sencha-touch/src/data/association/BelongsTo.js",
	"/sencha-touch/src/data/association/HasMany.js",
	"/sencha-touch/src/data/association/HasOne.js",

	"/sencha-touch/src/data/identifier/Sequential.js",
	"/sencha-touch/src/data/identifier/Simple.js",
	"/sencha-touch/src/data/identifier/Uuid.js",

	"/sencha-touch/src/data/proxy/Ajax.js",
	"/sencha-touch/src/data/proxy/Client.js",
	"/sencha-touch/src/data/proxy/Direct.js",
	"/sencha-touch/src/data/proxy/JsonP.js",
	"/sencha-touch/src/data/proxy/LocalStorage.js",
	"/sencha-touch/src/data/proxy/Memory.js",
	"/sencha-touch/src/data/proxy/Proxy.js",
	"/sencha-touch/src/data/proxy/Rest.js",
	"/sencha-touch/src/data/proxy/Server.js",
	"/sencha-touch/src/data/proxy/SessionStorage.js",
	"/sencha-touch/src/data/proxy/WebStorage.js",

	"/sencha-touch/src/data/reader/Array.js",
	"/sencha-touch/src/data/reader/Json.js",
	"/sencha-touch/src/data/reader/Reader.js",
	"/sencha-touch/src/data/reader/Xml.js",

	"/sencha-touch/src/data/writer/Json.js",
	"/sencha-touch/src/data/writer/Writer.js",
	"/sencha-touch/src/data/writer/Xml.js",

	"/sencha-touch/src/data/ArrayStore.js",
	"/sencha-touch/src/data/Batch.js",
	"/sencha-touch/src/data/Connection.js",
	"/sencha-touch/src/data/DirectStore.js",
	"/sencha-touch/src/data/Error.js",
	"/sencha-touch/src/data/Field.js",
	"/sencha-touch/src/data/JsonP.js",
	"/sencha-touch/src/data/JsonStore.js",
	"/sencha-touch/src/data/Model.js",
	"/sencha-touch/src/data/ModelManager.js",
	"/sencha-touch/src/data/NodeInterface.js",
	"/sencha-touch/src/data/NodeStore.js",
	"/sencha-touch/src/data/Operation.js",
	"/sencha-touch/src/data/Request.js",
	"/sencha-touch/src/data/ResultSet.js",
	"/sencha-touch/src/data/SortTypes.js",
	"/sencha-touch/src/data/Store.js",
	"/sencha-touch/src/data/StoreManager.js",
	"/sencha-touch/src/data/TreeStore.js",
	"/sencha-touch/src/data/Types.js",
	"/sencha-touch/src/data/Validations.js",

	"/sencha-touch/src/direct/Event.js",
	"/sencha-touch/src/direct/JsonProvider.js",
	"/sencha-touch/src/direct/Manager.js",
	"/sencha-touch/src/direct/PollingProvider.js",
	"/sencha-touch/src/direct/Provider.js",
	"/sencha-touch/src/direct/RemotingEvent.js",
	"/sencha-touch/src/direct/RemotingProvider.js",
	"/sencha-touch/src/direct/Transaction.js",
	
	"/sencha-touch/src/app/Controller.js"
];

utils.injectSencha(fileList);

console.log(String.format("Sencha Touch {0} - extended loaded", Ext.getVersion()));

