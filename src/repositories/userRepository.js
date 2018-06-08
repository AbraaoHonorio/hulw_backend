const ImportClient = require('../config/config');
const client = ImportClient.get();

  exports.get=  () =>  {
      const results = []
          
      //Realiza a leitura no banco de dados
      const query = client.query('SELECT * FROM "USUARIO" ')
  
      query.then(function(row){
          results.push(row)
      })
  
      return query
     /* query.then(function(response){
          return res.json(response.rows)
      })*/
  
     
  };

  exports.getByCpf =  function(cd_cpf)  {
    console.log(JSON.stringify(cd_cpf));

    //Realiza a leitura no banco de dados
    const query = client.query('SELECT * FROM "USUARIO" WHERE "cd_CPF"=($1)', [cd_cpf])
  
    query.then(function(row){
        results.push(row)
    })

    return query  
   

}

exports.getById =  function(id_Usuario)  {

    console.log(JSON.stringify(id_Usuario));

    //Realiza a leitura no banco de dados
    const query = client.query('SELECT * FROM "USUARIO" WHERE "id_Usuario"=($1)', [id_Usuario])
  
    query.then(function(row){
        results.push(row)
    }).catch((error) => {
        assert.isNotOk(error,'Promise error');
        done();
      });

    return query  
   

}



exports.create =  function(UsuarioNovo)  {
    const results = []
    console.log('UsuarioNovo ' + JSON.stringify(UsuarioNovo));

    const data = { cd_Senha: UsuarioNovo.cd_Senha, cd_CPF: UsuarioNovo.cd_CPF,
        cd_Email: UsuarioNovo.cd_Email, no_Pessoa: UsuarioNovo.no_Pessoa, dt_Admissao: UsuarioNovo.dt_Admissao}

       client.query('INSERT INTO "USUARIO"("cd_Senha", "cd_CPF", "cd_Email", "no_Pessoa", "dt_Admissao") values($1,$2, $3, $4, $5)',
        [data.cd_Senha, data.cd_CPF, data.cd_Email, data.no_Pessoa, data.dt_Admissao])
     
   
}

exports.update =  function(idUsuario, UsuarioNovo)  {

    console.log('id '+  JSON.stringify(idUsuario) +'  UsuarioNovo ' + JSON.stringify(UsuarioNovo));

    const data = {  cd_CPF: UsuarioNovo.cd_CPF, cd_Email: UsuarioNovo.cd_Email, 
        no_Pessoa: UsuarioNovo.no_Pessoa, dt_Admissao: UsuarioNovo.dt_Admissao}

   
        client.query('UPDATE "USUARIO" SET "cd_CPF"=($1), "cd_Email"=($2), "no_Pessoa"=($3), "dt_Admissao"=($4) WHERE "id_Usuario"=($5)',
        [ data.cd_CPF, data.cd_Email, data.no_Pessoa, data.dt_Admissao,idUsuario])

}




exports.remove =  function(idUsuario)  {

    console.log(JSON.stringify(idUsuario));

    //Realiza a leitura no banco de dados
    const query = client.query('DELETE FROM "USUARIO" WHERE "id_Usuario"=($1)', [idUsuario])
  
    query.then(function(row){
        results.push(row)
    })

    return query  
   

}
