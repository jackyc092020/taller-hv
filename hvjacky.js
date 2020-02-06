const express= require('express'),

app = express(),
path= require('path');

app.use(express.static(path.join(__dirname,'/public')));

app.get('/', (req, resp)=>{
    resp.sendFile(`${__dirname}/views/index.html`)
});

app.route('/acerca').get((req, resp)=>{
    resp.sendFile(`${__dirname}/views/acerca.html`)
});
app.route('/aptitudes').get((req, resp)=>{
    resp.sendFile(`${__dirname}/views/aptitudes.html`)
});
app.route('/contacto').get((req, resp)=>{
    resp.sendFile(`${__dirname}/views/contacto.html`)
});
app.route('/estudios').get((req, resp)=>{
    resp.sendFile(`${__dirname}/views/estudios.html`)
});
app.route('/exper').get((req, resp)=>{
    resp.sendFile(`${__dirname}/views/exper.html`)
});

app.listen(8080);
console.log("todo ok!!");