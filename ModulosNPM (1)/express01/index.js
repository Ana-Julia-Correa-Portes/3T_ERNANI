const express = require("express");
const app = express();  // CRIADO UMA INSTÂNCIA DE EXPRESS

const PORT = 6700;
app.get("/", function (req, res) {
  res.send("Hello Página HOME !");
});

app.get("/sobre", function (req, res) {
  res.send("<h1> Página Sobre</h1>");
});

app.get("/loja", function (req, res) {
  res.send("loja.html");
});

app.listen(PORT, function(){
  console.log('Roando na porta: ' + PORT)
})