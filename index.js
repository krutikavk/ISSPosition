const express = require('express')
const app = express();
const port = 3000;
const fetch = require('node-fetch');
const url = 'http://api.open-notify.org/iss-now.json';


app.set('view engine', 'ejs');
//set the directory of views
app.set('views', './views');
//specify the path of static directory
app.use(express.static(__dirname + '/public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
	/*
	fetch(url)
			.then(response => {
				return response.json()
			})
			.then(data => {
				//Do something with this data
				
				res.render('location', {
					latitude: data.issLocation.latitude
					longitude: data.issLocation.longitude
				});
				
				console.log("lat: ", data.issLocation.latitude, " longitude: ", data.issLocation.latitude)
			})
*/
})

var server = app.listen(3000, function () {
    console.log("Server listening on port 3000");
});

