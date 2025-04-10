import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [number, setNumber] = useState(null)
  const [tries, setTry] = useState(5)
  const randomNumber = getRandomInt(0, 100)
  const [message, setMessage] = useState('Insira um número.')

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

    function verify() {
      if (number != randomNumber) {
        if (tries <= 0) {
          setMessage('Estorou o limite!')
          setTry(null)
        } else {
            setTry(tries => tries - 1)
            if (number > randomNumber) {
              setMessage('Tente um número menor.')
            } else {
              setMessage('Tente um número maior.')
            }
        }
      } else {
        setMessage('Parabéns! Você acertou!')
      }

    }

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text>Título</Text>
      </View>

      <View style={styles.inputArea}>
        <TextInput style={styles.input} placeholder={'Digite um número...'} keyboardType={'numeric'} onChangeText={setNumber} />

        <TouchableOpacity style={styles.button} onPress={verify}>
          <Text style={styles.textButton}>Verificar</Text>
        </TouchableOpacity>
      </View>

      <Text>{message}</Text>
      <Text>{tries}</Text>
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
});
