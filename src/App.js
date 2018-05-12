import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "a27a7942f883e232bcb34434f929d12a";

class App extends React.Component {
  //initial states
  state = {
    tempreture: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );

    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        tempreture: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        tempreture: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        error: "Please enter the value"
      });
    }
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />{" "}
        <Weather
          tempreture={this.state.tempreture}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          error={this.state.error}
        />{" "}
      </div>
    );
  }
}

export default App;
