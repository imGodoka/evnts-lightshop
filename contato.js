// Produto.js
var mongoose = require('mongoose');
 
// Cria um novo Schema com os campos que iremos utilizar no model Produto
var ProdutoSchema = new mongoose.Schema({
  nome: String,
  preco: NumberLong,
  desc: String
});
 
//Define o model Produto
mongoose.model('Produto', ProdutoSchema);