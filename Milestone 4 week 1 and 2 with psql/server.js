import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
//import passport from 'koa-passport';
import router from './api/router';



const app = new Koa();

app.use(bodyParser());


//app.use(passport.initialize());
//require("./config/passport")(passport);

app.use(router.routes());


const port = 5000;

app.listen(port, () => console.log("Up and Running!"));