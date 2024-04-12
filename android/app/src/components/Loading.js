import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'


const Loading = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={()=>props.Loadingkapat()}
        style={styles.cıkısbutonuContainer}>
        <Text style={styles.cıkısbutonu}>X</Text>
      </Pressable>
      <ActivityIndicator size={'small'} color={'lightblue'} />
      <Text style={styles.loginText}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',

  },

  loginText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    color: 'white'


  },
  cıkısbutonuContainer: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 30,
  },
  cıkısbutonu: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',

  }


})