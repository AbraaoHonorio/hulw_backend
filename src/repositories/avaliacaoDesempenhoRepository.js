'use strict';

const ImportClient = require('../config/config');
const client = ImportClient.get();
 
  exports.get=  () =>  {
               
      //Realiza a leitura no banco de dados
      const query = client.query('SELECT * FROM "AVALIACAO_DESEMPENHO" ')
  
      query.then(function(row){
          results.push(row)
      })
      
  
      return query  
     
  }

  exports.create =  function(AvaliacaoDesempenho)  {
    const results = []
    console.log('AVALIACAO_DESEMPENHO ' + JSON.stringify(AvaliacaoDesempenho));

   
     const query = client.query('INSERT INTO "AVALIACAO_DESEMPENHO"("dt_Ano", "id_Usuario_Avaliado", "id_Usuario_Avaliador", \
                    "Pergunta_1_1","Pergunta_1_2","Pergunta_1_3","Pergunta_2_1","Pergunta_2_2","Pergunta_2_3","Pergunta_3_1","Pergunta_3_2", \
                    "Pergunta_3_3","Pergunta_4_1","Pergunta_4_2", "Pergunta_4_3","Pergunta_5_1","Pergunta_5_2","Pergunta_5_3")  \
                     values($1,$2, $3, $4, $5, $6,$7, $8, $9,$10,$11, $12, $13,$14,$15, $16, $17,$18)',
                [AvaliacaoDesempenho.dt_Ano, AvaliacaoDesempenho.id_Usuario_Avaliado, AvaliacaoDesempenho.id_Usuario_Avaliador,
                AvaliacaoDesempenho.Pergunta_1_1, AvaliacaoDesempenho.Pergunta_1_2, AvaliacaoDesempenho.Pergunta_1_3,
                AvaliacaoDesempenho.Pergunta_2_1, AvaliacaoDesempenho.Pergunta_2_2, AvaliacaoDesempenho.Pergunta_2_3,
                AvaliacaoDesempenho.Pergunta_3_1, AvaliacaoDesempenho.Pergunta_3_2, AvaliacaoDesempenho.Pergunta_3_3,
                AvaliacaoDesempenho.Pergunta_4_1, AvaliacaoDesempenho.Pergunta_4_2, AvaliacaoDesempenho.Pergunta_4_3,
                AvaliacaoDesempenho.Pergunta_5_1, AvaliacaoDesempenho.Pergunta_5_2, AvaliacaoDesempenho.Pergunta_5_3]);
   
      return query;
}

exports.getById =  function(idAvaliacaoDesempenho)  {
    //Realiza a leitura no banco de dados
    const query = client.query('SELECT * FROM "AVALIACAO_DESEMPENHO" WHERE "id_Avaliacao_Desempenho"=($1)', [idAvaliacaoDesempenho])
  
    query.then(function(row){
        results.push(row)
    })

    return query  
   

}
