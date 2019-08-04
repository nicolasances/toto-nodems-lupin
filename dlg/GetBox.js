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

        return MongoClient.connect(config.mongoUrl, function (err, db) {

            db.db(config.dbName).collection(config.collections.boxes).find({ name: req.params.name }).toArray(function (err, array) {

                db.close();

                if (array == null) {
                    success({ });
                    return;
                }

                success(converter.boxTO(array[0]));

            });
        });

    })
}