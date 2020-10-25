const express=require('express');
const app= express();
const path = require('path');
const morgan= require('morgan');
const mysql= require('mysql');
const bodyParser= require('body-parser');
const myconnection=require('express-myconnection');
//importando routes
const customerroutes= require('./routes/customer');
const { urlencoded } = require('express');

//setting 
app.set('port', process.env.PORT||3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views')); 


//middlewares
app.use(morgan('dev'));
app.use(myconnection(mysql,{
    host: 'ou6zjjcqbi307lip.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user:'oev2wvfokjf4ui7w',
    password:'w4hyauqzonu721jz',
    port: 3306,
    database:'m590k7gxzt0gwlqv'
}, 'single'));
// app.use(express.urlencoded({extended:false}));//me permite convertir mis datos del formulario en un objeto 
app.use(bodyParser.urlencoded({extended:false}));//extended quiere decir que solo va aceptar formatos en string 
//enviados desde el formulario mas no imagenes o cualquier otro archivo

//routes
app.use('/', customerroutes);

// iniciando el servidor 
app.listen(app.get('port'), function(){
    console.log('escuchando puerto' + app.get('port'));
});