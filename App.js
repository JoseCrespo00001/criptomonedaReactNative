
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './src/Header';
import Formulario from './src/Formulario';
import Cotizacion from './src/Cotizacion';
import React, {useState, useEffect}  from "react";
import axios from  'axios'


export default function App() {

  const [moneda, guardarMoneda] = useState("")
  const [criptomoneda, guardarCriptomoneda] = useState("")
  const [consultarAPI, guardarConsultarAPI] = useState(false)
  const [resultado, guardarResultado] = useState({})

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const resultado = await axios.get(url)
        console.log(resultado.data.DISPLAY[criptomoneda][moneda] )
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda] );
        guardarConsultarAPI(false)
      }
    }
    cotizarCriptomoneda()
  },[consultarAPI])

  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Image
      style = {styles.img}
        source={require("./assets/img/cryptomonedas.png")}
      />
      <View
      style = {styles.contenido}>
        <Formulario
        moneda = {moneda}
        criptomoneda = {criptomoneda}
        guardarMoneda = {guardarMoneda}
        guardarCriptomoneda= {guardarCriptomoneda}
        guardarConsultarAPI={guardarConsultarAPI}
        />
        <Cotizacion
        resultado = {resultado}
        />

      </View>
    </ScrollView>
  );s
}

const styles = StyleSheet.create({
  
  img:{
    width:"100%",
    height:150,
  },
  contenido:{
    marginHorizontal:"2.5%"
  }
});
