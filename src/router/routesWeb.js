const express = require('express');
const router = express.Router();


router.get('/',(req, res)=>{
    // res.render(`${__dirname}/public/index.html`,"utf8")
    res.sendFile(`${__dirname}/public/index.html`,"utf8")
});

router.get('/servicio',(req, res)=>{
    res.send('hi there')
});

module.exports = router;

// app.use(express.static(_dirname + "/public"))