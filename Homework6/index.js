const Koa = require('koa');
const app = new Koa();
const compose=require('koa-compose')

async function index(ctx,next){
    if('/'==ctx.path){
        ctx.body="<h1>Index sayfasina hosgeldiniz</h1>";
    }
    else{
        ctx.body="<h1>404 HATA </h1>";
        await next();
    }
}

async function about(ctx,next){
    if('/about'==ctx.path){
        ctx.body="<h1>Hakkimda sayfasina hosgeldiniz</h1>";
    }
    else{
        await next();
    }
}
async function contact(ctx,next){
    if('/contact'==ctx.path){
        ctx.body="<h1>Iletisim sayfasina hosgeldiniz</h1>";
    }
    else{
        await next();
    }
}

const allPages = compose([index,about,contact]);
app.use(allPages);

app.listen(3000,()=>console.log("server başlatıldı"))

