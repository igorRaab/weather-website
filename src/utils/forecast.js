const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1617ce227b28bbc83744aab6265f685f/' + longitude + ',' + latitude +'?units=si'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. And it is ' + body.currently.summary + '. The highest temperature today will be ' + body.daily.data[0].temperatureHigh + ' and the lowest temperature is gonna be ' + body.daily.data[0].temperatureLow)
        }
    })
}

module.exports = forecast