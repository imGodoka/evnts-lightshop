// produto.js
var mongoose = require('mongoose');
 
// Cria um novo Schema com os campos que iremos utilizar no model produto
var produtoSchema = new mongoose.Schema({
  nome: String,
  preco: LongNumber,
  desc: String,
  categ: String
});
 
//Define o model produto
mongoose.model('produto', produtoSchema);