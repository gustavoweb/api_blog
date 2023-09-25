const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 3000
require('./db')

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`)
})

