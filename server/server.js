const Koa = require('koa'); // Koa
const Router = require('koa-router');  // Koa 路由
const views = require('koa-views'); // Koa 模板渲染
const serve = require('koa-static'); // Koa 静态资源管理
const compress = require('koa-compress'); // Koa 文件压缩

const app = new Koa();
const router = new Router();

const { path } = require('../path');
const port = 3000;

router.use(views(path + '/client'));
router.get('/', async (ctx, next) => {
    this.compress = true;
    await ctx.render('index');
});

router.get('/login', (ctx, next) => {
    ctx.body = 'hello,login.'
})

router.get('/demo/*', (ctx, next) => {
    ctx.body = 'hello,demo.'
})

router.post('/lists', async (ctx, next) => {
    ctx.response.status = 200;
    // 读取数据库文件
    ctx.response.body = [
        { id: 0, title: 'demo_1', src: 'images/me.jpg', href: "/demo/demo_1" },
        { id: 1, title: 'demo_2', src: 'images/me.jpg', href: "/demo/demo_1" },
        { id: 2, title: 'demo_3', src: 'images/me.jpg', href: "/demo/demo_1" },
        { id: 3, title: 'demo_1', src: 'images/me.jpg', href: "/demo/demo_1" },
        { id: 4, title: 'demo_2', src: 'images/me.jpg', href: "/demo/demo_1" },
        { id: 5, title: 'demo_3', src: 'images/me.jpg', href: "/demo/demo_1" },
        { id: 6, title: 'demo_1', src: 'images/me.jpg', href: "/demo/demo_1" },
        { id: 7, title: 'demo_2', src: 'images/me.jpg', href: "/demo/demo_1" },
        { id: 8, title: 'demo_3', src: 'images/me.jpg', href: "/demo/demo_1" },
        { id: 9, title: 'demo_2', src: 'images/me.jpg', href: "/demo/demo_1" },
        { id: 10, title: 'demo_3', src: 'images/me.jpg', href: "/demo/demo_1" },
        { id: 11, title: 'demo_1', src: 'images/me.jpg', href: "/demo/demo_1" },
        { id: 12, title: 'demo_2', src: 'images/me.jpg', href: "/demo/demo_1" },
        { id: 13, title: 'demo_3', src: 'images/me.jpg', href: "/demo/demo_1" },
    ];
});

// 404拦截
// app.use(async (ctx) => {
//     await ctx.render('notFound')
// });

app.use(compress({
    flush: require('zlib').Z_SYNC_FLUSH
}));
app.use(serve(path + '/client'));
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('\033[32m Koa server started.Listening http://localhost:' + port + '.\033[0m')
})