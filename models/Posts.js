const mongoose = require('mongoose')

// Definindo o esquema dos Posts
const postsSchema = new mongoose.Schema({
    titulo: {type: String, require: true},
    msg: {type: String, require: true},
    tipo_msg: {type: Number, require: true},
    autor: {type: String, require: false}
  })

  module.exports = mongoose.model('Posts', postsSchema)