import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const salvarCliente = () => {
    axios.post('http://10.0.2.2:3000/clientes', { nome, email })
      .then(res => alert("Cliente cadastrado com sucesso!"))
      .catch(err => console.log(err));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Cadastro de Cliente</Text>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <Button title="Salvar" onPress={salvarCliente} />
    </View>
  );
}
