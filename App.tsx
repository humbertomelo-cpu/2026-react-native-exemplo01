import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
 
  const[idade, setIdade] = useState(0);


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View style={{ marginTop: 20 }} >
        <TextInput 
         style={styles.input}
         placeholder="Digite algo aqui"
         onChangeText={(text) => setText(text)}
         />
      </View>
      <View style={{ marginTop: 20 }} >
        <Button onPress={() => alert(text)} title="Clique Aqui" />
      </View>
      <View style={{ marginTop: 20 }} >
        <Text>Você digitou: {text}</Text>
      </View>
      <View style={{ marginTop: 20 }}>
      <TextInput style={styles.input}
       placeholder='Digite sua Idade'
       onChangeText={(valor) => setIdade(Number(valor))}
      /> 
      </View>
      <View style={{ marginTop: 20 }}>
       <Text>Sua idade é: {idade}</Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  }
});
