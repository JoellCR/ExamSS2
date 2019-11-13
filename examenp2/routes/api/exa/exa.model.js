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

    exaModel.updateExa = (updateFields, exaId, handler)=>{
      let exaFilter = {"_id": new ObjectId(exaId)};
      let updateObject = {
        "$set": {
                  "estado": updateFields.estado,
              }
  };
  exaCollection.updateOne(
      exaFilter,
      updateObject,
      (err, rslt)=>{
        if(err){
          console.log(err);
          return handler(err, null);
        }
        return handler(null, rslt);
      }
    );
  }; // updateObject

    return exaModel;
}

module.exports = exasModel;