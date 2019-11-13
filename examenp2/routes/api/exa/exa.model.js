var ObjectId = require('mongodb').ObjectId;
var IndexVerified = false;

function exasModel(db){
    let  exaModel= {};
    var exaCollection = db.collection("exas");

    exaModel.getallexa = (handler)=>
    {
        exaCollection.find({}).toArray(
          (err, docs)=>{
            if(err)
            {
              console.log(err);
              return handler(err, null);
            }
            return handler(null, docs);
          }
        );
    } //finaliza getallexa

    return exaModel;
}

module.exports = exasModel;