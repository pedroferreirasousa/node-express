const http = require("http");

const port = 8080;

// req = request, res = response

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home page</h1>");
  }


  // Normalmente vem de banco de dados, apenas para entender sobre as rotas e como passar
  
  if (req.url === "/users") {
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

    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify(users))  // JSON.stringify, transforma um json em uma string para o navegador
  }
});

server.listen(port, () => console.log(`Rondando na porta ${port} !`));
