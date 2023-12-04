import {Router} from 'express';
import {dirname, join} from "path";
import {fileURLToPath} from 'url';
import db from "../config/db.js";
import puppeteer from "puppeteer";

const router = new Router();

router.get('/clients', (_, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '../views/view-clients.html'));
});

router.get('/client', (_, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '../views/view-client.html'));
});

router.get('/create_client', (_, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '../views/create-client.html'));
});

router.get('/edit_client', (_, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '../views/edit-client.html'));
});


router.get('/getClients', async (req, res) => {
    const query = 'SELECT * FROM clientes ORDER BY nombre ASC';
    const [result] = await db.query(query);
    return res.json(result);
});

router.get('/getClient', async (req, res) => {
    const id = req.query.id;
    const query = 'SELECT * FROM clientes where clave = ?';
    const [result] = await db.execute(query, [id]);
    return res.json(result[0]);
});

router.delete('/clients/:id', async (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM clientes where clave = ?';
    const [result] = await db.execute(query, [id]);
    res.end();
});

router.post('/clients', async (req, res) => {
    const {appaterno, apmaterno, nombre, fechanac, edad, genero, domicilio, telefono, email} = req.body;
    const query = 'INSERT INTO clientes (appaterno, apmaterno, nombre, fechanac, edad, genero, domicilio, telefono, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.execute(query, [appaterno, apmaterno, nombre, fechanac, edad, genero, domicilio, telefono, email])
        .then(() => res.end())
        .catch((err) => console.log(err));
});

router.patch('/clients/:id', async (req, res) => {
    const {telefono, email} = req.body;
    const id = req.params.id;
    const query = 'UPDATE clientes SET telefono = ?, email = ? WHERE clave = ?';
    const [result] = await db.execute(query, [telefono, email, id]);
    return res.json(result);
});

router.put('/clients/:id', (req, res) => {
    const id = req.params.id;
    // (appaterno, apmaterno, nombre, fechanac, edad, genero, domicilio, telefono, email)
    const {appaterno, apmaterno, nombre, fechanac, edad, genero, domicilio, telefono, email} = req.body;
    const query = 'UPDATE clientes SET appaterno = ?, apmaterno = ?, nombre = ?, fechanac = ?, edad = ?, genero = ?, domicilio = ?, telefono = ?, email = ? WHERE clave = ?';
    db.execute(query, [appaterno, apmaterno, nombre, fechanac, edad, genero, domicilio, telefono, email, id])
        .then(() => res.end())
        .catch((err) => console.log(err));
});

router.get('/clients/:id/pdf', async (req, res) => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    // Navigate the page to a URL
    await page.goto('http://127.0.0.1:3000/client?id=' + req.params.id);
    await page.waitForNetworkIdle();
    const pdf = await page.pdf({
        margin: {bottom: 30, left: 20, right: 20, top: 30},
    });
    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-disposition': 'inline',
        'Content-Length': pdf.length
    });
    res.end(pdf);
});

router.get('/clients/pdf', async (req, res) => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/clients?printing');
    await page.waitForNetworkIdle();
    const pdf = await page.pdf({
        margin: {bottom: 30, left: 20, right: 20, top: 30},
        pageRanges: '3-100'
    });
    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-disposition': 'inline',
        'Content-Length': pdf.length
    });
    res.end(pdf);
});

export default router;
