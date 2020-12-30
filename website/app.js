
// Today date
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log(newDate);
//Integrating OpenWeatherMap API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '8ce8c71922be8f0b390129582783023e';
// Add an Event to generate button 
document.getElementById('generate').addEventListener('click', performAction);
function performAction(e){
    const newWeather=  document.getElementById('zip').value;
    const feeling=  document.getElementById('feelings').value;
    getWeather(baseURL,newWeather, apiKey)  
    .then(function(data){
        console.log(data);
        postData('/addWeather',  {weather:data.main ,date:newDate  , feeling:feeling })
        updateUI();
    });
    }
    // Retrieve data
const getWeather = async (baseURL, weather, key)=>{   
      const res = await fetch(baseURL+weather+'&APPID='+key)
      console.log(res)
      try { 
        const data = await res.json();
        console.log(data)
        return data;
      }  catch(error) {
        console.log("error", error);
      }
    }
// Post data
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    });
      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }
// update UI 
const updateUI = async ()=>{   
    const res = await fetch('/all')
    try { 
      const data = await res.json();
      // update the ui with most recent data 
      document.getElementById('date') .innerHTML= data[data.length-1].date;
      document.getElementById('temp') .innerHTML= data[data.length-1].temperature.temp;
      document.getElementById('content') .innerHTML= data[data.length-1].user_feeling;
    }  catch(error) {
      console.log("error", error);
    }
  }