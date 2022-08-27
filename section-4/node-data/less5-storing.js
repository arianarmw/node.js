const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('less5-storing.json', bookJSON)

// const dataBuffer = fs.readFileSync('less5-storing.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('less5-storing.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Ariana'
user.age = 18

const userJSON = JSON.stringify(user)
fs.writeFileSync('less5-storing.json', userJSON)