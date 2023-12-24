const express = require('express');
const app = express();
const bodyParser = require('body-parser')
/**==== to get value from the input form
 * using Bodyparser you must use urlencoded and extended true  === */
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.post('/', function(req,res){
    var number1 = Number(req.body.num1);
    var number2 = Number(req.body.num2);
    var result = number1 + number2;
    res.send('Your ans is: ' +result);
    console.log(req.body);
})

app.listen(3000,function(){
    console.log('Server is running in port 3000.');
});
