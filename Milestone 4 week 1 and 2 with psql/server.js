import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import jwt from 'koa-jwt';
import router from './api/router';

// For reference
const secret = 'This is my key'

const app = new Koa();

app.use(bodyParser());

app.use(async function (ctx, next) {
    return next().catch((err) => {
        if (err.status === 401) {
            ctx.status = 401;
            let errMessage = err.originalError ?
                err.originalError.message :
                err.message
            ctx.body = {
                error: errMessage
            };
            ctx.set("X-Status-Reason", errMessage)
        } else {
            throw err;
        }
    });
});

app.use(jwt({ secret: secret }));

app.use(router.routes());


const port = 5000;

app.listen(port, () => console.log("Up and Running!"));