var express = require('express');
var router = express.Router();

function initexaApi(db){

    var exaModel = require('./exa.model')(db);

    //GET
    router.get('/all', function(req, res){
        exaModel.getallexa((err, exas)=>{
          if(err){
            res.status(404).json([]);
          } else {
            res.status(200).json(exas);
          }
        });//finaliza getallexa
      }); //finaliza get /all


      //POST
      router.post('/new', function(req, res)
      {
        var newExa = Object.assign(
           {},
           req.body,
           { 
             "id":req.body.id,
             "nombre":req.body.nombre,
             "autor":req.body.autor,
             "pais":req.body.pais,
             "estado":req.body.estado,
             "numerostomos": parseInt(req.body.numerostomos),
             "keywords": [req.body.keywords],
             "categorias": [req.body.categorias],
           }
         );
        exaModel.saveNewexa(newExa, (err, rslt)=>{
          if(err){
            res.status(500).json(err);
          }else{
            res.status(200).json(rslt);
          }
        });//guardarnuevo
     }); // post /new

     //PUT

     router.put('/update/:exaid',
     function(req, res)
     {
       var exaIdToModify = req.params.exaid;
       var estadoAct= req.body.estado;
       exaModel.updateExa(
         {estado:estadoAct}, exaIdToModify,
         (err, rsult)=>{
           if(err){
             res.status(500).json(err);
           }else{
             res.status(200).json(rsult);
           }
         }
         ); //updateManga
     }
    );// put

      return router;

      
}

module.exports=  initexaApi;