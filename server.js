// Require express,  body-parser and cors
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Create an instance of the app 
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin 
app.use(cors());
// Initialize the project 
app.use(express.static('website'))
// Initialize the server 
port = 4000; 
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})
// Get Route
app.get('/all', function (req, res) {
  res.send(projectData)
})
// Post Route
const projectData = [];
app.post('/addWeather', addWeather);
function addWeather(req,res){
  newEntry = {
    temperature: req.body.weather,
    date: req.body.date,
    user_feeling: req.body.feeling
  }
  console.log(newEntry);
  projectData.push(newEntry);
  console.log(projectData);
}
  