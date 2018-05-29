
const repository = require('../repositories/localizacaoRepository');

exports.get = (req, res, next) => {
    try {

        var data =  repository.get();
        data.then(function(response){
            return res.json(response.rows)
        })    
           
      } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};