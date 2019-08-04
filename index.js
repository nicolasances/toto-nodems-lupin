var Controller = require('toto-api-controller');

var getBox = require('./dlg/GetBox');
var postBox = require('./dlg/PostBox');

var apiName = 'lupin';

var api = new Controller(apiName);

api.path('POST', '/boxes', postBox);
api.path('GET', '/boxes/:name', getBox);

api.listen();