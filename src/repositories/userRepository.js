'use strict';
var express = require('express')
var router = express.Router()
var path = require('path')

const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://drzbqfbrmgjxxd:175818dc32b01db709ec310418477a11cb357d29e86f730d6371cf29e71d9015@ec2-23-23-130-158.compute-1.amazonaws.com:5432/d8lji6g22tlttp',
  ssl: true,
});

//client.connect();

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
      const query = client.query('SELECT * FROM clientes ')
  
      query.then(function(row){
          results.push(row)
      })
  
      return query
     /* query.then(function(response){
          return res.json(response.rows)
      })*/
  
     
  }