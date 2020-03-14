const Conexao = require('./Conexao'); 
class Query{
    executar(stmt){
        const con = new Conexao().getConexao();
        return new Promise((resolve,reject) => {
            con.query(stmt,(err,result)=>{
                resolve(result);
            });
        });        
    }
}
module.exports = Query; 