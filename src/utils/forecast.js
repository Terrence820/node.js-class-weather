const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=998b71a8b9f2b0a3a8a432c8af5857d8&query=${latitude},${longitude}&units=m`;

    request({url, json: true}, (error, {body} = {}) => {
        if (error){
            callback('Unable to connect to weather service', undefined);
        }
        else if (body.error){
            callback('Unable to find location', undefined);
        }
        else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`);
        }
    })
}

module.exports = forecast;