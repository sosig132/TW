var express = require("express");

var app = express();
const path = require("path");


app.use(express.static(path.join(__dirname , 'views','public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
    res.render(__dirname+'/views/public/index');
});

app.get("*", (req, res)=>{
    res.render(__dirname+'/views/404', {title:"Error 404"});
})

app.listen(8080);

app.listen(()=>{
    console.log("Server listening to port 8080")
})