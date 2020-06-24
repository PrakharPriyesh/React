import Router from 'koa-router';
import userQuery from './../database/userQuery';
import productQuery from './../database/productQuery';

const router = new Router();

router.get('/allUsers', userQuery.getAllUsers);

router.post('/registerUser', async (ctx) => {
    await userQuery.registerUser(ctx).then(data => {
        ctx.body = data;
    }).catch(error => {
        ctx.body = error;
    })
});

router.post('/loginUser', async (ctx) => {
    await userQuery.loginUser(ctx).then(data => {
        ctx.body = data;
    }).catch(error => {
        ctx.body = error;
    })
});

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