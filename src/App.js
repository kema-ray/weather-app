import React, {useState} from 'react'
import axios from 'axios';

function App() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=nyamira&units=imperial&appid=2bb27db57e6cf9d677836a8059878454`
  return (
    <div className="app">
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Nairobi</p>
          </div>
          <div className='temp'>
            <h1>60F</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>65F</p>
            <p>Feels like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
