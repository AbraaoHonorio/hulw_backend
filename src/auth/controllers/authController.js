var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/configauth');
const repository = require('../../repositories/userRepository');
const _ = require("underscore");

exports.login =  (req, res, next) => {
    
  //procurar usuario
  const body = _.pick(req.body, "cpf", 'password');

  const data = repository.getByCpf(body.cpf);

  data.then((response)=> {
    var user = response.rows;
    // console.log(response.rows);
    if(!user[0]){
      return res.status(404).send('Usuario nao encontrado');
    }

    if(response.rows[0].cd_Senha == body.password){
      var token = jwt.sign( { id: user[0].id_Usuario , cpf: user[0].cd_CPF }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });

      return res.status(200).send( { user: user, token: token });
    }

    return res.status(404).send({ user: null, message: "Senha errada" });

  }).catch((err) => {
    return res.status(404).send(err.message);
  });
}

exports.me = (req, res, next ) => {

  const data = repository.getByCpf(req.cpf);
  
  data.then((response) => {
    var user = response.rows;
    
    if(!user){
      return res.status(404).send("Usuario não encontrado");
    }
    return res.status(200).send(user);
  }).catch((err) => {
    return res.status(500).send("There was a problem finding the user.");
  });
}