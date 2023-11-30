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
   const query = 'SELECT * FROM clientes';
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
   console.log(req.params);
   const id = req.params.id;
   const query = 'DELETE FROM clientes where clave = ?';
   const [result] = await db.execute(query, [id]);
   res.end();
});

router.get('/clients/:id/pdf', async (req, res) => {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   // Navigate the page to a URL
   await page.goto('https://developer.chrome.com/');

   const pdf = await page.pdf();
   res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-disposition': 'inline',
      'Content-Length': pdf.length
   });
   // TODO: Cambiar pagina de google por datos del cliente
   res.end(pdf);
});


export default router;
