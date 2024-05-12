import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Yazı, customButon } from '../components'

const RegisterPage = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.title}>
        <Text style={styles.signUp}>SignUpPage</Text>
      </View>

      <View style={styles.textInputContainer}>

        <Yazı
          title="Name"
          isSecureText={false}
          handleonChangeText={setName}
          handleValue={name}
          handlePlaceholder="Enter Your Name"

        />


        <Text>SignUpPage</Text>
        <Yazı
          title="Email"
          isSecureText={false}
          handleonChangeText={setEmail}
          handleValue={email}
          handlePlaceholder="Enter Your Email"

        />
        <Yazı
          title="Password"
          isSecureText={true}
          handleonChangeText={setPassword}
          handleValue={password}
          handlePlaceholder="Enter Your Password"

        />
      </View>
      <View style={styles.signUpOption}>
        <customButon
          butontext="Sign Up"
          setWidth="80"
          handlePlace={()=>console.log(name," ",email," ",password)}

        />
      </View>

    </SafeAreaView>
  )
}

export default RegisterPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUp: {
    fontSize: 'bold',
    fontSize: 30,
    marginTop: 30,
    color: 'black'
  },
  title: {
    flex: 1,
  },
  textInputContainer: {
    flex: 2,
    paddingVertical: 20,
    width: '100',
    alignItems: 'center',
    justifyContent: 'space-between'

  },

  signUpOption: {
    flex: 3,
  }
})