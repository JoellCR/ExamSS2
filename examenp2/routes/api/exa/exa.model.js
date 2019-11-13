var ObjectId = require('mongodb').ObjectId;
var IndexVerified = false;

function exasModel(db){
    let  exaModel= {};
    var exaCollection = db.collection("exas");


    //GET
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

    //PUT
    exaModel.saveNewexa = (newExa, handler)=>
    {
        exaCollection.insertOne(newExa, (err, result)=>
        {
          if(err)
          {
            console.log(err);
            return handler(err, null);
          }
          return handler(null, result);
        }); //insertOne
    }

    return exaModel;
}

module.exports = exasModel;