'use strict';

const ImportClient = require('../config/config');
const client = ImportClient.get();
 
  exports.get=  () =>  {
      const results = []
          
      //Realiza a leitura no banco de dados
      const query = client.query('SELECT * FROM "LOCALIZACAO" ')
  
      query.then(function(row){
          results.push(row)
      })
  
      return query  
     
  }