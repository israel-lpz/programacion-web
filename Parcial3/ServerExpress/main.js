import express from 'express';
import morgan from 'morgan';
import {createConnection} from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(morgan("dev"))
// app.use(cors({origin: '127.0.0.1:5000'}));
app.use(cors({origin: '*'}))

const conn = await createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',
    port: 3306,
    database: 'web'
});

app.get('/alumnos', async (req, res) => {
    let where = '';
    if(typeof req.query.noControl !== 'undefined'){
        where = ` where numero_de_control = ${req.query.noControl}`;
    }

    const [results] = await conn.query(`SELECT * FROM alumnos ${where}`);
    if(results.length === 0){
        return res.json({message: 'No existe'})
    }
    res.json(results);
});


app.listen(3001, () => console.log('Running server on port: 3001'));
