class Conexao {
  getConexao() {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'ponto_eletronico'
    });
    connection.connect();
    return connection;
  }  
}
module.exports = Conexao; 
/*


connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();*/