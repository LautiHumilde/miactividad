const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const port = 3000;

const morgan = require('morgan');
const bodyParser = require('body-parser');
const { get } = require('http');



app.set('view engine','ejs')
app.set('views', __dirname + '/views');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/index' , (req,res) => {
    res.render('humilde' , {
        equipardo :  [
        {nombre: "Talleres",año:"1913",jugador: "Valoyes"},
        {nombre: "Barcelona",año:"1899" ,jugador: "Lewandoski"},
        {nombre: "Real madrid",año:"1902" ,jugador: "Luka Modrić"},
        {nombre: "Psg",año:"1970" ,jugador: "Messi"},
        {nombre: "Bayern munich",año:"1900" ,jugador: "yeg Müller"}
        ]
    });
});
