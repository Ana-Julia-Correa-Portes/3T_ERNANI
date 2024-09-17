//  CRIAR NOSSO SERVIDOR
const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000; // 65 K POSSIBILDADES

// CRIAR ROTAS
app.get("/", function(req, res) {
  // NOSSO CÓDIGO AQUI...
  res.sendFile(__dirname + "/public/pages/index.html");

});

app.get("/pages", function(req, res) {
  // NOSSO CÓDIGO AQUI...
  res.sendFile(__dirname + "/public/pages/loja.html");

});
app.get("/index.html", function(req, res) {
  // NOSSO CÓDIGO AQUI...
  res.sendFile(__dirname + "/public/pages/sobre.html");

});
app.get("/loja.html", function(req, res) {
  // NOSSO CÓDIGO AQUI...
  res.sendFile(__dirname + "/public/pages/index.html");

});
// USAR O SERVIDOR NUMA DADA PORTA
app.listen(PORT, function() {
  console.log("Rodando na porta: " + PORT);
});















