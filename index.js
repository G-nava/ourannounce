const express = require('express');
const app = express();

const port = 5500;

app.use(express.static(__dirname + "/public"));


app.get('/',(req, res)=>{
    res.send('mi respuesta desde express')
})

app.get('/servicio',(req, res)=>{
    res.send('hi there')
})

app.use((req, res, next)=>{
    res.status(404).sendFile(`${__dirname}/public/404.html`)
})

app.listen(port,()=>{
    console.log(`listening in port: ${port}` );
});  