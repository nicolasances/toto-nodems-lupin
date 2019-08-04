var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/BoxConverter');

var MongoClient = mongo.MongoClient;

/**
 * Posts a new account. Will save it as "not current"
 * Requires in the body:
 *  - name        :   name of the box
 *  - content     :   content of the box
 */
exports.do = (req) => {

    return new Promise((success, failure) => {

        // Validation 
        if (!req.body.name) { failure({ code: 400, message: '"name" is a mandatory field' }); return; }
        if (!req.body.content) { failure({ code: 400, message: '"content" is a mandatory field' }); return; }

        return MongoClient.connect(config.mongoUrl, function (err, db) {

            db.db(config.dbName).collection(config.collections.boxes).insertOne(converter.boxPO(req.body), function (err, res) {

                db.close();

                success({ created: true });

            });
        });
    });

}