
const repository = require('../repositories/userRepository');
const error = require("./erroController");
const _ = require("underscore");
const validator = require('validator');

function retiraSenha(elements) {
const datas = [];

elements.forEach(element => {
    const data = {id_Usuario: element.id_Usuario, cd_CPF: element.cd_CPF,
        cd_Email: element.cd_Email, no_Pessoa: element.no_Pessoa,dt_Admissao: element.dt_Admissao, is_Adm: element.is_Adm}
    datas.push(data);
});

return datas;
}

exports.get = (req, res, next) => {

    var data = repository.get();

    data.then((response) => {
        res.json(response.rows);
    }).catch((err) => {
        return error(err.message, 500, next);
    });
};


exports.getById = (req, res, next) => {
    
    var data = repository.getById(req.params.id);

    if(req.params.id < 0){
        return error("Id menor que 0. Id inválido", 400, next);
    }else{

        data.then((response) => {

        if(response.rows.length == 0){
            return error("Usuario nao encontrado", 404, next);
        }else{
            const user = retiraSenha(response.rows);
            res.json(user[0]);
        }
    }).catch((err) => {

        return error(err.message, 500, next);
    });
}

    
};


exports.getByCpf = (req, res, next) => {
    var cpf = req.params.cpf;
    var regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    
    if( cpf.length == 11 ){

        var data =  repository.getByCpf(req.params.cpf);

        data.then((response) => {

            if(response.rows.length == 0){
                return error("Usuario nao encontrado", 404, next);
            }else {
                const user = retiraSenha(response.rows);
                return res.json(user[0]);
            }
        }).catch((err) => {
            return error(err.message, 500, next);
        });
    }else{

        return error("Cpf inválido", 400, next);
    }
};


exports.post = (req, res, next) => {
    const erros = [];
    const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    const body = _.pick(req.body, "cd_Senha", "cd_CPF", "cd_Email", "no_Pessoa", "dt_Admissao", "is_Adm");

    if(!validator.isEmail(body.cd_Email)){
        erros.push("Email invalido");
    }

    if(!validator.isLength(body.cd_Senha, { min: 4 })){
        erros.push("Senha tem que ter no mínimo quatro caracteres");
    }

    if(!validator.isISO8601(body.dt_Admissao)){
        erros.push("Data de admissao invalida");
    }

    if(body.cd_CPF.length != 11){
        erros.push("Cpf invalido");
    }

    if(!validator.matches(body.no_Pessoa, regex)){
        erros.push("Nome invalido");
    }

    if (erros.length) {
        return error(erros, 422, next);
    }else{
        var data =  repository.create(req.body);

        data.then((response) => {
            res.json({msg: 'usuario cadastrado com sucesso'});
        }).catch((err) => {
            return error(err.message, 500, next);
        });
    }
};


exports.put = (req, res, next) => {

    const erros = [];
    const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    const body = _.pick(req.body, "cd_CPF", "cd_Email", "no_Pessoa", "dt_Admissao");

    if(!validator.isEmail(body.cd_Email)){
        erros.push("Email invalido");
    }

    if(!validator.isISO8601(body.dt_Admissao)){
        erros.push("Data de admissao invalida");
    }

    if(body.cd_CPF.length != 11){
        erros.push("Cpf invalido");
    }

    if(!validator.matches(body.no_Pessoa, regex)){
        erros.push("Nome invalido");
    }

    if (erros.length) {
        return error(erros, 422, next);
    }else{
        var data =  repository.update(req.params.id, body);
    
        data.then((response) => {
            if(response.rows)
            return res.status(201).send({
                message: 'Usuário atualizado com sucesso!'
            });

            return res.status(404).send({
                message: 'Usuário nao encontrado'
            });
        }).catch((err) => {
            return error(err.message);
        })  
    }
};


exports.delete = (req, res, next) => {

    var data =  repository.remove(req.body.id_Usuario);
    
    data.then((response) =>{
        return res.status(201).send({
            message: 'Usuário deletado com sucesso!'
        });
    }).catch((err) => {
        return error(err.message, 500, next);
    });
};
