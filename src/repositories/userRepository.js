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
    })

    return query  
   

}