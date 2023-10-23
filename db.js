const mongoose = require('mongoose')
mongoose.set('strictQuery',true)

//conectar com o Mongo Atlas
async function main(){
    await mongoose.connect('<BANCO>')
    console.log('conectado ao Mongo!')
}

// executa o main() e caso der erro exibe no console
main().catch((err) => console.log(err))

//Exporta o Modulo para ser usado em outro arquivo
module.exports = main