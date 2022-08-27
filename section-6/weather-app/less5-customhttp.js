/* Nama: Ariana Rahmawati
    NIM: 211511008
    Prodi/Kelas: D3-Teknik Informatika/2A
*/

const request = require('request')

const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bandung?unitGroup=metric&key=H56XY3MBLEPU3MN6N3FFSV3LJ&contentType=json'

request({ url: url, json: true}, (error, response) => {
    // console.log(response.body.current)
    console.log('It is currently ' + response.body.currentConditions.temp + ' degrees out. There is a ' + response.body.currentConditions.precip + '% chance of rain.')
})