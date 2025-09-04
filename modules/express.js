const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json()); //avisa para o express que vamos receber json

const port = 8080;

//com express nao precisa ficar setando manualmente (content-type:)

// app.get('/home', (req, res) => {
//   res.status(200).send("<h1>Hello World</h1>")
// })

// ENDPOINT DE PEGAR TODOS USUÁRIOS
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({}); // se deixar o {} vazio ele tras tudo, da para colocar por exemplo dentro do {} assim : {fistName: 'Pedro'}, ai no caso ele iria trazer apenas o Pedro cadastrado no banco de dados, ou poderia ser ID, Email...
    res.status(200).json(users);
  } catch (error) {
    return res.statys(500).send(error.message); //aqui to usando .send pq nao quero enviar como json, isso aqui é uma string
  }
});

//BUSCANDO USUÁRIO PELO ID

app.get("/users/:id", async (req, res) => {
  // apos o /users vamos buscar por paramentros o id, "/:id"
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch {
    res.status(500).send(error.message);
  }
});

// CRIAR USUÁRIO
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user); //201 diz q foi criado com sucesso o registro
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//ATUALIZER USUARIO
// USA-SE PATCH OU PUT
//PATCH : ATUALIZAR REGISTRO PARCIALMENTE, EXEMPLO: APENAS O EMAIL.
//PUT : ATUALIZAR O REGISTRO POR COMPLETO, (MEIO Q EXCLUI TUDO E SOBRESCREVE O NOVO)
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETANDO USUARIO PELO ID

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Se a exclusão for bem-sucedida, retorna o usuário excluído
    res.status(200).json(user);
  } catch (error) {
    // Se ocorrer um erro interno no servidor (ex: formato de ID inválido), retorna 500
    res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`rodando com express na porta ${port}`));
