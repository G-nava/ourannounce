const express = require('express');

const app = express();

const port = 5500;

//motor de plantillas
app.set('view engine','ejs');
app.set('views', `${__dirname}/src/views`);


app.use(express.static(__dirname + "/public"));

//rutas web
app.use('/', require('./src/router/routesWeb'))

app.use((req, res, next)=>{
    res.status(404).sendFile(`${__dirname}/public/404.html`)
})

app.listen(port,()=>{
    console.log(`listening in port: ${port}` );
});  