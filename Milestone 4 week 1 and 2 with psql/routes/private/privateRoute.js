import Router from 'koa-router';
import userQuery from '../../db-query/userQuery';
import productQuery from '../../db-query/productQuery';

const router = new Router();

router.get('/allUsers', userQuery.getAllUsers);

router.post("/getAllProducts", async (ctx) => {
    await productQuery.getAllProducts().then(data => {
        ctx.body = data;
    }).catch(error => {
        ctx.body = error;
    })
});

router.post("/updateProduct", async (ctx) => {
    await productQuery.updateProduct(ctx).then(data => {
        ctx.body = data;
    }).catch(error => {
        ctx.body = error;
    })
})

export default router;