const http=require('http');

const server=http.createServer((req,res)=>{


    const url=req.url;
    if(url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h2>Index sayfasina hos geldiniz</h2>')
    }
    else if(url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h2>Hakkinda sayfasina hos geldiniz</h2>')
    }
    else if(url==='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h2>Iletisim sayfasina hos geldiniz</h2>')
    }
    else {
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('<h2>404 sayfa bulunamadi</h2>')
    }
  
    res.end();
});

const port=5000;

server.listen(port,()=>{
    console.log(`Sunucu ${port} de başlatıldı`)
})