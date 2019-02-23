const mongooseServer = require('mongoose');
mongooseServer.Promise = global.Promise;
var mongoose=mongooseServer.createConnection('mongodb://localhost:27017/snehal-mongo-db', {
    useNewUrlParser: true
});


const dbServer=function(){
    var serverUrl='mongodb://localhost:27017/snehal-mongo-db';
    mongooseServer.Promise=global.Promise;
    mongooseServer.createConnection(serverUrl,{useNewUrlParser:true});
    return dbServer
}

module.exports = {
    mongoose,
    dbServer
 }
 
 