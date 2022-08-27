/* Nama: Ariana Rahmawati
    NIM: 211511008
    Prodi/Kelas: D3-Teknik Informatika/2A
*/

const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)
// console.log(validator.isEmail('arianarahmawati0910@gmail.com'))
// console.log(validator.isEmail('arianarahmawati0910gmail.com'))
// console.log(validator.isURL('https://mead.io'))
console.log(validator.isURL('https/mead.io'))