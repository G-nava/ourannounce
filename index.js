const locationValue = window.location.search;
    console.log(locationValue);
    
    //separar datos

    const urlParams = new URLSearchParams(locationValue);

    const primerApellido = urlParams.get('pa')
    const segundApellido = urlParams.get('sa')

    primerApellido == null && segundApellido == null ?
        document.getElementById('value').style.display = 'none' :
        document.getElementById('value').innerHTML = `${primerApellido} ${segundApellido}`







// const express = require('express');

// const app = express();

// const port = process.env.PORT || 5500;

// //motor de plantillas
// app.set('view engine','ejs');
// app.set('views', `${__dirname}/src/views`);


// app.use(express.static(__dirname + "/public"));

// //rutas web
// app.use('/', require('./src/router/routesWeb'))

// app.use((req, res, next)=>{
//     res.status(404).sendFile(`${__dirname}/public/404.html`)
// })

// app.listen(port,()=>{
//     console.log(`listening in port: ${port}` );
// });  