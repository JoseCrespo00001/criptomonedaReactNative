import React from 'react'

import {Text, StyleSheet, View, Platform} from "react-native"

const Header = () => {
    
      
  return (
    <View
    style = {styles.header}>
      <Text
        style = {styles.encabezado}
      >CRIPTOMONEDAS</Text>
    </View>
    
  )
}
const styles = StyleSheet.create({
    encabezado:{
       //paddingTop: Platform.OS === "ios" ? 50 : 10, //Para adaptar al status bar en 
        
        fontSize:20,
        fontWeight:"700",
        textAlign:"center",
        paddingTop:60,
        paddingBottom:20,
        color:"#f5f5f5"
    },
    header:{
      backgroundColor:"#5e49e2",
      marginBottom:30,
    }

})

export default Header
