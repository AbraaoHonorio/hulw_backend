
 const repository = require('../repositories/unidadeRepository');


 exports.get = (req, res, next) => {
    try {
		var data =  repository.get();
        data.then(function(response){
           
            return res.json(response.rows);
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
           // const user = retiraSenha(response.rows)
            return res.json(response.rows[0])
        })    
           
      } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.getByCodigoUnidade = (req, res, next) => {
    
    
console.log( ' ->   ' +JSON.stringify(req.params.id));

	try {
		var data =  repository.getByCodigoUnidade(req.params.id);
		
        data.then(function(response){
            return res.json(response.rows[0])
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
            message: 'Unidade cadastrado com sucesso!'
		});
		
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.put = (req, res, next) => {

	try {
		var data =  repository.update(req.params.id, req.body);
		           
        res.status(201).send({
            message: 'Unidade atualizada com sucesso!'
		});
		
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.delete = (req, res, next) => {

	console.log(JSON.stringify(req.body.id_Unidade));
    try {
		var data =  repository.remove(req.body.id_Unidade);
		
        res.status(201).send({
            message: 'Unidade deletado com sucesso!'
		});
		
           
      } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};