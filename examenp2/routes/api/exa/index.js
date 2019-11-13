var express = require('express');
var router = express.Router();

function initexaApi(db){

    var exaModel = require('./exa.model')(db);

    router.get('/all', function(req, res){
        exaModel.getallexa((err, exas)=>{
          if(err){
            res.status(404).json([]);
          } else {
            res.status(200).json(exas);
          }
        });//finaliza getallexa
      }); //finaliza get /all

      return router;
}

module.exports=  initexaApi;