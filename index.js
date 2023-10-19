const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 3000
require('./db')
const postsController = require('./controllers/PostsController')

app.use(cors())
app.use(express.json())

//ROTAS PARA O CRUD
app.post('/posts', postsController.cadastrarPost) //CREATE DO CRUD
app.get('/posts', postsController.listarPosts) //READ DO CRUD

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`)
})

