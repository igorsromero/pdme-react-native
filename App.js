import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Titulo from './components/Titulo/index.js';
import FormDeCombustivel from './components/Formulario/index';

export default function App() {

  const [combustivel, setCombustivel] = useState("");

  return (
    <View style={styles.container}>
      <Titulo />
      <FormDeCombustivel enviar={coletarDados} />
      <Text style={styles.textResultado}>{combustivel}</Text>
    </View>
  );

  function coletarDados(dados) {
    const alcool = Number(dados.valorAlcool) / Number(dados.consumoAlcool);
    const gasolina = Number(dados.valorGasolina) / Number(dados.consumoGasolina);
    setCombustivel(alcool);
    if (alcool < gasolina) {
      setCombustivel("Resultado: É mais vantajoso usar Álcool");
      alert("Resultado: É mais vantajoso usar Álcool!")
    } else if (gasolina < alcool) {
      setCombustivel("Resultado: É mais vantajoso usar Gasolina");
      alert("Resultado: É mais vantajoso usar Gasolina!")
    } else if (gasolina = alcool) {
      setCombustivel("Resultado: Você pode usar qualquer um dos dois");
      alert("Resultado: Você pode usar qualquer um dos dois!")
    }
  }

}


const styles = StyleSheet.create({
  resultado: {
    flex: 1,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  textResultado: {
    fontSize: 15,
    color: "#FF0043",
    fontWeight: "bold",
    textAlign: 'center',

  },
  textMensagem: {
    fontSize: 18,
    color: "#ff0043",
    fontWeight: "bold",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#c0c0c0',
//     paddingTop: 100,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
