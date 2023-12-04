import express from 'express';
import cors from 'cors';
import morgan from "morgan";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import clientsController from "./controllers/clients.controller.js";

const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.use(clientsController);
app.use(cors());
app.use(morgan('dev'));
app.use('/public', express.static(join(dirname(fileURLToPath(import.meta.url)), 'public')));

app.listen(3000, () => console.log('Server listing on PORT 3000'));
