const config = require('./config/config.js');
const Koa = require('koa');
const parseJson = require('co-body');
const app = new Koa();
const router = require('./router.js');

app.use(async(ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
app
  .use(router.routes())
  .use(router.allowedMethods());
 
app.listen(config.local.port, () => {
    console.log('启动程序，端口：' + config.local.port);
});
app.on('error', (err, ctx) =>
    log.error('server error', err, ctx)
);