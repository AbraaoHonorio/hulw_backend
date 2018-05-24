'use strict';
var express = require('express')
var router = express.Router()
var path = require('path')

var pg = require('pg')
var conString = 'postgres://postgres:senha@localhost:5432/clientes'
var client = new pg.Client(conString)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

client.connect((err, done) => {
	if(err){
		//done()
		console.log(err)
		return res.status(500).json({success: false, data: err})
	}
})

exports.get=  () =>  {
    const results = []
        
    //Realiza a leitura no banco de dados
    const query = client.query('SELECT * FROM cliente ')

    query.then(function(row){
        results.push(row)
    })

    return query
   /* query.then(function(response){
        return res.json(response.rows)
    })*/

   
}
