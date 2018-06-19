'use strict';

const ImportClient = require('../config/config');
const client = ImportClient.get();

  exports.get=  () =>  {
      const results = []
          
      //Realiza a leitura no banco de dados
      const query = client.query('SELECT * FROM "ESTAGIO_PROBATORIO" ORDER BY "id_Estagio_Probatorio" ASC')
  
      query.then(function(row){
          results.push(row)
      })
  
      return query
     

  
     
  };


exports.getById =  function(id_Estagio_Probatorio)  {

    //Realiza a leitura no banco de dados
    const query = client.query('SELECT * FROM "ESTAGIO_PROBATORIO" WHERE "id_Estagio_Probatorio"=($1)', [id_Estagio_Probatorio])  
    query.then(function(row){
        results.push(row)
    }).catch((error) => {
        assert.isNotOk(error,'Promise error');
        done();
      });

    return query  
   

}

exports.getByIdUsuario =  function(id_Usuario)  {


    //Realiza a leitura no banco de dados
    const query = client.query('SELECT * FROM "ESTAGIO_PROBATORIO" WHERE "id_Usuario"=($1)', [id_Usuario])  
    query.then(function(row){
        results.push(row)
    }).catch((error) => {
        assert.isNotOk(error,'Promise error');
        done();
      });

    return query  
   

}

exports.getByAno =  function(dt_Ano)  {


    //Realiza a leitura no banco de dados
    const query = client.query('SELECT * FROM "ESTAGIO_PROBATORIO" WHERE "dt_Ano"=($1)', [dt_Ano])  
    query.then(function(row){
        results.push(row)
    }).catch((error) => {
        assert.isNotOk(error,'Promise error');
        done();
      });

    return query  
   

}





exports.create =  function(estagioProbatorioNovo)  {

    console.log(JSON.stringify(estagioProbatorioNovo));

    const data = {id_Estagio_Probatorio: estagioProbatorioNovo.id_Estagio_Probatorio,
                  dt_Ano: estagioProbatorioNovo.dt_Ano,
                  id_Usuario: estagioProbatorioNovo.id_Usuario};
   
    const query = client.query('INSERT INTO "ESTAGIO_PROBATORIO"("id_Estagio_Probatorio", "dt_Ano", "id_Usuario") values($1, $2, $3)',
           [data.id_Estagio_Probatorio, data.dt_Ano, data.id_Usuario]);

    return query;
}


exports.remove =  function(id_Estagio_Probatorio)  {

    //Realiza a leitura no banco de dados
    const query = client.query('DELETE FROM "ESTAGIO_PROBATORIO" WHERE "id_Estagio_Probatorio"=($1)', [id_Estagio_Probatorio])
  
    query.then(function(row){
        results.push(row)
    })

    return query  
   

}
