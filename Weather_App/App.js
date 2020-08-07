import React, { Component }from 'react';

class App extends Component {
  state = {
    query: '',
    weather: {}
  }  
   api = {
    key: '5332a58d118eb3c479553d3b2bfabd55',
    base: 'https://api.openweathermap.org/data/2.5/'
  }
  dateBuilder = (d) =>{
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  } 
  search = evt => {
    if(evt.key === 'Enter') {
      fetch(`${this.api.base}weather?q=${this.state.query}&unit=metric&APPID=${this.api.key}`)
      .then(res=> res.json())
      .then(result => {this.setState({weather: result})
          console.log(result)})
    }
  } 
  render() {
    return (
      <div className={typeof (this.state.weather.main)!="undefined"? ((this.state.weather.main.temp > 16)? 'App warm': 'App'): 'App'}>
       <main>
         <div className="search-box">
           <input type="text" className="search-bar" placeholder="Search..." onChange= {e => this.setState({query: e.target.value})} value={this.state.query} onKeyPress={this.search}></input>
         </div>
         {(typeof this.state.weather.main != "undefined") ? (<div className="location-box">
           <div><div className="location">{this.state.weather.name},{this.state.weather.sys.country}</div>
           <div className="date">{this.dateBuilder(new Date())}</div>
         </div>
         <div className="weather-box">
           <div className="temp">
             {Math.round(this.state.weather.main.temp)}*c
           </div>
           <div className="weather">{this.state.weather.weather[0].main}</div>
         </div>
         </div>): ('')}
       </main>
      </div>
    );
  }
}

export default App;
