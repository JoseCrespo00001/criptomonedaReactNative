import React from 'react'
import {Text,StyleSheet, View} from "react-native";

const Cotizacion = ({resultado}) => {
  return (
    <View
    style = {styles.container}>
        <Text style ={styles.texto}>Precio HIGH DAY: {"           "}
            <Text style ={styles.span}>{resultado.HIGHDAY}</Text>
        </Text>
        <Text style ={styles.texto}>Precio  LOW DAY: {"           "}
            <Text style ={styles.span}>{resultado.LOWDAY}</Text>
        </Text>
        <Text style ={styles.texto}>Volumen CHANGE 24H: {" "}
            <Text style ={styles.span}>{resultado.CHANGEPCT24HOUR}%</Text>
        </Text>
        <View style ={styles.pre}> 
            <Text style ={[styles.precio, styles.texto]}>{resultado.PRICE}</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#5E49E2",
        padding:15,
        marginVertical:50,
        borderRadius:10,
        

    },
    texto:{
        color:"#f5f5f5",
    },
    precio:{
        fontSize:38,
        fontWeight:"bold",
    },
    span:{
        fontWeight:"700",
 
    },
    pre:{
        marginTop:8
    }

})

export default Cotizacion
