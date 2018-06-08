
 const repository = require('../repositories/userRepository');

 function retiraSenha(elements) {
    const datas = [];
    elements.forEach(element => {
        const data = {id_Usuario: element.id_Usuario, cd_CPF: element.cd_CPF,
            cd_Email: element.cd_Email, no_Pessoa: element.no_Pessoa,dt_Admissao: element.dt_Admissao}
        datas.push(data);
    });
  
   
    return datas;
  }

exports.get = (req, res, next) => {
    try {
		var data =  repository.get();
        data.then(function(response){
           /* const data = {id_Usuario: JSON.stringify(response.rows.id_Usuario), cd_CPF: response.rows.cd_CPF,
                cd_Email: response.rows.cd_Email, no_Pessoa: response.rows.no_Pessoa,dt_Admissao: response.rows.dt_Admissao,}
            */
          
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
            const user = retiraSenha(response.rows)
            return res.json(user[0])
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
            const user = retiraSenha(response.rows)
            return res.json(user[0])
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
            message: 'USUÁRIO cadastrado com sucesso!'
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
            message: 'Usuário atualizada com sucesso!'
		});
		
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.delete = (req, res, next) => {

	console.log(JSON.stringify(req.body.id_Usuario));
    try {
		var data =  repository.remove(req.body.id_Usuario);
		
        res.status(201).send({
            message: 'Usuário deletado com sucesso!'
		});
		
           
      } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};