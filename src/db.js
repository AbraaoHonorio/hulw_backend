function findAll(callback, error){ 
  // Realiza a leitura no banco de dados
  const query = global.db.query('SELECT * FROM clientes ')

  query.then(callback);
  query.catch(error);
}

function insert(callback, error){

}

module.exports = { findAll }