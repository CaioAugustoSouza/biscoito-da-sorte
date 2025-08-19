import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [biscoitoQuebrado, setBiscoitoQuebrado] = useState(false)
  const [frase, setFrase] = useState('');
  const [autor, setAutor] = useState();
  function quebrarBiscoito() {
    if (biscoitoQuebrado) {
      setBiscoitoQuebrado(false)
      setFrase('')
      setAutor()
    } else {
      const frases = require('./assets/frases.json')
      const i = Math.floor(Math.random() * frases.length)
      const novaFrase = frases[i].frase
      const novoAutor = frases[i].autor
      setBiscoitoQuebrado(true)
      setFrase(novaFrase)
      setAutor(novoAutor)
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.biscoito}
        source={
          biscoitoQuebrado ?
            require('./assets/biscoitoQuebrado.png')
            : require('./assets/biscoito.png')
        } />
      <Text style={styles.message}>{frase}</Text>
      <Text style={styles.author}>{autor ? `"${autor}"` : ''}</Text>
      <TouchableOpacity style={styles.button} onPress={quebrarBiscoito}>
        <Text style={styles.buttonText}>{biscoitoQuebrado ? "tentar novamente" : 'quebrar biscoito'}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede2ba',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#d3ac46',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 250,

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },
  biscoito: {
    width: '70%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  message: {
    minHeight: 70,
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'italic',
    color: '#737478',
    marginBottom: 24,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  author: {
    minHeight: 30,
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'italic',
    color: '#737478',
    marginBottom: 24,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  }
});
