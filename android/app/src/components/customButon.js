import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const customButon = ({butonText,setWidth,handleOnPress}) => {
  return (
    <Pressable
        onPress={() => handleOnPress()}

        style={({ pressed }) => [{
          backgroundColor: pressed ? "gray" : 'blue'
        }
          , styles.buton]}>

        <Text style={styles.butonText}>Giriş Yap</Text>


      </Pressable>
  )
}

export default customButon

const styles = StyleSheet.create({
    buton: {

        width: '50%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        fontWeight: 'bold',
    
    
    
      },
      butonText: {
    
        fontWeight: 'bold',
        color: 'white',
    
    
      },
})