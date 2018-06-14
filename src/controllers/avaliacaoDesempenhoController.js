
const repository = require('../repositories/avaliacaoDesempenhoRepository');

exports.get = (req, res, next) => {
    try {
		var data =  repository.get();
		
        data.then(function(response){
            res.status(201).send({
                message: 'sucesso',
                data: res.json(response.rows)
            });
        
        })    
           
      } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.getById = (req, res, next) => {
	
	try {
		var data =  repository.getById(req.params.id);
		
        data.then(function(response){
            res.status(201).send({
                message: 'sucesso',
                data: res.json(response.rows[0])
            });
        })    
           
      } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.post = (req, res, next) => {

	try {
		var data =  repository.create(req.body);
		           
        res.status(201).send({
            message: 'Localização cadastrado com sucesso!'
		});
		
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

