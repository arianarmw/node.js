/* Nama: Ariana Rahmawati
    NIM: 211511008
    Prodi/Kelas: D3-Teknik Informatika/2A
*/

const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
// app.set(express.static(path.join(__dirname + '../public')))

app.set('view engine', 'hbs')
// app.set('views', './views')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('./views/index')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})