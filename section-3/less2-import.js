/* Nama: Ariana Rahmawati
    NIM: 211511008
    Prodi/Kelas: D3-Teknik Informatika/2A
*/

const fs = require('fs')
fs.writeFileSync('notes.txt', 'My name is Ariana. I live in Cimahi.')
fs.appendFileSync('notes.txt', 'I study at Polban.')