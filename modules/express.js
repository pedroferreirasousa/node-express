const express = require('express')

const app = express()

const port = 8080;

//com express nao precisa ficar setando manualmente (content-type:)

app.get('/home', (req, res) => {
  res.status(200).send("<h1>Hello World</h1>")
})

app.get('/users', (req, res) => {
  const users = [
      {
        name: "Pedro Ferreira",
        email: "p.pedrofs@gmail.com",
      },
      {
        name: "jony",
        email: "jonytest@gmail.com",
      },
      {
        name: "chitaozinhoexororo",
        email: "chitaozinhoexororo@gmail.com",
      },
    ];
    res.status(200).json(users)
})

app.listen(port, () => console.log(`rodando com express na porta ${port}`))