import Router from 'koa-router';
import userQuery from '../../db-query/userQuery';

const publicRoute = new Router();

publicRoute.post('/loginUser', async (ctx) => {
    await userQuery.loginUser(ctx).then(data => {
        ctx.body = data;
    }).catch(error => {
        ctx.body = error;
    })
});

publicRoute.post('/registerUser', async (ctx) => {
    await userQuery.registerUser(ctx).then(data => {
        ctx.body = data;
    }).catch(error => {
        ctx.body = error;
    })
});

export default publicRoute;