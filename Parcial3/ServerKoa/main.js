import Koa from "koa";
import createRouter from "@koa/router";

const router = createRouter();

const app = new Koa();

router.get('/', (ctx) => {
    ctx.body = 'Hello World';
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
