const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express()

app.use(express.json()) //avisa para o express que vamos receber json

const port = 8080;

//com express nao precisa ficar setando manualmente (content-type:)

app.get('/home', (req, res) => {
  res.status(200).send("<h1>Hello World</h1>")
})

app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find({}); // se deixar o {} vazio ele tras tudo, da para colocar por exemplo dentro do {} assim : {fistName: 'Pedro'}, ai no caso ele iria trazer apenas o Pedro cadastrado no banco de dados, ou poderia ser ID, Email...
    res.status(200).json(users)    
  } catch (error) {
    return res.statys(500).send(error.message) //aqui to usando .send pq nao quero enviar como json, isso aqui é uma string
  }
});

app.post("/users", async (req, res) => {
  try {
  const user = await UserModel.create(req.body)

  res.status(201).json(user) //201 diz q foi criado com sucesso o registro
  } catch (error) {
    res.status(500).send(error.message)
  }
});

app.listen(port, () => console.log(`rodando com express na porta ${port}`))