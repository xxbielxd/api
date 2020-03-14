const express = require('express');
const bodyParser = require('body-parser');
const Query = require('./business/banco/Query');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ express: false }));

app.get('/', async (req,res) =>{ 

    const query = new Query();
    var usuarios = await query.executar('select * from USUARIO');
    res.send(JSON.stringify(usuarios[0]));
})

app.listen(3000);