import express from 'express';
import morgan from 'morgan';
import {createConnection} from 'mysql2/promise';

const app = express();
app.use(morgan("dev"))

const conn = await createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',
    port: 3306,
    database: 'school'
})

app.get('/users', async (req, res) => {
    let where = '';
    if(typeof req.query.userId !== 'undefined'){
        where = ` where id = ${req.query.userId}`;
    }

    const [results] = await conn.query(`SELECT * FROM users ${where}`);
    if(results.length === 0){
        return res.json({message: 'No existe'})
    }
    res.json(results[0]);
});


app.listen(5000, () => console.log('Running server'));
