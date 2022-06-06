var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var excelJS = require("exceljs");
var httpreq=require("xhr2")

var app = express();
const path = require("path");


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');





app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true })); 

/*app.use(express.json());      
app.use(express.urlencoded()); */

var s;

app.get('/', function(req, res) {
    res.render(__dirname+'/views/public/index');
});
app.use(express.static(path.join(__dirname , 'views','public')));

var w = 1;

app.post('/dam', function(req, res) {
        
    //console.log(req.body)
    
    var x= (req.body)
    fs.appendFile('./views/public/formdata.txt', Object.values(x)+'\n', 'utf8', ()=> {console.log("nice")})
    var http_req = new httpreq(); 
    console.log((http_req.responseText));
    res.redirect('/contact.html');

})


app.get("*", (req, res)=>{
    res.render(__dirname+'/views/404', {title:"Error 404"});
})


app.listen(8080);
app.listen(()=>{
    console.log("Server listening to port 8080")
})

