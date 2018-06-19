'use strict';

const ImportClient = require('../config/config');
const client = ImportClient.get();

  exports.get=  () =>  {
      const results = []

      //Realiza a leitura no banco de dados
      const query = client.query('SELECT * FROM "UNIDADE" ORDER BY "id_Unidade" ASC')

      query.then(function(row){
          results.push(row)
      })

      return query




  };


exports.getById =  function(idUnidade)  {

    console.log(JSON.stringify(idUnidade));

    //Realiza a leitura no banco de dados
    const query = client.query('SELECT * FROM "UNIDADE" WHERE "id_Unidade"=($1)', [idUnidade])
    query.then(function(row){
        results.push(row)
    }).catch((error) => {
        assert.isNotOk(error,'Promise error');
        done();
      });

    return query


}

exports.getByCodigoUnidade =  function(codigoUnidade)  {

    console.log(JSON.stringify(codigoUnidade));

    //Realiza a leitura no banco de dados
    const query = client.query('SELECT * FROM "UNIDADE" WHERE "cd_Unidade"=($1)', [codigoUnidade])
    query.then(function(row){
        results.push(row)
    }).catch((error) => {
        assert.isNotOk(error,'Promise error');
        done();
      });

    return query


}



exports.create =  function(UnidadeNovo)  {

    console.log('UnidadeNovo ' + JSON.stringify(UnidadeNovo));

    const data = {cdUnidade: UnidadeNovo.cd_Unidade, deUnidade: UnidadeNovo.de_UNIDADE,
        idUnidadeSup: UnidadeNovo.id_Unidade_Superior};

       const query = client.query('INSERT INTO "UNIDADE"("cd_Unidade", "de_UNIDADE", "id_Unidade_Superior") values($1, $2, $3)',
           [data.cdUnidade, data.deUnidade, data.idUnidadeSup]);

     return query;
}

exports.update =  function(idUnidade, UnidadeNovo)  {

    console.log('id '+  JSON.stringify(idUnidade) +'  UsuarioNovo ' + JSON.stringify(UnidadeNovo));

    const data = {cdUnidade: UnidadeNovo.cd_Unidade, deUnidade: UnidadeNovo.de_UNIDADE,
        idUnidadeSup: UnidadeNovo.id_Unidade_Superior};



     const query = client.query('UPDATE "UNIDADE" SET "cd_Unidade"=($1), "de_UNIDADE"=($2), "id_Unidade_Superior"=($3) WHERE "id_Unidade"=($4)',
        [data.cdUnidade, data.deUnidade, data.idUnidadeSup,idUnidade]);
    
    return query;
}


exports.remove =  function(idUnidade)  {

    console.log(JSON.stringify(idUnidade));

    //Realiza a leitura no banco de dados
    const query = client.query('DELETE FROM "UNIDADE" WHERE "id_Unidade"=($1)', [idUnidade])

    query.then(function(row){
        results.push(row)
    })

    return query


}
