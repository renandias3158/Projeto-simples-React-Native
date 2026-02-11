import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';







export default function App() {
  const ExemploInput = () => {
    const [texto, setTexto] = useState(''); // 1. Estado para guardar o texto
  const ExemploInput2 = () => {
    const [texto2, setTexto2] = useState(''); // 1. Estado para guardar o texto

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://i1.sndcdn.com/artworks-k3rY9KdgRnU67j5B-HlCzdg-t1080x1080.jpg',
        }}
      />
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={novoTexto => setTexto(novoTexto)} // 2. Atualiza o estado
            value={texto} // 3. Vincula o valor do estado
          />
          <Text>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="senha"
            onChangeText={novoTexto2 => setTexto2(novoTexto2)} // 2. Atualiza o estado
            value={texto2} // 3. Vincula o valor do estado
          />
        </View>
        
        <Button
          title="Logar"
          color="#00b83d" 
          accessibilityLabel="Learn more about this purple button"
        />      
        <Button
          title="cadastrar-se"
          color="#00b83d"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>esqueci minha senha</Text>
        <StatusBar style="auto" />
      </View>
    );
  }};
  
 
  return <Image style={styles.tinyLogo} source={{ uri: 'https://i1.sndcdn.com/artworks-k3rY9KdgRnU67j5B-HlCzdg-t1080x1080.jpg' }} />, <ExemploInput />,<ExemploInput2 />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    container: { padding: 20 },},
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  tinyLogo: {
    borderRadius: 1000,
    width: 350,
    height: 350,
  }
});

