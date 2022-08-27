/* Nama: Ariana Rahmawati
    NIM: 211511008
    Prodi/Kelas: D3-Teknik Informatika/2A
*/

const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=066cef60635f3ee2ef55771091ebde85&query=41.2033,-77.1945&units=f'

request({ url: url, json: true}, (error, response) => {
    // console.log(response.body.current)
    console.log(response.body.daily.data[0].summary + 'It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.precip + '% chance of rain.')
})

//Geocoding
//Address -> Lat/Long -> Weather

