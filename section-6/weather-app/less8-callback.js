/* Nama: Ariana Rahmawati
    NIM: 211511008
    Prodi/Kelas: D3-Teknik Informatika/2A
*/

setTimeout(() => {
    console.log ('Two seconds are up!');
}, 2000)

const names = ['Ariana', 'Budi', 'Dibu']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const url = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback (data)
    }, 2000)
}


url('Bandung', (data) => {
    console.log(data)
})

// const data = url ('Bandung')
// console.log = (data)