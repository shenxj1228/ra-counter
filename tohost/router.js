const router = require('koa-router')();
const {
    getRecommendedGroup
} = require('./apis.js');
router
    .get('/', async(ctx, next) => {
        ctx.body = '不支持页面访问，请使用接口访问！';       
        await next();
    })
    .post('/180311', async(ctx, next) => {
        let result = await getRecommendedGroup(ctx.request.body);
        ctx.body = result;
    })

module.exports = router;