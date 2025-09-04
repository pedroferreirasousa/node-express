const mongoose = require ('mongoose')

const connectToDataBase = async () => {
  await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.akhy1gz.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodejsDicasParaDevs`)
  .then(console.log("Conexão efetuada com sucesso!"))
  .catch(error => {
    console.log('Ocorreu um erro ao realizar a conexão ! Erro:', error)
  })
}

module.exports = connectToDataBase