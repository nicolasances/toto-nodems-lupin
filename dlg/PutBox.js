var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/BoxConverter');

var MongoClient = mongo.MongoClient;

/**
 * Gets the requested box
 * Requires this param: 
 *  - name          : the name of the box
 */
exports.do = (req) => {

    return new Promise((success, failure) => {

        // Validation
        if (!req.params.name) { failure({ code: 400, message: '"name" is a required path param' }); return; }
        if (!req.body.content) { failure({ code: 400, message: '"content" is a required field' }); return; }

        return MongoClient.connect(config.mongoUrl, function (err, db) {

            db.db(config.dbName).collection(config.collections.boxes).updateOne({ name: req.params.name }, converter.update(req.body), function (err, res) {

                db.close();

                success(res);

            });
        });

    })
}