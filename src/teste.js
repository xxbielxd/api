const Query = require('./business/banco/Query');
teste = async()=>{
    const query = new Query();
    var usuarios = await query.executar('select * from USUARIO');
    console.log(usuarios[0].nome);
}
teste ();

/*var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ponto_eletronico'
});
connection.connect();
connection.query('select * from USUARIO',(err,result)=>{
    console.log(result);
});

*/


/* const Conexao = require('./business/banco/Conexao');


var exec = async () => {  

    const connection = new Conexao();
    const usuario = await connection.query('select * from USUARIO');
    console.log(usuario);

}

exec(); */