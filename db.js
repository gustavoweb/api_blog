const mongoose = require('mongoose')
mongoose.set('strictQuery',true)

//conectar com o Mongo Atlas
async function main(){
    await mongoose.connect('mongodb+srv://gustavoweb:<password>@cluster0.xyzz1kz.mongodb.net/?retryWrites=true&w=majority')
    console.log('conectado ao MongoDB!')
}

// executa o main() e caso der erro exibe no console
main().catch((err) => console.log(err))

//Exporta o Modulo para ser usado em outro arquivo
module.exports = main