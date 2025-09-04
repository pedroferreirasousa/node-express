const fs = require("fs");
const path = require("path");

// CRIAR UMA PASTA                 -esse callback vai ser executado após ser criado
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("erro:", error);
  }
  console.log("Pasta criada com sucesso!");
});



//COMPORTAMENTO DO WRITEFILE É ASSINCRONO, POR ISSO FOI NECESSÁRIO COLOCAR DENTRO DO CALLBACK
// DO WRITE FILE PARA RETORNAR O CODIGO NO READ COMPLETO


// CRIAR UM ARQUIVO ou SOBRESCREVER UM JÁ EXISTENTE
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'hello node!', (error) => {
  if(error) {
    return console.log("error:", error);
  }
  console.log("Arquivo criado com sucesso")

  // Adicionar algum conteúdo à um arquivo
fs.appendFile(path.join(__dirname, '/test', 'test.txt'),"E ae, adicionando segundo texto no arquivo", (error) => {
  if(error){
    console.log("erro:", error)
  }
  console.log("Arquivo modificado com sucesso!")
})

// Ler Arquivo
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
  if (error){
    console.log("Erro:", error)
  }
  console.log(data)
})
})



// Se repetir o ulti sobrescreve o primeiro
// fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'hello world!', (error) => {
//   if(error) {
//     return console.log("error:", error);
//   }
//   console.log("Arquivo criado com sucesso")
// })



