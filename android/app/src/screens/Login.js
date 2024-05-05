import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { Loading, Yazı ,customButon} from '../components/'


const Login = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [password, setPaswoord] = useState("")
  const [result, setResult] = useState('')
  const [isLoading, setisLoading] = useState(false)
  console.log(isLoading)




  return (
    <View style={styles.inputContainer}>
      <Image
        source={require('../../../images/Login.png')}

        style={styles.image} />
      <Yazı
        title="Email"
        isSecureText={false}
        handleonChangeText={(value) => setEmail}
        handlePlaceholder='Email Giriniz'
        handleValue={email}
        />
        <Yazı
        title="Password"
        isSecureText={true}
        handleonChangeText={(value) => setPaswoord}
        handlePlaceholder='Şifrenizi Giriniz'
        handleValue={password}
        />
      <customButon
        butonText="Login"
        setWidth="80%"
        handleOnPress={()=> setisLoading(true)}
      />
      <customButon
        butonText="Login"
        setWidth="30%"
        handleOnPress={() => navigation.navigate(Register)}
      />
      
      
     
      

      {isLoading ? <Loading Loadingkapat={() => setisLoading(false)} /> : null}



    </View>



  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInputstyle: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    borderRadius: 5,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',


  },
  
  image: {
    width: 100,
    height: 100,

  },
  kayıtolbuton: {
    width: '30%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',

  },
  inputBox: {

    fontWeight: 'bold',


  },
  inputContainer: {
    width: '%80',

  }
})
