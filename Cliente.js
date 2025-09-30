class Cliente {
  constructor(id, nome, email) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }
}

module.exports = Cliente;

// models/Pedido.js
class Pedido {
  constructor(id, cliente_id, descricao, valor) {
    this.id = id;
    this.cliente_id = cliente_id;
    this.descricao = descricao;
    this.valor = valor;
  }
}

module.exports = Pedido;
