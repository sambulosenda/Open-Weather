import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city &&
          this.props.country && (
            <p>
              Location : {this.props.country},{this.props.city}
            </p>
          )}
        {this.props.tempreture && <p>Tempreture: {this.props.tempreture} </p>}
        {this.props.humidity && <p> Humidity : {this.props.humidity} </p>}
        {this.props.description && (
          <p> Conditions : {this.props.description} </p>
        )}
        {this.props.error && <p>{this.props.error} </p>}
      </div>
    );
  }
}

export default Weather;
