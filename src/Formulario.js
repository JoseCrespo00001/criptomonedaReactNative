import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, TouchableHighlight,Alert} from "react-native"
import {Picker} from "@react-native-community/picker"
import axios from "axios"

const Formulario = ({moneda, criptomoneda,guardarMoneda, guardarCriptomoneda, guardarConsultarAPI}) => {

    const [criptomonedas, guardarCriptomonedas] = useState([])


    useEffect(() => {
        const consultarAPI = async () => {
            const url=`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
            const resultado = await axios.get(url)
            guardarCriptomonedas(resultado.data.Data)
        }
        consultarAPI();
    },[])

    const obtenerMoneda = moneda =>{
        guardarMoneda(moneda)
        console.log(moneda)
    }
    const obtenerCriptomoneda = cripto => {
        guardarCriptomoneda(cripto)
    }

    const cotizarPrecio = () => {
        if(moneda.trim() === '' || criptomoneda.trim() === '') {
            mostrarAlerta();
            return;
        }

        // Cambiar el state de consultar api
        guardarConsultarAPI(true)
  
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error...',
            'Ambos campos son obligatorios', 
            [
                {text: 'OK'}
            ]
        )
    }
  return (
    <View> 
        <Text
        style = { styles.label}>Moneda</Text>

        <Picker
         itemStyle={{height:80, fontSize:20}}
         selectedValue={moneda}
         onValueChange={moneda => obtenerMoneda(moneda)}
        >
            <Picker.Item label="- Seleccione" value="" />
            <Picker.Item label="  USD" value="USD" />
            <Picker.Item label="  MXN" value="MXN" />
            <Picker.Item label="  EUR" value="EUR" />
            <Picker.Item label="  GBP" value="GBP" />

        </Picker>

        <Text
        style = { styles.label}>Criptomoneda</Text>

        <Picker
         itemStyle={{height:80, fontSize:20}}
         selectedValue={criptomoneda}
         onValueChange={cripto => obtenerCriptomoneda(cripto)}
        >
            <Picker.Item label="- Seleccione" value="" />
            {criptomonedas.map( cripto => (
                    <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} /> 
                ))}

        </Picker>

        <TouchableHighlight
        onPress={() => cotizarPrecio()}
        style = {styles.btn}>
            <Text
            style = {styles.btnText}>Cotizar</Text>
        </TouchableHighlight>
        

    </View>
      
    
  )
}

const styles = StyleSheet.create({
    label:{
        marginVertical:10,
        fontSize :18,
        textTransform:"uppercase",
        fontWeight:"bold"

    },
    btn:{
        backgroundColor:"#5E49E2",
        padding:15,
        marginTop:20,
        borderRadius:10,


    },
    btnText:{
        textAlign:"center",
        color:"#f5f5f5",
        fontSize:20,

    }
})

export default Formulario
