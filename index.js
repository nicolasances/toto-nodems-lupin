var Controller = require('toto-api-controller');

var getBox = require('./dlg/GetBox');
var postBox = require('./dlg/PostBox');

var apiName = 'lupin';

var api = new Controller(apiName);

api.path('POST', '/box', postBox);
api.path('GET', '/box/:name', getBox);

api.listen();