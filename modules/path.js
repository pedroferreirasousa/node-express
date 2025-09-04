const path = require('path');

// Basename, Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo "final ex: .js"
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Juntar Caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"));