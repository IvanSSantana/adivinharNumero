import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [number, setNumber] = useState(null)
  const [tries, setTry] = useState(5)
  const [randomNumber] = useState(getRandomInt(0, 100))
  const [message, setMessage] = useState('Insira um número.')
  const [gameOver, setGameOver] = useState(false)

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

    function verify() {
      if (gameOver) return;

      if (number != randomNumber) {
        setTry(tries => tries - 1)
        if (tries <= 0) {
          setMessage('Estorou o limite!')
          setTry(null)
          setGameOver(true)
        }
        if (number > randomNumber) {
          setMessage('Tente um número menor.')
        } else {
          setMessage('Tente um número maior.')
        }
      } else {
        setMessage('Parabéns! Você acertou!')
        setTry(0)
        setGameOver(true)
      }
    }

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Adivinhe o Número</Text>
      </View>

      <View style={styles.inputArea}>
        <TextInput style={styles.input} placeholder={'Digite um número...'} keyboardType={'numeric'} onChangeText={setNumber} />

        <TouchableOpacity style={styles.button} onPress={verify}>
          <Text style={styles.textButton}>Verificar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.outputArea}>
        <Text style={styles.outputText}>{message}</Text>
        <Text style={styles.outputText}>Tentativas restantes: {tries}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5c889',
  },
  titleBox: {
    alignSelf: 'center',
    marginTop: 70,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#eb421c',
    backgroundColor: '#f7f1e9',
    boxShadow: '2 3 #eb421c',
    width: '60%',
    alignItems: 'center',
    paddingVertical: 8
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#eb421c'
  },
  inputArea: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#eb421c',
    width: '75%',
    backgroundColor: '#f7f1e9',
  },
  button: {
    backgroundColor: '#f7f1e9',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  textButton: {
    fontSize: 15,
    fontWeight: '500',
  },
  outputArea: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    gap: 30
  },
  triesText: {
    fontSize: 25,
    fontWeight: 300
  },
  outputText: {
    fontSize: 17,
    fontWeight: 300
  }
});
