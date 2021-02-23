let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname , 'public')));



app.get('/' , function(req, res){
	 res.send('Hello World');
});

app.listen(3000, function(err){
	if(!err){
	console.log('Server started on port 8080...');
	}else{
		console.log(err);
	}
});
