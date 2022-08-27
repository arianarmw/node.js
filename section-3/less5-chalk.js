/* Nama: Ariana Rahmawati
    NIM: 211511008
    Prodi/Kelas: D3-Teknik Informatika/2A
*/

const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

const greenMsg = (chalk.green.inverse.bold('Success!'))
console.log(greenMsg)

// const redMsg = (chalk.red.inverse.bold('Error!'))
// console.log(redMsg)