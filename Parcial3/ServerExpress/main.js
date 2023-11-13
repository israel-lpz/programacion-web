import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan("dev"))

app.get('/clientes', (req, res) => {
    console.log(req.query);
    res.json({message: 'Server exoress GET'});
});

app.post('/clientes', (req, res) => {
    res.json({message: 'Server express POST'})
});

app.delete('/clientes', (req, res) => {
    res.json({message: 'Server express DELETE'})
});

app.listen(5000, () => console.log('Running server'));
