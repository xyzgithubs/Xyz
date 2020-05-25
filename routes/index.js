const router = require("koa-router")();

router.get("/", async (ctx, next) => {
    global.console.log("index");
    ctx.cookies.set('pvid', Math.random())
    await ctx.render("index", {
        title: "Hello Koa 2!"
    });
});

router.get("/string", async (ctx, next) => {
    ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
    ctx.body = {
        title: "koa2 json",
        cookie: ctx.cookies.get('pvid')
    };
});

router.get("/testAsync", async (ctx) => {
    global.console.log('start', new Date().getTime())
    const a = await new Promise((resolve, reject) => {
        setTimeout(() => {
            global.console.log('async a', new Date().getTime())
            resolve('ab')
        }, 5000);
    })

    ctx.body = {
        a
    }
})

module.exports = router;