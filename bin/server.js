const app = require('../src/app');
const debug = require('debug')('HULW:server');
const http = require('http');

const port = normalizaPort(process.env.PORT || '3000');

require('dotenv-safe').load();
const { Pool } = require('pg');

const client = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.POSTGRES_DB,
  port: process.env.BD_PORT,
  max: 20,
  ssl: true
});

client.connect((err, client, release) => {
  if(err){
    console.log(err)
    return res.status(500).json({success: false, data: err})
  }

  global.db = client;

  app.set('port', port);

  const server = http.createServer(app);
  server.on('error', onError);
  server.on('listening', onListening);
  app.listen(port, function () {
    console.log('API rodando na porta ' + port);
  });
})

function normalizaPort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
  
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
  ? 'Pipe ' + port
  : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
  ? 'pipe ' + addr
  : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

