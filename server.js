const express = require('express')

const APP = express()
const PORT = 3000

APP.get('/', (req, res) => {
    res.send('Hello Vahan')
})


APP.listen(PORT, () => {
    console.log('Server is up and running on port', PORT)
})
