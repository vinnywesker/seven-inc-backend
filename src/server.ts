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
    res.header("Access-Control-Allow-Origin", "*"); // permissão para todas as aplicações acessar
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE'); // métodos que utilizarei
    app.use(cors());
    next();
});



// ===================== ** CASO PRECISE ADICIONAOR MAIS ALGUMA ROTA ** ====================== //

app.use('/employees', employees);

// ===================== ********************************************** ====================== //


const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta: ${PORT}`)
})