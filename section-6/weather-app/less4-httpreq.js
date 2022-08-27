/* Nama: Ariana Rahmawati
    NIM: 211511008
    Prodi/Kelas: D3-Teknik Informatika/2A
*/

const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=066cef60635f3ee2ef55771091ebde85&query=41.2033,-77.1945'

const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bandung?unitGroup=metric&key=H56XY3MBLEPU3MN6N3FFSV3LJ&contentType=json'

request({ url: url }, (error, response) => {
    // console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.currentConditions.temp)
    console.log(data)
})