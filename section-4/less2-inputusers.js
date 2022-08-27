/* Nama: Ariana Rahmawati
    NIM: 211511008
    Prodi/Kelas: D3-Teknik Informatika/2A
*/

const chalk = require('chalk')
const getNotes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)
// const greenMsg = (chalk.green.inverse.bold('Success!'))
// console.log(greenMsg)
// console.log(process.argv[2])

const command = process.argv[2]

console.log(process.argv)

if (command == 'add') {
    console.log('Adding note!')
} else if (command == 'remove') {
    console.log('Removing note!')
}