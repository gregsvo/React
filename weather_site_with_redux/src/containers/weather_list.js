import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} convertFunction={convertKelvinToFahrenheit} width={90} height={50} color="orange" units="F"/></td>
                <td><Chart data={pressures} width={90} height={50} color="green" units="hPa"/></td>
                <td><Chart data={humidities} width={90} height={50} color="black" units="%"/></td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}
//After the reducer has updated the state of the component, calls this and then state passed into props
function mapStateToProps({ weather }) {
    return {weather}; // { weather } === { weather:weather}
}

function convertKelvinToFahrenheit(data) {
    return (( data - 273.15) * 1.8) + 32;
}

//Bind props arriving from redux to new state, and also bind to WeatherList class

// state is taken from redux store
export default connect(mapStateToProps)(WeatherList);
