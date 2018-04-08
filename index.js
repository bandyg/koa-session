const Koa = require("koa");
const session = require("koa-session2");
const Store = require("./store.js");

const app = new Koa();

let opts = { a : 'test', max: 20 };
const { key = "koa:sess", store = new Store() } = opts;

app.use(session({
    store: new Store()
}));

app.use(ctx => {
    let user = ctx.session.user;

    ctx.session.view = "indexex";
});

app.listen(3000, () => {

    console.log('server started.');
});