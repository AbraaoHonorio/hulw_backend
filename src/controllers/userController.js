
 const repository = require('../repositories/userRepository');

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


exports.getById = (req, res, next) => {
	
	try {
		var data =  repository.getById(req.params.id);
		
        data.then(function(response){
            return res.json(response.rows)
        })    
           
      } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.getByCpf = (req, res, next) => {
	
	try {
		var data =  repository.getByCpf(req.params.cpf);
		
        data.then(function(response){
            return res.json(response.rows)
        })    
           
      } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

/*
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


exports.put = (req, res, next) => {

	try {
		var data =  repository.update(req.params.id, req.body);
		           
        res.status(201).send({
            message: 'Localização atualizada com sucesso!'
		});
		
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.delete = (req, res, next) => {

	console.log(JSON.stringify(req.body.id_Localizacao));
    try {
		var data =  repository.remove(req.body.id_Localizacao);
		
        data.then(function(response){
            return res.json(response.rows)
        })    
           
      } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.getById = (req, res, next) => {
    res.status(200).send('getById Requisição recebida com sucesso!');
};


exports.post = (req, res, next) => {
    res.status(201).send('post Requisição recebida com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`put Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(` delete Requisição recebida com sucesso! ${id}`);
};

*/