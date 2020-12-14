import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import employees from './routes/employees';

const app = express();

//conexão com o mongodb
const CONNECT_MONGODB: any = process.env.MONGODB;
mongoose.connect(CONNECT_MONGODB, { useNewUrlParser: true, useUnifiedTopology: true }); //via Modulus

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    next();
});



// ===================== ** CASO PRECISE ADICIONAOR MAIS ALGUMA ROTA ** ====================== //

app.use('/employees', employees); // possivel adicionar quantas rotas precisar ex: companies, vehicles, etc etc etc ....

// ===================== ********************************************** ====================== //


const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta: ${PORT}`)
})