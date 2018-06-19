const ImportClient = require('../config/config');
const client = ImportClient.get();

exports.get =  () =>  {
      
  //Realiza a leitura no banco de dados
  const query = client.query('SELECT "id_Usuario", "cd_CPF","cd_Email", "no_Pessoa", "dt_Admissao", "is_Adm" FROM "USUARIO" ');
  
  return query;
   
};

exports.getByCpf =  (cd_cpf) => {

  //Realiza a leitura no banco de dados
  const query = client.query('SELECT * FROM "USUARIO" WHERE "cd_CPF"=($1)', [cd_cpf]);

  return query;
}

exports.getById =  function(id_Usuario)  {

  //Realiza a leitura no banco de dados
  const query = client.query('SELECT * FROM "USUARIO" WHERE "id_Usuario"=($1)', [id_Usuario]);

  return query;
}

exports.create =  function(UsuarioNovo)  {
  console.log(UsuarioNovo);
  const data = { cd_Senha: UsuarioNovo.cd_Senha, cd_CPF: UsuarioNovo.cd_CPF,
            cd_Email: UsuarioNovo.cd_Email, no_Pessoa: UsuarioNovo.no_Pessoa, dt_Admissao: new Date(UsuarioNovo.dt_Admissao)
            , is_Adm: UsuarioNovo.is_Adm};

  const query = client.query('INSERT INTO "USUARIO"("cd_Senha", "cd_CPF", "cd_Email", "no_Pessoa", "dt_Admissao", "is_Adm") values($1,$2, $3, $4, $5, $6)',
    [data.cd_Senha, data.cd_CPF, data.cd_Email, data.no_Pessoa, data.dt_Admissao, data.is_Adm]);

  return query;
}

exports.update =  function(idUsuario, UsuarioNovo)  {

  const data = {  cd_CPF: UsuarioNovo.cd_CPF, cd_Email: UsuarioNovo.cd_Email, 
    no_Pessoa: UsuarioNovo.no_Pessoa, dt_Admissao: new Date(UsuarioNovo.dt_Admissao)};

  const query = client.query('UPDATE "USUARIO" SET "cd_CPF"=($1), "cd_Email"=($2), "no_Pessoa"=($3), "dt_Admissao"=($4) WHERE "id_Usuario"=($5)',
  [ data.cd_CPF, data.cd_Email, data.no_Pessoa, data.dt_Admissao,idUsuario]);

  return query;
}

exports.remove =  function(idUsuario)  {

  //Realiza a leitura no banco de dados
  const query = client.query('DELETE FROM "USUARIO" WHERE "id_Usuario"=($1)', [idUsuario])

  return query;
}
