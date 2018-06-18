
 const repository = require('../repositories/estagioProbatorioRepository');
 const error = require("./erroController");


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

exports.getByAno = (req, res, next) => {
    
    

	try {
		var data =  repository.getByAno(req.params.id);
		
        data.then(function(response){
		if(response.rows.length == 0){
			return error("estágio probatório não encontrado", 404, next);
		}else{
            		return res.json(response.rows[0])
		}
        })    
           
      } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.getByIdUsuario = (req, res, next) => {
    
        
        try {
            var data =  repository.getByIdUsuario(req.params.id);
            
            data.then(function(response){
            if(response.rows.length == 0){
                return error("Estágio probatório não encontrado", 404, next);
            }else{
                        return res.json(response.rows[0])
            }
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
            message: 'Estágio probatório cadastrado com sucesso!'
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


    console.log(req.body.id_Estagio_Probatorio);

    try {
		var data =  repository.remove(req.body.id_Estagio_Probatorio);
		
        res.status(201).send({
            message: 'Unidade deletado com sucesso!'
		});
		
           
      } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};
