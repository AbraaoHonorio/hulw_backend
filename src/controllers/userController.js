
// const repository = require('../repositories/userRepository');
const ImportClient = require('../config/config');
const client = ImportClient.get();

exports.get=  () =>  {
    const results = []
        
    //Realiza a leitura no banco de dados
    const query = client.query('SELECT * FROM clientes  ')

    query.then(function(row){
        results.push(row)
    })

    return query  
   
}


exports.getById = (req, res, next) => {
    res.status(200).send('getById Requisição recebida com sucesso!');
};


exports.post = (req, res, next) => {
    res.status(201).send('post Requisição recebida com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`put Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(` delete Requisição recebida com sucesso! ${id}`);
};